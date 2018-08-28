
$(document).ready(function(){

  $(".button").on("click", function() {

      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
    
      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
      // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
    
      $button.parent().find("input").val(newVal);
    
    });


    // Add number to shopping bag
  $(".add-to-cart").on("click", function() {
    var num = parseInt($('.cart-items').text());
    $('.cart-items').text(num+1);

  });


  $(".my-bag").on("click", function() {
    $(".cart-container").toggleClass("open");

    // if($(".cart-container").hasClass("open")){
    //   console.log("yes!");
    //   $(".cart-header").toggleClass("yes");
    // }

  });


  // $(".add-to-cart").click(function(){
  //   sb_add_to_basket(
  //    $(this).data("basket-product-id"),
  //    $(this).data("basket-product-name"),
  //    $(this).data("basket-product-price")
  //   ); 
  //  });

  sb_set_basket_events();

  
});



function sb_set_basket_events(){

 $(".add-to-cart").click(function(){
  sb_add_to_basket($(this));

  
  
 });

}

// function sb_add_to_basket(){
//   console.log('sb_add_to_basket');
// });


function sb_add_to_basket(e){

  // $(e).data("basket-product-id"),
  // $(e).data("basket-product-name"),
  // $(e).data("basket-product-price")

  console.log($(e).data("kart"));
  console.log($(e).data("kart-item-status"));
  console.log($(e).data("kart-item"));
  console.log($(e).data("basket-product-price"));
  console.log($(e).data("basket-product-id"));
  console.log($(e).data("basket-product-name"));

  $(".cart-body").append($(e).data("kart"));



}