---
title: "From Neovim back to VSCode, it probably wasn't worth it."
description: "I have used Neovim for the past 3 years but decided to come back to VSCode with the VIM plugin."
image: /static/img/posts/vscode.jpeg
date: "2023-09-22"
canonical_url: https://filiphalas.com/from-neovim-back-to-vscode
---

After investing a lot of time into Neovim configuration that works for me and reaching a state where I didn't feel the need to try any new plugin I see I decided to pull the plug and come back to VSCode with [VIM plugin](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim).

I am aware of alternatives such as [VSCode Neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim) but I made the VIM plugin work sufficiently enough to match my previous Neovim setup.

<figure>
  <img src="/static/img/posts/vscode-meme.jpeg" alt="VSCode meme">
</figure>

## What bothered me with Neovim
Maintenance, it felt like driving a car with higher mileage where you are the auto mechanic. This gives you the power to understand how to change anything and sometimes it all clicked and worked great (maybe even better than a brand new Tesla), but then you do a plugin, LSP or Neovim update and shit starts to break.

There is a lot of work with maintenance of LSP, especially if you work in multiple languages, so I wanted to get rid of that and have more time to code. One of the core LSP plugins my configuration relied on stopped being supported. That was probably the last straw with a frustrating issue I was experiencing where a content from register would randomly overwrite the top content of the file I edited. I also had past issues with LSP and got tired of resolving them.

## What I miss about Neovim
- Being in the terminal all the time with Tmux and super convenient switching between projects.
- Full keyboard control is still something I haven't found in VSCode but I think with fine tuning it can be achieved as well, and I was quite surprised with how easy it was to bring some of my favorite tweaks from Neovim to VSCode with the plugin.
- The ecosystem

## Why not Webstorm
I considered it as I was using Webstorm in the past and I think some things such as Svelte LSP or Git integration could be a bit better, the pricing seems reasonable, but what I would hate to do is have to use several IDEs for different languages, and also paying for all products pack in that case seems a bit too much as I would mostly use Webstorm.

If I would work 100% of time with Typescript I would give it a go, and I still might in the future (same with different VIM plugins).

<figure>
  <img src="/static/img/posts/webstorm-meme.png" alt="IntelliJ meme">
</figure>

## What is better in VSCode
- I don't need to care about LSP, that's the main thing for me.
- I also like being out of the terminal in a more modern UX where drag and drop in file manager, image preview etc. works out of the box.
- File and folder related refactoring is better, e.g. moving files around and auto updating imports.
- If I use VSCode integrated terminal I don't need to maintain iTerm configuration and it works quite nicely with Tmux individual sessions per project.
- I still have to maintain a large configuration, particularly my VIM config in VS Code.
- I don't need to switch from Neovim to VSCode for debugging. I gave up on maintaining debugger configuration in Neovim for several languages.
- Transition to another modern IDE may be easier, e.g. XCode. I don't want to be in the terminal without a mouse forever building UX.

## Future plans

In the near term I just plan to keep improving my workflow with VSCode and strive for full keyboard controlled experience, but I also don't fear the mouse anymore. I will also be resisting the urge to just try something new for dopamines unless it solves one of my problems (rather than create new ones).

I don't regret trying out Neovim as I learned a lot, some knowledge I brought back to VSCode and I am now more comfortable contributing to a VIM plugin.

<figure>
  <img src="/static/img/posts/bright-future-meme.jpeg" alt="Bright Future Meme">
</figure>