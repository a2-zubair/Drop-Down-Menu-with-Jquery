var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);

    $('.submenuItems').hide();
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

  //toggle the sub menu
  $('.portfolio').click(function(){
    $('.submenuItems').toggle('slow');

    $('.fa-plus').toggleClass('fa-minus');
  });

};

$(document).ready(main);
