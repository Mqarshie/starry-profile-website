function createStarWithRandomLink() {
    const star = document.createElement("a");
    star.className = "star";

    const randomUrls = [
        "https://example.com",
        "https://example.com",
        "https://example.com",
        "https://example.com",
    ];

    const randomIndex = Math.floor(Math.random() * randomUrls.length);
    star.href = randomUrls[randomIndex];
    star.target = "_blank";
    star.style.width = Math.random() * 3 + 1 + "px";
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 200 + "vh";
    return star;
}

const background = document.getElementById("background");
for (let i = 0; i < 50; i++) {
    const star = createStarWithRandomLink();
    background.appendChild(star);
}
