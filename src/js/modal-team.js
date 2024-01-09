

const teamLink = document.querySelector("[data-team]");
const closeModalBtn = document.querySelector('[data-team-modal-close]');
const modalTeam = document.querySelector('[data-team-modal]');
const backdrop = document.querySelector("body");

const closeModal = () => {
    modalTeam.classList.add("is-hidden");
    backdrop.removeEventListener("keydown", closeEscKey);
};

const openModal = () => {
    modalTeam.classList.remove("is-hidden");
    backdrop.addEventListener("keydown", closeEscKey);
};

const closeEscKey = (event) => {
    let keyCode = event.keyCode;
    if (keyCode === 27) {
        closeModal();
    }
};
const closeByClick = (event) => {
    if (event.target === modalTeam) {
        closeModal();
    }
};
closeModalBtn.addEventListener("click", closeModal);
modalTeam.addEventListener("click", closeByClick);
teamLink.addEventListener("click", openModal);

export default modalTeam 