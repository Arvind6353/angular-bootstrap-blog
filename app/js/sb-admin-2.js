$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {


$(document).ready(function(){

        topOffset = 50;
        width = ($(window).innerWidth() > 0) ? $(window).innerWidth() : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
             $('.main-footer').css('margin-left','0px');

        } else {
            $('div.navbar-collapse').removeClass('collapse');
            
            $('.main-footer').css('margin-left','250px');
        }

        height = (($(window).innerHeight() > 0) ? $(window).innerHeight() : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    

})

    $(window).on("DOMContentLoaded resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
             $('.main-footer').css('margin-left','0px');

        } else {
            $('div.navbar-collapse').removeClass('collapse');
            $('.main-footer').css('margin-left','250px');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
