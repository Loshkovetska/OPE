import { GlobalStateType } from "@/types";
import { observable, runInAction } from "mobx";

const GlobalState: GlobalStateType = observable({
  locoScroll: null,
  isMenuOpen: false,
  lang: {
    lang: "English",
    short_lang: "en",
  },
  isContactPop: false,
  isTouch: false,
  isBottomSheetOpen: false,
  bottomSheetValue: "",
  isThanksPOP: false,
});

export default GlobalState;

export const changeIsTouch = (touch: boolean) => {
  runInAction(() => {
    GlobalState.isTouch = touch;
  });
};
export const changeThanksPopState = () => {
  runInAction(() => {
    GlobalState.isThanksPOP = !GlobalState.isThanksPOP;
  });
};

export const changeMenuState = () => {
  runInAction(() => {
    GlobalState.isMenuOpen = !GlobalState.isMenuOpen;
  });
};
export const changeContactState = () => {
  runInAction(() => {
    GlobalState.isContactPop = !GlobalState.isContactPop;
  });
};

export const changeLocale = (obj: { lang: string; short_lang: string }) => {
  runInAction(() => {
    GlobalState.lang = obj;
  });
};

export const bottomSheetState = () => {
  runInAction(() => {
    GlobalState.isBottomSheetOpen = !GlobalState.isBottomSheetOpen;
  });
};

export const setBottomSheetValue = (value: string) => {
  runInAction(() => {
    GlobalState.bottomSheetValue = value;
    GlobalState.isBottomSheetOpen = !GlobalState.isBottomSheetOpen;
  });
};
