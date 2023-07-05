import { getCommon } from "@/mocks/common";
import {
  getCasesById,
  getEventsType,
  getOptions,
  getSingleCase,
} from "@/stores/ContentState";

export const getCasePage = async (slug: string) => {
  const options = await getOptions();
  const page = await getSingleCase(slug);
  const eventsType = await getEventsType();
  const ids = page[0]?.acf?.related_cases?.list?.map((c: any) => c.ID);
  let relatedList: any = [];

  if (ids?.length) {
    relatedList = await getCasesById(ids.join(","));
  }

  if (relatedList) {
    relatedList = relatedList.map((c: any) => {
      return {
        ...c,
        event_type: eventsType.filter((ci: any) =>
          c["event-type"].includes(ci.id)
        ),
        link: `/cases/${c.slug}`,
        preview_image: c.acf.preview_image,
      };
    });
  }

  const menu = await getCommon(options);

  return {
    ...menu,
    content: {
      ...page[0],
      contact: {
        ...options?.acf?.contact_form,
        img: page[0].acf?.contact_image,
      },
      acf_help: options?.acf?.help,
      block_2: {
        ...options?.acf?.logotypes,
        title: "",
      },
      related_cases: options?.acf?.related_cases,
      relatedList,
    },
    eventsType,
    seo: page[0]?.yoast_head,
  };
};
