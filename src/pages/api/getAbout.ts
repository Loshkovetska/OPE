import { getCommon } from "@/mocks/common";
import { getOptions, getPage } from "@/stores/ContentState";

export const getAboutPage = async () => {
  const options = await getOptions();
  const page = await getPage(247);
  const menu = await getCommon(options);

  return {
    ...menu,
    content: {
      ...page,
      title: {
        rendered: page?.acf.title,
      },
      block_12: page.acf?.block_10,
      acf: {
        ...page.acf,
        main_color: "#101010",
        map: page.acf?.block_12,
      },
    },
    seo: page?.yoast_head,
  };
};
