console.log("ajax")

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    console.log("you have clicked the fetchBtn")

    // Instantiate an xhr Object
    const xhr = new XMLHttpRequest();
    
    // what to do when response is ready
    xhr.onload = function(){

        if(this.status === 200){
            console.log(this.responseText);
        }else{
            console.log("Some error occured");
        }
    }
    // Post method
    xhr.open('POST', 'sontos.asp');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // what to do on progress
    xhr.onprogress = function(){
        console.log('On progress');
    }
    // xhr.onreadystatechange = function(){
    //     console.log('ready state is', xhr.readyState);
    // }

    // send the request
    param = `{"name":"test1231","salary":"123","age":"23"} `;
    xhr.send("fname=Henry&lname=Ford");

    console.log('we are done');

}

let PopBtn = document.getElementById("PopBtn");
PopBtn.addEventListener("click",PopHandler);

function PopHandler(){
    console.log("you have clicked the Pop Handler");

    // Instantiate an xhr Object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'pop.json', true);

    // what to do when response is ready
    xhr.onload = function(){

        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById("list");
            str = "";
            for (key in obj){
                str += `<li>${obj[key].name}</li>`;

            }
            list.innerHTML = str;
        }else{
            console.log("Some error occured");
        }
    }
    // send the request
    xhr.send();

    console.log('we are done fetching employees');

}
