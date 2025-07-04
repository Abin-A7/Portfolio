// Modal open and close logic
function showModal(message) {
    document.getElementById("modalText").textContent = message;
    document.getElementById("customModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("customModal").style.display = "none";
}

// Block right-click
document.oncontextmenu = () => {
    showModal("Right-click is disabled!");
    return false;
};

// Block DevTools and common shortcuts
document.onkeydown = (e) => {
    const key = e.key.toLowerCase();

    if (key === "f12") {
        showModal("DevTools are blocked!");
        return false;
    }

    if (e.ctrlKey && e.shiftKey && (key === "i" || key === "c")) {
        showModal("Inspector is disabled!");
        return false;
    }

    if (e.ctrlKey && ["u", "c", "v", "s", "p"].includes(key)) {
        showModal(`Shortcut Ctrl+${key.toUpperCase()} is disabled!`);
        return false;
    }

    // Screenshot (best effort)
    if (key === "printscreen") {
        document.body.style.filter = "blur(10px)";
        showModal("Screenshot attempt blocked!");
        setTimeout(() => document.body.style.filter = "none", 2000);
    }
};

// Block text selection
document.addEventListener("selectstart", (e) => {
    e.preventDefault();
    showModal("Text selection disabled!");
});

// Block drag
document.addEventListener("dragstart", (e) => {
    e.preventDefault();
    showModal("Dragging not allowed!");
});
// Block copy
document.addEventListener("copy", (e) => {
    e.preventDefault();
    showModal("Copying is disabled!");
});