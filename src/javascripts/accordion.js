/**
 * Created by vinside on 4/22/16.
 */
/**
 * EFECTO PARA FLECHAS EN ACORDEON
 */

;(function($) {

    //var allPanels = $('.accordion-body');
    //
    //$('.accordion-toggle').click(function() {
    //    allPanels.toggle();
    //    $(this).parent().next().toggle();
    //
    //    return false;
    //});
    //
        $('.accordion-toggle').click(function (e) {
            e.preventDefault();
            $(this).toggleClass("accordion-toggle-down").toggleClass("accordion-toggle-up");
            $(this).closest(".accordion-group").toggleClass("open");
            $(this).closest(".accordion-group").find(".accordion-body").toggleClass("hide");
        });



})(jQuery);
