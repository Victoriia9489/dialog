document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    openBtn.addEventListener("click", () => {
        modal.showModal();
    });

    closeBtn.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (e) => {
const rect = modal.getBoundingClientRect();
if (
    event.clientX < rect.lef ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
) {
    modal.close();
}
    });

})
