---
sidebar_position: 16
sidebar_label: "Week 16: Engineering an Explicit Communication Protocol"
title: "Week 16: Engineering an Explicit Communication Protocol"
description: "Capstone Week 2 — design an explicit communication or behavioral protocol as a formal document: Trigger, Default Response, Check."
---

# Week 16: Engineering an Explicit Communication Protocol
*The Social Interface Patch — Capstone Week 2*

Last week you diagnosed your friction point. You named the root cause. You found the underlying mismatch. This week you design the fix.

A **protocol** is an explicit, pre-decided plan for how to handle a specific situation. It removes the need to figure out what to do in the moment — which is good, because in the moment, your prefrontal cortex is usually offline. Protocols work *because* they were designed when the system was running cleanly, not in the middle of the heat.

This week you write your protocol as a formal document. It has three parts: a **Trigger** (the specific signal that activates the protocol), a **Default Response** (the pre-decided action), and a **Check** (how you know if it's working).

By the end of the week, you should have a protocol you can deploy in real life next week.

---

:::info Facilitator Snapshot
- This week is structured design. The protocol is a document, not a vague intention.
- A good protocol is small, specific, and testable. "Be nicer to my brother" is not a protocol. "When my brother takes my stuff, I'll say 'please ask first' and walk away" — that's a protocol.
- The protocol should target the ROOT cause from Week 15, not the surface symptom.
- Don't write the perfect protocol. Write a deployable one. Iteration in Weeks 17–18 will refine it.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: The Protocol Document](#guided-session-1)
- [Guided Session 2: Pre-Mortem and Refinement](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| | |
|---|---|
| **Prep time** | ~15 minutes |
| **Materials** | Telemetry Log, paper, pencil, large paper or index card for the protocol document, baseline data from Week 15 |
| **Key vocabulary** | protocol, trigger, default response, check, pre-mortem |
| **Difficulty** | Moderate to Advanced |

## Facilitator Preparation

:::info Before You Begin
- Have the Telemetry Log and the Week 15 baseline data accessible.
- Have a clean piece of paper or index card ready for the protocol document. The document should be small enough to look at quickly — no more than a single page.
- Review the student's diagnosis from Week 15 before the session. Hold the root cause in mind so you can steer them toward designing for that, not the surface symptom.
:::

:::tip Facilitation Mindset
This week is engineering. The work is precise, deliberate, and observable. Help the student write a protocol they can actually use.

A common pitfall: students try to write a protocol that requires other people to behave a certain way. ("My brother will stop taking my stuff.") That's not a protocol — that's a wish. A protocol describes what YOU will do. The actions are yours. Steer firmly toward this.
:::

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "Today we're writing a plan. When ___ happens, I will ___. That's the whole plan."

**What to shorten or skip:**
- Skip the pre-mortem. Just write the protocol.
- Use a simple two-part protocol: "When ___ happens, I will ___." Add the Check informally.

**Adapting the activities:**
- Write the protocol on a fun card with markers. It's a recipe card for handling a moment.
- Practice saying the steps out loud, like rehearsing for a play.

**Journal alternative:** Draw the protocol as a comic: panel 1 (the trigger), panel 2 (what I will do), panel 3 (the result).

**What success looks like:** The student has a written or drawn protocol they understand and can recite from memory.
:::

---

## Guided Session 1
### The Protocol Document
#### Learning Goal
By the end of this session, the student can:

- write a protocol with three parts: Trigger, Default Response, Check
- ensure the protocol targets the root cause from Week 15
- understand that a good protocol describes their own actions, not other people's

---

#### Activities

**1. The Protocol Template**

Write this template on a piece of paper or index card:

```
PROTOCOL v1.0

TARGET FRICTION POINT:
___

ROOT CAUSE (from Week 15):
___

THE PROTOCOL:

  TRIGGER:
    When this specific thing happens or this specific signal shows up...
    ___

  DEFAULT RESPONSE:
    ...I will do this exact action.
    ___

  CHECK:
    I'll know if it's working because...
    ___

WHEN I'LL RUN THIS PROTOCOL:
___ (specific times, days, or situations)

BACKUP PLAN (if the default doesn't work):
___
```

---

**2. The Three Parts Explained**

**TRIGGER:** This has to be specific and observable. Bad triggers: "when I'm upset," "when things get hard." Good triggers: "When my brother grabs something off my desk," "When the teacher calls on me and I don't know the answer," "When the lunch table is full and I have to find another seat."

**DEFAULT RESPONSE:** This has to be one specific action you can actually do — alone, in the moment, without needing anyone else's permission. Bad default: "Get along with my brother." Good default: "Say 'please put that back — ask first next time' in a calm voice, then leave the room for two minutes."

**CHECK:** This has to be something you can observe. Bad check: "Things will be better." Good check: "The fight either doesn't happen, or it ends in under three minutes instead of escalating."

---

**3. Writing the Protocol**

Now write the actual protocol for the student's friction point. Use the template. Get specific.

Example:

> **TARGET FRICTION POINT:** I keep getting into fights with my brother before dinner.
>
> **ROOT CAUSE:** My capacity is low at 5:30 because I haven't eaten a snack, AND my brother often grabs my stuff right then.
>
> **TRIGGER:** It's around 5:30 PM. My brother walks into my room or grabs something off my desk.
>
> **DEFAULT RESPONSE:**
> 1. Take one long exhale (4 in, 6 out).
> 2. Say "please ask first" in a normal voice.
> 3. If he doesn't put it back, get up and walk to the kitchen.
> 4. Don't engage further until after dinner.
>
> **CHECK:** Did the interaction stay under 3 minutes without yelling? Did I keep my voice at a normal volume?
>
> **WHEN:** Every weekday between 5:00 and 6:00 PM.
>
> **BACKUP PLAN:** If I notice my battery is at a 3 or below by 4:30, eat a snack BEFORE 5 PM. The protocol works better when capacity is already topped up.

Notice the protocol is **small**. It doesn't try to solve the whole brother dynamic. It just gives the student a deliberate move for the 5:30 trigger. That's enough.

---

## Guided Session 2
### Pre-Mortem and Refinement
#### Learning Goal
By the end of this session, the student can:

- run a **pre-mortem** on their protocol — imagining it fails and figuring out why
- identify the weak points in the protocol before deploying it
- refine the protocol based on the pre-mortem

---

#### Activities

**1. The Pre-Mortem**

A **pre-mortem** is the opposite of a post-mortem. Instead of analyzing why a project failed *after* it happened, you imagine the project failed and ask why — *before* you start.

Ask the student:

> "Imagine it's next week and the protocol totally didn't work. What might have happened?"

List every possible failure mode. Common ones:

- I forgot the protocol existed in the moment.
- I tried to follow it but my hijack took over before step 1.
- I got hijacked too fast — the trigger happened and the protocol skipped.
- I followed it the first time, but then I gave up after one fail.
- Someone else's behavior made it impossible.
- The protocol turned out to address the wrong root cause.

Each of these is a real risk. The pre-mortem lets you patch the holes BEFORE they cause failure.

---

**2. Patching the Holes**

For each major failure mode, add a fix to the protocol:

- "I forgot the protocol exists" → put a copy of the protocol in a spot I'll see (in the Telemetry Log, on my desk, on my phone background).
- "I got hijacked too fast" → make step 1 something my body can do automatically (the long exhale). Practice it 5 times this week in calm states so it's automatic.
- "I gave up after one fail" → the protocol is for the WEEK, not for a single attempt. Failures are data, not reasons to quit.
- "The protocol addressed the wrong root cause" → that's why we'll do a post-mortem in Week 18 and iterate.

Update the protocol document with the patches.

---

**3. Final Walkthrough**

Have the student walk through the protocol out loud, from trigger to check, as if narrating what they'll do:

> "It's 5:35 PM. My brother walks in and grabs my pencil. My body wants to yell. Instead, I take one long exhale. I say 'please ask first.' He doesn't put it back. I stand up. I walk to the kitchen. I sit at the table. I don't engage."

This rehearsal makes the protocol way more likely to fire in the real moment. The brain has run the steps mentally. The pattern is loaded.

---

## Independent Practice

### Goal

Practice the protocol in your head every day. Pre-fire it before any real deployment.

### Activities

**1. The Daily Rehearsal**

Each day this week, read your protocol out loud once. Walk through what you'll do, step by step.

This isn't busywork. The more times you've mentally rehearsed the protocol, the easier it is to actually run when the trigger arrives.

**Minimum viable version (younger learners):** Read your protocol card aloud every morning and every night. That's enough.

---

**2. The Pre-Fire Test**

If your trigger happens this week (and it probably will), try the protocol! Don't worry about doing it perfectly. The point is to test it once, even if it falls apart halfway through. Record what happened:

- Did the protocol fire?
- Which step did it break down at?
- What surprised you?
- Anything to patch before next week's full deployment?

You're still pre-deploying — the formal deployment is Week 17. This week, the goal is just to test that the protocol document is good enough to start with.

:::note Solo/Small-Group Fallback
The protocol design is fully solo. The protocol itself describes YOUR actions, not anyone else's — no partner needed for design or execution.
:::

### Telemetry Log

> Add the full protocol document to your Telemetry Log. Include:
>
> **Protocol v1.0** with all sections from Session 1
>
> **Pre-mortem failure modes I identified:** ___
>
> **Patches I added:** ___
>
> **Daily rehearsal log:**
> - Day 1: ___
> - Day 2: ___
> - Day 3: ___
> - Day 4: ___
>
> **Any real-world tests this week:**
> - What happened: ___
> - Where it worked: ___
> - Where it broke: ___
> - One thing to patch before Week 17: ___

**Sentence starters for younger learners:**
- "When ___ happens, I will ___."
- "I'll know it worked if ___."

### Reflection Questions

- Did writing the protocol down change how you think about the friction point?
- Which step of the protocol do you think will be the hardest in the real moment?
- What's one thing in the protocol that might need to change after you actually try it?

---

## Check for Understanding

After this week, check whether the learner can:

1. **Show the protocol:** "Read me your protocol." (Looking for: a document with a clear trigger, a specific default response, and an observable check.)
2. **Explain the design choices:** "Why this default response and not something else?" (Looking for: a connection to the root cause from Week 15 — not just a random action.)
3. **Identify the failure modes:** "What's the most likely way this protocol breaks?" (Looking for: at least one specific failure mode and a patch for it.)

If the learner can do at least 2 of these, they are ready for Week 17.

---

## Pause and Notice

:::note What Matters Here
After finishing the protocol, ask:

> "How do you feel looking at this document? Excited? Skeptical? Both?"

Many kids feel a mix. Excitement that they have an actual plan. Skepticism that a paper document will hold up in a real moment.

Both are appropriate. Protocols don't fix problems by magic — they work because pre-deciding what to do in a hot moment is enormously powerful. The cooler version of you (the one writing the protocol now) is making the choice. The hotter version of you (the one in the moment) just has to execute.

This is the whole point of the engineering frame. You're not someone who has to figure it out from scratch every time. You're someone whose past self can leave gifts for their future self in the form of pre-decided actions.

**This week's takeaway:** A protocol is a gift from calm-you to hot-you. Make the gift specific enough to use.
:::

---

## Spiral Review

:::tip Connecting to Earlier Weeks
- **From Week 3:** "Step 1 of most protocols should be a regulation move — a long exhale, a cold splash, anything that helps the body shift out of full reactive mode. The protocol can't run if the panic brain is fully in charge."
- **From Week 10:** "Your protocol may include a boundary. The three boundary parts (behavior / request / follow-through) can plug directly into the protocol's default response."
- **From Week 15:** "The protocol must target the ROOT cause, not just the surface symptom. Re-read your 5 Whys results to make sure."
:::

---

:::tip Simplify (Ages 8–9)
Use a two-part protocol: "When ___ happens, I will ___." That's the whole thing. Add the check informally: "Did it go better than usual?" Make the protocol card colorful and visible. Read it together every morning.
:::

:::tip Extend (Ages 10–12)
Have the older learner add a **success metric** to the Check section: a specific, countable number to track. Examples: "Number of fights per week (was 5; goal is 3 or fewer)" or "Number of times I followed the protocol when triggered (target: 50% or more)." Concrete numbers make the next two weeks of data collection much more useful.
:::

:::tip Vocabulary This Week
**protocol**, **trigger**, **default response**, **check**, **pre-mortem**
:::
