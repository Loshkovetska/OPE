import { getCommon } from "@/mocks/common";
import { getOptions, getPage } from "@/stores/ContentState";

export const getDocs = async (pageNumber: number) => {
  const options = await getOptions();
  const page = await getPage(pageNumber);
  const menu = await getCommon(options);

  return {
    ...menu,
    content: page,
    seo: page?.yoast_head,
  };
};
