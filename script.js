/* PAGE CONTROL */
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");

  if (currentPage === 2) {
    startTyping();
  }
}

/* PHOTO GALLERY */
const photos = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg"
];

let photoIndex = 0;

function nextPhoto() {
  photoIndex = (photoIndex + 1) % photos.length;
  document.getElementById("photo").src = photos[photoIndex];
}

/* TYPEWRITER EFFECT */
const message = `
给我最最可爱的小宝宝：

生日快乐呀，小宝贝。又陪你走过了一年，虽然我们隔着一点距离，但我对你的喜欢、心疼、想念，一点都没有被拉远。反而每天都在悄悄变得更深。

希望你这一年里，每一天都能被快乐轻轻抱住，被好运温柔照顾。你笑起来的样子，是我最喜欢的风景，我真的希望你天天都能这么开心。

异地真的不容易，可是我们都在努力往同一个方向走。再坚持一下下，等我们终于不用隔着屏幕说晚安的那天，我一定把你整个人抱得紧紧的，让你所有的委屈、想念、等待都变成值得。

小宝宝，生日这天，你要记得：
你被爱着，被惦记着，被男朋友牢牢放在心尖上。

愿你生日愿望都实现，愿你永远被温柔对待，也愿我永远是那个让你笑得最甜的人。

大抱抱送给你。  
男朋友 ❤️
`;

let i = 0;

function startTyping() {
  const target = document.getElementById("typewriter");
  const interval = setInterval(() => {
    target.textContent += message[i];
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 50);
}
