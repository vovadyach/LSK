/**
 * Created by vinside on 4/27/16.
 */
;(function ($) {
    var $register = $(".register-link");
    var $login = $(".login-link");
    var $overlay = $(".overlay");

    $register.on("click", function(event) {
        var $this = $(this);
        var $parent = $this.closest("body");
        var $popupMenu  = $parent.find(".popup-menu-wrapper");
        var $formRegister = $popupMenu.find(".form-register");

        $popupMenu.removeClass("hide");
        $formRegister.removeClass("hide");
        $overlay.removeClass("hide");

        $overlay.on("click", function(){
            $(".popup-menu-wrapper").addClass("hide");
            $formRegister.addClass("hide");
        });
    });

    $login.on("click", function(event) {
        var $this = $(this);
        var $parent = $this.closest("body");
        var $popupMenu  = $parent.find(".popup-menu-wrapper");
        var $formLogin = $popupMenu.find(".form-login");

        $popupMenu.removeClass("hide");
        $formLogin.removeClass("hide");
        $overlay.removeClass("hide");

        $overlay.on("click", function(){
            $(".popup-menu-wrapper").addClass("hide");
            $formLogin.addClass("hide");
        });
    });

})(jQuery);
