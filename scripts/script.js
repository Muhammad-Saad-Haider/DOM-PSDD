


const swiper = new Swiper('.card_Wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    //break points
    breakpoints : {
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2

        },
        1024:{
            slidesPerView:3
        }
    }
  

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
