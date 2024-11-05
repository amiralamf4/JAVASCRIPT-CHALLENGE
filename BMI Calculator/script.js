const form=document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const submit= document.querySelector('button')
    const result =document.querySelector(".result")
    const BMI =document.querySelector("#BMI")
    const pra=document.createElement('p');
    result.appendChild(pra);

    if (height < 0 || isNaN(height)) {
        BMI.innerHTML='Please Enter a valid Number'
    } else if (weight < 0 || isNaN(weight)) {
        BMI.innerHTML='Please Enter a valid Number'
    } else{
        const bmi=(weight /((height*height)/10000)).toFixed(2);

        
        // pra.id="check"
        if (bmi <18.6) {
            pra.innerHTML=`${bmi} is Under weight`
        } else if(bmi<24.9){
            pra.innerHTML=`${bmi} is Normal`
        }else if(bmi>24.9){
            pra.innerHTML=`${bmi} is Over weight`
        }

        submit.disabled = true;

        // Create a reset button

        const resetButton = document.createElement('button');
        resetButton.textContent = "Check Again";
        resetButton.type = "button";
        resetButton.className = "reset-button";
        result.appendChild(resetButton);

        // Reset button click event

        resetButton.addEventListener('click', function () {
            form.reset();  // Clear form fields
            submit.disabled = false; 
            result.innerHTML = "";  // Clear result area
            BMI.innerHTML = ""; // Clear BMI message
            resetButton.remove();
        });
    }

})