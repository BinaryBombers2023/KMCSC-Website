
const splashContainer = document.querySelector(".splash-container")
setTimeout(() => {
    splashContainer.style.display = "none"
}, 5000);

window.addEventListener('load', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const parallexImg1 = document.querySelector(".parallex-img-1")
const parallexImg2 = document.querySelector(".parallex-img-2")
// window.addEventListener("scroll", () => {
//     parallexImg1.style.left = window.scrollY / 2
//     parallexImg1.style.right = window.scrollY / 2
// })
