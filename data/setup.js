const categories = [
  {
    name: "Coding",
    items: [
      {
        title: "VSCode + Vim extension",
        description:
          "Irreplaceable for stuff like Juniper notebooks and debugging.",
        url: "https://code.visualstudio.com",
      },
      // {
      //   title: "Neovim",
      //   description:
      //     "Lightweight and productive editor.",
      //   url: "https://neovim.io/",
      // },
      // {
      //   title: "WebStorm",
      //   description: "My 3rd editor of choice that I don't use anymore, but miss it sometimes.",
      //   url: "https://www.jetbrains.com/webstorm/",
      // },
    ],
  },
  {
    name: "Terminal",
    items: [
      {
        title: "Delta",
        description:
          "A syntax-highlighting pager for git, diff, and grep output.",
        url: "https://github.com/dandavison/delta",
      },
      {
        title: "Exa",
        description: "A modern replacement for ‘ls’.",
        url: "https://github.com/ogham/exa",
      },
      {
        title: "GokuRakuJoudo",
        description: "Config karabiner with ease.",
        url: "https://github.com/yqrashawn/GokuRakuJoudo",
      },
      {
        title: "Fish + Oh My Fish",
        description: "Command line shell that I find a bit better than ZSH.",
        url: "https://fishshell.com/",
      },
      {
        title: "iTerm2",
        description: "Chosen for stability and performance.",
        url: "https://hyper.is",
      },
      {
        title: "Lazygit",
        description: "Fast interactive git UI.",
        url: "https://jonas.github.io/tig/",
      },
      {
        title: "LF",
        description:
          "Terminal file manager written in Go with inspired by Ranger.",
        url: "https://github.com/gokcehan/lf",
      },
      {
        title: "Tmux",
        description: "Terminal multiplexer.",
        url: "https://github.com/tmux/tmux",
      },
    ],
  },
  {
    name: "Apps",
    items: [
      {
        title: "Alfred",
        description:
          "Spotlight replacement which boosts my efficiency with Mac.",
        url: "https://alfredapp.com",
      },
      // {
      //   title: "Around",
      //   description: "Video calls for teams without fatigue.",
      //   url: "https://www.around.co/",
      // },
      {
        title: "Bartender",
        description: "Take control of your menu bar.",
        url: "https://www.macbartender.com/Bartender4",
      },
      {
        title: "Commander One",
        description:
          "I grew up on Total Commander and sometimes Finder just doesn't do it for me.",
        url: "https://ftp-mac.com/",
      },
      // {
      //   title: "Insomnia",
      //   description: "API development and documentation.",
      //   url: "https://insomnia.rest/",
      // },
      {
        title: "Karabiner-Elements",
        description: "A powerful and stable keyboard customizer for macOS.",
        url: "https://karabiner-elements.pqrs.org/",
      },
      // {
      //   title: "Keybase",
      //   description: "Secure messaging and file-sharing, Git commit signing and more.",
      //   url: "https://keybase.io/",
      // },
      {
        title: "Monosnap",
        description: "App I use for annotated screenshots.",
        url: "https://monosnap.com/",
      },
      {
        title: "Numi",
        description: "Fancy calculator and currency converter.",
        url: "https://numi.app/",
      },
      {
        title: "Notes",
        description: "Trying to use something simple and minimalistic."
      }
      // {
      //   title: "NotePlan",
      //   description:
      //     "Resembles bullet journel but I don't need to carry it around.",
      //   url: "https://noteplan.co/",
      // },
      // {
      //   title: "Obsidian",
      //   description:
      //     "Knowledge base that works on top of your local folder of plain text files.",
      //   url: "https://obsidian.md/",
      // },
      {
        title: "Postico 2",
        description: "A Modern PostgreSQL Client for the Mac.",
        url: "https://eggerapps.at/postico/",
      },
      {
        title: "Rectangle",
        description:
          "Move and resize windows in macOS using keyboard shortcuts or snap areas.",
        url: "https://rectangleapp.com/",
      },
      // {
      //   title: "Skype",
      //   description: "For calls around the world.",
      //   url: "https://www.skype.com/en/",
      // },
      // {
      //   title: "Spotify",
      //   description: "Music for the ears.",
      //   url: "https://www.spotify.com/",
      // },
      // {
      //   title: "VLC",
      //   description: "Open source cross-platform multimedia player.",
      //   url: "https://www.videolan.org/vlc/",
      // },
    ],
  },
  {
    name: "Hardware",
    items: [
      // {
      //   title: "0-1 Monitors",
      //   description:
      //     "My workflow right now is optimised for single screen with shortcuts that are as fast as turning my eyes.",
      //   // url: "https://www.apple.com/shop/product/MK2E3AM/A/magic-mouse-white-multi-touch-surface",
      // },
      {
        title: "ZSA Voyager",
        description: "Low-profile, split ergonomic keyboard.",
        url: "https://www.zsa.io/voyager/",
      },
      {
        title: "Logitech Lift",
        description:
          "Vertical ergonomical mouse.",
        url: "https://www.logitech.com/en-us/products/mice/lift-vertical-ergonomic-mouse.910-006466.html",
      },
      {
        title: "Nexstand K2",
        description: "Portable and foldable laptop stand. More height adjustments than Roost V2, slightly worse angle.",
        url: "https://nexstand.io/",
      },
      {
        title: "Carpio 2.0",
        description: "Ergonomic wrist rest, though I am not yet sure if I like it much, not usable with Lift or tented keyboard much.",
        url: "https://deltahub.io/products/carpio-ergonomic-wrist-rest",
      },
      {
        title: "Delso Projuster 180x80cm",
        description: "Standing desk.",
        url: "https://delso.cz/produkt/elektricky-vyskove-nastavitelny-stul-projuster/",
      },
      {
        title: "MARKUS Office chair",
        description: "Buy it for life, lacks adjustable wrist, neck and lumbar support but great value for the money.",
        url: "https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/",
      }
      // {
      //   title: "Roost Laptop Stand",
      //   description: "Better angle than K2 without adjustments.",
      //   url: "https://www.therooststand.com/",
      // },
    ],
  },
];

export default categories;