---
layout: util/compress_js
---
/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

/* set web page initial color scheme */
/* page color scheme = storedColorScheme < userColorScheme < browserColorScheme; */

(function () {
  'use strict';

  var globals = {
    /* this has to match with your style definitions. */
    modeAttr: "data-color-scheme"
    , storageKey: "color-scheme"
    , mode: { light: "light", dark: "dark" }
  };

  function setColorScheme() {
    let defaultColorSchemeDark = (document.currentScript.dataset.mode == "true") ? true : false;
    /* get userColorScheme opt */
    const userColorScheme = defaultColorSchemeDark ? globals.mode.dark : null;
    /* get Browser dark color scheme */
    const browserColorScheme = window.matchMedia('(prefers-color-scheme: light)').matches ? globals.mode.light : null;
    /* get Stored color scheme */
    const storedColorScheme = localStorage.getItem(globals.storageKey);
    /* if no color scheme setting is stored nor userColorScheme set, use Browser color scheme if it's set to dark */
    const colorScheme = storedColorScheme || userColorScheme || browserColorScheme;
    if (colorScheme) document.body.setAttribute(globals.modeAttr, colorScheme);
  }

  setColorScheme();

  (function (window) {
    window.colorScheme = globals;
  })(window);

})();
