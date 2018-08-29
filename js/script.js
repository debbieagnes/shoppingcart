
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
  });

  sb_set_basket_events();  
  sb_sum_total();
});



function sb_set_basket_events(){

 $(".add-to-cart").click(function(){
  sb_add_to_basket($(this));
 });

}


function sb_add_to_basket(e){

  $(".cart-body ul").append(
    "<li>" + "<span>" + $(e).data("product-name") + "</span>" +
    "<span>" + "€ " + $(e).data("product-price") + "</span>" + 
    '<input type="number" value="1">' +
    '<span class="basket-total-amount">' + "€ " + "TOTAL" + "</span>" + 
    "<span>" + "X" + "</span>" + "</li>"); 

}

function sb_sum_total(){
  var total = 0;
  $(".cart-body ul").find("li").each(function(){
    var amount = Number($(this).find("input").val());
    total = total + (amount * Number($(this).data("price")));
  });
  $(".basket-total-amount").text("\u20AC " + total);

  console.log(sb_sum_total);
}
