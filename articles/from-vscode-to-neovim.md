---
title: "From VSCode to Neovim, is it worth it?"
description: "Trying out Vim is something every Software Engineer should do at some point, however when it comes to replacing your VSCode or your favorite IDE it is not that simple."
image: /static/img/posts/neovim.jpg
date: "2023-02-16"
canonical_url: https://filiphalas.com/from-vscode-to-neovim
---

My journey with text editors and IDEs that I have been using primarily for web development dates back to WebStorm, followed by VSCode, resulting with using Neovim as my primary code editor at the moment. Yet if anyone asks me whether they should switch to Neovim I tend to discourage them, despite never imagining myself to go back to an IDE without near perfect Vim integration.

What I often recommend instead is to give a shot to VIM keybinding extension in the IDE you are using right now. You might lose some productivity initially but it should maybe take you only about two weeks to reach a point where you are more productive.

## How do I exit Vim?

It's probably the first thing a programmer learns, yet once you know Vim you won't even need to exit it.

<figure>
  <img src="/static/img/posts/vim-neo.jpg" alt="Vim Matrix Meme">
</figure>

In a day to day you might end up using [sessions](https://github.com/tpope/vim-obsession) with a shortcut to close all buffers simultaneously:

```vim
:wqall<CR>
```

In any case this isn't a tutorial on how to survive your first ssh connection, but I think most of us encounter this problem at the beginning of our career.

## Vim customization, the perfectionist nightmare

There is Vim and then there is a massive ecosystem around it. You might need to develop an obsession to actually get through the pain of setting Neovim up.

Start with Neovim defaults and add what you need as you go. At the beginning you might easily get distracted wanting to try every plugin you see, but eventually you will reach a point where you are happy with your configuration despite its imperfections.
Find some [dotfiles repository on github](https://github.com/search?q=neovim+dotfiles) and start putting parts into your own configuration, as a bonus you might learn Vimscript or Lua along the way.

Your configuration will never be perfect, but you don't need to abandon your former IDE entirely if it does something extremely well out of box (e.g. debugging, working with Jupyter notebooks).

## Why would you choose to learn Vim?

In my case I am fascinated by things that are easy to learn but can take decades to master. Whenever I learn something new with Vim my productivity and joy goes up. I look for these things both in my work and hobbies.

<figure>
  <img src="/static/img/posts/vim-shortcut-meme.png" alt="Vim shortcut meme">
</figure>

I cannot say it improves your work output that much, because you will still be throttled by your brain capacity, but it does make the whole process much more enjoyable and allows you to stay in flow state much more effortlessly, particularly once you add Tmux to the mix.

## Hello Tmux

[Tmux](https://github.com/tmux/tmux) allows you to stay in your terminal and easily navigate between tabs and panes using only your keyboard. It becomes extremely powerful when you are working with several projects in parallel and need to copy code from one project to the other.

Plus, you can make it [look nice](https://github.com/dracula/tmux).

## Learning curve

The first thing you should take into consideration is to [learn touch typing](https://www.typing.com/) if you don't know it already. That should yield benefits on it's own even if you never learn Vim at all.

I tend to think of touch typing as if I am juggling with my keyboard keys. Add Vim to the mix and it's like juggling with an additional pair of hands that you are not able to control much at the beginning.

If you enjoy touch typing you might as well get one of the [best juggling balls](https://www.jugglequip.com/) out there and learn to juggle if you haven't already, as it's an amazing hobby similarly unpopular as VIM.

<figure>
  <img src="/static/img/posts/vim-learning-curve.png" alt="Vim learning curve">
</figure>

This image is obviously a joke, as I mentioned at the beginning of this article to start using Vim in your current IDE as a keybinding extension it might only take you around two weeks to see a noticeable improvement in productivity and I encourage you to not rush into switching to Neovim straight away.

## Progression path

My recommended progression path to learn Vim would be as follows:

1. Learn touch typing
2. Use Vim keybinding extension in your current IDE
3. Move away from IDE terminal to Fish or Zsh shell in terminal like iTerm2 (now if your IDE crashes your terminal stays alive and vice versa)
4. Start using Neovim with defaults to accomplish ~80% of tasks you do in your IDE
5. Add Tmux to the mix
6. Customize Neovim to be able to use it for ~99% of tasks you do in your current IDE

Good tutorials for Vim are `vimtutor` (free in your terminal and doesn't take long) or [Vim Adventures](https://vim-adventures.com/) (paid but free to try).

## Selling my mouse and buying my first mechanical keyboard

Wait, what is a 60% keyboard layout? So you are saying all these membrane keyboards are garbage?

<figure>
  <img src="/static/img/posts/keyboard-meme.jpg" alt="Mechanical Keyboard Meme">
</figure>

Common sense is generally applicable here, everything is a tradeoff. I really do appreciate the portability and low weight of membrane keyboards, yet I choose to carry the extra weight of a high profile mechanical keyboard when traveling. I recommend trying out both.

Think of yourself as a musician and of the keyboard you use as your instrument. You can go a bit wild here and build up your keyboard collection, given the amount of hours you end up using a keyboard every day it's not all that unreasonable.

Plus you will save all that money not having to worry about mouse anymore.

## Dude, where are my arrow keys? Programming your first keyboard

If you end up getting a keyboard with a compact key layout you might suddenly notice you have no arrow keys. Don't panic.

Moving your hand from hjkl was a waste of time anyway, just use [Karabiner](https://karabiner-elements.pqrs.org/) with some [modification rule](https://ke-complex-modifications.pqrs.org/?q=hjkl). Same can be done for merged Esc and ~ key. Save yourself some trouble and use a declarative config file with [Goku](https://github.com/yqrashawn/GokuRakuJoudo). See my [dotfiles](https://github.com/halafi/dotfiles/blob/master/config/karabiner.edn) for example.

You can take it one step further and get a hardware programmable keyboard like ErgoDox EZ, but the advantage of programming your keyboard with software is that it will transfer to your laptop keyboard or any keyboard you will use as well.

## Conclusion
The choice of developer tools is generally individual (unless your company enforces a particular tool), no matter what you use I would strive for being efficient. I have learned a lot trying out Vim and I think if your career is longer than 10 years it's worth giving it a shot. You can always go back to what you used before if you don't like it.

<figure>
  <img src="/static/img/posts/swoledoge-cheems-vim-meme.jpg" alt="Swole Doge vs Cheems Vim meme">
</figure>

The fact is [Vim is not popular](https://pypl.github.io/IDE.html) (maybe we have that in common), but given its learning curve it's not that surprising. If you are just starting out IDE should not be your primary concern, but if you are wondering what to learn next here is an idea. Take into consideration the opportunity cost when deciding to learn Neovim, maybe you could learn something more aligned with your goals instead.

Once you are a Neovim user there is also a configuration overhead whenever you need to setup support for a new language or framework. The setup generally will not be as smooth as in VSCode or any other IDE.

## Additional Resources

Introduction video, books and resources I recommend to learn about Neovim and discover its ecosystem:

- [Neovim in 100 Seconds](https://www.youtube.com/watch?v=c4OyfL5o7DU)
- [Practical Vim, Second Edition](https://pragprog.com/titles/dnvim2/practical-vim-second-edition/)
- [Modern Vim](https://pragprog.com/titles/modvim/modern-vim/)
- [Awesome Neovim](https://github.com/rockerBOO/awesome-neovim)
- [Learn Neovim The Practical Way](https://alpha2phi.medium.com/learn-neovim-the-practical-way-8818fcf4830f)
- [My dotfiles and Neovim config](https://github.com/halafi/dotfiles)

Thank you for reading this far, you deserve a cookie.