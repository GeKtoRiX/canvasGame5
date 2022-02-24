import "./styles/canvasStyles.css";
// Доступ к холсту.
const htmlCanvas = document.getElementById("canvas");
const canvas = htmlCanvas.getContext("2d");
// Определение ширины и высоты холста равную окну браузера.
htmlCanvas.width = window.innerWidth - 4;
htmlCanvas.height = window.innerHeight - 4;
