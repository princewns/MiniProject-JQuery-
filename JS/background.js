const images = ["0.jpg","1.jpg","2.jpg"];
//let index = Math.floor(Math.random()*images.length);
//const chooseImage = images[index]; μ λμΌν¨
const chooseImage = images[Math.floor(Math.random()*images.length)];
$("body").css("background",`url(./img/${chooseImage}) no-repeat fixed`);
