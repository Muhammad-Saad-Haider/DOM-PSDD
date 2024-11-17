const orderBtns = document.querySelectorAll(".order-btn");

orderBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("A");
    });
});