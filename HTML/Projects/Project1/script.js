document.addEventListener("DOMContentLoaded", () => {

    const text = "Discover the best food & drinks in Hanumangarh";
    const paragraph = document.querySelector("main p");

    paragraph.textContent = "";
    paragraph.classList.add("fade-in");

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            paragraph.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    setTimeout(typeWriter, 500);

});