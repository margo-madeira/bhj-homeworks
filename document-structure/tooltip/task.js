const arrHasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

arrHasTooltip[0].insertAdjacentHTML("beforebegin", "<div></div>");
const tooltip = arrHasTooltip[0].previousElementSibling;
tooltip.classList.add("tooltip");
tooltip.setAttribute("data-position", "bottom");

document.addEventListener("scroll", function() {    
    for(let i = 0; i < arrHasTooltip.length; i++) {

        const hasTooltipTop = arrHasTooltip[i].getBoundingClientRect().top;
        const hasTooltipBottom = arrHasTooltip[i].getBoundingClientRect().bottom;
        const hasTooltipLeft = arrHasTooltip[i].getBoundingClientRect().left;
        tooltip.style.left = hasTooltipLeft + "px";
        tooltip.style.top = hasTooltipTop + "px";

        if((hasTooltipTop < window.innerHeight) && (hasTooltipBottom > 0)) {

            arrHasTooltip[i].addEventListener("click", () => {
                tooltip.classList.add("tooltip_active");
                tooltip.innerText = arrHasTooltip[i].getAttribute("title");
            })
        }
    }
})

