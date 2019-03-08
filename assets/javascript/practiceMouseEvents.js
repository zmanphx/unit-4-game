
//chaining Events


// chaining a mouse enter and mouse leave on .product-photo

$('.product-photo').on('mouseenter', () => {
    $('.product-photo').addClass('photo-active')
  }).on('mouseleave', () => {
    $('.product-photo').removeClass('photo-active')
  })
  

  //event.currentTarget  only apply the method to where the element the mouse enters. 

  $('.product-photo').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('photo-active')
  })

  $('.example-class').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active');
  });

  //CSS properties
  $('.example-class').css('color', '#FFFFFF');

  // css pass multiple values

  $('.example-class').css({
    color: '#FFFFFF',
    backgroundColor: '#000000',
    fontSize: '20px'
  })

 // Note that the names of CSS properties in the JavaScript object don't have spaces or dashes and are camelCased

  //animate


  $('.example-class').animate({
    height: '100px',
    width: '100px',
    borderWidth: '10px'
  }, 500)})
   
  $('.menu-button').animate({
    fontSize: '40px'
  }, 200)
})

//adding class
$('.example-class').addClass('active');


$('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show();
    $('.menu-button').addClass('button-active')
    
    $('.menu-button').animate({
      fontSize: '24px'
    }, 200)
  })

  $('.example-class').removeClass('active');  // remove class

  $('.example-class').toggleClass('active');  // toggle class

  
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggleClass('hide')
    $('.menu-button').toggleClass('button-active')
  })

  ///  DOM

  $('.choice').on('click', event => {
    $(event.currentTarget).parent().hide();

  });

/// Uing  Next or next sibling
<div class='heading'>MENU</div>
<ol style='display: none'>
  <li>Appetizers</li>
  <li>Entrees</li>
  <li>Salads</li>
  <li>Sides</li>
  <li>Desserts</li>
</ol>

const $heading = $('.heading');
$heading.on('click', () => {
  $(event.currentTarget).next().toggle();
});


// find method 
/* Sometimes we want to target an element that lives inside another, but we don't want to use the .children() method, since that might target more elements than we need. That's where the .find() method comes in. This method finds and targets singular or multiple elements that are descendants of an element. Unlike the .children() method, it traverses all descendants of the specified element, not just the first level down. */

const $items = $('.myList').find('li');

/* The .find() method takes a parameter that specifies how to filter results. This parameter is just like anything you might use to select a jQuery object, ('#id', '.class', tag, etc.). .find() will return all descendants that match the passed in selector. In the example above, the .find() method will return all <li> child elements inside the '.myList' element */