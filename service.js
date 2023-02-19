const IMAGES = [
  [
    {
      id: 1,
      caption: "m1",
      media_url: "/assets/m1.jpg",
    },
    {
      id: 2,
      caption: "m2",
      media_url: "/assets/m2.jpg",
    },
    {
      id: 3,
      caption: "m3",
      media_url: "/assets/m3.jpg",
    },
    {
      id: 4,
      caption: "a1",
      media_url: "/assets/a1.jpg",
    },
    {
      id: 5,
      caption: "a2",
      media_url: "/assets/a2.jpg",
    },
    {
      id: 6,
      caption: "a3",
      media_url: "/assets/a3.jpg",
    },
    {
      id: 7,
      caption: "s1",
      media_url: "/assets/s1.jpg",
    },
    {
      id: 8,
      caption: "s2",
      media_url: "/assets/s2.jpg",
    },
    {
      id: 9,
      caption: "s3",
      media_url: "/assets/s3.jpg",
    },
  ],
  [
    {
      id: 1,
      caption: "m1",
      media_url: "/assets/m1.jpg",
    },
    {
      id: 2,
      caption: "m2",
      media_url: "/assets/m2.jpg",
    },
    {
      id: 3,
      caption: "m3",
      media_url: "/assets/m3.jpg",
    },
    {
      id: 4,
      caption: "a1",
      media_url: "/assets/a1.jpg",
    },
    {
      id: 5,
      caption: "a2",
      media_url: "/assets/a2.jpg",
    },
    {
      id: 6,
      caption: "a3",
      media_url: "/assets/a3.jpg",
    },
    {
      id: 7,
      caption: "s1",
      media_url: "/assets/s1.jpg",
    },
    {
      id: 8,
      caption: "s2",
      media_url: "/assets/s2.jpg",
    },
    {
      id: 9,
      caption: "s3",
      media_url: "/assets/s3.jpg",
    },
  ],
  [
    {
      id: 1,
      caption: "m1",
      media_url: "/assets/m1.jpg",
    },
    {
      id: 2,
      caption: "m2",
      media_url: "/assets/m2.jpg",
    },
    {
      id: 3,
      caption: "m3",
      media_url: "/assets/m3.jpg",
    },
    {
      id: 4,
      caption: "a1",
      media_url: "/assets/a1.jpg",
    },
    {
      id: 5,
      caption: "a2",
      media_url: "/assets/a2.jpg",
    },
    {
      id: 6,
      caption: "a3",
      media_url: "/assets/a3.jpg",
    },
    {
      id: 7,
      caption: "s1",
      media_url: "/assets/s1.jpg",
    },
    {
      id: 8,
      caption: "s2",
      media_url: "/assets/s2.jpg",
    },
    {
      id: 9,
      caption: "s3",
      media_url: "/assets/s3.jpg",
    },
  ],
];

const COLORS = [
  {
    name: "color-1",
    translateX: 200,
    translateY: 400,
    isNegativeX: true,
    color: "#f0c74f",
  },
  {
    name: "color-2",
    translateX: 400,
    translateY: 800,
    isNegativeY: true,
    color: "#f97d3f",
  },
  {
    name: "color-3",
    translateX: 400,
    translateY: 800,
    color: "#2c97ca",
  },
  {
    name: "color-4",
    translateX: 200,
    translateY: 400,
    isNegativeY: true,
    color: "#65d9fe",
  },
];

const isValid = (_posts, _idx) => _posts.length - 1 <= _idx;

const hdlStatusBtnPaginate = (_posts, _idx) => {
  const elmBtnPaginate = document.getElementById("buttonPaginate");
  if (isValid(_posts, _idx)) {
    elmBtnPaginate.style.display = "none";
  } else {
    elmBtnPaginate.style.display = "block";
  }
};

const printPhotos = (_posts, _idx) => {
  const eleWrapper = document.createDocumentFragment();

  // caption, id, media_type, media_url, permalink, timestamp, is_shared_to_feed
  _posts[_idx].forEach((item) => {
    const eleDivItem = document.createElement("div");
    eleDivItem.id = `item-${item.id}`;
    eleDivItem.className = "item col-lg-4";

    // Begin - Children eleDivItem
    const eleImage = document.createElement("img");
    eleImage.alt = item.timestamp;
    eleImage.src = item.media_url;
    eleDivItem.appendChild(eleImage);

    const eleInfo = document.createElement("div");
    eleInfo.className = "image-info";

    // Begin - Children eleInfo
    const eleInfoText = document.createElement("pre");
    eleInfoText.className = "text";
    eleInfoText.innerHTML = item.caption;
    eleInfo.appendChild(eleInfoText);

    const eleInfoLink = document.createElement("a");
    eleInfoLink.className = "btn-link";
    eleInfoLink.href = item.permalink;
    eleInfoLink.target = "_blank";
    eleInfoLink.innerHTML = "See details";
    eleInfo.appendChild(eleInfoLink);
    // End - Children eleInfo

    eleDivItem.appendChild(eleInfo);

    const eleOverlay = document.createElement("div");
    eleOverlay.className = "overlay";
    eleDivItem.appendChild(eleOverlay);
    // End - Children eleInfo

    eleWrapper.appendChild(eleDivItem);
  });

  document.getElementById("wrapper").appendChild(eleWrapper);
  hdlStatusBtnPaginate(_posts, _idx);
};

const eleLoading = document.getElementById("loading");
const hdlHideLoading = () => {
  eleLoading.style.display = "none";
};
const hdlShowLoading = (time = 0) => {
  eleLoading.style.display = "block";

  setTimeout(() => {
    time !== 0 && hdlHideLoading();
  }, time);
};

const hdlShowBackground = (item, percent, isShowFull = false) => {
  const elmWrapperColor = document.getElementById("wrapper-color");

  const bgColor14 = `
linear-gradient(
to right,
#f0c74f 0%,
#65d9fe 100%
)
`;

  const bgColorFull = `
linear-gradient(
to right,
#f0c74f 0%,
#f97d3f 37.5%,
#2c97ca 62.75%,
#65d9fe 100%
)
`;

  if (item.name === "color-1" || item.name === "color-4") {
    if (percent >= 100) {
      elmWrapperColor.style.background = bgColor14;
    } else {
      elmWrapperColor.style.background = "none";
    }
  }

  if (item.name === "color-2" || item.name === "color-3") {
    if (percent >= 100) {
      elmWrapperColor.style.background = bgColorFull;
    } else {
      elmWrapperColor.style.background = bgColor14;
    }
  }
};

const hdlShowColor = (percent) => {
  const addNegative = (isNegative) => (isNegative ? "-" : "");

  COLORS.forEach((item) => {
    const elmColor = document.getElementById(item.name);

    let newPercent = percent;
    if (item.name === "color-2" || item.name === "color-3") {
      newPercent = newPercent - 20;
      hdlShowBackground(item, newPercent, true);
    }

    if (newPercent > 100) {
      elmColor.style.transform = `translate(0%, 0%)`;
      return;
    }

    const translateX = item.translateX - (item.translateX / 100) * newPercent;
    const translateY = item.translateY - (item.translateY / 100) * newPercent;

    elmColor.style.transform = `translate(${addNegative(
      item.isNegativeX
    )}${translateX}%, ${addNegative(item.isNegativeY)}${translateY}%)`;

    hdlShowBackground(item, newPercent);
  });
};

const hdlShowText = (percentDetail) => {
  document
    .getElementById("color-title")
    .style.setProperty("--slash", `${percentDetail - 30}%`);

  const elmSubtitle = document.getElementById("color-subtitle");
  if (percentDetail >= 110) {
    elmSubtitle.style.opacity = 1;
  } else {
    elmSubtitle.style.opacity = 0;
  }
};

/*
 ************************************************************
 */
let idx = 0;
const posts = IMAGES;
let clipPathHeight = 0;

// init
// hdlShowLoading()
printPhotos(posts, idx);

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.overflow = "hidden";
  hdlShowLoading();
});

window.addEventListener("load", () => {
  document.body.style.overflow = "auto";
  hdlHideLoading();
});

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const innerHeight = window.innerHeight;

  // Scroll Indicator
  const percentScrollBody =
    (scrollY / (document.documentElement.scrollHeight - innerHeight)) * 100;
  document.getElementById(
    "wrapper-scroll-indicator"
  ).style.width = `${percentScrollBody}%`;

  // Scroll of Header
  const elmHeader = document.getElementById("header");
  if (scrollY >= 300) {
    elmHeader.classList.add("header-scroll");
  } else {
    elmHeader.classList.remove("header-scroll");
  }

  // Show colors
  const elmMain = document.getElementById("main");
  const elmWrapper = document.getElementById("wrapper");
  const elmWrapperColor = document.getElementById("wrapper-color");
  const offsetTopMain = elmMain.offsetTop;
  if (scrollY >= offsetTopMain && elmWrapper.offsetTop > scrollY) {
    elmWrapperColor.style.opacity = 1;
    const percentDetail = Math.ceil((scrollY - (offsetTopMain - 300)) / 10);
    const percent = Math.ceil(percentDetail / 10) * 10;
    hdlShowColor(percent);
    hdlShowText(percentDetail);
  } else {
    elmWrapperColor.style.opacity = 0;
  }

  // Show Clip path
  const elmWrapperClipPath = document.getElementById("wrapper-clip-path");
  const elmClipPath = document.getElementById("clip-path");
  const scrollInnerHeight = scrollY + innerHeight;
  const offsetTopWrapper = elmWrapperClipPath.offsetTop;

  if (item.name === "color-1" || item.name === "color-4") {
    if (percent >= 100) {
      document.body.style.background = bgColor14;
    } else {
      document.body.style.background = "#0d0d0d";
    }
  }

  if (item.name === "color-2" || item.name === "color-3") {
    if (percent >= 100) {
      document.body.style.background = bgColorFull;
    } else {
      document.body.style.background = bgColor14;
    }
  }
});

/*
 ************************************************************
 */

const hdlClickPaginate = () => {
  idx++;
  printPhotos(posts, idx);

  hdlShowLoading(3000);
};

const hdlScrollBody = () => {
  const elmMain = document.getElementById("wrapper");
  const subTop = screen.width >= 912 ? 20 : 40;
  window.scrollBy(0, elmMain.offsetTop - subTop);
};
