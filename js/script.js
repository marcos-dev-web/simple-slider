const q = (e) => document.querySelector(e);
const ce = (e) => document.createElement(e);

const dataLayout = [
  {
    title: "A kid in the snow",
    image: "./img/image1.jpg",
    text: "what a beautiful kid in the snow, really really beautiful",
  },
  {
    title: "A kid in the snow again",
    image: "./img/image2.jpg",
    text: "what a beautiful kid in the snow again",
  },
];

const slider = {
  container: q(".container-slider"),

  functions: {
    create(content) {
      let title = content.title;
      let image = content.image;
      let text = content.text;

      const elements = {
        section: ce("section"),
        div_title: ce("div"),
        div_image: ce("div"),
        div_description: ce("div"),
        h1: ce("h1"),
        img: ce("img"),
        p: ce("p"),
      };

      elements.section.classList.add("slider");
      elements.div_title.classList.add("title_slider");
      elements.div_image.classList.add("image_slider");
      elements.div_description.classList.add("description_slider");

      elements.h1.innerText = title;
      elements.img.src = image;
      elements.p.innerText = text;

      elements.div_title.appendChild(elements.h1);
      elements.div_image.appendChild(elements.img);
      elements.div_description.appendChild(elements.p);

      elements.section.appendChild(elements.div_title);
      elements.section.appendChild(elements.div_image);
      elements.section.appendChild(elements.div_description);

      return elements.section;
    },
    render(element) {
      slider.container.appendChild(element);
    },
    reset() {
      slider.container.innerHTML = "";
    },
  },
};

var position = 0;

const changeView = (pos = 0) => {
  if (typeof pos == "object") {
    pos = 0;
  }
  slider.functions.reset();
  let sliderCreated = slider.functions.create(dataLayout[pos]);
  slider.functions.render(sliderCreated);
};

window.onload = changeView;

setInterval(() => {
  window.onload = "";
  changeView(position);
  position = position < dataLayout.length - 1 ? position + 1 : 0;
}, 5000);
