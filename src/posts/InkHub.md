---
title: InkHub
date: 2026-02-10
description: And the admission that I don’t have all the answers
toRead: 5
---
There’s something uniquely satisfying about taking a raw idea and watching it evolve into a physical object that lives on your wall. One of my dearest latest projects, **InkHub**, is exactly that.

As with many great projects, InkHub was born from a mix of frustration and convenience. It started on a walk with friends, brainstorming ways to finally put our self-taught hardware skills to the test. We envisioned a Raspberry Pi running a lean OS, soldered onto custom PCBs, and tucked inside a sleek 3D-printed case.

But I needed a _goal_.

The clarity hit me when I missed my bus by a few seconds. Standing there, annoyed, I realized I was too lazy to pull out my phone and check the transit app before leaving. I needed that data _in front of me_. I wanted a display in my bedroom that showed me exactly when the next bus was coming, at a single glance.

### Architecting for the Unknown: The Modular Philosophy

I didn’t want to build a "bus display." I wanted to build a _platform_. With a close friend, we set out to design a solid, modular infrastructure. The challenge was that we only had one real use case at the start: transportation information.

Instead of hardcoding features, we spent days non-stop coding to refine the process. We realized that for InkHub to be special, it couldn’t just be _mine_. It had to be a system where anyone (regardless of their project knowledge) could drop in a module and have it "just work."

In this sense, modularity became a way of asking for help before I even knew I needed it. It was an admission that I don’t have all the answers, but maybe you do. Whether it’s a Formula 1 calendar or a live cricket tracker, your use case is just as vital as my bus schedule. InkHub isn’t just a tool I built; it’s an open invitation for you to expand it.

#### The "Service Blueprint"

The heart of InkHub’s modularity lies in what I call the **Service Blueprint**.

I designed a template system that acts as a contract between the core engine and the individual modules. If you want to add a module (like a live score tracker, a plant moisture monitor or a Formula 1 calendar), you don't need to read a single line of the core codebase. You simply follow a simple implementation guide that I wrote with examples on the Github wiki page:

1. **Create a Controller Class**: Add a new Python file in the `services` folder extending `Controller_template`. This is where your data logic lives.
2. **Create a Display Class**: Add a corresponding file in the `displays` folder extending `Display_template`. This defines how your data looks on the screen.
3. **Update the Configuration**: Add your new mode to `config.json` so the Hub knows it exists.
4. 
#### Dynamic Discovery

This is where the magic happens. On startup, the Hub performs what I like to call **Dynamic Discovery**. It scans its environment, identifies new modules, and integrates them into the UI instantly. It’s a true plug-and-play architecture that isolates each feature, ensuring that a bug in your "Weather" module won't crash your "Clock."

### The Hardware Challenge

Software is clean; hardware is... messy. After the architecture was solid, it was time to get my hands dirty. I ordered the Raspberry Pi, designed and 3D-printed a custom case, and heated up the soldering iron.

And then, everything went wrong.

My 3D prototypes kept me unsatisfied, the case was funky, and a stray bit of solder and I managed to fry the Pi. Between that setback, university, and a full-time job, InkHub went into a temporary hibernation.

### The Horizon: No-Code and Ambient Intelligence

I’m picking up the pace again, and I’m more energized than ever. That hardware failure wasn't an end—it was just a detour.

The next phase of InkHub is moving toward **Ambient Intelligence**. I’m currently exploring a no-code web interface and implementing LLMs to handle the heavy lifting of module creation. I imagine a world where you don't even need to touch a code editor. Instead, you simply prompt the system: _"Show me the humidity of my Monstera and the next five trains to the city,"_ and the code is generated, tested, and deployed automatically.

This vision of "calm technology" is gaining momentum. For instance, **Nothing Technology** has been championing a similar brand identity centered on high customizability. Their recent "Nothing Playground" allows users to access a no-code platform much like the one I’ve described, proving that the demand for user-generated ambient data is very real.

InkHub started as a way to avoid missing the bus. Now, it’s becoming a playground to see exactly how far modular, AI-driven design can go.

### Beyond the Screen

Building InkHub has taught me that the best tools aren't the ones that do everything; they’re the ones that _allow_ everything. By prioritizing modularity over a fixed feature set, InkHub stopped being a personal utility and started being an invitation.

Whatever it is you need, the goal remains the same: getting the data you care about out of your pocket and into your living space. We spend enough time "searching" for information on our phones. It’s time our environment started talking back to us.

The solder might have smoked a few components along the way, but the vision for a more intelligent, glanceable home is clearer than ever.

---

_Curious about the implementation? Check out the_ [README on GitHub and see how easy it is to build your first module.](https://github.com/FrancescoDefulgentiis/inkHub)