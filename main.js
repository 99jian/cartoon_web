/* BEST MOVIE */
$(document).ready(function(){

    $('.gallery>ul').after($('.gallery>ul').clone());
    
    var position = 0 ; 
    var movesize = 300 ; 
    var timeonoff;

    timeonoff = setInterval(function(){
        position -= movesize ; 
        $('.gallery').stop().animate({'left':position},'slow',function(){
            if(position == -1200){
                $('.gallery').css('left',0);
                position = 0;
            }
        });
    },3000);


   $('.btn').click(function(){
   
    clearInterval(timeonoff);

    var tar = $(event.target);
    if(tar.is('.m1')){
        position -= movesize;
        $('.gallery').stop().animate({'left':position},'slow',function(){
            if(position == -1200){
                $('.gallery').css('left',0);
                position = 0;
            }
        });
    } 
    else{
        if(position == 0){
            $('.gallery').css('left',-1200);
            position = -1200;
        }
        position += movesize;
        $('.gallery').stop().animate({'left':position},'fast');
    }
   });

});

/* event */
$(document).ready(function(){

    $('.event>ul').after($('.event>ul').clone());
    
    var position = 0 ; 
    var movesize = 1560 ; 
    var timeonoff;

    timeonoff = setInterval(function(){
        position -= movesize ; 
        $('.event').stop().animate({'left':position},'slow',function(){
            if(position == -4680){
                $('.event').css('left',0);
                position = 0;
            }
        });
    },3000);


   $('.btn').click(function(){
   
    clearInterval(timeonoff);

    var tar = $(event.target);
    if(tar.is('.m1')){
        position -= movesize;
        $('.event').stop().animate({'left':position},'slow',function(){
            if(position == -4680){
                $('.event').css('left',0);
                position = 0;
            }
        });
    } 
    else{
        if(position == 0){
            $('.event').css('left',-4680);
            position = -4680;
        }
        position += movesize;
        $('.event').stop().animate({'left':position},'slow');
    }
   });

});

