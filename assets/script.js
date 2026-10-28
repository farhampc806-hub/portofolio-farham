

const tahun = document.getElementById("tahun");

tahun.textContent = new Date().getFullYear();




const projectModal = document.getElementById("projectModal");

projectModal.addEventListener("show.bs.modal", function (event) {

    const button = event.relatedTarget;

    const title = button.getAttribute("data-title");

    const description = button.getAttribute("data-description");

    document.getElementById("projectModalLabel").textContent = title;

    document.getElementById("projectModalDescription").textContent = description;

});



const contactForm = document.getElementById("contactForm");

const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {

        contactForm.classList.add("was-validated");

        formFeedback.className = "mt-3 text-danger fw-semibold";

        formFeedback.textContent =
            "Periksa kembali kolom yang belum benar.";

        return;
    }

    formFeedback.className = "mt-3 text-success fw-semibold";

    formFeedback.textContent =
        "Validasi berhasil! Pesan belum dikirim ke server.";

    contactForm.reset();

    contactForm.classList.remove("was-validated");

});