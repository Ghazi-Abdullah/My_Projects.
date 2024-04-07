//للوصول الى (div)
// الموجود في (html)
 // عن طريق(id)
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getUTCMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }
//يعني اذا كان الوقت اقل من خانتين حط صفر يعني راح يكون اقل من عشرة
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampm,(innerText = ampm);

    //يعني حط الوقت في الفونكشن الموجودة ولا نكرر 
    setTimeout(()=>{
        updateclock()
    },1000)
}

updateclock()

