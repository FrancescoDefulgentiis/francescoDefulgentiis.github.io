---
title: Filosophy of self hosting
date: 2026-11-20
description: Why I run my own little corner of the internet, what it costs me, and the day I learned I actually need the algorithm
toRead: 6
---
There's a small server humming in my home. It stores my photos, syncs my notes, watches its own temperature and, every once in a while, wakes me up because something broke. This is the post where I try to explain why I keep doing this to myself.

This is not a recommendation, and it's not a tutorial. You'll find plenty of both online, written by people far better at it than me. What I want to answer isn't *how?*, it's *why?* Why should anyone do this?

## It started with a camera

Like most of my projects, it wasn't a grand plan.

I love photography, and about ten years of my photos live on my PC. Some I love dearly, some I'm just too attached to throw out, and some I'm just too lazy to throw out. Photos from a real camera are heavy, and I found hundreds of gigabytes of my disk occupied by out-of-focus shots of a Monster can.

I needed somewhere to put them. A cloud subscription was the obvious answer, but I didn't want to pay for one. So I did what many would: I dug through my wardrobe, found an old laptop, and put it to good use.

## The journey

Yes, *journey*. I'm calling it that.

I started with Windows 11, which was pre-installed on the laptop. I ran a network-wide shared folder, added Tailscale to the mix, and I was happy.

Then my roommate got worried. A machine in our living room that sounded like a 90-year-old on a mechanical lung was not great for anyone's peace of mind, and it wasn't exactly power-friendly either. I needed a more efficient alternative.

A quick search later I found a huge, gigantic community of self-hosters, and they guided me to the simple setup I run now: a small Linux server running everything in containers. That's where the dozen containers and the dashboard to watch over them came from.

## Renting vs. owning

Most of the modern internet is rented. You pay monthly, and in exchange you get convenience and a quiet understanding that the terms can change tomorrow: the price goes up, the feature disappears, the company gets acquired, the product is "sunset".

Self-hosting is the opposite deal. It's more work, and it's *mine*. My notes are plain files in a folder. My photos sit on a disk I can touch. If a project I depend on disappears, I still have the last version running, and nobody can take it from me.

This is the same instinct behind the [manifesto of this blog](#/blog/why-so-sad): you are a guest, not a metric. I'd like to be a guest in fewer places and a host in a few more.

## The honest cost

I'm not going to pretend it's free.

- **Time.** Updates, backups, the 11pm "why is this container restarting?" moments.
- **Responsibility.** When it breaks there's no support ticket, just me and the logs.
- **A slightly unhealthy attachment** to uptime graphs.

If you don't enjoy the tinkering, self-hosting is a bad deal, and that's fine. The cloud exists for good reasons.

## Self-hosting everything (was an error)

At some point I tried to host everything I could, from the notes app to my own streaming services. The full list is way too long to put here, and most of it is not something I'd try again.

The clearest example is music. I'm a big music head, and I thought owning my library and streaming it from my own device would be so cool. It wasn't. Getting new music and keeping the library up to date was a hassle. And I missed the damned algorithm.

That's the one thing I can't seem to get over: the recommendations. Algorithms decide what I watch on YouTube, what I listen to on Spotify, even what books I read. Trying to replace those platforms showed me, more than I can explain in words, that recommendation algorithms are at the same time my worst enemy and my best friend. Maybe it's Stockholm syndrome, because I do feel a bit like their hostage.

So here's what the experiment taught me: self-hosting isn't all or nothing. Some things are worth owning, like my photos and my notes. Others are services I'm happy to rent *because* someone else does the hard part better than I could. Knowing which is which took me a while.

## Open source is what makes it possible

None of this works without people who publish their code and keep it open. It's a commitment that says: you can always run this yourself. For a self-hoster, that sentence is worth more than any feature.

It's also why InkHub is open. If I'm going to take from that ecosystem, the least I can do is give something back.

## So, is it worth it?

For me, the answer so far is yes, with an asterisk. I don't self-host because it's easier, or cheaper, or even more reliable. I do it because I like knowing how the pieces fit together, and because a home that runs on software I understand feels more like a home.

The server is humming right now. For the moment, that's reason enough.

---

_Want to try it yourself? Start small: one container, one service you actually use. Everything else can wait._
