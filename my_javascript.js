$(document).ready(function() {
     setupRotator();
});

function setupRotator() {
     if($('.textItem').length > 1) {
         $('.textItem:first').addClass('current').fadeIn(1000);
         setInterval(textRotate(), 3000);
     }
}

function textRotate() {
     var current = $('#quotes > .current');

     if(current.next().length == 0) {
         current.removeClass('current').fadeOut(1000);
         $('.textItem:first').addClass('current').fadeIn(1000);
     } else {
         current.removeClass('current').fadeOut(1000);
         current.next().addClass('current').fadeIn(1000);
     }
}
