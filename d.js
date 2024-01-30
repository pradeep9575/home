

setInterval(()=>{

 date = new Date()
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    

hrotate = 30*htime + mtime/2
mrotate = 6*mtime 
srotate = 6*stime 

houre.style.transform = `rotate(${hrotate}deg)`
minute.style.transform = `rotate(${mrotate}deg)`
second.style.transform = `rotate(${srotate}deg)`

},1000)

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let watch1 = document.getElementById("main");
let watch2 = document.getElementById("main2");
let watch3 = document.getElementById("main3");

btn1.addEventListener("click",()=>{

    watch1.style.display = "block";
    watch2.style.display = "none";
    watch3.style.display = "none";
})
btn2.addEventListener("click",()=>{

    watch2.style.display = "block";
    watch3.style.display = "none";
    watch1.style.display = "none";

})
btn3.addEventListener("click",()=>{

    watch3.style.display = "block";
    watch1.style.display = "none";
    watch2.style.display = "none";
})
