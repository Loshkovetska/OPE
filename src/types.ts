export type MenuType = {};

export type GlobalStateType = {
  locoScroll: any;
  isMenuOpen: boolean;
  lang: {
    lang: string;
    short_lang: string;
  };
  isContactPop: boolean;
  isThanksPOP: boolean;
  isTouch: boolean;
  isBottomSheetOpen: boolean;
  bottomSheetValue: string;
};

export type ServiceItemType = {
  acf: {
    preview_image: {
      sizes: {
        large: string;
      };
      alt: string;
    };
  };
  title: {
    rendered: string;
  };
};

export type ReviewItemType = {
  subtitle: string;
  text: string;
  author_name: string;
  author_position: string;
};

export type BlogPostType = {
  title: {
    rendered: string;
  };
  date: string;
  type: string;
  cats: Array<string>;
  slug: string;
  acf: {
    author: string;
    img: {
      url: string;
      alt: string;
    };
    preview_text: string;
  };
};

export type FaqItemType = {
  title: string;
  text: string;
};

export type FooterColType = {
  id: number;
  title: string;
  children?: Array<FooterLinkType>;
};
export type FooterLinkType = {
  title: string;
  url: string;
};

export type EventType = string;

export type IndustryType = string;

export type CaseItem = {
  id: number;
  date: string;
  slug: string;
  link: string;
  content: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  event_type: Array<EventType>;
  industries: Array<IndustryType>;
  preview_text: string;
  preview_image: any;
  main_picture: any;
  related_cases: Array<CaseItem>;
};
