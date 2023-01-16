const IMAGES = [
  {
    id: 1,
    name: "m1",
    src: "/assets/m1.jpg",
  },
  {
    id: 2,
    name: "m2",
    src: "/assets/m2.jpg",
  },
  {
    id: 3,
    name: "m3",
    src: "/assets/m3.jpg",
  },
  {
    id: 4,
    name: "a1",
    src: "/assets/a1.jpg",
  },
  {
    id: 5,
    name: "a2",
    src: "/assets/a2.jpg",
  },
  {
    id: 6,
    name: "a3",
    src: "/assets/a3.jpg",
  },
  {
    id: 7,
    name: "s1",
    src: "/assets/s1.jpg",
  },
  {
    id: 8,
    name: "s2",
    src: "/assets/s2.jpg",
  },
  {
    id: 9,
    name: "s3",
    src: "/assets/s3.jpg",
  },
];

const newBlock = document.createDocumentFragment();
IMAGES.forEach((item) => {
  const newDiv = document.createElement("div");
  newDiv.id = `item-${item.id}`;
  newDiv.className = "item col-lg-4";

  const pathName = window.location.href
  const newImg = document.createElement("img");
  newImg.alt = item.name;
  newImg.src = pathName + item.src;
  newDiv.appendChild(newImg);

  newBlock.appendChild(newDiv);
});

document.getElementById("wrapper").appendChild(newBlock);
