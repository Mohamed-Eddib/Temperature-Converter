document.getElementById("Btn").addEventListener("click", function (e) {
    e.preventDefault();
    convert(); 
});
const Btn = document.getElementById("Btn");
let toFahrenheit = document.getElementById("toCelsius");
let toCelsius = document.getElementById("toFahrenheit");
let first_value ;
let converted_value ;
let label = document.getElementById("converted_value");
Btn.onclick = function(){
        if(toCelsius.checked){
         first_value = document.getElementById("first_value").value;
         converted_value = (first_value - 32 ) * (5/9) ;
         label.textContent = Math.round(converted_value) + "°" ;

        }
        else if(toFahrenheit.checked){
         first_value = document.getElementById("first_value").value;
         converted_value = (first_value * (9/5) ) + 32 ;
          label.textContent = Math.round(converted_value) + "°" ;

        }
        else{
        label.textContent = "Please choose a valid conversion method";
        }
    }

