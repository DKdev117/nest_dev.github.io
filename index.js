const header = document.querySelector(".page-header");

const observer = new IntersectionObserver(
  (entries) => {
    const ant = entries[0];

    !ant.isIntersecting
      ? document.body.classList.add("body-new")
      : document.body.classList.remove("body-new");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(header);
