$(document).ready(function(){


    $('.model').on('change', 'input:radio',function(){

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
     
    })

});