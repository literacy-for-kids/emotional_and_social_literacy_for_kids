---
sidebar_position: 13
sidebar_label: "Week 13: Corrupt Data Transmission and Its Ripple Effects"
title: "Week 13: Corrupt Data Transmission and Its Ripple Effects"
description: "Rumors as signal corruption — how misinformation spreads through social networks faster than corrections, and verification protocols."
---

# Week 13: Corrupt Data Transmission and Its Ripple Effects
*Game Theory in Groups*

Information moves through your social network constantly. Most of it is fine — innocent, useful, mostly accurate. But some of it is **corrupt**: rumors, half-truths, dramatic embellishments, things said in private that get repeated to the wrong people.

And here's an uncomfortable fact: **false signals spread faster than corrections.** A rumor goes around a school in two days. The correction — "actually, that's not what happened" — may never catch up. By the time the truth arrives, the rumor has already done its damage.

This week we look directly at how signal corruption works in a social network. You'll learn to recognize the patterns, run **verification protocols** before you pass on information, and understand the ripple effects of being a node that transmits — or stops — bad data.

---

:::info Facilitator Snapshot
- The big idea: information has a quality, and you are responsible for the quality of what you pass on.
- The skill: pausing before transmitting, verifying, and being a clean signal — not corrupt amplification.
- This is also an indirect lesson about gossip. Handle gently.
- Continue the Telemetry Log. Add a Signal Quality section.
:::

:::tip Quick Navigation
- [Facilitator Preparation](#facilitator-preparation)
- [Guided Session 1: How Signals Get Corrupted](#guided-session-1)
- [Guided Session 2: The Verification Protocol](#guided-session-2)
- [Independent Practice](#independent-practice)
:::

## Week at a Glance

| | |
|---|---|
| **Prep time** | ~10 minutes |
| **Materials** | Telemetry Log, paper, pencil, optional: 3+ people for the Telephone game in Session 1 |
| **Key vocabulary** | signal corruption, verification, source, ripple effect, transmission |
| **Difficulty** | Moderate |

## Facilitator Preparation

:::info Before You Begin
- Have the Telemetry Log accessible.
- If you can gather 3+ people (family members, a sibling, etc.), the Telephone game in Session 1 is much more powerful. If not, you can still demonstrate it with two people by writing down each version.
- Avoid making this lesson about a specific real-life rumor situation the student is currently in. That's too charged for a learning frame.
:::

:::tip Facilitation Mindset
This is a week where the lesson can feel like an accusation if you're not careful. Most kids have passed on something they shouldn't have. The lesson is not "you are bad for doing that." It's "the system has predictable failure modes, and now you can see them."

The hope is that, by the end of the week, the student has internalized a rule that's simpler than "don't gossip": **be a clean signal**. That framing is positive and engineering-flavored — it asks them to be a good node rather than a non-gossiping kid.
:::

## For Younger Learners (Ages 8–9)

:::info Adapting This Week
**Simplest version of the concept:** "When stories get passed around, they change. By the time it gets to the tenth person, it's not even close to the truth. Today we're learning to slow down before we pass things on."

**What to shorten or skip:**
- Skip the formal "verification protocol" name. Use "the check-before-you-tell rule."

**Adapting the activities:**
- Play Telephone. (It's actually perfect for this age and lands the lesson without needing much explanation.)
- Use a story-book example of a rumor: there are plenty of picture books that handle this beautifully.

**Journal alternative:** "Something I heard this week that I'm not 100% sure was true: ___. Did I pass it on? ___. Looking back, would I pass it on now?"

**What success looks like:** The student can describe what happened in the Telephone game and can name one situation where they'd want to check before passing on something.
:::

---

## Guided Session 1
### How Signals Get Corrupted
#### Learning Goal
By the end of this session, the student can:

- describe **signal corruption** — what happens to information as it passes through a network
- identify three common ways messages get corrupted
- understand the asymmetric speed of rumors vs. corrections

---

#### Activities

**1. The Telephone Demonstration**

Play one round of Telephone if you can gather enough people. If not, do it on paper: write a sentence, then rewrite it as if you're explaining it to someone else without looking, then rewrite it again, three more times.

Start with something specific:

> "Jordan said she couldn't come to the party because her grandma is in town, but she'll try to come for the last hour."

By the time it gets to the fifth person, it might be:

> "Jordan's blowing off the party because of her grandma but she might show up later if she feels like it."

Or:

> "Jordan doesn't really want to come but said she has to see her grandma."

Same starting facts. Totally different impression. That is **signal corruption in action**.

---

**2. The Three Ways Signals Get Corrupted**

Walk through the three most common corruption patterns:

**CORRUPTION #1: Dropped details.** The teller leaves out things — sometimes accidentally, sometimes because they think the details aren't important. The receiver fills in the gaps with their own guesses.

**CORRUPTION #2: Added drama.** Each teller adds a little intensity. A small annoyance becomes a fight. A fight becomes a meltdown. A meltdown becomes a "she completely lost it."

**CORRUPTION #3: Confused source.** "I heard from someone who heard from someone…" By the third hop, the original source is lost. The information is now floating around as if it were a fact, with no way to check.

Ask: "Which of these have you seen happen in real life?"

---

**3. The Asymmetric Speed Problem**

Here's something that genuinely matters:

> **A rumor moves quickly. A correction moves slowly. And many of the people who heard the rumor will never hear the correction.**

This is one of the most important facts about information in social networks. It's also why even an *accurate* piece of private information being passed around can do harm — the original meaning gets corrupted, and the correction may never catch up.

This is also why the right rule isn't "only spread true things." The right rule is **be careful what you transmit at all** — because the system corrupts as it goes.

:::info Digital Privacy Note
Screenshots, forwarded messages, voice notes, private posts, and copied chat messages create the same problem faster. Before you share digital information, add another question: **Do I have permission to pass this on?**

If there is a genuine safety issue, bring it to a responsible adult instead of turning it into group content.
:::

---

## Guided Session 2
### The Verification Protocol
#### Learning Goal
By the end of this session, the student can:

- describe a **verification protocol** — the questions to ask before passing information on
- identify the three filter questions that prevent most signal corruption
- commit to using the protocol on at least one transmission this week

---

#### Activities

**1. The Three Filter Questions**

Before passing on a piece of information, run it through three filters:

**FILTER #1: Is it true?**
- How do I know? Did I see it directly? Did the person involved tell me directly?
- Or did I hear it from someone who heard it?

**FILTER #2: Is it kind?**
- Would I say this if the person being talked about were standing here?
- Am I sharing this for a good reason, or because it's juicy?

**FILTER #3: Is it necessary?**
- Does anyone actually benefit from me passing this on?
- Or is this just gossip that will keep traveling and possibly cause harm?

If a piece of information fails any of the three filters, the default move is: **don't transmit.**

This isn't a moral rule. It's a quality control protocol. Engineers test data before they pass it downstream. So can you.

---

**2. Walking Through Real Cases**

Practice on three hypothetical scenarios:

> **Case A:** Your friend tells you (in confidence) that another classmate cried at recess. Another classmate asks you what happened.
> - True? Possibly. You weren't there directly.
> - Kind? Almost certainly not.
> - Necessary? No.
> **Verdict:** Don't transmit.

> **Case B:** You overhear two parents talking about a friend's parent losing their job. Your friend doesn't know.
> - True? Probably, but you don't know the full story.
> - Kind? Telling your friend something this big secondhand is risky.
> - Necessary? No — that's their parent's news to share, not yours.
> **Verdict:** Don't transmit.

> **Case C:** A teacher mentioned that the soccer practice time is changing this week. Your teammates haven't heard yet.
> - True? Yes, you heard it directly.
> - Kind? Neutral — it's a practical fact.
> - Necessary? Yes — they need to know to be at practice on time.
> **Verdict:** Transmit. (And mention you heard it from the teacher.)

Notice: not every piece of information should be blocked. The filter is about *quality*, not *silence*.

---

**3. Being a Stop-Node**

Sometimes the most powerful thing you can do is **not pass on** a corrupt signal.

In a network, a node that consistently doesn't transmit bad signals becomes a kind of immune system for the group. People learn that if they tell you something private, you don't pass it on. Which means people tell you more real things. Which means you're operating in a higher-quality information environment.

This is a quiet superpower. Being a stop-node is one of the highest-leverage things you can do in any social network.

:::note Solo/Small-Group Fallback
The Telephone game is much more fun with 3+ people, but you can simulate it on paper alone — write a sentence, rewrite it from memory three times. Walking through hypothetical cases (activity 2) works perfectly solo.
:::

---

## Independent Practice

### Goal

Practice the verification protocol on real information you encounter this week. Notice ripple effects.

### Activities

**1. The Verification Watch**

For one week, when you hear something about another person, run the three filters BEFORE deciding whether to pass it on. Write down at least three pieces of information you ran through the filters this week:

| Information | True? | Kind? | Necessary? | Did I transmit? |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |

Be honest. If you transmitted something that failed a filter, note it. That's data.

**Minimum viable version (younger learners):** Once this week, when you're about to tell someone something about another person, ask "is it true? is it kind?" Tell the facilitator what you noticed.

---

**2. The Ripple Tracker**

Pick one piece of information that traveled in your social network recently (you don't have to write a name). Try to trace it backward:

- Who told you?
- Who told them?
- Where did it start?
- How has the story changed from when it started?

Tracing the ripple often reveals just how corrupted a piece of information has become — and how far it's traveled from any actual source.

### Telemetry Log

> Add a section to your Telemetry Log called **Signal Quality**:
>
> **My usual transmission patterns:** (when do I pass things on without thinking?)
>
> **One piece of information I stopped this week:** ___
>
> **One piece of information I transmitted that I shouldn't have:** ___ (be honest)
>
> **My commitment going forward:** "Before I pass information about another person, I will ___."

**Sentence starters for younger learners:**
- "I almost told ___ about ___ but I stopped because ___."
- "Once I told someone something and it spread, and then ___ happened."

### Reflection Questions

- What's an example of a rumor that turned out to be totally wrong by the time you heard it?
- Is there someone in your life who's a great stop-node? What's it like to know them?
- Have you ever been on the receiving end of a corrupt signal about you? What did that feel like?

---

## Check for Understanding

After this week, check whether the learner can:

1. **Describe signal corruption:** "What's signal corruption?" (Looking for: what happens to information as it gets passed around / it changes, drops details, adds drama.)
2. **Name the three filters:** "What are the three filter questions before you pass something on?" (Looking for: is it true, is it kind, is it necessary.)
3. **Apply the protocol:** Give them a hypothetical ("you heard from someone that someone else is grounded"). Have them run the filters. (Looking for: a deliberate verdict, not an automatic transmission.)

If the learner can do at least 2 of these, they are ready for Week 14.

---

## Pause and Notice

:::note What Matters Here
After running the verification protocol on real information, ask:

> "Did you catch yourself almost transmitting something this week that you wouldn't have if you'd run the filters? What was that moment like?"

For most people, this is a humbling realization. We transmit corrupt signals far more than we think — sometimes because we want to feel in the know, sometimes because the information is juicy, sometimes just because we forgot to check.

Becoming aware of your own transmission patterns doesn't mean shaming yourself for past instances. It means deciding what kind of node you want to be from now on.

**This week's takeaway:** The information traveling through your network is partly your responsibility. Be the clean signal. Be the stop-node. The network is better when more nodes care about quality.
:::

---

## Related Tools

- Use the **Rumor Stop-Node Checklist** in [Student Tools and Printables](/docs/student-tools-and-printables) for screenshot, forwarding, and permission decisions.
- Use the [Facilitator Safety Guide](/docs/facilitator-safety-guide) for digital privacy and social mapping rules.

---

## Spiral Review

:::tip Connecting to Earlier Weeks
- **From Week 5:** "Catastrophizing makes signal corruption worse. A small piece of news gets amplified into something dramatic by the time it leaves your mouth."
- **From Week 9:** "Being a stop-node is one of the largest deposits you can make into the trust ledger. People remember who they could trust with private information."
- **From Week 12:** "Group dynamics make signal corruption faster. If everyone is talking about something, it feels weird not to participate — that's an alignment problem inside the corruption."
:::

---

:::tip Simplify (Ages 8–9)
Use the Telephone game as the centerpiece of the whole week. The big takeaway: "Stories change as they travel. Before I tell someone something about another person, I'll stop and ask: is this kind?" That's the right depth for this age.
:::

:::tip Extend (Ages 10–12)
Have the older learner research how rumors spread on the internet — algorithmic amplification, the asymmetry between sensational and accurate content, the difficulty of corrections. This is a real, applied topic with massive implications for how they'll consume information for the rest of their lives.
:::

:::tip Vocabulary This Week
**signal corruption**, **verification**, **source**, **ripple effect**, **transmission**
:::
