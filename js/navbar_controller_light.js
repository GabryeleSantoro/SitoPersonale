window.addEventListener('DOMContentLoaded', (event) => {
    jQuery('div.top-navbar').css("background-color", "rgba(255, 255, 255, 0)");
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 20) {
            jQuery('div.top-navbar').css("background-color", "#333");   
            jQuery('div.top-navbar').css("transition", "background-color 200ms linear");  
        } else {
            jQuery('div.top-navbar').css("background-color", "rgba(255, 255, 255, 0)");   
        }
    });
}); 