/**
 * Created by vinside on 4/25/16.
 */

;(function ($) {
    var $toggle = $(".chevron-right-toggle");

    $toggle.on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var $this = $(this);
        var $parent = $this.closest(".chevron-right");
        var $menu = $parent.find(".chevron-menu");

        $menu.toggle({height: 'show'});

    });

    $(document).click(function(event) {
        if(!$(event.target).closest('.chevron-menu').length &&
            !$(event.target).is('.chevron-menu')) {
            if($('.chevron-menu').is(":visible")) {
                $('.chevron-menu').hide(600);
            }
        }
    });

})(jQuery);


