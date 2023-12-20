const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)
     
   if(height === "" || height <0 || isNaN(height)){
    result.innerHTML = 'Please give a valid height'

   }

   else if(weight === "" || weight <0 || isNaN(weight)){
    result.innerHTML = 'Please give a valid weight'

   }

   else{
    const BMI = (weight / (( height * height ) / 10000)).toFixed(2);
    if(BMI<18.6){
    result.innerHTML = `<h1>${BMI} and you are Under weight</h1>`
    }   
    if(BMI<24.9){
    result.innerHTML = `<h1>${BMI} and you are Normal weight</h1>`
    }   
    if(BMI>24.9){
    result.innerHTML = `<h1>${BMI} and you are Over weight</h1>`
    }   
    
   }



})