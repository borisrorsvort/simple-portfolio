---
layout: post
title: "Testing at Emuzikos: a BDD story"
categories: blog
comments: true
---

## Context 

A month ago, when I started using codeship I didn't realize how more worry-free my designer/developper life could be. I came across continuous integration testing a year ago when I started to work on a big social network application ([TrustedFamily](http://trustedfamily.net)). They were already 3 developpers working on differents features and because of code security policies were using [Jenkins CI](http://http://jenkins-ci.org/).
Around that time I started to build, as a side project, a musicians searching app ([Emuzikos](http://emuzikos.com)). 
As a musician I always thought that these musicians forums were a pain when it comes to searching for other people and as designer/developper I found that building an app would be more gratifying and easier to maintain than an constantly outdated portfolio.

Working on a side project also mean you have small chunks of time to work on your app. Here more than ever the agile methodology make sense: split your projects tasks into some smaller one and isolated one that match the time frames you're working in.

Idealy you want to test each of these small releases, so that when you push your code you make sure you don't break the entire app.

So here is the workflow I've put in place to optimize my output.

## The tools

### Spinach, a Cucumber without regex

I recently discovered [Spinach](http://codegram.github.io/spinach/): a BDD framework written in pure Ruby that features encapsulation and modularity of your step definitions.

I used to work only with rpsec and steak but felt that I was missing some clarity about what the app is supposed to do at a glance (and other reasons described [here](http://blog.codegram.com/2011/10/how-to-achieve-more-clean-encapsulated-modular-step-definitions-with-spinach)). I wanted to switch to a gherkin style integration testing framework.
 
So for each feature that I build, I write an integration test that describes the big picture. 
Coming from rspec you, at first, often tend to replicate the capybara steps in gherkin, which leads to unreadable specs and makes them impossible to transmit to any shareholder or even yourself when you have to fix bugs. It's also very tedious to maintain because you have to change the code at two places each time you change a class or some text.

So there is no point to start speaking about technicalities (like clicks, fill-in inputs, …) when you describe a behaviour. 

{% highlight cucumber %}
#### Bad

Feature: Testimonials
  Background:
    Given I go the login page 
    And I fill in email with john@doe.com
    And I fill in password with 1234
    And I click the submit button

  Scenario: Create a new testimonial with valid data
    Given I go to the new testimonials page
    And I fill in body with 'Cool App dude!'
    And I click the submit button
    And I log in as an admin
    And I go the testonial page
    And I approve the testimonial
    …
    ZZzzzzzzz

#### Good

Feature: Testimonials
  Background:
    Given I am logged in

  Scenario: Create a new testimonial with valid data
    When I go to the new testimonials page
    And I submit the form
    And it is approved by an admin
    Then I should see the testimonial on the index page
{% endhighlight %}

Then you do all the capybara, phantomjs magic in your steps file. You get the thing …

### Zeus

In order to gain some time when writing code that incrementely make the tests pass, I'using [Zeus](https://github.com/burke/zeus) to preload the rails environement or more technically: Zeus is a language-agnostic application checkpointer for non-multithreaded applications. That in addition to [Livereload](http://livereload.com/) is a must!

## Continuous Integration: CodeShip to the rescue

As your test suite grows you don't want to wait all the tests to pass locally before comitting something. So that's where Codeship becomes a very useful tool. 

As you develop a new feature:

{% highlight bash %}
git flow feature start awesome_feature
zeus start
{% endhighlight %}

* write your feature specific specs
* write the code to make the feature specific tests pass

{% highlight bash %}
git commit -am "Fix the tests"
git flow feature finish awesome_feature // which will nmerge it back to dev
git push // make sure develop has a deployment method to a staging server
{% endhighlight %}

* check if the full test suite passes in codeship and send staging server to user-testing or client for getting feedback
* fix the eventual bugs until the tests are all green

{% highlight bash %}
git flow release start new_set_of_features // so you get the version tag and all
{% endhighlight %}

* you can still do some commit at this point

{% highlight bash %}
git flow release finish new_set_of_features
git push
{% endhighlight%}

* let the test run on Codeship.
* let Codeship deploy for you.
* grab a beer, celebrate!

## Conclusions

Continuous integration really makes it easy to find out which commit broke your app and quickly revert your code to the previous one. Also, If you work using git-flow you can create realease branches, test them and deploy them separately, allowing you to make last fixes while other developpers can continue working on new stuff.

Suppose you have a full test suite, you get warnings of conflicting changes much more early in the release process. That practically gives you an almost always stable branch for staging demos, releases …

I could also immagine that at some point, CI could be integrated with some kind of quality tools like [Code Climate](https://codeclimate.com) and make the tests fail if the code quality drops under a certain rating.


