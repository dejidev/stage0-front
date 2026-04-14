
// script.js
const dueDate = new Date(Date.now() + 1000 * 60 * 60 * 26);

const dueDateEl = document.getElementById("dueDate");
const timeRemainingEl = document.getElementById("timeRemaining");
const checkbox = document.getElementById("complete");
const title = document.getElementById("title");
const status = document.getElementById("status");

function formatDueDate(date) {
    return "Due " + date.toDateString();
}

function getTimeRemaining(date) {
    const now = Date.now();
    const diff = date.getTime() - now;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diff <= 0) { const overdue = Math.abs(hours); return overdue < 1 ? "Due now!" : `Overdue by ${overdue}h`; } if (days >=
        1) return days === 1 ? "Due tomorrow" : `Due in ${days} days`;
    if (hours >= 1) return `Due in ${hours} hours`;
    return `Due in ${minutes} minutes`;
}

function updateTime() {
    timeRemainingEl.textContent = getTimeRemaining(dueDate);
}

// init
dueDateEl.textContent = formatDueDate(dueDate);
updateTime();
setInterval(updateTime, 60000);

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        title.classList.add("completed");
        status.textContent = "✅ Done";
        status.className = "status done";
    } else {
        title.classList.remove("completed");
        status.textContent = "⏳ Pending";
        status.className = "status pending";
    }
});

editBtn.onclick = () => console.log("edit clicked");
deleteBtn.onclick = () => alert("Delete clicked");