---
title: "Keyboard controlled VSCode with Vim and Tmux"
description: "I am sharing my current setup of how to use VSCode the best way that I know. Reducing the times I am switching between keyboard and mouse makes me more productive."
image: /static/img/posts/split-keyboard.webp
date: "2023-10-07"
canonical_url: https://filiphalas.com/keyboard-controlled-vscode-with-vim-and-tmux
---
I have recently [abandoned Neovim](/from-neovim-back-to-vscode) as I missed a lot of things about VSCode and Webstorm. Mainly the Neovim I was using was basically keyboard first VSCode without debugger with around 30 plugins. In my years using Neovim I have learned a lot about how to take more out of it so I don't see it as a waste (there is always more to learn).

When I was using VSCode with VIM plugin a few years back my setup was nowhere near as good as it is now so I am happy to share some ideas from my most recent config if anyone is looking for tips and tricks on how to improve their development workflow.

<figure>
  <img src="/static/img/posts/keybind.png" alt="Keybind meme">
</figure>

## Tools I am using
- Fish shell: I don't think shell matters much, `zsh` is also great, Fish has better autocomplete but I do miss sometimes the support `zsh` get's with install instructions and setup steps
- Tmux: Mainly for the Vi key mode so that I can select and copy text, so in VSCode I just use cmd+j to show terminal q+space to start copy mode and can select text with hjkl.
- [VSCodeVim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) plugin: there are other plugins but this one was relatively easy to configure to emulate the configuration I was using in Neovim
- VSCode keybindings and settings: lot of fine tuning to make everything work, will try to keep that updated [in my dotfiles](https://github.com/halafi/dotfiles/tree/master/vscode)

`tmux.conf`
```
set -g status-keys vi
set-window-option -g mode-keys vi
bind-key Space copy-mode
```

`settings.json`
```json
"terminal.integrated.profiles.osx": {
    "tmux-shell": {
        "path": "tmux",
        "args": [
            "new-session",
            "-A",
            "-s",
            "vscode:${workspaceFolder}"
        ]
    }
}
```

`keybindings.json`` - hjkl navigation inside VSCode
```json
{
  "key": "ctrl+h", 
  "command": "workbench.action.navigateLeft", 
},
{
  "key": "ctrl+j",
  "command": "workbench.action.navigateDown",
},
{
  "key": "ctrl+k",
  "command": "workbench.action.navigateUp",
},
{
  "key": "ctrl+l", 
  "command": "workbench.action.navigateRight", 
}
```

## VSCodeVim configuration
I use a lot of Vim keybindings that you can find in my configuration files.

`settings.json`
```json
"vim.replaceWithRegister": true,
"vim.camelCaseMotion.enable": true,
"vim.highlightedyank.enable": true,
"vim.hlsearch": true,
"vim.easymotion": true,
"vim.leader": " ",
"vim.useSystemClipboard": true,
"vim.visualstar": true
```

### Vim: Replace with Register
Allows me to use substitute operation in a very useful way, so that I can just do `siw` to overwrite word with the contents of my clipboard. I got used to this behavior from [vim-subversive](https://github.com/svermeulen/vim-subversive).

### Vim: Surround
This plugin is enabled by default and makes it super easy to surround text in any symbol pair. I use this in both normal and visual mode to surround any block of text with brackets, quotes etc.

### Vim: Camel Case Motion
Easy navigation by part of words using `w, b, e` etc. in camelCase text.

### Vim: Easymotion
Similar to many jump plugins, probably not the best but good enough. The plugin allows to jump to any symbol or word on the screen.

![Animated demonstration](https://f.cloud.github.com/assets/3797062/2039359/a8e938d6-899f-11e3-8789-60025ea83656.gif)

I personally map it to `s` (forwards) and `S` (backwards) in normal mode followed by the start of a letter.

## Outside of VSCode
I use keyboard hotkeys to switch between Chrome and VSCode with one shortcut. I find this even better than using multiple monitors and moving my eyes, also less straining on my neck if the monitor distance is suboptimal, more scalable and portable.
