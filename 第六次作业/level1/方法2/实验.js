function timer(){
    let m = new Promise((resolve,reject) => {
     setTimeout(()=>{
        console.log(1111)
     }, 1000);
     resolve(2000);
    }).then((value)=>{
     setTimeout(()=>{
        console.log(2222)
     }, value);
      return 3000;
    }).then((value)=>{
     setTimeout(()=>{
        console.log(3333)
     }, value);
    })
  }
  
  timer();