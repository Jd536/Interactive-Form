
// FIRST INPUT ELEMENT SET ON FOCUS ONCE PAGE FIRST LOADS
let name = $("#name");
let email = $("#mail");
let cardNumber= $("#cc-num");
let zipCode = $("#zip");
let cvv = $("#cvv");
let totalCost=0;
let colors = $("#colors-js-puns");
let cardNumberDiv = $("#credit-card div").eq(0);
$( document ).ready(function() {
   name.focus();
   $("#other-title").hide();
   // ADD SELECTED ATTRIBUTE TO THE CREDIT CARD OPTION (SELECTED BY DEFAULT)
   $("#payment option[value='credit card']").attr("selected",true);
   $("#credit-card").next().hide();  
   $("#credit-card").next().next().hide();
   $("#colors-js-puns").hide();
});
// DISPLAY THE OTHER-TITLE INPUT WHEN THE "Other" OPTION IS SELECTED -- 


    $("#title").change(function(e){ // a click function will not work on select option
        $("#title option").each(function(){
            if($(this).is(":selected")&& $(this).attr('value')=="other"){
                $("#other-title").show();
            }else if($(this).is(":selected")&& $(this).attr('value')!="other"){
                $("#other-title").hide();
            }
        });
      
});

//  DISPLAY RELATED COLOR OPTION ONLY WHEN A SPECIFIC DESIGN IS SELECTED/ HIDE THE COLOR DIV UNLESS A DESIN IS SELECTED
$("#design").change(function(){
    $("#design option").each(function(){
        if($(this).attr('value')=="js puns" && $(this).is(":selected")){
            colors.show();
            $("#color option[value='tomato']").attr("selected",false);
            $("#color option[value='cornflowerblue']").attr("selected",true);
            $("#color option[value='cornflowerblue']").show();
            $("#color option[value='darkslategrey']").show();
            $("#color option[value='gold']").show();
            $("#color option[value='tomato']").hide();
            $("#color option[value='steelblue']").hide();
            $("#color option[value='dimgrey']").hide();
        }else if($(this).attr('value')=="heart js" && $(this).is(":selected")){
            colors.show();
            $("#color option[value='cornflowerblue']").attr("selected",false);
            $("#color option[value='tomato']").attr("selected",true);            
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
                
               if(creditCard.is(":selected")){
                   $("#credit-card").next().hide();  
                   $("#credit-card").next().next().hide();  
                   $("#credit-card").show();

               }   
               if(payPal.is(":selected")){
                   $("#credit-card").next().show();
                   $("#credit-card").next().next().hide(); 
                   $("#credit-card").hide();
               }               
               if(Bitcoin.is(":selected")){
                   $("#credit-card").next().next().show();
                   $("#credit-card").next().hide();
                   $("#credit-card").hide();
               }
            });  
            if(cardNumber.val()=="" && creditCard.is(":selected")){
                alerts.text("Please enter a credit card number.");
                alerts.css("color", "red");
                cardNumberDiv.append(alerts);
                cardNumber.keyup(function(){
                    alerts.hide();
                   if(cardNumber.val().length==10){
                       alerts.text("Please enter a number that is between 13 and 16 digits long.");
                       alerts.show();
                }
            });
            } 
      });    

      
      // FORM VALIDATION
      let statusMessage=$("<span></span>").css("color","red");
      statusMessage.css({'border-radius':'5px',
        'border':'blue solid 1px',
        'background-color':'white',
        padding:'3px',
        right:'0',
        'margin-left':'50%',
        'margin-bottom':'3px',
        'position':"absolute",
        display:'inline-block',
        'z-index':'2'
        });
     
      const regexS = {
          name:/^[a-zA-Z ]{2,30}$/,
          email:/^[^@]+@[^@.]+\.[a-z]+$/,
          card:/^\d{13,16}$/,
          zip:/^\d{5}$/,
          cvv:/^\d{3}$/
      }
      function validate(field,regex,stats){
        if(regex.test(field.val())==false){
            field.css("border", "tomato solid 2px");
            stats.insertBefore(field);
            field.blur(function(){
                stats.remove();
            })
        }if(regex.test(field.val())==true){
            field.css("border", "green solid 2px");
            stats.remove();
            field.blur(function(){
                stats.remove();
            })
        }
 
      }

     
    name.keyup(function(){
        statusMessage.text("Only letters are allowed!");
        validate(name,regexS.name, statusMessage);
    });
    email.keyup(function(){
        statusMessage.text("Enter a valid email address.");
        validate(email,regexS.email,statusMessage);
    });
    cardNumber.keyup(function(){
        statusMessage.text("should contains 13-16 numbers");
        validate(cardNumber,regexS.card, statusMessage);
    });
    zipCode.keyup(function(){
        statusMessage.text("Zipcode format \"00000\"");
        validate(zipCode,regexS.zip, statusMessage);
    });
    cvv.keyup(function(){
        statusMessage.text("Contains 3 digits");
        validate(cvv,regexS.cvv, statusMessage);
    });

    // ALERTS on submit

    $("form").submit(function(event){
        let alert = $("<p></p>").text("Please select at least one activity").css("color","red");
       let validateOnSubmit = function (field,regex){
            if(regex.test(field.val())){
                field.css("border", "blue solid 2px");
            }else{
                field.css("border", "tomato solid 2px");
                event.preventDefault();
            }
          } 
          if($(".activities input:checked").length==0){
            event.preventDefault();
            $(".activities").prepend(alert);
        }
          validateOnSubmit(name,regexS.name);
          validateOnSubmit(email,regexS.email);
          validateOnSubmit(cardNumber,regexS.card);
          validateOnSubmit(zipCode,regexS.zip);
          validateOnSubmit(cvv,regexS.cvv);

    });
    console.log();