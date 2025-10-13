document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");

    // Determine initial theme
    let isDark = savedTheme === "dark" ||
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Apply theme
    if (isDark) {
        document.body.classList.add("darkmode");
    }

    // Set initial icon
    toggleBtn.innerHTML = isDark
        ? '<img src="/images/sun.svg" alt="Toggle Light Mode">'
        : '<img src="/images/moon.svg" alt="Toggle Dark Mode">';

    // Toggle on click
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
        isDark = document.body.classList.contains("darkmode");

        toggleBtn.innerHTML = isDark
            ? '<img src="/images/sun.svg" alt="Toggle Light Mode">'
            : '<img src="/images/moon.svg" alt="Toggle Dark Mode">';

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});
