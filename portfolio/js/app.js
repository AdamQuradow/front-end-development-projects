$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        responsive:{
            0:{
                
            },
            600:{
              
            },
            1000:{
               
            }
        }
    })
    $('#project-slider').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0,
        nav:false,
        dots:true,
        smartSpeed:800,
        margin: 24,
        responsive:{
            0:{
                items: 1,
            },
            768:{
                items: 2,
            },
            1140:{
               items: 3,
               center: true,
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:10,
        nav:false,
        dots:true,
      items: 1,
      smartSpeed:800,
    })
})
