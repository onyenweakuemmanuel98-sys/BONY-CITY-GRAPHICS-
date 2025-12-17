document.addEventListener("DOMContentLoaded", function () {

  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 3000);
  });

});
