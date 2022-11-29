function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        obj.style.left = obj.offsetLeft + 5 + 'px';

        if (obj.offsetLeft >= target) {
            
            clearInterval(obj.timer);
            
        }


    }, 30);
}


function move(obj,time) {
    setTimeout(()=>{
        animate(obj, 300)
    },time);
}



function timer(){
  let m = new Promise((resolve,reject) => {
   move(球1, 0);
   resolve(1000);
  }).then((value)=>{
   move(球2, value)
   return 2000;
  }).then((value)=>{
   move(球3, value)
  })
}

timer();
console.log();
