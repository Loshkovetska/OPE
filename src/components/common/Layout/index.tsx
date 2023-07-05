import GlobalState, { changeIsTouch } from "@/stores/GlobalState";
import { observer } from "mobx-react";
import { ReactNode, useEffect, useRef } from "react";
import ContactPop from "../ContactPop";
import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";
import SeoHeaders from "../SeoHeaders";
import { isMobile, isTablet } from "react-device-detect";
import ContactButton from "../ContactButton";
import CookiePop from "../CookiePop";
import ThanksPop from "../ThanksPop";

const Layout = observer(
  ({ children }: { children: Array<ReactNode> | ReactNode }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isTouch = () => {
      return isTablet || isMobile;
    };

    useEffect(() => {
      if (
        GlobalState.isContactPop ||
        GlobalState.isMenuOpen ||
        GlobalState.isBottomSheetOpen ||
        GlobalState.isThanksPOP
      ) {
        document
          .querySelector("body, html, #__next")
          ?.classList.add("hidden-menu");
        GlobalState.locoScroll?.stop();
      } else {
        document
          .querySelector("body, html, #__next")
          ?.classList.remove("hidden-menu");
        GlobalState.locoScroll?.start();
      }
    }, [
      GlobalState.isContactPop,
      GlobalState.isMenuOpen,
      GlobalState.locoScroll,
      GlobalState.isBottomSheetOpen,
      GlobalState.isThanksPOP,
    ]);

    useEffect(() => {
      changeIsTouch(isTouch());

      if (isTouch()) {
        document.querySelector("html")?.classList.add("touch-device");
      } else document.querySelector("html")?.classList.remove("touch-device");
    }, []);

    const updateScroll = () => {
      const smooth = document.querySelector(".smooth");
      if (smooth && window.ResizeObserver) {
        const resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.contentBoxSize) {
              GlobalState.locoScroll && GlobalState.locoScroll?.update();
            }
          }
        });
        resizeObserver.observe(smooth);
      }
    };
    useEffect(() => {
      setTimeout(() => {
        updateScroll();
      }, 1000);
    }, []);
    return (
      <>
        <SeoHeaders />
        <Header />
        <div className="smooth" ref={ref} data-scroll-container>
          {children}
          <Footer />
        </div>
        <Menu />
        <ContactPop />
        <ContactButton />
        <CookiePop />
        <ThanksPop />
      </>
    );
  }
);

export default Layout;
