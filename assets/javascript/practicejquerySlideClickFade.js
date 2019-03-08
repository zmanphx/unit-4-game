// $('.someClass').handlerMethod();  class someClass is targeted then a handler method on someClass
  // $('.product-photo').show();   class  .product-photo with .show method will make it appear
  // $('#someId').hide();   id #someId  hide method  hides element when web page renders
  // $  is the alias for jQuery function
  // jQuery takes a parameter to target an element like .product-photo and turns it into a jQuery object .
  //  then call any jQuery method on the jQuery object
  // save jQuery objects in variable like this :  const $jQueryObject = $('.someClass');
  // Good best practice to name jQuery variables with leading $
  // $jQueryObject.hide();
  // Event Handler
  //.on()   adds event handler to the jQuery ojbect.  Takes two parameter, string declaring the event to listen for (handler)
  // and callback function fire when the event is detected.
 
  // $('#login').on('click', () => {
  //     $loginForm.show();
  // })                       On the click event do run what inside {}

  $(document).ready(() =>  {
  
    const $cart = $('#car');
    const $account = $('#account');
    const $help = $('#help');
    const $dropdown =$('.dropdown');
    
    $dropdown.on('mouseover', () => {
      $dropdown.show();
      
    })
     $dropdown.on('mouseleave', () => {
      $dropdown.hide();
      
    })
    
     $cart.on('click', () => {
       $cart.show();
       
     });
    
    $account.on('click', () => {
       
        $account.show();
     });
    
    $help.on('click', () => {
       $help.show();
       
     });
    $cart.on('mouseleave',() => {
          
    });
    
    $account.on('mouseleave', () => {
      
    });
    
    $help.on('mouseleave', () => {
      
    });
    
    
  }; 

  //##############################################################################
  $(document).ready(() => {
    $('.hide-button').on('click', () => {
      $('.first-image').hide();
    });
    
    $('.show-button').on('click', () => {
      $('.first-image').show();
    });
    
    $('.toggle-button').on('click', () => {
      $('.first-image').toggle(); // toggle does both show and hide based on the state of the object no  need for two buttons.
    });
    
// fading method
$('div').fadeOut(1000);  $('div').fadeIn(1000); // like visible or invisible  animiation. parameter is milliseconds

$('.fade-out-button').on('click', () => {
    $('.fade-image').fadeOut(500);
});

$('.fade-in-button').on('click', () => {
    $('.fade-image').fadeIn(4000);

    $('.fade-toggle-button').on('click', () => {
        $('.fade-image').fadeToggle("fast", "linear");


slide and slidetoggle


$('.up-button').on('click', () => {
    $('.slide-image').slideUp(100);
});

$('.down-button').on('click', () => {
$('.slide-image').slideDown("slow");
});

$('.slide-toggle-button').on('click', () => {
$('.slide-image').slideToggle();
});



  });