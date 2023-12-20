jQuery(document).ready(function($)
// $(document).ready(function()
{

  $(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll >=50){
      $(".sticky").addClass("stickyadd");
    }else{
      $(".sticky").removeClass("stickyadd");
    }
  });

  // progress bars

  var waypoint = new Waypoint({
    element: document.getElementById('skills'),
    handler: function() {

      var p = document.querySelectorAll('.progress-bar');
      p[0].setAttribute("style", "width:100%;transition:1s all;");
      p[1].setAttribute("style", "width:65%;transition:1.5s all;");
      p[2].setAttribute("style", "width:90%;transition:1.7s all;");
      p[3].setAttribute("style", "width:60%;transition:2s all;");
      p[4].setAttribute("style", "width:70%;transition:2.3s all;");
      p[5].setAttribute("style", "width:45%;transition:2.5s all;");
      p[6].setAttribute("style", "width:95%;transition:2.7s all;");
      // p[7].setAttribute("style", "width:40%;transition:3s all;");
    },
    offset: '90%'
  });

  // adding fadeInUp animation to child of div with class .way-col
  var $child = $('.way-fade-up').children();
  $child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
      self.addClass('animated fadeInUp');
    },{offset: '90%'});
  });

  var $child = $('.way-fade-left').children();
  $child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
      self.addClass('animated fadeInLeft');
    },{offset: '90%'});
  });

  var $child = $('.way-fade-right').children();
  $child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
      self.addClass('animated fadeInRight');
    },{offset: '90%'});
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      // margin:10,  
      nav:false,
      // dots:true,
      autoplay:true,
      autoplayTimeout:4000,
      items:1,
      // animateOut : "fadeOut",
      animateIn : "fadeInRight"

  });

  var filterContainer = $('.filter-container');  
  var filterizr = $.filterContainer.filterizr({
    animationDuration: 0.5,
    // Add any other Filterizr options or configurations as needed
  });


  var typed = new Typed(".element", {
    
    strings: ["Sibaji Khillar","Java Developer","Web Developer","UI/UX Designer","Software Developer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay:1000,
    loopCount: Infinity,
    startDelay: 1000,
  });

  $('a').smoothScroll({

    speed:2000,
  });

  $("#all-btn").click(function(){
    $("#p5").show();
    $("#p6").show();
  });

});


