function clocktime(){
    let date=new Date()
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    clock.innerHTML=`${hour}:${minute}:${second}`
    setTimeout(()=>{clocktime()},1000)
}
clocktime()