export default class Slide {
  constructor(slideImages, slideTexts, slideLabels) {
    this.slideImages = document.querySelectorAll(slideImages);
    this.slideTexts = document.querySelectorAll(slideTexts);
    this.slideLabels = document.querySelectorAll(slideLabels);

    this.changeContent = this.changeContent.bind(this);
  }

  addActiveClass(item, itemList) {
    itemList.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  }

  changeContent() {
    for (let c = 0; c < 3; c++) {
      setTimeout(() => {
        this.addActiveClass(this.slideImages[c], this.slideImages);
        this.addActiveClass(this.slideTexts[c], this.slideTexts);
        this.addActiveClass(this.slideLabels[c], this.slideLabels);
      }, 6000 * c);
    }
  }

  changeContentLoop() {
    this.changeContent();
    setInterval(this.changeContent, 18000);
  }

  init() {
    if(this.slideImages.length) {
      this.changeContentLoop();
    }
  }
}
