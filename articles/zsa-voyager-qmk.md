---
title: "Getting Started with QMK on the ZSA Voyager"
description: "Exploring what QMK can do beyond Oryx and highlighting my favorite QMK features."
image: /static/img/posts/qmk-configuration-vscode.png
date: "2024-06-02"
canonical_url: https://filiphalas.com/getting-started-qmk-zsa-voyager
---

I never touched QMK before I got the ZSA Voyager so I wanted to write down the steps needed to get started with QMK in a single place. Although I am quite happy with Oryx as it makes it very easy to get started with programming your keyboard layout I was interested in what are the limitations Oryx has at the time of writing and what are some popular QMK tweaks I could start using.

Overall I think it is probably better for most people to stick with Oryx as in its current state it does quite a lot and gives you the hassle free configuration but if you plan on using a non ZSA keyboard or just want to get the most out of your keyboard then learning QMK may be worth it.

## Building and Flashing the ZSA Voyager Layout from Source

Here's a summary of how you can flash your Voyager layout from source code on macOS.

1. Clone the QMK firmware repository:

   `git clone https://github.com/zsa/qmk_firmware.git`

   Or fork it as your `qmk_keymap` repo.

2. Navigate to the cloned folder: `cd qmk_firmware`
3. Install QMK: `brew install qmk/qmk/qmk`
4. Set up QMK: `qmk setup`

- Confirm installation of dependencies and cloning submodules.

5. Download your layout source code from Oryx.

![Where to download source code oryx](/static/img/posts/oryx-download-source.png)

6. Copy the contents of the \*\_source folder (from the .zip downloaded from Oryx) into the `qmk_firmware/keyboards/voyager/default` folder (or any folder name you prefer)
7. Compile the layout: `make voyager:default`
8. Flash the compiled layout: `make voyager:default:flash`

### Using the QMK Configurator

If you want to try the official [QMK Configurator](https://config.qmk.fm/#/zsa/voyager/LAYOUT) you can generate a JSON file for import, it may be helpful to familiarize with key codes, but I would not expect it to do much more than Oryx.

1. Generate a JSON file:

    `qmk c2json -km voyager:default -kb voyager keyboards/voyager/keymaps/custom/keymap.c --no-cpp > keymap.json`

2. In the generated JSON file, change the keyboard name to `zsa/voyager`.
3. Navigate to https://docs.qmk.fm/#/ and import `keymap.json`.

![QMK Configurator Voyager](/static/img/posts/qmk-configurator-voyager.png)

## Handpicked QMK Keycodes and Tricks

I'm constantly experimenting with various tweaks to improve my workflow and will update this section with new findings.

Good sources of information on QMK tweaks:

- [Getreuer.info](https://getreuer.info/posts/keyboards/index.html)
- [QMK docs](https://docs.qmk.fm/)

### Repeat Key

This key has a great potential, it can reduce key hold time and enhance your typing experience. It's weird how natural it is to type repeat when writing e.g. "dazzle" to type the second z. Because of this I don't think it shines in a weak keyboard position.

If you are already quite happy with your layout you may find that trying to make it work is more hassle than it's worth. At the moment I am using it in a former tab position, so it can easily behave as a tab press when I need it.

Though not revolutionary, the Repeat Key is a nice addition. It might soon be included in Oryx as it's already part of QMK. Note that it requires tweaking QMK code to work as a layer toggle when held down.

[Repeat Key QMK Docs](https://docs.qmk.fm/#/feature_repeat_key)

<!-- ### Select Word
Macro for convenient word or line selection. Can help get rid of the option key if you rely on it for text selection.

[Word selection QMK macro](https://getreuer.info/posts/keyboards/select-word/index.html) -->

### Leader Key

The Leader Key likely won't be added to Oryx soon due to the complexity it would add to the configurator. Currently, I use the Leader Key to type Czech letters with accents without toggling the macOS locale (I use the Unicode Hex Input locale). I am far from utilizing it's potential and I am not yet 100% sure whether I will keep using it.

[Leader Key QMK Docs](https://docs.qmk.fm/#/feature_leader_key)

<!--
### X-Case
Definitely useful though you could achieve it via e.g. VSCode extension and some hot keys.


[X-Case](https://github.com/andrewjrae/kyria-keymap?tab=readme-ov-file#x-case) -->

## Better Macros

I'm exploring ways to improve macro behavior and extend beyond the 5-key sequence limit. Updates will follow as I refine these enhancements.
