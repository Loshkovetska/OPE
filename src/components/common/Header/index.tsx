import { useContentState } from "@/hooks/RootStoreProvider";
import GlobalState, {
  changeContactState,
  changeMenuState,
} from "@/stores/GlobalState";
import classNames from "classnames";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import Navigation from "../Navigation";
const Header = observer(() => {
  const { header } = useContentState();
  const ref = useRef<HTMLElement | null>(null);

  const touchScroll = (scrollPos: number) => {
    const y = window.pageYOffset;
    const direction = scrollPos > y ? "up" : "down";
    if (!ref.current) return;

    const headerHeight =
      ref.current?.getBoundingClientRect().height +
      +getComputedStyle(ref.current).top.replaceAll("px", "");
    if (y > headerHeight) {
      ref.current.classList.add("hidden");
      ref.current.classList.add("fixed");

      if (direction == "up") {
        ref.current.classList.remove("hidden");
      }
    } else {
      ref.current.classList.remove("hidden");
      ref.current.classList.remove("fixed");
    }

    return y || 0;
  };

  const deskScroll = (args: any) => {
    const {
      direction,
      scroll: { y },
    } = args;

    if (!ref.current) return;
    const headerHeight =
      ref.current?.getBoundingClientRect().height +
      +getComputedStyle(ref.current).top.replaceAll("px", "");

    if (y > headerHeight) {
      ref.current.classList.add("hidden");
      ref.current.classList.add("fixed");
      if (direction == "up") {
        ref.current.classList.remove("hidden");
      }
    } else {
      ref.current.classList.remove("hidden");
      ref.current.classList.remove("fixed");
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    if (GlobalState.isTouch) {
      let scrollY = 0;

      window.addEventListener("scroll", () => {
        scrollY = touchScroll(scrollY) || 0;
      });
      return;
    }

    if (GlobalState.locoScroll) {
      GlobalState.locoScroll?.on("scroll", (args: any) => {
        deskScroll(args);
      });
    }
  }, [GlobalState.locoScroll, GlobalState.isTouch]);

  useEffect(() => {
    if (GlobalState.isMenuOpen) {
      ref.current?.classList.add("menu-open");
    } else {
      ref.current?.classList.remove("menu-open");
    }
  }, [GlobalState.isMenuOpen]);
  return (
    <header className={classNames("header")} ref={ref}>
      <a className="header__left" href="/">
        <img
          className="header__logo"
          alt={header?.logotype?.alt}
          src={header?.logotype?.url}
        />
      </a>
      <Navigation />
      <div className="header__func">
        {/* <div className="header__func-locale">
          <img src={header?.locale_icon?.url} alt={header?.locale_icon?.alt} />
        </div> */}
        <Button
          classStr="white"
          content={header?.getin}
          onClick={changeContactState}
        />
      </div>
      <div className="header__hamburger" onClick={changeMenuState}>
        <img
          src={header?.menu_open?.url}
          alt={header?.menu_open?.alt}
          className={GlobalState.isMenuOpen ? "hidden" : ""}
        />
        <img
          src={header?.menu_close?.url}
          alt={header?.menu_close?.alt}
          className={!GlobalState.isMenuOpen ? "hidden" : ""}
        />
      </div>
    </header>
  );
});

export default Header;
