$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:6000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{        
    375:{
        items:1,
        nav:false,  
        loop:false
    },
    768:{
        items:3,
        nav:false,
        loop:true
    }
  }
});

$('.carousel').carousel({
  interval: 6000
});  