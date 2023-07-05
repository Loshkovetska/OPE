import { getCommon } from "@/mocks/common";
import { getOptions, getPage } from "@/stores/ContentState";

export const get404 = async () => {
  const options = await getOptions();
  const page = await getPage(1197);
  const menu = await getCommon(options);

  return {
    ...menu,
    content: page,
    seo: page?.yoast_head,
  };
};
