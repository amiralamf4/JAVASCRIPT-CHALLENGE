const card1= document.querySelector(".card1")
const card2= document.querySelector(".card2")
const submit= document.querySelector("button")
const rate= document.querySelector("#rate")
const btns = document.querySelector('.rating')

submit.addEventListener('click', function () {
    card1.style.display='none';
    card2.style.display='block';    
})

btns.addEventListener('click', function (bt) {
    const btn= bt.target.closest('.rate')
    if(!btn) return
    console.log('hyy');
    btn.style.backgroundColor='white'
    btn.style.color='black'
    rate.innerText=btn.innerText
})