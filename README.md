# uDevTools
Uses [Chii](https://chii.liriliri.io/) to simulate DevTools via a uBlock Origin scriptlet.
To run:

1. Install [uBlock Origin from Chrome Web Store](https://chromewebstore.google.com/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm) (if it's blocked womp womp)
2. Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html`
3. Scroll down and check *I am an advanced user*

   ![image](https://github.com/user-attachments/assets/5910353d-dddc-4661-8278-ef055565a115) -> ![image](https://github.com/user-attachments/assets/a0501767-a2ba-46a0-94f0-7d129b9562ab)
4. Click the <img alt="settings icon" src="https://github.com/user-attachments/assets/1de7481e-d631-42d1-9558-7bf1c22ae253" height="10"> right next to the check box (this will bring you to chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html
5. On the last line next to `userResourcesLocation`, change `unset` to `https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uDevTools.js` and click *Apply Changes*. If it is already set you can change it from something like `userResourcesLocation https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js` (uRun) to `userResourcesLocation https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uDevTools.js` (uRun + uDevtools)
6. Click *Apply Changes*
7. Go to chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html#1p-filters.html
8. Inside the edit box, copy-paste this: `*##+js(uDevTools.js)`, then click *Apply Changes*.

And you're done! Note that this might not work on some sites due to additional protections.

**To toggle, use keybind <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>I</kbd>**. This is broken on some websites (where it auto launches).
Known Websites where this works:
* Google Search pages
* Khan Academy
* Code.org
* Stack Overflow
* Most *.github.io sites
* A lot more sites than should allow it
  
Websites known not to work:
* GitHub
* Quill.org
* raw.githubusercontent.com (who sets CSP on sites that serve raw text files?)
* Google Docs, Slides, Drive, Sheets, Jamboard, Meet, etc.
* Discord
* some more sites.
