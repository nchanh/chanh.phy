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

/*
 ************************************************************
 */
let idx = 0;
const posts = IMAGES;

// init
// hdlShowLoading()
printPhotos(posts, idx);

window.addEventListener("DOMContentLoaded", (event) => {
  hdlShowLoading();
});

window.addEventListener("load", (event) => {
  hdlHideLoading();
});

document.addEventListener("scroll", (event) => {
  const scrollY = window.scrollY;
  const elmHeader = document.getElementById("header");
  if (scrollY >= 300) {
    elmHeader.classList.add("header-scroll");
  } else {
    elmHeader.classList.remove("header-scroll");
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
  const elmMain = document.getElementById("main");
  const subTop = screen.width >= 912 ? 20 : 40;
  window.scrollBy(0, elmMain.offsetTop - subTop)
}
