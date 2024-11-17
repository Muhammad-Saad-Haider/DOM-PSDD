


const swiper = new Swiper('.card_Wrapper', {
    loop: true, // Enable looping
    centeredSlides: true, // Keep the active slide in the center
    spaceBetween: 30, // Space between slides (optional)
    slidesPerView: 5, // Number of slides to display at once

    // Breakpoints (if needed for responsive design)
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },

    // Loop behavior and additional slides
    loopAdditionalSlides: 3, // Preload next 3 slides for smooth transition
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Optional: Adjust autoplay (if needed)
    
});


const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");
const updatePagination=(tab,index)=>{
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft- 0}px )`
}


const frontswiper = new Swiper('.slider-container',{
    effect : "fade",
    speed : 500,
    autoplay:{delay:2000},

    on:{
        slideChange:()=>{
            const currentTabIndex=[...sliderTabs].indexOf(
                sliderTabs[frontswiper.activeIndex]
            );
            updatePagination(sliderTabs[frontswiper.activeIndex],currentTabIndex);
        }
    }
    
}

);

sliderTabs.forEach((tab,index) =>{
    tab.addEventListener("click",()=>{
        frontswiper.slideTo(index);
        updatePagination(tab,index);

    });
}
);
updatePagination(sliderTabs([0],0));
window.addEventListener("resize",()=>updatePagination(sliderTabs[frontswiper.activeIndex],0));
