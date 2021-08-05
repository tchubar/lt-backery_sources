export default function importImagesFromFolder(r) {
  let images = {};

  r.keys().forEach((item, index) => {images[item.replace('./', '')] = r(item);});

  // return Object.entries(images)
  //         .map((el, key) => <img key={key} src={`${el[1].default}`} alt="" />);

  return images;
}