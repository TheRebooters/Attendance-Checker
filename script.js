const generateQRButton = document.getElementById("generateQR");
const rollNumberInput = document.getElementById("rollNumber");
const qrcodeContainer = document.getElementById("qrcode");

generateQRButton.addEventListener("click", () => {
    const rollNumber = rollNumberInput.value.trim();

    if (!rollNumber) {
        alert("Please enter a valid roll number.");
        return;
    }

    // Generate the QR code
    else{
        const qrcode = new QRCode(qrcodeContainer, {
        text: rollNumber,
        width: 128,
        height: 128
    });
    generateQRButton.setAttribute("disabled",true);
}
});
