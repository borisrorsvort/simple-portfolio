---
categories:
- blog
title: You probably don’t need an automatic admin framework
date: 2018-02-11 16:12:06 +0000
---
Automatic admin framework (like rails_admin, active_admin,…), or admin template (like Inspina, Forest admin,…) have been on the market for quite some time, and still have quite a bit of success. Though it can give the impression to get something running quickly without development time, it is at the expense of other things that are often mistakenly deamed less important.

I will try to analye both auto admin and templates separately as they create their own sets of problems.

## Automatic admin frameworks

### Where they succeed

* editing simple database fields
* quick search and filters on resources lists
* handling nested associations forms

### Where you fail

#### Flexibility

While the impression of «getting things done» may exist, it can quickly become a nightmare when you need to handle more complex flows, do live / async validations or create some ad-hoc ui (usability, branding, help, formatting,...).

#### Treat your staff as your users

I heard many times «it does what we need it to do».
I also noticed that these companies did’nt have any designers at the time, which is imho one of the biggest problem.

Unless the company is «design driven», it does not often considers admin internal users as «normal user» and disregards their needs for good interfaces (If you wonder what I mean, [check these principles](https://www.nngroup.com/articles/ten-usability-heuristics/)).

As users tend to accomodate bad ui, it may seem it’s not important for them, but think about the time they loose with your bad ui and the effect on their mood on the daily work.

You can hear these poor internal users think:

> sigh, I’ll have to use that form again today.

> I’ll get the blame if I make a mistake, and those validations are so not useful.

> They say they’ll revamp the admin, for me it’s another ui to learn and to get used too.

#### The cost factor

Another aspect is the **cost of change**. Automatic admin framework give you the illusion to get massive features for you money (dev time).
What I see is that these features are rarely what will make your business successful. You often don’t need all these features.

I’m claiming that building the tools you needs with just what you need will help you better react to change.

It will cost you less than converting the whole admin to a custom build when the automatic one doesn’t cover you needs anymore (unless you switch very early, when you don’t have too much things).

#### The design mindset

Using automatic admins it sometimes also revealing of the lack of «Design driven mindset».
If your product is a little bit more than a «wysiwyg», there are a lot of chances that you’ll be stuck with a «not ideal ui».

So why event starting with something like that that while you could reduce your scope and deliver useful and delightful user experience from the get go?

## Css Admin templates

### Where they succeed

* provides a base layout
* provides a set of generic ui elements
* makes you implement faster

### Where you fail

#### Maintainability

Aside big popular css frameworks (bootstrap, foundations, material design,…), lot’s of the admin design frameworks I’ve seen are build by single individuals (some theme-forest one for example). It’s not a bad thing per se, but you expose yourself to many potential maintainability issues:

* lack of code review that leads to bad code
* lack of coherence or best practises
* full package of (un)necessary features, sometimes at the expense of quality
* lack of support
* rare updates
* …

Fixing it would cost you a lot, diverge from the base code and make potential updates even more costly.
So you end up adding stuff on top of it, and as it’s already bad, you don’t care if your code is bad too (the broken window effect).

#### Design lazyness effect

I remember my typography teacher telling me:

> Don’t draw on graph paper, you will unconsciously want to follow the lines!

Using admin css framework, or any css framework actually, never excuses you for not designing.

When companies that have no «design culture» choose a css framework, they often think that it will improve their design.

With the famous «it’s good enough» approach, they will choose within the components of the pre-built framework without asking themselves if that is the best way to solve their desgin problems.

To extend my typography teacher’s quote: «They will draw on the lines».

## Conclusions

Choosing a automatic admin framework is most probably a bad idea, you’ll have more cash and flexibility developing ad-hoc interfaces.

It’s time to stop thinking good design is a «nice to have».
Design is as important and takes as much time as good code.

Your internal users are your users as well, treat them with respect.

Use a css framework that is well maintained, not admin framework.
Build and reuse components across your products if they solve the same issues.

Don’t follow the REST inspired interface because your code does, create one that match your flows.

Their probably cases where you will say «we had good reasons to choose it» and that’s probably true. My comments are there to make you think about the future and what kind of products you want to deliver.

As usual, comments and critics are welcome on twitter [@borisrorsvort](https://twitter.com/borisrorsvort)