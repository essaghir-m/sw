$(document).ready(function() {

    $("#owl-div").owlCarousel({
        autoPlay : true,
        navigation : true, // Show next and prev buttons
        pagination : false,      
        slideSpeed : 900,
        paginationSpeed : 400,
        singleItem:true,
        lazyLoad : true
 
    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
 
    });
  
    var owl = $(".portfolio");
 
    owl.each(function(){
        $(this).owlCarousel({
            autoPlay : true,
            lazyLoad : true,
            pagination : false,
            items : 3, //10 items above 1000px browser width
            itemsDesktop : [1000,5], //5 items between 1000px and 901px
            itemsDesktopSmall : [900,3], // betweem 900px and 601px
            itemsTablet: [600,2], //2 items between 600 and 0
            itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        });
    });
  
 
    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })
 
});