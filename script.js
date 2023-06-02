var colors = [
  [
    "#A770EF",
    "#CF8BF3",
    "#FDB99B"
  ],
  [
    "#67B26F",
    "#4ca2cd"
  ],
  [
    "#ee0979",
    "#ff6a00"
  ],
  [
    "#DBE6F6",
    "#C5796D"
  ],
  [
    "#093028",
    "#237A57"
  ],
  [
    "#000046",
    "#1CB5E0"
  ],
  [
    "#396afc",
    "#2948ff"
  ],
  [
    "#fffbd5",
    "#b20a2c"
  ],
  [
    "#11998e",
    "#38ef7d"
  ],
  [
    "#0F2027",
    "#203A43",
    "#2C5364"
  ],
  [
    "#bdc3c7",
    "#2c3e50"
  ],
  [
    "#12c2e9",
    "#c471ed",
    "#f64f59"
  ]
  ,
  [
    "#C6FFDD",
    "#FBD786",
    "#f64f59"
  ]
  ,
  [
    "#FF0099",
    "#493240"
  ],
  [
    "#7F7FD5",
    "#86A8E7",
    "#91EAE4"
  ]
];

function randomizeAvatarBackground() {
  let selectedColor = colors[Math.floor(Math.random() * colors.length)];
  let backgroundCSS = "linear-gradient(120deg, "
  selectedColor.forEach((color, idx) => {
    backgroundCSS += color
    if (idx < selectedColor.length - 1) {
      backgroundCSS += ", "
    } else {
      backgroundCSS += ")"
    }
  })
  document.getElementById('bg-avatar').style.background = backgroundCSS;
}