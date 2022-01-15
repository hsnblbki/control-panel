(function(){
    const tabs=document.querySelectorAll(".js-tabs");
    Array.from(tabs, tab => {
        const tabsLinks=tab.querySelectorAll(".js-tab-link");
        let currentActiveTap=tab.querySelector(".js-tab-link.is-active");

        const toggleTap=(toggledTapLink = currentActiveTap) => {
            currentActiveTap= toggledTapLink || currentActiveTap;
            toggledTapLink.classList.toggle("is-active");

            const toggledTapData=toggledTapLink.dataset.index;
            const toggledTapArea=tab.querySelector(`.js-tab-area[data-indexed=${toggledTapData}]`);
            toggledTapArea.classList.toggle("is-active");
        }

        if(!currentActiveTap){
            toggleTap(tabsLinks[0]);
        }

        tabsLinks.forEach(tabsLink => {
            tabsLink.addEventListener("click",function(){
                if(currentActiveTap === this){
                    return;
                }
                if(currentActiveTap){
                    toggleTap();
                }
                toggleTap(this);
            })
        })
    })
})();