document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
// Получаем кнопку стрелки
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Когда прокручиваем страницу, показываем или скрываем кнопку
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// Функция для прокрутки страницы вверх
scrollToTopBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Останавливаем стандартное действие ссылки
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});