if (window.location.pathname.split("/").pop() !== "index.html" && window.matchMedia("(max-width: 768px)").matches) {
    window.location.replace("index.html");
}

