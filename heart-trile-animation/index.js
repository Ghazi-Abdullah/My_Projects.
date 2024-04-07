//اذا ماكان عندي(ID or class)في (html)
//(querySelector)بستخدم 
const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=>{
    //console.log(event.offsetX);
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // يعني كل ما اطلب منك السبان اعمل وحدة يعني كرر
    const spanEl = document.createElement("span");

    //اوصل للستايل الموجود في (css) واطبع على اليسار واطبع فوق
    spanEl.style.left = xPos +"px";
    spanEl.style.top = yPos +"px";

    //غير حجم القلب حسب الاعدادات الموجودة من الصر الى الحد الاعلى الي انا حاطة في الاعدادات  راح يبدا صغير لحد ال100 بكسل  (css) 
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    bodyEl.appendChild(spanEl);
    //احذف كل 6 ثواني القلب
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});