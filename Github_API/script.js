
function searchUser() {
const userInput=document.querySelector('#Username').value
const userPic= document.querySelector('#pic')
const userName= document.querySelector('h2')
const userBio = document.querySelector("p");
const statCard= document.querySelector('.stats-card')
const url = `https://api.github.com/users/${userInput}`;
const statsUrl = `https://github-readme-stats.vercel.app/api?username=${userInput}&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=false`;



fetch(url)
.then((Response)=>{
    return Response.json()
}).then((data)=>{
    // const url= data.avatar_url;
    userPic.src=data.avatar_url;
    userName.innerHTML=data.name;
    userBio.innerHTML=data.bio;  

    // creating Github Stats 

    const statsImg =document.createElement("img")
    statsImg.src=statsUrl;
    statsImg.alt=`${userInput}'s Githup Stats`
    statCard.innerHTML='';
    statsImg.id="cardImg"
    statCard.appendChild(statsImg);    
})
.catch(error => console.error("Error fetching user:", error));
}