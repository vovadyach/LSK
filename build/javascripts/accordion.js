/**
 * Created by vinside on 4/22/16.
 */

;(function($) {
    //Mypage handler
    $('.accordion-toggle').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass("accordion-toggle-down").toggleClass("accordion-toggle-up");
        $(this).closest(".accordion-group").toggleClass("open");
        $(this).closest(".accordion-group").find(".accordion-body").toggleClass("hide");
    });

    //Overview page handler
    $('.accordion-toggle-overview').on('click', function () {
        var $this = $(this);
        var $tr = $this.closest('tr');

        $tr.toggleClass('open');

        if ( $tr.hasClass('open') ) {
          $this.addClass('fa-chevron-up').removeClass('fa-chevron-down');
            $tr.next().removeClass('hide');
        } else {
            $this.addClass('fa-chevron-down').removeClass('fa-chevron-up');
            $tr.next().addClass('hide');
        }
    });

})(jQuery);
