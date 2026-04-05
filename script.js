function showMessage() {
    alert("Hello, JavaScript!");
}

function showInfo(id) {
    const info = document.getElementById(id);
    info.style.display = info.style.display === "none" ? "block" : "none";
  }