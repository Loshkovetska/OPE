import { getCommon } from "@/mocks/common";
import {
  getFooterMenu,
  getMenu,
  getOptions,
  getPage,
} from "@/stores/ContentState";

export const getContactPage = async () => {
  const options = await getOptions();
  const page = await getPage(298);

  const menu = await getCommon(options);
  return {
    ...menu,
    content: {
      ...page?.acf,
      contact: options?.acf?.contact_form,
    },
    seo: page?.yoast_head,
  };
};
