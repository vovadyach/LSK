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
        var $headerDropdawnParent = $this.closest(".logo-mini");
        var $headerDropdownMenu = $headerDropdawnParent.find(".logo-dropdown-menu");

        $menu.toggle({height: 'show'});
        $headerDropdownMenu.toggle({height: 'show'});

    });

    $(document).click(function(event) {
        if(!$(event.target).closest('.chevron-menu, .logo-dropdown-menu').length &&
            !$(event.target).is('.chevron-menu, .logo-dropdown-menu')) {
            if($('.chevron-menu, .logo-dropdown-menu').is(":visible")) {
                $('.chevron-menu, .logo-dropdown-menu').hide(600);
            }
        }
    });
})(jQuery);


