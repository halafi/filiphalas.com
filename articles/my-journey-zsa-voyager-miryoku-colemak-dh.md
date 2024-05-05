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

## Software vs Hardware Keyboard Programming
Before starting with Oryx (ZSA layer built on top of QMK) I used Karabiner with [Goku](https://github.com/yqrashawn/GokuRakuJoudo) which I still didn't get rid of fully due to application layer capabilities (e.g. one key to toggle VSCode and Browser depending on what is focused) but I trimmed down the config for Voyager significantly and kept it in case I go back to traditional / Mac keyboard in the future.
 
So far I didn't need to dive into QMK as Oryx does most of the stuff I need (and is pretty straightforward to use) though it will lack some QMK capabilities.

[The Oryx layout I use](https://configure.zsa.io/voyager/layouts/LN9LD/latest/0) got inspired by [Miryoku](https://github.com/manna-harbour/miryoku) which I appreciate as some sort of standardization to the limitless customization, but Voyager is not the best keyboard for it as it would need a third thumb key. Given that you get more pinky keys I don't think its a big issue, I found I almost don't use Tab or Option key so I have made adjustments that work better for me.

## Blind Keycaps and Ortholinear Qwerty
Getting used to ortholinear qwerty was probably the most painful, but didn't take long (around 2-3 days), however I didn't like it much with qwerty due to it moving "n" key further away from "j", so after around one week of use I started transitioning into Colemak-DH with [Tarmak for Colemak-DH](https://forum.colemak.com/topic/1858-learn-colemak-in-steps-with-the-tarmak-layouts/).

![Tarmak Key Changes](/static/img/posts/tarmak-key-changes.png)

After using Tarmak 1 for a few days I just jumped into full Colemak as I didn't like getting used to temporary "j" positions and having to change my VSCode and VIM config to each transition step, although it's a great option it you cannot afford to lose typing speed for at least a week. After the switch I was at 15 wpm on day 0.

The blind keycaps helped fix my Qwerty laziness and forced me to learn Colemak properly. Despite two decades of touch typing I would still occasionally rely on my eyes just because I could, now I couldn't anymore. There is now no encouragement to look at my keyboard which is nice, I imagine remapping my laptop keyboard to Colemak-DH with Goku could work too.

## Qwerty to Colemak Transition - Typing Speed and Comfort
Before Colemak I was averaging around 100 wpm on Qwerty, one week into Colemak I averaged around 40 wpm, practicing on [Keybr](https://www.keybr.com/) and [Monkeytype](https://monkeytype.com/). There was some learning pain such as whenever I would type fast my Qwerty muscle memory kicked in or sometimes my brain would just give up entirely and forget how to type, but nothing too frustrating.

In general having more typing comfort is a no brainer if you type mainly English words and programming characters remain unchanged.

![Heatmap Qwerty Colemak Dvorak](/static/img/posts/heatmap-qwerty-colemak-dvorak.png)
[10,000 Simple Wikipedia sentences heatmap - QWERTY vs Dvorak vs Colemak](https://www.reddit.com/r/Colemak/comments/qslro8/10000_simple_wikipedia_sentences_heatmap_qwerty/)

## Home Row Laziness and Optimization
Overall I became more and more lazy using my keyboard, moving my fingers as little as possible, facilitated by the use of [home row mods](https://precondition.github.io/home-row-mods) and layers. I am not sure what is better for RSI, whether it's that finger stretch traditional keyboards make us do (think holding down `cmd+shift+h` two vs single handed or some other combination) but comfort wise not having to leave and return to home row is pretty comfortable. 
 
## VSCode VIM on Colemak (from HJKL to NEIO)
Moving from HJKL to Miryoku navigation layer took a while, I didn't realize how used I was to HJKL and often used it instead of a better VIM navigation option. Being forced to slow down actually gives me the room to get used to better VIM habits.

Other than that as most shortcuts in Vim are semantic I didn't need to remap many keys. 
 
## Ergonomic Challenges and Was it Worth it?
I will update this section later, as I am not that sure yet whether the Colemak transition was worth it, how long it will take to reach 80+wpm and potential issues using Qwerty once in a while.

So far I think the split keyboard transition could have been done earlier as it's a great feeling to have your chest more open though the difference is hard to measure and every such change can bring new problems, such as when moving to vertical mouse your hand is just pressured in different place and it gets trickier to support your wrist, you also cannot swap arms and generally having the possibility to vary your arm position throughout the day should be best.

I think with a split keyboard the challenge is to learn to use the thumb clusters comfortably, they will suit differently to various palm sizes. Also if you were doing amazing finger stretches on Qwerty for a while maybe you are used to using your pinkies but not your thumbs as much.
