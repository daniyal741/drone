$(document).ready(function(){

   if ($(window).width() > 950){ 
      
      $("nav").css('transform', 'translateX(-100%)');

  } 
  else
  {

      $("nav").css('transform', 'translateX(-100%)');
      $('.burger').css('visibility', 'visible');


  }      
  
  $(window).resize(function(){
      if ($(window).width() > 950){ 
    
          $("nav").css('transform', 'translateX(-100%)');
  
      }  
      else{

          $("nav").css('transform', 'translateX(-100%)');
          $('.burger').css('visibility', 'visible');

      }

     
     

  });
 
  $("header").css('transform', 'translateY(0%)');


   $(".burger").click(function(){

        

      $("nav").addClass("show-nav");
      $('.burger').css('visibility', 'hidden');
      $("nav").css('transform', 'translateX(0%)');

      
      

      $("#cross").click(function(){

      
          $('.burger').css('visibility', 'visible');
          $("nav").css('transform', 'translateX(-100%)');

  
      });
  });

   $('.featured').on('change', 'input:radio',function(){

        if($(this).attr('id')==='purple')
        {
           $(this).parent().
           next().children().
           attr('src','./images/kisspng-mavic-pro-dji-unmanned-aerial-vehicle-phantom-came-drones-5abfd0604cd5a4.1847765315225201603147.png');
        }
        if($(this).attr('id')==='red')
        {
           $(this).parent().
           next().children().
           attr('src','./images/kisspng-mavic-pro-osmo-phantom-dji-unmanned-aerial-vehicle-drones-5ad46222eaa530.6921655215238681949611.png');
        }
        if($(this).attr('id')==='white')
        {
           $(this).parent().
           next().children().
           attr('src','./images/kisspng-phantom-dji-mavic-pro-unmanned-aerial-vehicle-gimb-drone-5acb91a88ecbf7.7380762315232905365849.png');
        }
        if($(this).attr('id')==='blue')
        {
           $(this).parent().
           next().children().
           attr('src','./images/kisspng-mavic-pro-osmo-phantom-dji-unmanned-aerial-vehicle-5afdb7c23961f9.603367701526577090235.png');
        }
        if($(this).attr('id')==='black')
        {
           $(this).parent().
           next().children().
           attr('src','./images/kisspng-phantom-dji-mavic-pro-unmanned-aerial-vehicle-gimb-drone-5acb91a88ecbf7.7380762315232905365849.png');
        }
        if($(this).attr('id')==='yellow')
        {
           $(this).parent().
           next().children().
           attr('src','./images/kisspng-mavic-pro-osmo-phantom-dji-unmanned-aerial-vehicle-drones-5ad46222eaa530.6921655215238681949611.png');
        }
     
    });

   $('.featured').on('click', '.model #eye', function(){

   var pop_up = $(this).parents('.featured').children('.pop-up');
   pop_up.find('.left-content').empty();
   // pop_up.find('.right-content').empty();

   

   var res = $(this).parents('.model');
   var clone1 = res.clone();
   
   clone1.removeClass();
   clone1.addClass('model');
   clone1.find('.options').remove();
   clone1.find('.price').remove();
   clone1.css('width','100%');
   pop_up.find('.left-content').append(clone1); // pop_up = left-content

   pop_up.slideDown('slow');
   
   pop_up.css({

      display: 'flex'
      
         });  // used to add multiple css attributes.
   });
   

    $('.pop-up').on('click', '.cross' , function(){

      


      var res = $(this).parent().parent(); // returns the .pop-up object
      var c1 = res.find('.colors').clone();
      var c2 = res.find('.drone-img').clone();
      var radio = c1.children().first();

     

      var model = $(this).parents().find('.model');
      model.each( function() {
         
         var temp = $(this).find('.colors').children().first();
         if(temp.attr('name')===radio.attr('name'))
         {
          

            $(this).find('.colors').replaceWith(c1);
            $(this).find('.drone-img').replaceWith(c2);

            return false;
      
         }

      });
      res.slideUp('slow');

      // res.css('display','none');


    });

    //My Code Code for Sync-Sliders

   // $('.view-selected-img').on('click', 'button', function(){


   //    var slides = $(this).parent().find('.img-slide');
   //    slides.each(function(){

         
   //       if($(this).attr('tabindex')==0)
   //       {

   //          var source1 = $(this).next().children().attr('src');
   //          // console.log(source1);
   //          var thumbnails = $(this).parents().find('.view-container > .view-thumbnails > div');
   //          thumbnails.each(function(){
               
   //             if($(this).hasClass('img-active'))
   //             {

   //                $(this).removeClass('img-active');
               

   //             }
   //             if($(this).children().attr('src')== source1)
   //             {

   //                $(this).addClass('img-active');
                  
   //             }
   //          });
  
   //       }
   //    });
   //  });

   // $('.view-thumbnails').on('click', 'div', function(e){
    
   //    var divs = $(this).parent().children();
   //    divs.each(function(){
               
   //       if($(this).hasClass('img-active'))
   //       {

   //          $(this).removeClass('img-active');
   //          // var source1 = $(this).children().attr('src');
   //          // var slides = $(this).parents().find('.view-container  .img-slide');
   //          // // console.log(slides);
   //          // slides.each(function(){
   //          //    if($(this).hasClass('slick-current') && $(this).attr('tabindex')==0 && $(this).children().attr('src')!=source1)
   //          //    {
   //          //       $(this).removeClass('slick-active');
   //          //       $(this).removeClass('slick-current');
      
   //          //    }
      
   //          // });

        

   //       }
   //    });

   //    $(this).addClass('img-active');
     
   // });

   $('.view').on('click', 'button#minus, button#plus', function(){

      var sum = 0;//int value

      var counter = parseInt($(this).parent().find('.counter').html()); //value
      if($(this).attr('id')=='plus'){
         sum = counter + 1;

      }
      else{
         sum = counter - 1;

      }

      if(sum>0)
      {

         $(this).parent().find('.counter').html(sum);

      }
      else{

         alert('Invalid Input')
      }


   });
});