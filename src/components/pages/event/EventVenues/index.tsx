import HeadlineWithCircle from "@/components/common/HeadlineWithCircle";
import ImageComponent from "@/components/common/ImageComponent";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useWindowDimensions } from "@/hooks/getWindowDimensions";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import InspireCard, { InspireCardType } from "../InspireCard";
import Slider from "react-slick";
import GlobalState from "@/stores/GlobalState";

const EventVenues = () => {
  const {
    content: {
      venuesPosts,
      acf: { block_17 },
    },
    icons,
  } = useContentState();

  const [touchableValue, setValue] = useState({
    x: -1,
    y: -1,
  });
  const sliderRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = width > 1280 ? 3 : width <= 767 ? 1 : 2;
  const [showLast, setLast] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1, // slidesToShow,
    arrow: false,
    variableWidth: true,
    initialSlide: 0,
    swipeToSlide: true,
    draggable: GlobalState.isTouch,
  };
  const slideChange = (index: number) => {
    const arrowRight = containerRef?.current?.querySelector(".slick-next");
    if (arrowRight) {
      setLast(arrowRight.classList.contains("slick-disabled"));
    }

    setCurrentSlide(index);
  };
  const slickNext = () => sliderRef?.current.slickNext();
  const slickPrev = () => sliderRef?.current.slickPrev();
  const isFirstSlide = () => !currentSlide;

  return (
    <section className="event-venues">
      <div className="event-venues__top">
        <HeadlineWithCircle
          text={block_17?.title}
          vectorStyle="v2"
          headLevel="h2"
          color="black"
          indexStart={1}
        />

        <div
          className={classNames(
            "event-venues__btns",
            Math.ceil(venuesPosts?.length / slidesToShow) == 1 && "hide-slider"
          )}
        >
          <div
            className={classNames(
              "event-venues__btns-btn prev",
              isFirstSlide() && "disable"
            )}
            onClick={slickPrev}
          >
            <ImageComponent img={icons.icon_caret} />
          </div>
          <div
            className={classNames(
              "event-venues__btns-btn",
              showLast && "disable"
            )}
            onClick={slickNext}
          >
            <ImageComponent img={icons.icon_caret} />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "event-venues__list",
          isFirstSlide() && "first-child"
        )}
        ref={containerRef}

        onTouchStart={(e) => {
          const html: HTMLHtmlElement | null = document.querySelector("html");
          if (html && GlobalState.isTouch) {
            html.style.overflow = "hidden";
          }

          setValue({
            ...touchableValue,
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
          });
        }}
        onTouchEnd={(e) => {
          const html: HTMLHtmlElement | null = document.querySelector("html");
          if (html && GlobalState.isTouch) {
            html.style.overflow = "initial";
          }

          const touchEnd = e.changedTouches[0];
          const children =
            containerRef?.current?.querySelectorAll(".inspire-card");
          if (
            touchEnd.clientX != touchableValue.x &&
            touchEnd.clientY != touchableValue.y
          ) {
            children?.forEach((c) => c.classList.add("disabled"));
          } else children?.forEach((c) => c.classList.remove("disabled"));
        }}
      >
        <Slider {...settings} ref={sliderRef} afterChange={slideChange}>
          {venuesPosts?.map((co: InspireCardType, i: number) => (
            <InspireCard item={co} key={i} withText={block_17?.withText} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventVenues;
