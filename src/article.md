---
title: Test Article
layout: /_article.pug
---

### hello world<br>this is a break{no-widows}

::: pug div.foo.bar(data-href="something")
some shit
:::

::: spoiler hi there
some shit
:::

![image alt text](/some/local/image.jpg){.left}

@[example](hello)

@[video](video.mp4)

this is something with a footnote[^1] :grinning:
and this is after the line break

> and what about quotes
if I just use a new line here?
  > citation

[^1]: this is a footnote

this is a further paragraph, nothing to do with the former

Term 1
: Definition 1

Term 2 with *inline markup*

: Definition 2

  Third paragraph of definition 2.

      { some code, part of Definition 2 }
