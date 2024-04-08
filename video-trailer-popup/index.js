//بستخدم لما يكون بدي احكي لما اكبس على الشيء افعله يعني بكون الاتصال مباشرمع (html)(querySelector)
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("vedio");

btnEl.addEventListener('click' ,()=>{
    trailerContainerEl.classList.remove("active")
});


//هيك شغلت علامة الاغلاق x
closeIconEl.addEventListener('click' ,()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});
