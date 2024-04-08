let inputName = "";

function closeCard() {
    let overly = document.querySelector(".overly")
    overly.style.display = "none"
}
function containsNoNumbers(inputString) {
    // استخدم التعبير العادي للبحث عن أي أرقام
    const regex = /\d/;
    return !regex.test(inputString);
  }

function createCard() {
    inputName = document.getElementById("nameInput").value.trim();
    if (inputName != "" && containsNoNumbers(inputName)) {
        let overly = document.querySelector(".overly")
        let cardImage = document.querySelector(".overly img")
        const card = document.querySelector(".card");
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const canvas = document.createElement("canvas");
        canvas.width = cardWidth;
        canvas.height = cardHeight;
        const ctx = canvas.getContext("2d");

        // Draw the background image
        const backgroundImage = document.querySelector(".background-image");
        ctx.drawImage(backgroundImage, 0, 0, cardWidth, cardHeight);
        //ctx.fillStyle = "#000000a9"; // White text color
        //ctx.fillRect(0,0,1000,1000)


        // Draw the card content onto the canvas
        ctx.font = "24px 'Cairo', sans-serif";
        ctx.fillStyle = "#e7c479";
        ctx.textAlign = "center";
         // White text color
        ctx.fillText(inputName, (cardWidth / 2), cardHeight - (cardHeight / 4));
        // ctx.fillText("Created by Hazem Ali", 260, 340);

        // Convert canvas to data URL (PNG format)
        const dataUrl = canvas.toDataURL("image/png");

        // Create a temporary link and trigger download
        const link = document.getElementById("download");
        link.href = dataUrl;
        link.download = "greeting_card.png";
        overly.style.display = "flex"
        cardImage.src = dataUrl
    } else {
        alert("اكتب اسمك أولا")
    }
}
