/**
 * Created by vinside on 4/28/16.
 */

;(function ($) {
    var $barToggle = $(".hamburger-toggle");

    $barToggle.on("click", function (event) {
        var $this = $(this);
        var $barMenu = $(".hamburger-menu");

        $barMenu.toggle({right: 'show'});


        event.preventDefault();
    });
})(jQuery);

