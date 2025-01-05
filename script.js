document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".WeekNumber").addEventListener("click", (event) => {
        if (event.target.classList.contains("week")) {
            const week = event.target.getAttribute("data-week"); 
            const rows = document.querySelectorAll(`.hiddentable[data-week="${week}"]`);
            rows.forEach(row => {
                row.style.display = row.style.display === "none" || row.style.display === "" 
                    ? "table-row" 
                    : "none";
            });
        }
    });
});









