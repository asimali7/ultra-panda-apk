const labelTime = document.querySelector(".time");
const btnDownload = document.querySelector(".btn-download");
const timeText = document.querySelector(".time-text ");

let time = 10;

labelTime.textContent = `  `;
const timer = setInterval(function () {
  labelTime.textContent = `${time} `;
  if (time === 0) {
    clearInterval(timer);
    btnDownload.textContent = " ";
    btnDownload.textContent = `Download Ultra Panda APK`;
  }
  time--;
  console.log(time);
}, 1000);
