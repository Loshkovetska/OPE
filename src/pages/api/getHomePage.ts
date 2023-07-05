import { getCommon } from "@/mocks/common";
import {
  getEvents,
  getNewsPerCount,
  getOptions,
  getPage,
} from "@/stores/ContentState";

export const getHomePage = async () => {
  const options = await getOptions();
  const page = await getPage(2);
  const news = await getNewsPerCount(3);
  const events = await getEvents();
  const menu = await getCommon(options);

  return {
    ...menu,
    content: {
      ...page?.acf,
      events: events,
      contact: options?.acf?.contact_form,
      news: options?.acf?.news_block,
      acf_help: options?.acf?.help,
      reviews_list: {
        title: options?.acf?.reviews_?.title,
        text: options?.acf?.reviews_?.text,
        reviews: page?.acf?.block_13,
      },
      news_block: {
        ...options?.acf?.news_block,
        cards: news,
      },
    },
    seo: page?.yoast_head,
  };
};
