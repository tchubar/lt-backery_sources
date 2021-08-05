import React, {useState, useRef, useEffect} from 'react';

import { ReactComponent as Arrow } from '../../icons/arrow_left.svg';

function getSliderInfo(elem, position, itemSize) {
  let currentItem = Math.abs(position / itemSize);
  let vilisbleElementsCount = Math.round(elem.clientWidth / itemSize);
  let maxPos = elem.childNodes.length - vilisbleElementsCount;

  return [currentItem, maxPos];
}

export default function Slider({
  containerStyle,
  trackStyle,
  leftButtonStyle,
  rightButtonStyle,
  size,
  breakpoints,
  children
}) {

  const sliderTrack = useRef(null);
  const [itemSize, setItemSize] = useState(300);
  let position = 0;

  useEffect(() => {
    function handleResize() {
      let points = Object.entries(breakpoints);
      if (points.length == 1 && points[0][1] == 0) {
        setItemSize(sliderTrack.current.clientWidth);
      } else {
        let index = points
                  .reverse()
                  .map(el => el[0] > size.width
                    ? ''
                    : el[0])
                  .filter(el => el != '')[0];
                  console.log(index);
        setItemSize(breakpoints[index]);
      }

      sliderTrack.current.childNodes.forEach(el => {
        el.style = `transform: translateX(0px)`;
      })
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  });

  const nextHandler = () => {
    const [currentItem, maxPos] = getSliderInfo(sliderTrack.current, position, itemSize);
    if (currentItem >= maxPos) {
      position = 0;
    } else {
      position -= itemSize;
    }

    sliderTrack.current.childNodes.forEach(el => {
      el.style = `transform: translateX(${position}px)`;
    })
  }

  const prevHandler = () => {
    const [currentItem, maxPos] = getSliderInfo(sliderTrack.current, position, itemSize);
    if (currentItem <= 0) {
      position = -maxPos * itemSize;
    } else {
      position += itemSize;
    }
    sliderTrack.current.childNodes.forEach(el => {
      el.style = `transform: translateX(${position}px)`;
    })
  }

  return (
    <div className={containerStyle}>
      <div
        className={trackStyle}
        ref={sliderTrack}
      >
        { children }
      </div>
      <Arrow
        className={leftButtonStyle}
        onClick={prevHandler}
      />
      <Arrow
        className={rightButtonStyle}
        onClick={nextHandler}
      />
    </div>
  );
}

