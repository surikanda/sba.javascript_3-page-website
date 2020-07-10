function calculateBMI(){

    var heightInFeet = Number(document.getElementById("height-feet").value);
    var heightInInches = Number(document.getElementById("height-inches").value);
    var weight = Number(document.getElementById("weight").value);
    var height = (heightInFeet * 12) + heightInInches;
    
    var bmi = Math.round((weight / (height * height)) * 703) ;
 
    
    if (bmi < 18.5){
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + " - Underweight";
    } else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmiResult").innerHTML ="Your BMI is: " + bmi + " - Normal weight";
    } else if(bmi > 24.9 && bmi <= 29.9){
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + " - Overweight";
    } else if(bmi >= 30){
        document.getElementById("bmiResult").innerHTML = "Your BMI is: " + bmi + " - Obesity";
    }
}




