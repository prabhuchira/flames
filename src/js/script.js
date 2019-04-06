
console.log('Application Inititated');


var name1_value ,	name2_value ;
var getInputUI = (function(){
	// document.getElementById("submit_button").disabled =true;	
	var DOMstrings = {
		name_first:'name1',
		name_second:'name2',
		submit:'submit_button',
		result_string:'result'
	}

	var result_length =0 ;


	function testing(){




	name1_value = document.getElementById(DOMstrings.name_first).value;
	name2_value = document.getElementById(DOMstrings.name_second).value;
 name2_orig = name2_value;
	var final_string,color;

	var i,j,k = 0;

	name1_value = name1_value.replace(/\s/g,"");
	name2_value = name2_value.replace(/\s/g,"");



	if(name1_value !== "" && name2_value !== ""){
		// document.getElementById("submit_button").disabled = true;
	
	
        for(i=0;i<name1_value.length;i++){

            for(j=0;j<name2_value.length;j++){
                // console.log(name1.charAt(i) + name2.charAt(j));
              if(name1_value.charAt(i) == name2_value.charAt(j)){
                name1_value = name1_value.replace(name1_value.charAt(i),"");

                name2_value = name2_value.replace(name2_value.charAt(j),"")

                    j=0;
                    i=0;
                    k++;
              }
            }

		}


		result_length = name1_value.length+name2_value.length;

		var flames = "flames";
		var j=0
		for(var temp = 0;temp<5;temp++){
			for(var i=0;i<result_length;i++)
			{	if(flames[j] == undefined){j=0}
				// console.log(flames[j] 	);

			j++;
			}

			//stringout = j-1;
			j--;
			flames = flames.replace(flames[j],"");

			// console.log(flames);

			// console.log(j);

		}


		var result_single = flames;



		switch (result_single){
			case "f":final_string = " are Just Friends";color="rgb(61, 62, 143)";break;
			case "l":final_string = " are Lovers";color="red";break;
			case "a":final_string = " have nothing but Attraction";color="rgb(202, 77, 175)";break;
			case "m":final_string = " are going to get Married soon";color="grey";break;
			case "e":final_string = " are Enemies";color="grey";break;
			case "s":final_string = " have nothing except she is your Sister";color="grey";break;
		}

		function clearFields(){

			document.getElementById(DOMstrings.name_first).value = ""
			document.getElementById(DOMstrings.name_second).value ="";
		}

		document.getElementById(DOMstrings.result_string).innerHTML=`<h3 style="color:#915992 ;font-size:24px !important" >You and ${name2_orig}  ${final_string}</h3>`

							document.querySelector(".clearFields" ).addEventListener('click',clearFields);
								document.querySelector(".clearFields2" ).addEventListener('click',clearFields);
							document.getElementById('submit_button').click()

	}
	else{


	}



	}







	return {
		clickEvent: function(){


			document.getElementById('submit_button').addEventListener('click',testing);
			document.addEventListener('keypress',event => {if(event.keyCode == 13 || event.which == 13 ){
				testing();

			}})
		}
	}


})();

getInputUI.clickEvent();


$(document).keypress(function(e) {
	if ($("#myModal").hasClass('in') && (e.keycode == 13 || e.which == 13)) {
	  alert("Enter is pressed");
	}
  });


