(function( $ ) {
     var truck = $('#truck');
     var people = $('#family');
     var hearts = $('#hearts');
     var crowd = $('#crowd');
     var sun1 = $('.obj.sun');
     var sun2 = $('.obj.smile');
     var moon = $('.obj.moon');
     var day = $('#background .day');
     var night = $('#background .night');
     var scroller = $('#scroller');
     var frame1 = $('#frame1');
     var frame2 = $('#frame2');
     var frame3 = $('#frame3');
     var frame4 = $('#frame4');
     var frame5 = $('#frame5');
     var frame6 = $('#frame6');
     var frame7 = $('#frame7');
     var login = $('#login');
     var signin = $('#quicklogin')
     var close = $('#close_login');
     var btn1 = $('#button1');
     var btn2 = $('#button2');
     var btn3 = $('#button3');
     var btn4 = $('#button4');
     var btn5 = $('#button5');
     var btn6 = $('#button6');
     var btn7 = $('#button7');
     var back = $('#back');
     var st1 = $('#scroller .steps .step1');
     var st2 = $('#scroller .steps .step2');
     var st3 = $('#scroller .steps .step3');
     var sp1 = 500;
     var sp2 = 1000;
     var sp3 = 1500;
     var current;
     var cur_step;

     $( document ).ready(function() {
          console.log( "Document has been loaded" );
          signin.click(function(){
               callLogin();
          });
          close.click(function(){
               closeLogin();
          });
          btn1.click(function(){
               step1();
          });
          btn2.click(function(){
               step2();
          });
          btn3.click(function(){
               step3();
          });
          btn4.click(function(){
               step4();
          });
          btn5.click(function(){
               step5();
          });
          btn6.click(function(){
               step6();
          });
          btn7.click(function(){
               step7();
          });
          back.click(function(){
               goBack();
          });
          start();
     });

     $( window ).load(function() {
          console.log( "Window has been loaded" );
     });

     $.fn.run = function() {
          return this;
     };

     function start(){
          sun1.css({'top':'20%'});
          sun2.css({'top':'20%'});
          moon.css({'top':'20%'});
          truck.css({'left':'-30%'});
          people.hide();
          hearts.hide();
          crowd.hide();
          frame1.show();
          frame2.hide();
          frame3.hide();
          frame4.hide();
          frame5.hide();
          frame6.hide();
          frame7.hide();
          login.hide();
          scroller.show();
          st1.attr('class','item step1');
          st2.attr('class','item step2');
          st3.attr('class','item step3');
          back.hide();
          step0();
     }

     function step0(){
          truck.animate({
               left: '6%'},
               sp3, function() {
          });
          sun1.animate({
               top: '37px',
               opacity: 1},
               sp3, function() {
                    //step1();
          });
          st1.attr('class','item step1 current');
          st2.attr('class','item step2');
          st3.attr('class','item step3');
          $('#save_step').val('step1');
          return;
     }

     function step1(){
          truck.animate({
               left: '25%'},
               sp3, function() {
          });
          sun1.animate({
               top: '20%',
               opacity: 0},
               sp1, function() {
                    moon.animate({
                         top: '37px',
                         opacity: 1},
                         sp2, function() {
                    });
          });
          day.fadeOut(sp3,function(){
               day.removeClass('active');
          });
          night.fadeIn(sp3,function(){
               night.addClass('active');
          });
          frame1.fadeOut(sp1,function(){
               frame1.removeClass('active');
               frame2.fadeIn(sp2,function(){
                    frame2.addClass('active');
                    //step2();
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 current');
          st3.attr('class','item step3');
          $('#save_step').val('step2');
          $('#back').show();
          choseSnacks();
          return;
     }

     function step2(){
          truck.animate({
               left: '45%'},
               sp3, function() {
          });
          frame2.fadeOut(sp1,function(){
               frame2.removeClass('active');
               frame3.fadeIn(sp2,function(){
                    frame3.addClass('active');
                    //step3();
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 current');
          st3.attr('class','item step3');
          $('#save_step').val('step3');
          customPackage();
          return;
     }

     function step3(){
          truck.animate({
               left: '68%'},
               sp3, function() {
          });
          moon.animate({
               top: '20%',
               opacity: 0},
               sp1, function() {
                    sun1.animate({
                         top: '37px',
                         opacity: 1},
                         sp2, function() {
                    });
          });
          night.fadeOut(sp3,function(){
               night.removeClass('active');
          });
          day.fadeIn(sp3,function(){
               day.addClass('active');
          });
          frame3.fadeOut(sp1,function(){
               frame3.removeClass('active');
               frame4.fadeIn(sp2,function(){
                    frame4.addClass('active');
                    //step4();
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 active');
          st3.attr('class','item step3 current');
          $('#save_step').val('step4');
          addDrink();
          return;
     }

     function step4(){
          people.fadeIn(sp3);
          frame4.fadeOut(sp1,function(){
               frame4.removeClass('active');
               frame5.fadeIn(sp2,function(){
                    frame5.addClass('active');
                    //step5();
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 active');
          st3.attr('class','item step3 current');
          $('#save_step').val('step5');
          billingAddress();
          return;
     }

     function step5(){
          truck.fadeOut(sp3);
          frame5.fadeOut(sp1,function(){
               frame5.removeClass('active');
               frame6.fadeIn(sp2,function(){
                    frame6.addClass('active');
                    //step6();
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 active');
          st3.attr('class','item step3 active');
          $('#save_step').val('step6');
          shippingAddress();
          return;
     }

     function step6(){
          people.fadeOut(sp1,function(){
               crowd.fadeIn(sp2);
               hearts.fadeIn(sp2);
          });
          sun2.css({'top':'37px'});
          sun1.animate({
               opacity: 0},
               sp3, function() {
          });
          sun2.animate({
               opacity: 1},
               sp3, function() {
          });
          truck.animate({
               opacity: 0},
               sp1, function() {
                    truck.animate({
                         left: '-30%'},
                         sp2, function(){
                              truck.css({
                                   'opacity':'1'
                              });
                    });
          });
          frame6.fadeOut(sp1,function(){
               frame6.removeClass('active');
               frame7.fadeIn(sp2,function(){
                    frame7.addClass('active');
                    //callLogin();
               });
          });
          scroller.fadeOut(sp1);
          $('#save_step').val('step7');
          orderNow();
          return;
     }

     function step7(){
          return;
     }

     function back1(){
          truck.fadeOut(sp1,function(){
               truck.css({'left':'6%'});
               truck.fadeIn(sp2,function(){
               });
          });
          moon.animate({
               top: '20%',
               opacity: 0},
               sp1, function() {
                    sun1.animate({
                         top: '37px',
                         opacity: 1},
                         sp2, function() {
                    });
          });
          night.fadeOut(sp3,function(){
               night.removeClass('active');
          });
          day.fadeIn(sp3,function(){
               day.addClass('active');
          });
          frame2.fadeOut(sp1,function(){
               frame2.removeClass('active');
               frame1.fadeIn(sp2,function(){
                    frame1.addClass('active');
               });
          });
          st1.attr('class','item step1 current');
          st2.attr('class','item step2');
          st3.attr('class','item step3');
          $('#save_step').val('step1');
          $('#back').hide();
          return;
     }

     function back2(){
          truck.fadeOut(sp1,function(){
               truck.css({'left':'25%'});
               truck.fadeIn(sp2,function(){
               });
          });
          frame3.fadeOut(sp1,function(){
               frame3.removeClass('active');
               frame2.fadeIn(sp2,function(){
                    frame2.addClass('active');
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 current');
          st3.attr('class','item step3');
          $('#save_step').val('step2');
          return;
     }

     function back3(){
          truck.fadeOut(sp1,function(){
               truck.css({'left':'45%'});
               truck.fadeIn(sp2,function(){
               });
          });
          sun1.animate({
               top: '20%',
               opacity: 0},
               sp1, function() {
                    moon.animate({
                         top: '37px',
                         opacity: 1},
                         sp2, function() {
                    });
          });
          day.fadeOut(sp3,function(){
               day.removeClass('active');
          });
          night.fadeIn(sp3,function(){
               night.addClass('active');
          });
          frame4.fadeOut(sp1,function(){
               frame4.removeClass('active');
               frame3.fadeIn(sp2,function(){
                    frame3.addClass('active');
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 current');
          st3.attr('class','item step3');
          $('#save_step').val('step3');
          return;
     }

     function back4(){
          people.fadeOut(sp3);
          frame5.fadeOut(sp1,function(){
               frame5.removeClass('active');
               frame4.fadeIn(sp2,function(){
                    frame4.addClass('active');
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 active');
          st3.attr('class','item step3 active');
          $('#save_step').val('step4');
          shippingAddress();
          return;
     }

     function back5(){
          truck.css({'left':'68%'});
          truck.fadeIn(sp3);
          frame6.fadeOut(sp1,function(){
               frame6.removeClass('active');
               frame5.fadeIn(sp2,function(){
                    frame5.addClass('active');
               });
          });
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 active');
          st3.attr('class','item step3 current');
          $('#save_step').val('step5');
          orderNow();
          return;
     }

     function back6(){
          sun2.animate({
               opacity: 0},
               sp3, function() {
          });
          sun1.animate({
               opacity: 1},
               sp3, function() {
                    sun2.css({'top':'20%'});
          });
          truck.hide();
          truck.css({left: '68%'});
          truck.fadeOut(sp2);
          hearts.fadeOut(sp2);
          crowd.fadeOut(sp1,function(){
               people.fadeIn(sp2);
          });
          frame7.fadeOut(sp1,function(){
               frame7.removeClass('active');
               frame6.fadeIn(sp2,function(){
                    frame6.addClass('active');
               });
          });
          scroller.fadeIn(sp1);
          st1.attr('class','item step1 active');
          st2.attr('class','item step2 active');
          st3.attr('class','item step3 active');
          $('#save_step').val('step6');
          return;
     }

     function goBack(){
          current = $('#save_step').val();
          cur_step = parseInt(current.substr(-1));
          switch(cur_step){
               case 1:
                    console.log('Back to start!');
                    back1();
               break;
               case 2:
                    console.log('Back to Step 1');
                    back1();
               break;
               case 3:
                    console.log('Back to Step 2');
                    back2();
               break;
               case 4:
                    console.log('Back to Step 3');
                    back3();
               break;
               case 5:
                    console.log('Back to Step 4');
                    back4();
               break;
               case 6:
                    console.log('Back to Step 5');
                    back5();
               break;
               case 7:
                    console.log('Back to Step 6');
                    back6();
               break;

          }
          console.log('Current step '+cur_step);
     }

     function callLogin(){
          login.fadeIn(sp1);
          //closeLogin();
     }

     function closeLogin(){
          login.fadeOut(sp1);
     }

     var choseSnacks = function(){

     }

     var customPackage = function(){

     }

     var addDrink = function(){

     }

     var billingAddress = function(){

     }

     var shippingAddress = function(){

     }

     var orderNow = function(){

     }

}( jQuery ));