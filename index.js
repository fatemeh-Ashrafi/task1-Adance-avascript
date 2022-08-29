
let myPromise = new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET" , "https://reqres.in/api/users?page=2");
    xhttp.send();
    xhttp.onload =()=>{
        resolve(JSON.parse(xhttp.response))
    }
})
myPromise.then((message)=>{
    console.log(message)
})