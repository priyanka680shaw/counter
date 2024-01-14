var count = 0;
document.querySelector("#add").addEventListener("click" , ()=>{
        count++;
    document.querySelector(".result").innerHTML = `${count}`;
});

document.querySelector("#sub").addEventListener("click" , ()=>{
    count --;
    document.querySelector(".result").innerHTML = `${count}`;
});

document.querySelector("#reset").addEventListener("click" , ()=>{
    confirm("Do you want to Reset ?");
    count = 0;
    document.querySelector(".result").innerHTML = `${count}`;
});

// var count = 0;


// let aa = document.querySelector("#result");
// console.log(aa.innerHTML);