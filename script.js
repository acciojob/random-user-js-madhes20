//your code here

fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((data)=>{
    console.log(data.results[0].name.first);
    let myImage = data.results[0];
    let profile = document.getElementById('image');
    profile.innerHTML = `<img src=${myImage.picture.large}>`;

    let fullName = document.getElementById('name');
    fullName.innerHTML = `<p> ${myImage.name.first} ${myImage.name.last}</p>`

})

function newUser(){
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data)=>{
        console.log(data.results[0].picture.medium);
        let myImage = data.results[0];
        let profile = document.getElementById('image');
        let myShow = document.getElementById('show');
        let fullName = document.getElementById('name');
        myShow.innerHTML = `<p></p>`;
        profile.innerHTML = `<img src=${myImage.picture.large}>`;
        fullName.innerHTML = `<p> ${myImage.name.first} ${myImage.name.last}</p>`
    })
}

function myAge(){
fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((data)=>{
    console.log(data.results[0].dob.age);
    let myAge = data.results[0];
    let myShow = document.getElementById('show');
        myShow.innerHTML = `<p>${myAge.dob.age}</p>`;
})
}

function myEmail(){
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data)=>{
        //console.log(data.results[0].email);
        let myEmail = data.results[0];
        let myShow = document.getElementById('show');
            myShow.innerHTML = `<p>${myEmail.email}</p>`;
    })
}

function myPhone(){

    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data)=>{
        //console.log(data.results[0].phone);
        let myPhone = data.results[0];
        let myShow = document.getElementById('show');
            myShow.innerHTML = `<p>${myPhone.phone}</p>`;
    })
}
