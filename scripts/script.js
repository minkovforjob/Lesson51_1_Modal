
// *************.       пока на надо    ************************


// class UIComponents {
//     constructor(...elements)
// }


// class ModalWindow extends UIComponents { }
// static make(){
//     const container = document.createElement("div");
//     const modalBody = document.createElement("div");

//     container.append(modalBody);

//     container.classList.add();
//     modalBody.classList.add();

//     container.addEventListener("click", () => {
//         modal.classList.add("modalHidden");

//     })
// }
// const modal = new ModalWindow("div","div", {},["closeIcon", "esc", "onblur"],)

//**************************************************************************** */

const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");
const closeModal = document.querySelector(".closeModal");
const okModal = document.querySelector(".okModal");
openModalBtn.addEventListener("click", () => {
    modal.classList.remove("modalHidden");
})

modal.addEventListener("click", () => {
    modal.classList.add("modalHidden");
});

modalBody.addEventListener("click", (event) => {
    event.stopPropagation();
})

closeModal.addEventListener("click", () => { modal.classList.add("modalHidden"); });
okModal.addEventListener("click", () => { modal.classList.add("modalHidden"); });




document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.add("modalHidden");
    }
});