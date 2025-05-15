let x;
setTimeout(() =>{
    x=10;
}, 0);
console.log(x);

const printHello = ()=> {
    console.log("hello");
};

const printHelloInterval =setInterval(printHello, 1500);


setTimeout(()=>{
clearInterval(printHelloInterval);
}, 10_000)
