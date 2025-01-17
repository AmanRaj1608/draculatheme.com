const paths = [
  { params: { theme: 'ableton-live', title: 'Ableton Live', repo: 'ableton-live', color: 'orange', icon: 'pack-5/039-flask.svg', platform: ['mac', 'windows'] } },
  { params: { theme: 'adobe', title: 'Adobe', repo: 'adobe', color: 'pink', icon: 'pack-6/039-zombie.svg', platform: ['mac', 'windows'], synonyms: ['photoshop', 'illustrator'] } },
  { params: { theme: 'alacritty', title: 'Alacritty', repo: 'alacritty', color: 'pink', icon: 'pack-6/004-reaper.svg', platform: ['all'] } },
  { params: { theme: 'alfred', title: 'Alfred', repo: 'alfred', color: 'purple', icon: 'pack-5/019-wizard hat.svg', platform: ['mac'] } },
  { params: { theme: 'arduino-ide', title: 'Arduino IDE', repo: 'arduino-ide', color: 'cyan', icon: 'pack-1/001-gallows.svg', platform: ['all'] } },
  { params: { theme: 'atom', title: 'Atom', repo: 'atom', color: 'purple', icon: 'pack-1/005-potion.svg', platform: ['all'] } },
  { params: { theme: 'base16', title: 'Base16', repo: 'base16-dracula-scheme', color: 'purple', icon: 'pack-6/030-graveyard.svg', platform: ['all'] } },
  { params: { theme: 'bbedit', title: 'BBEdit', repo: 'bbedit', color: 'cyan', icon: 'pack-4/041-cyclops.svg', platform: ['mac'] } },
  { params: { theme: 'bear', title: 'Bear', repo: 'bear', color: 'orange', icon: 'pack-1/008-tree.svg', platform: ['mac'] } },
  { params: { theme: 'blender', title: 'Blender', repo: 'blender', color: 'pink', icon: 'pack-2/029-bomb.svg', platform: ['all'] } },
  { params: { theme: 'brackets', title: 'Brackets', repo: 'brackets', color: 'orange', icon: 'pack-4/043-minotaur.svg', platform: ['all'] } },
  { params: { theme: 'bspwm', title: 'bspwm', repo: 'bspwm', color: 'purple', icon: 'pack-6/022-candle.svg', platform: ['linux'] } },
  { params: { theme: 'chrome', title: 'Chrome', repo: 'google-chrome', color: 'orange', icon: 'pack-6/042-corpse.svg', platform: ['all'], synonyms: ['google'] } },
  { params: { theme: 'cmder', title: 'Cmder', repo: 'cmder', color: 'orange', icon: 'pack-1/006-night.svg', platform: ['windows'] } },
  { params: { theme: 'coda', title: 'Coda', repo: 'coda', color: 'pink', icon: 'pack-1/013-lollipop.svg', platform: ['mac'] } },
  { params: { theme: 'conemu', title: 'ConEmu', repo: 'conemu', color: 'pink', icon: 'pack-1/010-trident.svg', platform: ['windows'] } },
  { params: { theme: 'coteditor', title: 'CotEditor', repo: 'coteditor', color: 'cyan', icon: 'pack-1/026-mummy.svg', platform: ['mac'] } },
  { params: { theme: 'couscous', title: 'Couscous', repo: 'couscous', color: 'cyan', icon: 'pack-1/024-tombstone-1.svg', platform: ['all'] } },
  { params: { theme: 'discourse', title: 'Discourse', repo: 'discourse', color: 'orange', icon: 'pack-7/032-bat.svg', platform: ['all'] } },
  { params: { theme: 'duckduckgo', title: 'DuckDuckGo', repo: 'duckduckgo', color: 'orange', icon: 'pack-1/002-coffin.svg', platform: ['all'] } },
  { params: { theme: 'eclipse', title: 'Eclipse', repo: 'eclipse', color: 'orange', icon: 'pack-7/008-full moon.svg', platform: ['all'] } },
  { params: { theme: 'editplus', title: 'Editplus', repo: 'editplus', color: 'purple', icon: 'pack-1/023-bones.svg', platform: ['windows'] } },
  { params: { theme: 'emacs', title: 'Emacs', repo: 'emacs', color: 'pink', icon: 'pack-1/018-devil.svg', platform: ['all'] } },
  { params: { theme: 'facebook-messenger', title: 'Facebook Messenger', repo: 'fb-messenger', color: 'cyan', icon: 'pack-3/030-moon.svg', platform: ['all'] } },
  { params: { theme: 'figma', title: 'Figma', repo: 'figma', color: 'cyan', icon: 'pack-4/044-werewolf.svg', platform: ['all'] } },
  { params: { theme: 'firefox', title: 'Firefox', repo: 'firefox', color: 'purple', icon: 'pack-1/028-finger.svg', platform: ['all'] } },
  { params: { theme: 'fish', title: 'Fish', repo: 'fish', color: 'orange', icon: 'pack-1/011-poison.svg', platform: ['all'] } },
  { params: { theme: 'fluent-terminal', title: 'Fluent Terminal', repo: 'fluent-terminal', color: 'orange', icon: 'pack-1/049-bats.svg', platform: ['windows'] } },
  { params: { theme: 'gamemaker-studio', title: 'GameMaker Studio', repo: 'gamemaker-studio', color: 'cyan', icon: 'pack-1/031-serial-killer.svg', platform: ['all'] } },
  { params: { theme: 'geany', title: 'Geany', repo: 'geany', color: 'orange', icon: 'pack-3/009-crystal-ball.svg', platform: ['all'] } },
  { params: { theme: 'gedit', title: 'Gedit', repo: 'gedit', color: 'cyan', icon: 'pack-1/036-spellbook.svg', platform: ['all'] } },
  { params: { theme: 'github-pages', title: 'GitHub Pages', repo: 'gh-pages', color: 'cyan', icon: 'pack-1/037-candies.svg', platform: ['all'] } },
  { params: { theme: 'gitk', title: 'Gitk', repo: 'gitk', color: 'purple', icon: 'pack-5/020-saw.svg', platform: ['all'] } },
  { params: { theme: 'gmk', title: 'GMK', repo: 'gmk', color: 'orange', icon: 'pack-4/016-axe.svg', platform: ['all'] } },
  { params: { theme: 'gnome-terminal', title: 'Gnome Terminal', repo: 'gnome-terminal', color: 'orange', icon: 'pack-6/040-crow.svg', platform: ['linux'] } },
  { params: { theme: 'godot', title: 'Godot', repo: 'godot', color: 'pink', icon: 'pack-7/024-skeleton.svg', platform: ['all'] } },
  { params: { theme: 'gtk', title: 'GTK', repo: 'gtk', color: 'pink', icon: 'pack-8/015-planet.svg', platform: ['linux'] } },
  { params: { theme: 'highlightjs', title: 'Highlight.js', repo: 'highlightjs', color: 'orange', icon: 'pack-4/042-hydra.svg', platform: ['all'] } },
  { params: { theme: 'hyper', title: 'Hyper', repo: 'hyper', color: 'orange', icon: 'pack-1/025-candle-1.svg', platform: ['all'] } },
  { params: { theme: 'i3', title: 'i3', repo: 'i3', color: 'orange', icon: 'pack-1/016-candies-1.svg', platform: ['linux'] } },
  { params: { theme: 'insomnia', title: 'Insomnia', repo: 'insomnia', color: 'cyan', icon: 'pack-1/043-scythe.svg', platform: ['all'] } },
  { params: { theme: 'iterm', title: 'iTerm', repo: 'iterm', color: 'pink', icon: 'pack-7/042-haunted house.svg', platform: ['mac'] } },
  { params: { theme: 'javadoc', title: 'Javadoc', repo: 'javadoc', color: 'cyan', icon: 'pack-2/043-sword.svg', platform: ['all'] } },
  { params: { theme: 'jetbrains', title: 'JetBrains', repo: 'jetbrains', color: 'pink', icon: 'pack-1/046-zombie.svg', platform: ['all'], synonyms: ['intellij', 'pycharm', 'webstorm', 'phpstorm', 'rider', 'clion', 'datagrip', 'rubymine', 'appcode', 'goland'] } },
  { params: { theme: 'jgrasp', title: 'jGrasp', repo: 'jgrasp', color: 'orange', icon: 'pack-1/007-guillotine.svg', platform: ['all'] } },
  { params: { theme: 'jupyterlab', title: 'JupyterLab', repo: 'jupyterlab', color: 'purple', icon: 'pack-6/012-candles.svg', platform: ['all'] } },
  { params: { theme: 'kakoune', title: 'Kakoune', repo: 'kakoune', color: 'orange', icon: 'pack-1/033-black-cat.svg', platform: ['linux'] } },
  { params: { theme: 'kate', title: 'Kate', repo: 'kate', color: 'orange', icon: 'pack-5/033-smoke.svg', platform: ['all'] } },
  { params: { theme: 'kitty', title: 'Kitty', repo: 'kitty', color: 'orange', icon: 'pack-1/015-makeup.svg', platform: ['all'] } },
  { params: { theme: 'konsole', title: 'Konsole', repo: 'konsole', color: 'orange', icon: 'pack-3/035-potion-1.svg', platform: ['linux'] } },
  { params: { theme: 'light-table', title: 'Light Table', repo: 'light-table', color: 'orange', icon: 'pack-1/050-pumpkin.svg', platform: ['all'] } },
  { params: { theme: 'lightpaper', title: 'LightPaper', repo: 'lightpaper', color: 'purple', icon: 'pack-5/030-voodoo.svg', platform: ['mac'] } },
  { params: { theme: 'limechat', title: 'LimeChat', repo: 'limechat', color: 'purple', icon: 'pack-3/016-fire.svg', platform: ['mac'] } },
  { params: { theme: 'macdown', title: 'MacDown', repo: 'macdown', color: 'orange', icon: 'pack-1/042-candle.svg', platform: ['mac'] } },
  { params: { theme: 'mattermost', title: 'Mattermost', repo: 'mattermost', color: 'pink', icon: 'pack-1/019-spider.svg', platform: ['all'] } },
  { params: { theme: 'mindnode', title: 'MindNode', repo: 'mindnode', color: 'purple', icon: 'pack-5/008-wizard.svg', platform: ['mac'] } },
  { params: { theme: 'mintty', title: 'Mintty', repo: 'mintty', color: 'cyan', icon: 'pack-1/014-voodoo-doll.svg', platform: ['windows'] } },
  { params: { theme: 'mobaxterm', title: 'MobaXterm', repo: 'mobaxterm', color: 'cyan', icon: 'pack-3/042-skull.svg', platform: ['windows'] } },
  { params: { theme: 'monodevelop', title: 'MonoDevelop', repo: 'monodevelop', color: 'pink', icon: 'pack-1/027-hand.svg', platform: ['all'] } },
  { params: { theme: 'mutt', title: 'Mutt', repo: 'mutt', color: 'purple', icon: 'pack-3/045-tree.svg', platform: ['all'] } },
  { params: { theme: 'notepad-plus-plus', title: 'Notepad++', repo: 'notepad-plus-plus', color: 'cyan', icon: 'pack-7/002-ghosts.svg', platform: ['windows'] } },
  { params: { theme: 'nylas-n1', title: 'Nylas N1', repo: 'nylas-n1', color: 'orange', icon: 'pack-5/045-hourglass.svg', platform: ['all'] } },
  { params: { theme: 'oracle-sql-developer', title: 'Oracle SQL Developer', repo: 'oracle-sql-developer', color: 'purple', icon: 'pack-1/029-werewolf.svg', platform: ['all'] } },
  { params: { theme: 'powershell', title: 'PowerShell', repo: 'powershell', color: 'purple', icon: 'pack-5/046-magic trick.svg', platform: ['all'] } },
  { params: { theme: 'prism', title: 'Prism', repo: 'prism', color: 'orange', icon: 'pack-3/034-pot.svg', platform: ['all'] } },
  { params: { theme: 'pygments', title: 'Pygments', repo: 'pygments', color: 'cyan', icon: 'pack-1/039-ghost.svg', platform: ['all'] } },
  { params: { theme: 'pythonista', title: 'Pythonista', repo: 'pythonista', color: 'purple', icon: 'pack-6/048-grave.svg', platform: ['mac'] } },
  { params: { theme: 'qtcreator', title: 'Qt Creator', repo: 'qtcreator', color: 'cyan', icon: 'pack-5/024-cauldron.svg', platform: ['all'] } },
  { params: { theme: 'quassel', title: 'Quassel', repo: 'quassel', color: 'cyan', icon: 'pack-4/046-evil.svg', platform: ['all'] } },
  { params: { theme: 'quiver', title: 'Quiver', repo: 'quiver', color: 'orange', icon: 'pack-5/041-guillotine.svg', platform: ['mac'] } },
  { params: { theme: 'qutebrowser', title: 'Qutebrowser', repo: 'qutebrowser', color: 'purple', icon: 'pack-5/015-box.svg', platform: ['all'] } },
  { params: { theme: 'react-devtools', title: 'React DevTools', repo: 'react-devtools', color: 'cyan', icon: 'pack-3/005-candle.svg', platform: ['all'] } },
  { params: { theme: 'rofi', title: 'rofi', repo: 'rofi', color: 'purple', icon: 'pack-7/028-lollipop.svg', platform: ['linux'] } },
  { params: { theme: 'sequel-pro', title: 'Sequel Pro', repo: 'sequel-pro', color: 'orange', icon: 'pack-5/012-spell book.svg', platform: ['mac'] } },
  { params: { theme: 'sketch', title: 'Sketch', repo: 'sketch', color: 'cyan', icon: 'pack-3/025-magic-wand-1.svg', platform: ['all'] } },
  { params: { theme: 'slack', title: 'Slack', repo: 'slack', color: 'cyan', icon: 'pack-1/047-cleaver.svg', platform: ['all'] } },
  { params: { theme: 'spacemacs', title: 'Spacemacs', repo: 'spacemacs', color: 'orange', icon: 'pack-8/018-planet.svg', platform: ['all'] } },
  { params: { theme: 'steam', title: 'Steam', repo: 'steam', color: 'purple', icon: 'pack-5/049-target.svg', platform: ['all'] } },
  { params: { theme: 'sublime', title: 'Sublime', repo: 'sublime', color: 'cyan', icon: 'pack-1/044-spider-web.svg', platform: ['all'] } },
  { params: { theme: 'tabletop-simulator', title: 'Tabletop Simulator', repo: 'tabletop-simulator', color: 'pink', icon: 'pack-2/048-cards.svg', platform: ['all'] } },
  { params: { theme: 'telegram', title: 'Telegram', repo: 'telegram', color: 'orange', icon: 'pack-6/002-grave.svg', platform: ['all'] } },
  { params: { theme: 'telegram-android', title: 'Telegram Android', repo: 'telegram-android', color: 'orange', icon: 'pack-6/038-skull.svg', platform: ['all'] } },
  { params: { theme: 'terminal', title: 'Terminal.app', repo: 'terminal-app', color: 'purple', icon: 'pack-1/035-cauldron.svg', platform: ['mac'] } },
  { params: { theme: 'termite', title: 'Termite', repo: 'termite', color: 'cyan', icon: 'pack-3/037-voodoo-doll.svg', platform: ['linux'] } },
  { params: { theme: 'termux', title: 'Termux', repo: 'termux', color: 'cyan', icon: 'pack-7/022-mummy.svg', platform: ['all'] } },
  { params: { theme: 'textmate', title: 'Textmate', repo: 'textmate', color: 'cyan', icon: 'pack-1/038-tombstone.svg', platform: ['mac'] } },
  { params: { theme: 'textual', title: 'Textual', repo: 'textual', color: 'cyan', icon: 'pack-1/032-bat.svg', platform: ['mac'] } },
  { params: { theme: 'tilix', title: 'Tilix', repo: 'tilix', color: 'cyan', icon: 'pack-2/046-ghost.svg', platform: ['linux'] } },
  { params: { theme: 'tmux', title: 'tmux', repo: 'tmux', color: 'purple', icon: 'pack-1/030-clown.svg', platform: ['linux', 'mac'] } },
  { params: { theme: 'total-commander', title: 'Total Commander', repo: 'total-commander', color: 'purple', icon: 'pack-3/002-spellbook.svg', platform: ['windows'] } },
  { params: { theme: 'typora', title: 'Typora', repo: 'typora', color: 'purple', icon: 'pack-1/017-witch-1.svg', platform: ['all'] } },
  { params: { theme: 'ulauncher', title: 'Ulauncher', repo: 'ulauncher', color: 'pink', icon: 'pack-7/005-candies.svg', platform: ['linux'] } },
  { params: { theme: 'ulysses', title: 'Ulysses', repo: 'ulysses', color: 'orange', icon: 'pack-3/027-magician-hat-1.svg', platform: ['mac'] } },
  { params: { theme: 'vim', title: 'Vim', repo: 'vim', color: 'purple', icon: 'pack-1/040-zombie-1.svg', platform: ['all'] } },
  { params: { theme: 'vimium', title: 'Vimium', repo: 'vimium', color: 'purple', icon: 'pack-3/019-lantern.svg', platform: ['all'] } },
  { params: { theme: 'visual-studio', title: 'Visual Studio', repo: 'visual-studio', color: 'purple', icon: 'pack-1/041-skeleton.svg', platform: ['all'] } },
  { params: { theme: 'visual-studio-code', title: 'Visual Studio Code', repo: 'visual-studio-code', color: 'orange', icon: 'pack-1/048-frankenstein.svg', platform: ['all'], synonyms: ['vscode'] } },
  { params: { theme: 'vivaldi', title: 'Vivaldi', repo: 'vivaldi', color: 'cyan', icon: 'pack-1/003-broom.svg', platform: ['all'] } },
  { params: { theme: 'windows-terminal', title: 'Windows Terminal', repo: 'windows-terminal', color: 'purple', icon: 'pack-3/047-tube.svg', platform: ['windows'] } },
  { params: { theme: 'wing', title: 'Wing', repo: 'wing', color: 'orange', icon: 'pack-3/043-snake.svg', platform: ['all'] } },
  { params: { theme: 'wofi', title: 'wofi', repo: 'wofi', color: 'pink', icon: 'pack-7/050-poison.svg', platform: ['linux'] } },
  { params: { theme: 'wordpress', title: 'Wordpress', repo: 'wordpress', color: 'purple', icon: 'pack-5/004-tarot.svg', platform: ['all'] } },
  { params: { theme: 'wox', title: 'Wox', repo: 'wox', color: 'cyan', icon: 'pack-5/003-crystal ball.svg', platform: ['windows'] } },
  { params: { theme: 'xchat', title: 'XChat', repo: 'xchat', color: 'orange', icon: 'pack-6/001-coffin.svg', platform: ['linux', 'windows'] } },
  { params: { theme: 'xcode', title: 'Xcode', repo: 'xcode', color: 'purple', icon: 'pack-3/048-unicorn.svg', platform: ['mac'] } },
  { params: { theme: 'xresources', title: 'Xresources', repo: 'xresources', color: 'purple', icon: 'pack-5/047-mortar.svg', platform: ['all'] } },
  { params: { theme: 'zsh', title: 'Zsh', repo: 'zsh', color: 'cyan', icon: 'pack-1/034-eye.svg', platform: ['all'] } },
];

module.exports = paths;