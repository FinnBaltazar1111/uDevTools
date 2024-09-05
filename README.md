# uDevTools
Uses [*Chii*](https://github.com/liriliri/chii) and [*Chobitsu*](https://github.com/liriliri/chobitsu) to simulate DevTools. This might not work on some pages.

To install:

1. Install uBlock Origin from Chrome Web Store (if it's blocked whomp whomp)
2. Go to chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html
3. Scroll down and check *I am an advanced user*
4. Click the settings icon right next to the check box (this will bring you to chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html)
5. On the last line next to `userResourcesLocation`, change `unset` to `https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uDevTools.js` and click *Apply Changes*.
6. Go back to chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html#1p-filters.html
7. Inside the edit box, copy-paste this: `*##+js(uDevTools.js)`, then click *Apply Changes*.

And you're done! Note that this might not work on some sites due to additional protections.

**To toggle, use keybind <kbd>CTRL</kbd> <kbd>ALT</kbd> <kbd>I</kbd>**.
