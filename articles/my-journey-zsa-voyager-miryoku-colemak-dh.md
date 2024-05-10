---
title: "My Journey with the ZSA Voyager and Colemak DH"
description: "Exploring the transition from QWERTY to Colemak DH on the ZSA Voyager split keyboard, a step towards more ergonomic typing and improved efficiency."
image: /static/img/posts/zsa-voyager-setup.jpg
date: "2024-05-05"
canonical_url: https://filiphalas.com/my-journey-zsa-voyager-miryoku-colemak-dh
---

## Inventing Problems You Don't Have
For over two decades, I was content as a 100+ wpm user of QWERTY but recently finally made the switch to a low profile split ortholinear keyboard with more ergonomic switches. Since I was considering trying a different layout I went with blank keycaps to avoid having to swap letters, in hindsight this doesn't seem as much work compared to memorizing where each key is but it comes with other advantages.

I didn't have any upcoming deadlines so I sacrificed another adjusting period to hopefully prevent RSI and improve keyboard use comfort.

I did have the voice in my head telling me "this is a QWERTY dominated world you are just creating problems for yourself", but the truth is I like creating and solving problems.

![Colemak vs QWERTY meme](/static/img/posts/colemak-vs-qwerty-meme.png)

## Entering The Ergo Keyboard Market
After running into frustration with high profile mechanical Keychron I wanted a programmable low profile keyboard, at least Alice (Arisu) layout, but split preferred so I could finally have pizza in between the halves. Unfortunately the ergo keyboard market is not where it deserves to be, it seems to be in it's infancy although it has gotten a lot better.

The keyboards I considered (not affiliated with any):
- [ZSA Voyager](https://www.zsa.io/voyager)
- [Keychron K15 Pro (Alice Layout)](https://www.keychron.com/collections/low-profile-keyboard-collection/products/keychron-k15-pro-alice-layout-qmk-via-wireless-custom-mechanical-keyboard)
- [Keychron Q11 QMK Custom Mechanical Keyboard](https://www.keychron.com/products/keychron-q11-qmk-custom-mechanical-keyboard)
- [Dygma Defy](https://dygma.com/products/dygma-defy)
- DIY / prebuilt ones, e.g. [SofleKeyboard](https://josefadamcik.github.io/SofleKeyboard/)

Although building your own keyboard seems like a wonderful hobby it's not even that easy to order all parts from one shop and in the end it would be the most expensive (but also most rewarding). It would also come with more of a prototype feel and possibly be less durable. In the end I went with the 52-key Voyager and Kalih Choc Red Pro switches as these should be the most ergonomic and quiet.

## The Cheapest Split Keyboard

## Software vs Hardware Keyboard Programming
Before starting with Oryx (ZSA layer built on top of QMK) I used Karabiner with [Goku](https://github.com/yqrashawn/GokuRakuJoudo) which I still didn't get rid of fully due to application layer capabilities (e.g. one key to toggle VSCode and Browser depending on what is focused) but I trimmed down the config for Voyager significantly and kept it in case I go back to traditional / Mac keyboard in the future.
 
So far I didn't need to dive into QMK as Oryx does most of the stuff I need (and is pretty straightforward to use) though it will lack some QMK capabilities.

[The Oryx layout I use](https://configure.zsa.io/voyager/layouts/LN9LD/latest/0) got inspired by [Miryoku](https://github.com/manna-harbour/miryoku) which I appreciate as some sort of standardization to the limitless customization, but Voyager is not the best keyboard for it as it would need a third thumb key. Given that you get more pinky keys I don't think its a big issue, I found I almost don't use Tab or Option key so I have made adjustments that work better for me.

## Blind Keycaps and Ortholinear QWERTY
Getting used to ortholinear QWERTY was probably the most painful, but didn't take long (around 2-3 days), however I didn't like it much with QWERTY due to it moving "n" key further away from "j", so after around one week of use I started transitioning into Colemak-DH with [Tarmak for Colemak-DH](https://forum.colemak.com/topic/1858-learn-colemak-in-steps-with-the-tarmak-layouts/).

![Tarmak Key Changes](/static/img/posts/tarmak-key-changes.png)

After using Tarmak 1 for a few days I just jumped into full Colemak as I didn't like getting used to temporary "j" positions and having to change my VSCode and VIM config to each transition step, although it's a great option it you cannot afford to lose typing speed for at least a week. After the switch I was at 15 wpm on day 0.

The blind keycaps helped fix my QWERTY laziness and forced me to learn Colemak properly. Despite two decades of touch typing I would still occasionally rely on my eyes just because I could, now I couldn't anymore. There is now no encouragement to look at my keyboard which is nice, I imagine remapping my laptop keyboard to Colemak-DH with Goku could work too.

## QWERTY to Colemak Transition - Typing Speed and Comfort
Before Colemak I was averaging around 100 wpm on QWERTY, one week into Colemak I averaged around 40 wpm, 60 wpm two weeks after the transition. I practiced on [Keybr](https://www.keybr.com/) and [Monkeytype](https://monkeytype.com/). During the first week there was some learning pain such as whenever I would type fast my QWERTY muscle memory kicked in or sometimes my brain would just give up entirely and forget how to type, but nothing too frustrating.

In general having more typing comfort is a no brainer if you type mainly English words and programming characters remain unchanged.

![Heatmap QWERTY Colemak Dvorak](/static/img/posts/heatmap-qwerty-colemak-dvorak.png)
[10,000 Simple Wikipedia sentences heatmap - QWERTY vs Dvorak vs Colemak](https://www.reddit.com/r/Colemak/comments/qslro8/10000_simple_wikipedia_sentences_heatmap_qwerty/)

## Beyond Colemak DH
There are many keyboard layouts that are actually an evolution of Colemak DH or similar and could be even better, such as [Canary](https://github.com/Apsu/Canary) which still has Colemak similarity but users have reported that it's worse for VIM.

[This guide](https://getreuer.info/posts/keyboards/alt-layouts/index.html) is a nice starting point. I think going beyond Colemak you need to know what bothers you typing on it as there are too many "successors" that personal preferences come into play. You most likely also need to leave QWERTY familiarity behind.

I may not use Colemak all my life but I already feel like I never want to go back to QWERTY.

## Best Layout For Mobile Phones
Surprisingly QWERTY makes for a great mobile (smartphone) layout as all the common letters are spread out. Even the official [Colemak FAQ](https://colemak.com/FAQ#Is_Colemak_suitable_for_smartphones.3F) doesn't recommend using Colemak on mobile phones as Colemak increases finger travel and error rate.

## Home Row Laziness and Optimization
Overall I became more and more lazy using my keyboard, moving my fingers as little as possible, facilitated by the use of [home row mods](https://precondition.github.io/home-row-mods) and layers. I am not sure what is better for RSI, whether it's that finger stretch traditional keyboards make us do (think holding down `cmd+shift+h` two vs single handed or some other combination) but comfort wise not having to leave and return to home row is pretty comfortable. 
 
## VSCode VIM on Colemak (from HJKL to NEIO)
Moving from HJKL to Miryoku navigation layer took a while, I didn't realize how used I was to HJKL and often used it instead of a better VIM navigation option. Being forced to slow down actually gives me the room to get used to better VIM habits.

Other than that as most shortcuts in Vim are semantic I didn't need to remap many keys. 
 
## Alice vs Split Keyboard
There are several risk factors with traditional keyboards or when using a mouse:
- Ulnar Deviation
- Forearm Pronation
- Wrist Extension
- High Key Force & Fingertip Impact

![Keyboard Risk Factors](/static/img/posts/keyboard-risk-factors.webp)

I won't dive much into each but I feel like Alice (or Arisu) keyboards only address ulnar deviation, but a split keyboard that allows tenting can help you reduce forearm pronation. Any low profile keyboard helps with wrist extension but it takes some effort with tenting.

The key force can be changed on any mechanical keyboard by getting low actuation force switches, I would say that any switch with actuation force of 35g or less is a lot better than your Macbook keyboard.

You probably don't have issues with any of these unless you already have RSI, so the fist advice is don't get RSI. By investing into ergonomic devices the chance of getting RSI should be reduced.

## Ergonomic Challenges and Was it Worth it?
In general for me I am quite happy that after 1-2 weeks I reached a reasonable speed typing on Colemak DH (50-60 wpm on letters) and mainly improved typing comfort, so there are no regrets leaving Qwerty behind except maybe not doing it earlier. I may try another layout in the future as I learn more about my typing preferences or if a clear successor alt layout emerges, leaving Qwerty familiarity behind entirely as Colemak is still pretty close to it. There is the possibility of emulating a layout on e.g. Monkeytype to get a feel of it and see if you like it.

The split keyboard transition could have also been done earlier as it's a great feeling to have your chest more open though the difference is hard to measure and ulnar deviation fortunately wasn't causing me discomfort (or I didn't know about it), I literally never want to use keyboard in the Alice position now that I can keep the halves shoulder width apart.

Every ergonomic change can bring new problems, such as when moving to a vertical mouse your hand is just pressured in different places and it gets trickier to support your wrist, you also cannot swap arms and generally having the possibility to vary your arm position throughout the day should be best.

I think with the Voyager (or similar) keyboard the challenge is to learn to use the thumb clusters comfortably as they will suit differently to various palm sizes. Also if you were doing amazing finger stretches on QWERTY for a while maybe you are used to using your pinkies but not your thumbs as much. In general if you are ok with tweaking your layout you will find something that works for you.
