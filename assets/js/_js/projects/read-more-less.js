/*! Mr. Green Jekyll Theme (https://github.com/MrGreensWorkshop/MrGreen-JekyllTheme)
 *  Copyright (c) 2022 Mr. Green's Workshop https://www.MrGreensWorkshop.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let readMoreLess = $(".read-more-less");
    readMoreLess.click(function () {
      var titleSubtitleUbication = $(this).siblings(":header").clone();
      $("#principalPopUp").empty().append(titleSubtitleUbication);
      var description = $(this).siblings(".markdown-style").children().clone();
      $("#descPopUp").empty().append(description);
      $(".showPopUp").fadeIn();
      $("html").addClass("no-scroll");
    });

  });

})();
