
$("#paybill").on("click", function(){
  $(".pay-bill:nth-child(1) .sub-items").slideToggle();
  $(".pay-bill:nth-child(1) .main-option i:nth-child(2)").toggleClass("rotation");
});


$("#outages").on("click", function(){
  $(".pay-bill:nth-child(2) .sub-items").slideToggle();
  $(".pay-bill:nth-child(2) .main-option i:nth-child(2)").toggleClass("rotation");
});

$("#reportOutage").on("click", function(){
  $(" .report-outage-sub").slideToggle();
  $(".pay-bill:nth-child(2) .quick-pay:nth-child(2) i").toggleClass("rotation");
  $(" .report-outage-sub").toggleClass("flexed");
});

$("#contact").on("click", function(){
  $(".pay-bill:nth-child(4) .sub-items").slideToggle();
  $(".pay-bill:nth-child(4) .main-option i:nth-child(2)").toggleClass("rotation");
});


$(".settings").on("click", function(){
  $("#id01").show();
});