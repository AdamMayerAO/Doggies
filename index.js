'use strict';

function handleForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
        const num = parseInt ($(event.currentTarget).find('input[name="NumberOfPics"]').val());
        if(num<1 || num > 50){
          $('.error').append("Please choose a number from 1-50")
        } else {
        requestData(num);
        }
    })
}

function requestData(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
        .catch(error => alert('oops...something went wrong'));
}

function displayResults(responseJson){
  $('.results').removeClass('hidden');
  console.log(responseJson.message)
 const picArray = []
  for (let i = 0; i<responseJson.message.length; i++){
   picArray.push(`<img src = "${responseJson.message[i]}" class ='results-img'>`)
  }
   $('.results').append(picArray)
} 
   



$(function() {
    console.log('Ready to go! Click for a doggie surprise');
    handleForm();
    
});