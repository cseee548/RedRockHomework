function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        obj.style.left = obj.offsetLeft + 5 + 'px';

        if (obj.offsetLeft >= target) {
            // 停止动画
            clearInterval(obj.timer);
            // 如果有回调函数，执行回调函数
            if (callback) {
                callback();
            }
        }


    }, 30);
}

function timer(){
  setTimeout(() =>{
    
    animate(球1, 300);
    setTimeout(()=>{
        
        animate(球2, 300);
        setTimeout(()=>{
            
            animate(球3, 300);
        },1000);
    },1000);  
  },10);
}

timer();