import H3 from "@/components/common/H3";
import ImageComponent from "@/components/common/ImageComponent";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useWindowDimensions } from "@/hooks/getWindowDimensions";
import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ProcessItem from "../ProcessItem";

const ProcessSlider = () => {
  const {
    content: { block_6 },
    icons,
  } = useContentState();
  const sliderRef = useRef<any>(null);
  const [indexesSlides, setIndexes] = useState<Array<number>>([0]);
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = width > 1280 ? 3 : width <= 900 ? 1 : 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrow: false,
    variableWidth: true,
    initialSlide: 0,
  };

  useEffect(() => {
    setIndexes([0]);
    setCurrentSlide(0);
  }, [width]);

  const [isLast, setLast] = useState(false);

  const slickNext = () => sliderRef?.current.slickNext();
  const slickPrev = () => sliderRef?.current.slickPrev();
  const slideChange = (index: number) => {
    setCurrentSlide(index);
    setLast(index + 1 == block_6?.list?.length);
  };
  const padWithLeadingZeros = (num: number, totalLength: number) => {
    return String(num).padStart(totalLength, "0");
  };

  const sliderContRef = useRef<HTMLDivElement | null>(null);

  const isFirstSlide = () => !currentSlide;
  const getCurrentSlide = () => currentSlide + 1;

  return (
    <div className={classNames("process__slider")}>
      <div className="process__slider-top">
        <span className="process__slider-current">
          {padWithLeadingZeros(getCurrentSlide(), 2)} -{" "}
          {padWithLeadingZeros(Math.ceil(block_6?.list?.length / 1), 2)}
        </span>
        <div className="process__slider-btns">
          <div
            className={classNames(
              "process__slider-btn prev",
              isFirstSlide() && "disable"
            )}
            onClick={slickPrev}
          >
            <ImageComponent img={icons.icon_caret} />
          </div>
          <div
            className={classNames("process__slider-btn", isLast && "disable")}
            onClick={slickNext}
          >
            <ImageComponent img={icons.icon_caret} />
          </div>
        </div>
      </div>
      <div className="process__slider-list" ref={sliderContRef}>
        <Slider {...settings} ref={sliderRef} afterChange={slideChange}>
          {block_6?.list?.map(
            (
              co: {
                title: string;
                icon: {
                  url: string;
                  alt: string;
                };
                text: string;
              },
              i: number
            ) => (
              <ProcessItem key={i} co={co} />
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ProcessSlider;
//  const isLastSlide = () => {
//    let flag = false;
//    if (!sliderContRef.current) return flag;

//    console.log("true");

//    const slides = sliderContRef.current?.querySelectorAll(".slick-slide");
//    if (slides) {
//      const disableSlide = Array.from(slides).find((c) =>
//        c.classList.contains("slick-disable")
//      );
//      if (disableSlide) {
//        flag = true;
//      }
//    }

//    return flag;
//  };

// const maxLength = Math.ceil(block_6?.list?.length / slidesToShow);
// let arr = indexesSlides;
// if (!indexesSlides.includes(index) && indexesSlides?.length < maxLength) {
//   setIndexes([...indexesSlides, index].sort((c, a) => c - a));
//   arr = [...indexesSlides, index].sort((c, a) => c - a);
// }

// arr.forEach((c, i) => {
//   if (c == index) {
//     setCurrentSlide(i);
//   }
// });
