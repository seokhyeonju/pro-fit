$(document).ready(function(){

    $('header .mainmenu > li > a').mouseenter(function(){
        $('.headerbg').animate({
            'opacity' : '1'
        }, 100)
        $('.submenu').animate({
            'opacity' : '1',
           'visibility': 'visible'
        }, 100)
    })

    $('header .mainmenu > li > a').mouseleave(function(){
        $('.headerbg').animate({
            'opacity' : '0'
        }, 100)
        $('.submenu').animate({
            'opacity' : '0',
           'visibility': 'hidden'
        }, 100)
    })


})