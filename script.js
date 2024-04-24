
document.addEventListener('DOMContentLoaded', function() {
  const calculateButton = document.getElementById('calculate-button');
  const birthDateInput = document.getElementById('birth-date');
  const resultElement = document.getElementById('result');
 
  calculateButton.addEventListener('click', function() {
    const birthDate = new Date(birthDateInput.value);
    const currentDate = new Date();
 
    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
 
    const seconds = ageInSeconds;
    const minutes = ageInSeconds / 60;
    const hours = ageInSeconds / 3600;
    const days = ageInSeconds / 86400;
    const weeks = days / 7;
    const months = days / 30.44; // Approximate average month length
    const years = days / 365.25; // Approximate average year length
 
    resultElement.innerHTML = `Result<br>
      Age:<br>
      ${Math.floor(years)} years ${Math.floor(months % 12)} months ${Math.floor(days % 30.44)} days<br>
      or ${Math.floor(months)} months ${Math.floor(days % 30.44)} days<br>
      or ${Math.floor(weeks)} weeks ${Math.floor(days % 7)} days<br>
      or ${Math.floor(days)} days<br>
      or ${Math.floor(hours)} hours<br>
      or ${Math.floor(minutes)} minutes<br>
      or ${Math.floor(seconds)} seconds`;
  });
});

$(document).ready(function(){
  $('input').click(function(){
        $('body').css("background-position","top 70px left 1000px")
       });

  $('input').keypress(function(){
        $('body').css("background-position","top 70px left 200px")
       });

    $('#calculate-button').click(function(){
        $('body').css({'background-image':'url("ageone.jpg")','background-position':'top 70px left 200px','background-repeat':'no-repeat','background-size':'350px'});
       });
     $('#age-calculator').mouseleave(function(){
        $('body').css({'background-image':'url("age.jpeg")','background-position':'top 70px left 200px','background-repeat':'no-repeat','background-size':'350px'});
       });
});