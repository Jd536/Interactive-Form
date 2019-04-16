
// FIRST INPUT ELEMENT SET ON FOCUS ONCE PAGE FIRST LOADS
let name = $("#name");
let email = $("#mail");
let cardNumber= $("#cc-num");
let zipCode = $("#zip");
let cvv = $("#cvv");
let totalCost=0;
let colors = $("#colors-js-puns");

$( document ).ready(function() {
   name.focus();
   $("#other-title").hide();
   // ADD SELECTED ATTRIBUTE TO THE CREDIT CARD OPTION (SELECTED BY DEFAULT)
   $("#payment option[value='credit card']").attr("selected",true);
   $("#credit-card").next().hide();  
   $("#credit-card").next().next().hide();
   $("#colors-js-puns").hide();
});
// DISPLAY THE OTHER-TITLE INPUT WHEN THE "Other" OPTION IS SELECTED
$("#title option").each(function(){
    if($(this).attr('value')=="other"){
       $(this).click(function(){
        $("#other-title").show();
    });
    }else if($(this).attr('value')!="other"){
        $(this).click(function(){
            $("#other-title").hide();
        });
    }

});

//  DISPLAY RELATED COLOR OPTION ONLY WHEN A SPECIFIC DESIGN IS SELECTED/ HIDE THE COLOR DIV UNLESS A DESIN IS SELECTED
$("#design option").each(function(){
    $(this).click(function(){
        if($(this).attr('value')=="js puns"){
            colors.show();
            $("#color option[value='cornflowerblue']").show();
            $("#color option[value='darkslategrey']").show();
            $("#color option[value='gold']").show();
            $("#color option[value='tomato']").hide();
            $("#color option[value='steelblue']").hide();
            $("#color option[value='dimgrey']").hide();
        } else if($(this).attr('value')!="heart js"){
            colors.show();
            $("#color option[value='cornflowerblue']").hide();
            $("#color option[value='darkslategrey']").hide();
            $("#color option[value='gold']").hide();
            $("#color option[value='tomato']").show();
            $("#color option[value='steelblue']").show();
            $("#color option[value='dimgrey']").show();
        } if($(this).text()=="Select Theme"){
            colors.hide();
        }
    });
});
var all = $(".activities input[name='js-frameworks']");
var frameworks = $(".activities input[name='js-frameworks']");
var express = $(".activities input[name='express']");
var libs = $(".activities input[name='js-libs']");
var nodeVar = $(".activities input[name='node']");
var checkboxes = $(".activities input");


// Disabled Checkbox if a specific checbox is selected

checkboxes.each(function(){
      $(this).click(function(){
        
        if(frameworks.is(":checked")){
            express.prop('disabled',true);
        }else if(frameworks.not(":checked")){
            express.prop('disabled',false);
        } if(express.is(":checked")){
            frameworks.prop('disabled',true);
        }else if(express.not(":checked")){
           frameworks.prop('disabled',false);
        }
        
        if(libs.is(":checked")){
               nodeVar.prop('disabled',true);
        }else if(libs.not(":checked")){
            nodeVar.prop('disabled',false);
        }if(nodeVar.is(":checked")){
            libs.prop('disabled',true);
     }else if(nodeVar.not(":checked")){
         libs.prop('disabled',false);
     }
     
    });
});
// Create Element with Total as InnerTex and append it to the Document

const total = $("<h2></h2>").text("Total: $"+totalCost);
$(".activities").after(total);
// Calculate total cost based on selected element

checkboxes.each(function(index){
    $(this).click(function(){
        if(($(this).attr('name')=="all") && $(this).is(':checked')){
            totalCost+=200;
        }else if(($(this).attr('name')=="all") && $(this).not(':checked')){
            totalCost-=200;
        } if(($(this).attr('name')!="all") && $(this).is(':checked')){
            totalCost+=100;
        }else if(($(this).attr('name')!="all") && $(this).not(':checked')){
            totalCost-=100;
        }
        total.text("Total: $"+totalCost);
    });
});

 // HIDE THE BITCOIN AND PAYPAL INFORMATION WHEN CREDIT CARD IS SELECTED
let creditCard=$("#payment option[value='credit card']");
let Bitcoin = $("#payment option[value='bitcoin']");
let payPal = $("#payment option[value='paypal']");
let alerts=$("<span></span>");

cardValue = creditCard.val();
    $("#payment").change(function(){
            $(this).click(function(){
               if(creditCard.change().is(":selected")){
                   $("#credit-card").next().hide();  
                   $("#credit-card").next().next().hide();  
                   $("#credit-card").show();
               }if(creditCard.change().not(":selected")){
                   $("#credit-card").next().show();  
                   $("#credit-card").next().next().show();  
               }
       
               if(payPal.change().is(":selected")){
                   $("#credit-card").next().show();
                   $("#credit-card").next().next().hide(); 
                   $("#credit-card").hide();
               }else if(payPal.change().not(":selected")){
                   $("#credit-card").next().hide(); 
               }
               
               if(Bitcoin.change().is(":selected")){
                   $("#credit-card").next().next().show();
                   $("#credit-card").hide();
               }else if(Bitcoin.change().not(":selected")){
                   $("#credit-card").next().next().hide();
                   }
            });  
      });    


      // FORM VALIDATION

      const regexS = {
          name:/^[a-zA-Z ]{2,30}$/,
          email:/^[^@]+@[^@.]+\.[a-z]+$/,
          card:/^\d{13,16}$/,
          zip:/^\d{5}$/,
          cvv:/^\d{3}$/
      }
      function validate(field,regex){
        if(regex.test(field.val())){
            field.css("border", "blue solid 2px");
        }else{
            field.css("border", "tomato solid 2px");
        }
      }

     
    name.keyup(function(){
        validate(name,regexS.name);
    });
    email.keyup(function(){
        validate(email,regexS.email);
    });
    cardNumber.keyup(function(){
        validate(cardNumber,regexS.card);
    });
    zipCode.keyup(function(){
        validate(zipCode,regexS.zip);
    });
    cvv.keyup(function(){
        validate(cvv,regexS.cvv);
    });