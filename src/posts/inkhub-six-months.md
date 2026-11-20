---
title: InkHub turns six months old (and has a mid-life crisis)
date: 2026-08-10
description: A first physical version, a no-code platform, and a competitor that made me question everything
toRead: 5
---
Six months ago I wrote about a display that would tell me when my bus was coming. This was supposed to be the "look how far it's come" post. It is, sort of. It's also the "I got stuck for a while" post, so let's do both.

## The good news first

InkHub has a body now.

![The first physical InkHub: an e-ink display in a wooden frame, three metal buttons underneath](/inkhub-first-frame.jpg)

That's the first physical version: an e-ink screen in a wooden frame, hanging on my wall, showing the weather. And yes, those are **buttons** under the frame. I'll get back to them, they matter.

On the software side, the no-code platform is moving too. The idea is still the one I mentioned in the first post: you describe what you want to see, and the system builds the module for you, no code editor required. It's not finished, but it's real enough that I can see where it's going, which is more than I could say in February.

## And then I found TRMNL

I was ready to write this post. Photo taken, draft open. Then I discovered **TRMNL**, a company building e-ink displays that does... pretty much what I was building. Better, and with a whole team behind it.

I did what any reasonable person would do: I stopped everything and went down the rabbit hole.

I read their work. I studied their process. I bought an ESP32 and set out to reproduce their device, just to understand their design choices from the inside. Somewhere in there I had a genuine "does all of my work go in the trash?" moment. For a bit I felt very small next to a team that had outdone me on every aspect of my idea.

Then there's the part I can't be bitter about: they're great. Their code is free and open source, and they went as far as making a **legally binding contract to never close their software**. That is a level of dedication I deeply respect. This isn't an ad, and it won't turn into one, but credit where it's due: well done, TRMNL.

(Side effect: my components are now busy with another project, so InkHub stalled again. And yes, yes, I broke another Raspberry Pi. I'll buy a new one. Or maybe I'll learn from the TRMNL team and switch to an ESP32. More on that below.)

## What they did that made me think

Two things stood out.

- **The ESP32 does almost nothing.** It relies on an external server for everything, so the device itself does no real work. That makes it cheap, lightweight and so low-power that it lasts *months* on a single battery charge. My all-in-one Raspberry Pi design can't compete with that.
- **Tiers of DIY.** From "ready to go, just pay for the server" all the way down to "buy the parts yourself and use your own PC as the server". I love this. It lets everyone from the lazy to the tinkerer in through the same door.

## What makes InkHub *mine*

Once the panic faded I started asking the useful question: if someone already built this, what is InkHub for? So i had to go back to the begining and remember why i started the at all. The whole idea was a home that talked back to me, that interacted with me on a tangible level, the goal was to almot make the digital and physical world connect. So here's where I landed so far.

- **Buttons.** TRMNL chose no physical interaction. InkHub has buttons, and that's what kept me from just becoming another TRMNL user. I didn't only want a wall that shows me things. Buttons are non-negotiable in my design, even if they make the project more power hungry and less DIY-friendly. We'll talk about fixing those problems later, I suppose.
- **All-in-one, by origin.** InkHub was born as a self-contained device, not a thin client. Whether it stays that way is exactly what I'm figuring out. The ESP32 route is tempting.
- **No-code & free plugin market**. I am currently experimenting with the TRMNL editor for plugins, but i've found the built-in editor a bit clunky, my idea of a no-code builder for plugins can still make a difference in the approach of the two products.

## Where InkHub is now

Honestly? It's a bit of a mid-life crisis for the device: six months in, it's rediscovering itself. I'm comparing what they did against what I did, and working out how InkHub can be better thanks to the experience of other people. 

I'll be back soon with what I learned, and with what me and InkHub chose to be.

---

_InkHub is open source: [github.com/FrancescoDefulgentiis/inkHub](https://github.com/FrancescoDefulgentiis/inkHub)_
