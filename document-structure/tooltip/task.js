const hasTooltip = document.querySelectorAll(".has-tooltip");
const arrHasTooltip = Array.from(hasTooltip);

arrHasTooltip[0].insertAdjacentHTML("beforebegin", "<div></div>");
const tooltip = arrHasTooltip[0].previousElementSibling;
tooltip.classList.add("tooltip");

for(let i = 0; i < arrHasTooltip.length; i++) {

    arrHasTooltip[i].addEventListener("click", (event) => {
        
        event.preventDefault();
        const textTooltip = arrHasTooltip[i].getAttribute("title");
        if(textTooltip === tooltip.textContent) {
            tooltip.classList.toggle("tooltip_active");
            return;
        } else {
            tooltip.classList.add("tooltip_active");
            tooltip.innerText = textTooltip;

            const hasTooltipBottom = arrHasTooltip[i].getBoundingClientRect().bottom;
            const hasTooltipLeft = arrHasTooltip[i].getBoundingClientRect().left;
            tooltip.style.left = hasTooltipLeft + "px";
            tooltip.style.top = hasTooltipBottom + "px";
        }
        
    })        
}

