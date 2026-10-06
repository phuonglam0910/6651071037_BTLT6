function display_random_image() {
  const images = [
    {
      src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
      width: 240,
      height: 160
    },
    {
      src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
      width: 320,
      height: 195
    },
    {
      src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
      width: 500,
      height: 343
    }
  ];
  const image = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement("img");

  img.src = image.src;
  img.width = image.width;
  img.height = image.height;
  img.alt = "Random image";
  document.getElementById("imageContainer").replaceChildren(img);
}