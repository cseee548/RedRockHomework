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



function move(delay,nextdelay,obj) {
    return new Promise((resolve, reject) => {
     setTimeout(()=>{
        animate(obj, 300)
    },delay);
    resolve(nextdelay);
 });
}


async function timer(){
    const m1 = await move(0,1000,球1);
    const m2 = await move(m1,2000,球2);
    const m3 = await move(m2,0,球3);
  
}

timer();