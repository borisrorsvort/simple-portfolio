---
title: 'A simple notes system with Markdown, Atom & Dropbox '
date: 2017-04-22 12:11
categories:
- blog
comments: true
layout: post
---


![]({{ site.baseurl }}/assets/images/setup-markdown-2.jpg)


## The fear


Since my child is born, I realised many things. And one of them is how much time and energy are precious resources. For example, you don’t get to have so much time anymore to take care of you digital life. This can potentially have bad consequences.


And as things start to pile up like disorganised notes, unsorted pictures,… you start growing a fear that at some point, something is gonna happen and some things will get lost. If you’re using 3rd party softwares or services, one of these things could be due to one of the services shuting down and suddenly you need to transfer all the files to somewhere else.


<blockquote>
<p>So the challenge is to find systems to organise you life that are <strong>portable, easy &amp; enjoyable</strong> to use and that don’t require too much <strong>maintenance</strong>.</p>
</blockquote>


As I have less time to take care of all that, I try to simplify all my processes and think about how can they can survive the years.


By the way, this is quite hard for me as I’m quite a «tool freak».


## Atom & Markdown to the rescue


As I’m a programmer, I use Atom everyday for my work. So I told myself that it would be actually silly not to use it to read and write all the notes I could have taken in the past.


I used be a heavy Evernote user back in days until they announced their new pricing model. Then I switched to Synology Notes, partly because they had an import script from Evernote.


Now I still haven’t found a great way to transfer the old notes (hence my current portability concerns) but I started to experiment with Atom to write the new ones.


When you work in a raw text environment, the easiest way to write decent notes is to use markdown. Also you have a ton of markdown editors on the market, so even if Atom dies, I’ll probably find something to replace it.


Now **Markdown** has little support in Atom by default but there are a great bunch of plugin that make it much better.


I experimented with all of them and ended up with a selection of what I believe are the most convenient. You will probably have a different setup than mine. That’s totally ok and This why I love Atom.


## The setup


There are mainly 4 parts that you should be concerned with:


1. **The writing experience:** Is the syntax highlighting good enough to quickly scan the page? Are they snippets to make you write faster?

1. **The previewing part:** Sometime, you really need to see how the text is gonna look. Also useful when writing markdown slides.

1. **Navigating / searching:** This goes without saying. Though I haven’t experimented with a lot heavy files, Code repos have a lot of them and the experience is pretty fast.

1. **The exporting/sync part:** You want to find a way to keep all this sync between all your devices or share it to world.


So here is the list of packages you will need to replicate my setup for markdown:


**[language-markdown](https://atom.io/packages/language-markdown)**


Basic language support


**[markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced)**


For better previewer, slides generator, code highlighting, table of content generator and auto open + a million other more advanced features.


**[markdown-writer](https://atom.io/packages/markdown-writer)**


Adds tons of features to make Atom an even better Markdown/AsciiDoc editor!


Works great with static blogging as well. Try it with Jekyll, Octopress, Hexo or any of your favorite static blog engines.


**[toggle-markdown-task](https://atom.io/packages/toggle-markdown-task)**


To mark github flavored md task as done.


**[tool-bar-markdown-writer](https://atom.io/packages/tool-bar-markdown-writer)**


Adds a neat toolbar when too lazy to type.


**[document-outline](https://atom.io/packages/document-outline)**


Super useful sidebar that shows you the document structure ala google docs.


**[one-light-ui](https://atom.io/themes/one-light-ui)**


A nice theme


**[one-light-syntax](https://atom.io/themes/one-light-syntax)**


A great syntax theme. Good balance quality between code and md support.


## Gotchas


One of the remaining «not perfect» things is that you now need a place to store the medias that you want to display in all those markdown files.


One solution I found was to have a medias folder for each top level folder. Though sometimes, you would still want a more local folder with assets in case you’re preparing a presentation for example.


For syncing I could use git but I find **dropbox** a better fit in this case, and it still fits within the portability concerns I had.


If you have comments or suggestions about this setup don’t hesitate to reach out on [twitter](https://twitter.com/borisrorsvort) or [mastodon](https://mastodon.social/@borisrorsvort) :)