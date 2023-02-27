function show(){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session="AM";

    if(h>=12){
        session="PM"
        h-=12;
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    time=h+":"+m+":"+s;
    document.getElementById("clock").innerHTML=time;
    setTimeout(show,1000);
}
show();