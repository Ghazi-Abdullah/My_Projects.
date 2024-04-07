const Kits = ["Tom", "crash" , "Kick" , "Snare"];

//عرفت متغير عشان اقدر اوصل للدف الي في ال (html)
//ويضع فيه البتن الي انشاتها في (js)
const containerEl = document.querySelector(".container");

Kits.forEach((Kit)=>{

    //لما بستخد ال  بقدر اسوي اي عنصر يعني انشاء (createElement)
    //مثل (html)
    const btnEl = document.createElement("button");

    //هان حكيت ضيف البتن في الكلاس الي اسمة(btn)
    //الي كان موجود في (html)
    //هسة راح يوخذ الخصائص الموجودة في (css)
    btnEl.classList.add("btn");
    //هيك انا حكيت ابداء بوضع الاسماء للبتن حسب الترتيب الموجود 
    btnEl.innerText = Kit;
    btnEl.style.backgroundImage = "url(img/" + Kit +".png)"

    //من خلالها بتظهر البتن في ال صفحة هيك انا حكيت اطبع داخل الدف على الشاشة البتن
    containerEl.appendChild(btnEl);
    //هان انشئت مكان الصوت في البتن و حكيت حط اماكن الصوت في ال(containerEl)
    //الي هي نفسها راح توصل لل (container)
    //الي موجودة في (html)
    const audioEl = document.createElement("audio");
    audioEl.src ="sounde/" + Kit + ".mp3"
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    });

    //هيك انا حكيت لما اكبس على اول حرف موجود في كل اسم راح يشتغل الصوت
    window.addEventListener("keydown", (event)=>{
        //console.log(event.key);
        if(event.key === Kit.slice(0,1)){
            audioEl.play()
            btnEl.style.transform = "scale(.9)";

            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        };
    })
});