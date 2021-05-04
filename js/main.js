$(document).ready(function(){


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


      pop_up.css({

         display: 'flex'
         
     });  // used to add multiple css attributes.


    });

    $('.pop-up').on('click', '.cross' , function(){

      
      var res = $(this).parent().parent(); // returns the .pop-up object
      res.css('display','none');
      res = $('input[name=eye]');
      res.prop('checked', false);


    });

});