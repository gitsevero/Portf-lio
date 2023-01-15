const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");
acordeonTriggers.forEach(n => {
    n.addEventListener("click", e => {
        const o = n.parentElement;
        o.classList.contains("open") ? o.classList.remove("open") : o.classList.add("open")
    })
});