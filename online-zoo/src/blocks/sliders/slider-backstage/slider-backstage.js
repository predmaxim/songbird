document.addEventListener('DOMContentLoaded', () => {
  // const sliderContainer = document.querySelector(".backstage-slider");
  // const slider = document.querySelector('.backstage__slider');
  // const allSlides = document.querySelectorAll(".backstage__slider-container");
  // const prev = document.querySelector('.control-buttons .button.left');
  // const next = document.querySelector('.control-buttons .button.right');
  // const prevIcon = document.querySelector('.control-buttons .button.left .mdi');
  // const nextIcon = document.querySelector('.control-buttons .button.right .mdi');


  const slider = new Carousel({
    "main": ".backstage-slider",
    "wrap": ".backstage__slider",
    "prev": ".control-buttons .button.left",
    "next": ".control-buttons .button.right"
  });


  function Carousel(setting) {

    /* Scope privates methods and properties */
    let privates = {};

    /* Privates properties */
    privates.setting = setting;

    privates.sel = {
      "main": document.querySelector(privates.setting.main),
      "wrap": document.querySelector(privates.setting.wrap),
      "children": document.querySelector(privates.setting.wrap).children,
      "prev": document.querySelector(privates.setting.prev),
      "next": document.querySelector(privates.setting.next)
    };

    privates.opt = {
      "position": 0,
      "max_position": document.querySelector(privates.setting.wrap).children.length
    };

    // Control
    if (privates.sel.prev !== null) {
      privates.sel.prev.addEventListener('click', () => {
        this.prev_slide();
      });
    }

    if (privates.sel.next !== null) {
      privates.sel.next.addEventListener('click', () => {
        this.next_slide();
      });
    }

    /* Public methods */
    // Prev slide
    this.prev_slide = () => {
      --privates.opt.position;

      if (privates.opt.position < 0) {
        privates.sel.wrap.classList.add('s-notransition');
        privates.opt.position = privates.opt.max_position - 1;
      }
      privates.sel.wrap.style["transition"] = `.3s`;
      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
    };

    // Next slide
    this.next_slide = () => {
      ++privates.opt.position;

      if (privates.opt.position >= privates.opt.max_position) {
        privates.opt.position = 0;
      }

      privates.sel.wrap.style["transition"] = `.3s`;
      privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
    };
  }
})