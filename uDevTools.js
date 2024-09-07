/* 
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <https://unlicense.org/>
 */

/// chii.js
// This is in an encapsulated scope so that no program can modify this easily.
// The try-catch block is to let other scriptlets run if this scriptlet errors.
(async function(){
    try {
      // We bind the functions so that they can't be modified by programs intercepting calls.
      // I mean you can modify `Function.prototype.bind` but it
      // breaks a lot of libraries (and sometimes jQuery too I think)
      // so it is logical to assume against.
      let chiimngr = {}
      chiimngr.url_is_chii =  (function(url){
        // `window.URL` can be changed but it breaks nearly all URL parsing so I'll assume
        // they won't change it.
        let src = new URL(url)
        return src.host==="chii.liriliri.io" && src.pathname==="/front_end/chii_app.html"
      }),
      chiimngr.get_chii_frame = (function(){
        // Disabling Array.prototype.map would break lots of iteration
        // code and disabling HTMLElement.prototype.getAttribute would
        // break any code trying to read any attributes. This could break
        // jQuery and other libs to that a site doesn't want to break.
        return [...document.querySelectorAll("iframe[src]")].map(
          (function(e){
            if ((function(){
              try {
                return this(
                  // Disabling HTMLElement.prototype.getAttribute would
                  // break libraries like jQuery that might try to read
                  // it
                  HTMLElement.prototype.getAttribute.bind(e,"src")()
                )
              } catch{
                try {
                  this(e.src)
                } catch {
                  // better no devtools than fake devtools a site
                  // could inject.
                  return false
                }
              }
            }).bind(this)()){
              return e
            }
          }).bind(this)
        )[0]
      }).bind(chiimngr.url_is_chii),
      chiimngr.toggle_chii = (function(){
        let chiiframe = this();
        // Disabling/hiding chii devtools requires more finese than should
        // be necessary. You shouldn't need to calculate a height.
        // Also there is a point to where some things just don't need to be spoofed.
        // You can try to change the height, but it would just be a minor annoyance.
        document.body.style.height=(
          chiiframe.parentNode.style.display = window.getComputedStyle(
            chiiframe.parentNode, 
            null
        ).display==="none"?'':"none"
        )==="none"?"":`${
          // I believe 100 is the minimum height.
          // You can smash is lower by resizing the window.
          document.documentElement.clientHeight - Math.floor(Number(localStorage['chii-embedded-height']??document.documentElement.clientHeight/2) || 100)
        }px`
      }).bind(chiimngr.get_chii_frame)
      //
      // recursive devtools would be bad since since we inject on page load, not when it asks
      // us to activate. this would create infinite iframes, so we check if it is not chii.
      if (!chiimngr.url_is_chii(window.location)){
        // Disabling createElement would make it so you need extensive
        // anti-xss checks because you won't have access to apis to set
        // inner content without document.write (which is somewhat prone to xss)
        // (Google reCaptcha has angular which lets you use ng-on-error for xss)
        let chiiscript = document.createElement('script');
        // Same as before, it is unfeasable to replace
        HTMLElement.prototype.setAttribute.bind(chiiscript, "embedded", "true")();
        HTMLElement.prototype.setAttribute.bind(chiiscript, "src", "https://chii.liriliri.io/target.js")();
        // what is the point of disabling event listeners...
        // nearly all pages need them. you probably can't disable
        // them safely and neatly.
        chiiscript.addEventListener('load', chiimngr.toggle_chii)
        // You just can't change document.readyState
        if (document.readyState === "loading") {
          // document.head.appendChild.bind(chiiscript) maybe
          // can document.head change?
          document.addEventListener("DOMContentLoaded", function(){
            document.head.appendChild(this)
          }.bind(chiiscript))
        } else {
          // disabling appendChild is like removing a way
          // to add elements to HTML, very hard to code with
          document.body.appendChild(chiiscript);
        }
        document.addEventListener("keydown", (function(e){
          // CTRL+ALT+I
          if (e.ctrlKey && e.altKey && e.key==="i"){
            this()
          }
        }).bind(chiimngr.toggle_chii))
      };
   } catch{}
  })()
  
  /*
   * Congratulations! You reached the end of
   * the non-minified source code. Give yourself
   * a pat on the back. Now here is how you fix it.
   * SET A CSP HEADERS. Quite literally. 
   * frame-src: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src
   * script-src: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
   * Remember, work smarter not harder. ;)
   * Credits:
   * Finn Baltazar wrote the basic script for injecting chii.
   * Discord: @ReznorsRevenge https://discord.com/users/764259980865699842
   * GitHub: @FinnBaltazer1111 https://github.com/FinnBaltazar1111
   * YouTube: Reznor's Revenge https://www.youtube.com/@ReznorsRevenge1
   * s0urce-c0de (me) wrote the entire functionality (including eventlistener
   * activation, toggleable devtools, extra help.)
   * also all these comments.
   * Discord: @s0urce_c0de https://discord.com/users/947649923342540860
   * GitHub: @s0urce-c0de https://github.com/s0urce-c0de
   * liriliri/surunzi (https://github.com/liriliri)
   * uBlock Origin team
   */
  
