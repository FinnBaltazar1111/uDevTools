# *uDevTools*
Uses [*Chii*](https://chii.liriliri.io/) to simulate *DevTools* via a *uBlock Origin* scriptlet.
To run:

1. Install [*uBlock Origin* from the *Chrome Web Store*](https://chromewebstore.google.com/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm) (if it's blocked, womp womp)
2. Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html`
3. Scroll down and check *I am an advanced user*

   ![](https://github.com/user-attachments/assets/5910353d-dddc-4661-8278-ef055565a115) -> ![](https://github.com/user-attachments/assets/a0501767-a2ba-46a0-94f0-7d129b9562ab)
4. Click the <img alt="settings icon" src="https://github.com/user-attachments/assets/1de7481e-d631-42d1-9558-7bf1c22ae253" height="10"> right next to the check box (this will bring you to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html`)
5. On the last line next to `userResourcesLocation`, change `unset` to `https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uDevTools.min.js` and click *Apply Changes*. If it is already set you can change it from something like `userResourcesLocation https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js` (*uRun*) to `userResourcesLocation https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uDevTools.min.js` (*uRun* + *uDevtools*)
6. Click *Apply Changes*
7. Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html#1p-filters.html`
8. Inside the edit box, copy-paste this: `*##+js(uDevTools.js)` in a new line, then click *Apply Changes*

And you're done! Note that this might not work on some sites due to additional protections.

**To toggle, use keybind <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>I</kbd>**. This is broken on some websites (where it auto launches).

Websites where this *does* work:
* *Google Search*
* *Khan Academy*
* *Code.org*
* *Stack Overflow*
* Most *GitHub Pages* sites
...and basically every other website.
  
Websites where this *doesn't* work:
* *GitHub*
* *Quill.org*
* *raw.githubusercontent.com*
* *Google Docs*, *Slides*, *Drive*, *Sheets*, *Classroom*, *Jamboard*, *Meet*, etc.
* *Discord*
...and some others.

# *uEruda*
A version of *uDevTools* that works on a lot more sites due to CSP only disabling frames and scripts, but this is being run directly. Quite literally grab Eruda from [*jsDelivr*](https://cdn.jsdelivr.net/npm/eruda@latest/eruda.min.js), put it in a scriptlet, run it. Steps to install (can be installed alongside *uDevTools*):

1. Install [*uBlock Origin* from the *Chrome Web Store*](https://chromewebstore.google.com/detail/cjpalhdlnbpafiamejdnhcphjbkeiagm) (if it's blocked whomp whomp)
2. Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html`
3. Scroll down and check *I am an advanced user*

   ![](https://github.com/user-attachments/assets/5910353d-dddc-4661-8278-ef055565a115) **→** ![](https://github.com/user-attachments/assets/a0501767-a2ba-46a0-94f0-7d129b9562ab)
4. Click the <img alt="settings icon" src="https://github.com/user-attachments/assets/1de7481e-d631-42d1-9558-7bf1c22ae253" height="10"> right next to the check box (this will bring you to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/advanced-settings.html`)
5. On the last line next to `userResourcesLocation`, change `unset` to `https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uDevTools.min.js` and click *Apply Changes*. If it is already set you can change it from something like `userResourcesLocation https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js` (*uRun*) to `userResourcesLocation https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js https://raw.githubusercontent.com/FinnBaltazar1111/uDevTools/main/uEruda.js` (*uRun* + *uEruda*).
6. Click *Apply Changes*
7. Go to `chrome-extension://cjpalhdlnbpafiamejdnhcphjbkeiagm/dashboard.html#1p-filters.html`
8. Inside the edit box, copy-paste this: `*##+js(eruda.js)` in a new line, then click *Apply Changes*.


# Credits
* [**surunzi**](https://github.com/surunzi) or [*LiriLiri*](https://github.com/liriliri) for making [*Eruda*](https://github.com/liriliri/eruda) and [*Chii*](https://github.com/liriliri/chii).
* Everybody who has contributed and made *uBlock Origin*.
* **Google**, for making a absolutely dumb browser 💀
* **FinnBaltazar1111** for writing the initial code.
  * *GitHub*: [**@FinnBaltazar1111**](https://github.com/FinnBaltazar1111)
  * *Discord*: [**\@ReznorsRevenge**](https://discord.com/users/764259980865699842)
  * *YouTube* [**Reznor's Revenge**](https://youtube.com/@ReznorsRevenge1)
* **s0urce-c0de**, for addding the toggle and keybind function, fixing an issue with page distortion, adding images for README, adding URL for *uBlock Origin*, and for testing sites which this works on.
  * *GitHub*: [**@s0urce-c0de**](https://github.com/s0urce-c0de)
  * *Discord* [**\@s0urce_c0de**](https://discord.com/users/947649923342540860)
