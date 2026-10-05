class UIComponents {
    constructor(...elements)

}

// *************.       пока на надо
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

const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");

openModalBtn.addEventListener("click", () => {
    modal.classList.remove("modalHidden");
})

modal.addEventListener("click", () => {
    modal.classList.add("modalHidden");
});

modalBody.addEventListener("click", (event) => {
    event.stopPropagation();
})

