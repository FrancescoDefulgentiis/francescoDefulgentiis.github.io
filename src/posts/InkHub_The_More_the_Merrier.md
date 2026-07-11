---
title: "InkHub: The More, the Merrier"
date: 2026-07-11
description: How modular architecture and agentic AI belong to the same conversation
toRead: 5
---

A few months ago, I wrote about InkHub's birth: its modular philosophy, the Service Blueprint, and the hardware failure that put the project on ice. Since then, the solder fumes have cleared, a new Raspberry Pi showed up at my door, and the e-ink display is finally doing what it was always meant to do: _talking back to me_.

But the real story of this chapter isn't the hardware resurrection. It's about the unexpected collaborator that turned InkHub from a five-module wish list into a living system in a matter of days: **agentic AI**.

## Hardware: The Comeback

Let's get this out of the way first. The fried Pi, the janky 3D-printed case, the existential dread of debugging I²C at 2 AM all resolved. A fresh board, cleaner wiring, and a revised driver setup later, the Waveshare display finally renders frames on command. The lesson? Hardware failures are never permanent. They're just expensive patience exercises.

With a stable platform under me, I could finally focus on what InkHub was always about: the _modules_.

## The Symbiosis: Modularity × Agents

Let's briefly talk about microservices. In a microservices architecture, you decompose a system into small, independent services that communicate through well-defined interfaces. Each service owns its logic, its data, and its deployment lifecycle. It's a marvellous way to build infrastructure but to me, the real superpower of microservices is NOT scalability or fault isolation. It's that they let multiple people work on the same system simultaneously without fighting over merges. The interface _is_ the collaboration contract.

Why am I bringing this up? Because I started InkHub with modularity in mind so that people across the internet could contribute as easily as possible. But times have changed. In the last few months, I learned to create and use AI agents and almost by accident, I discovered a deep synergy that doesn't stop at convenience. Modular architecture and agentic development reinforce each other in a feedback loop.

After developing the project's structure and core functionalities (in which AI certainly helped), I invested time in creating custom agents capable of understanding how to develop a module entirely on their own. And they did a great job. The modularity meant I could run multiple agents simultaneously without interference; the AI didn't need to digest a giant project context, and there were no endless git summaries since the only updated files lived inside a single module folder.

I experimented by cloning multiple repos and creating a branch per agent probably the cleanest workflow for bigger projects, and one I'll remember. Though I'll admit: juggling multiple repos for tasks that took less than ten minutes felt like overkill.

With the right structure and the right custom agents in place, I began creating modules in the blink of an eye. After less than a couple of days, InkHub went from a skeleton with one use case to being fully loaded with working modules.

## Five New Modules, Five New Conversations

InkHub now ships with five fully functional modules, each one a self-contained world:

1. **Dashboard** — A clock, live weather, and a rotating inspirational quote. Your morning glance, distilled.
2. **Weather** — Detailed current conditions plus a full weekly forecast. No more unlocking your phone to check if you need an umbrella.
3. **Formula 1** — Last weekend's race results or the current championship standings. Because missing a podium update is unacceptable.
4. **YTMusic** — The currently playing song and the up-next queue, pulled straight from YouTube Music. Your wall becomes your now-playing screen.
5. **Photo Gallery** — A rotating display of images, fed through a dedicated locally-hosted web interface. Digital frame energy, minus the proprietary lock-in.

## The Machinery Behind

For those of you who aren't familiar with the concept of AI agents: I didn't install any complex software, and no six-lesson certification course was required. I personally started using them with the release of Google's antigravity IDE, which rapidly blew my mind and threw me off course trying different features and pushing limits.

After experimenting with several solutions, I've now stabilized on the AI agents built into VS Code, which also offers a walkthrough on creating custom agents, even if it's a bit superficial.

The real difference between these agents and "regular" AI development tools? Agents don't just autocomplete your code they _interact_ with your environment. They read files, run commands, create branches, and iterate on errors autonomously. A traditional copilot suggests; an agent _executes_. That distinction is what turns "AI-assisted development" into "AI-driven development."

## From Agents to No-Code: The Logical Next Step

This experience crystallized something I had only vaguely imagined in the first article. I wrote about a future where you could prompt the system _"Show me the humidity of my Monstera"_—and get a working module back. At the time, it was a vision constellated by struggles, re-prompts,  code revisions and bugs. Now, it feels inevitable.

If a dedicated agent can take a Service Blueprint and produce a working module from a structured prompt, then the gap between "developer with an AI assistant" and "non-developer with a natural language interface" is just a UI problem.

That's the work-in-progress now: a **no-code module builder**. A locally-hosted web interface where you describe what you want, and the system leverages the same agentic pipeline to scaffold, populate, and deploy a module—without you ever seeing a line of Python.

The modular architecture makes this possible. The Blueprint is the grammar. The agent is the translator. The user just has to _want_ something.

## What I Learned

Building InkHub with agents taught me three things:

1. **Design for the dumbest collaborator.** Not as an insult—as a principle. If your architecture is clear enough for a stateless AI agent to produce correct code on the first try, it's clear enough for _anyone_. Good modularity is good communication.

2. **Agents don't replace depth; they multiply surface area.** No single agent "built" InkHub. Each one added a layer. I gave structure. The logic agent gave behavior. The display agent gave form. Other agents curated modules. Depth emerged from composition, not from one magical generation.

3. **Modular systems are agent-native systems.** The industry talks about "AI-native" apps. I'd argue the real unlock is _architecture-native AI_. Build your system modularly, and agentic development becomes a natural extension of the design—not a bolted-on experiment.

## What's Next

The no-code builder is actively in development. The Photo Gallery module's local upload site was a first taste of what a non-technical interface can look like. The next iteration will let you describe a module in plain language, preview it on a simulated e-ink canvas, and deploy it to your Hub with one click.

InkHub started as a bus schedule. Then it became a platform. Now it's becoming a _conversation_—between me, the agents, and eventually, anyone who wants their walls to be a little smarter.

The solder smoke has cleared. The agents are writing. And the display? It's finally talking back.

---

_The project is open source._ [Check it out on GitHub](https://github.com/FrancescoDefulgentiis/inkHub) _and build your first module—with or without an agent._