import { getCommon } from "@/mocks/common";
import {
  getCasesById,
  getEventsType,
  getOptions,
  getPostsById,
  getSingleEvent,
} from "@/stores/ContentState";

export const getEventPage = async (slug: string) => {
  const options = await getOptions();
  const page = await getSingleEvent(slug);
  const eventsType = await getEventsType();
  const ids =
    typeof page?.acf?.cases == "object"
      ? page?.acf?.cases.map((c: any) => c.ID)
      : [];

  let relatedList = await getCasesById(ids.join(","));
  let blogPosts: any = [];

  if (!page?.acf?.block_17?.show_sustainable_list) {
    const postsIds =
      typeof page?.acf?.block_17?.list == "object"
        ? page?.acf?.block_17?.list?.map((c: any) => c.ID)
        : [];
    blogPosts = await getPostsById(postsIds.join(","));

    if (blogPosts) {
      blogPosts = blogPosts?.map((c: any) => {
        return {
          title: c?.acf?.place,
          text: c?.acf?.preview_text,
          image: c?.acf?.img,
          link: `/${c?.type}/${c?.slug}`,
        };
      });
    }
  } else {
    blogPosts = page?.acf?.block_17?.sustainable_list;
  }

  if (relatedList) {
    relatedList = relatedList.map((c: any) => {
      return {
        title: c.title,
        cats: eventsType.filter((ci: any) => c["event-type"].includes(ci.id)),
        link: `/cases/${c.slug}`,
        type: "cases",
        slug: c.slug,
        acf: {
          img: c.acf.preview_image,
          author: "",
          preview_text: c.acf.preview_text,
        },
      };
    });
  }

  const menu = await getCommon(options);

  return {
    ...menu,
    eventsType,
    content: {
      ...page,
      contact: {
        ...options?.acf?.contact_form,
        title: page?.acf?.block_12?.title,
        text: page?.acf?.block_12?.text,
        img: page?.acf?.block_12?.img,
      },
      reviews_list: {
        ...page?.acf?.block_9,
        reviews: page?.acf?.block_9?.list,
      },
      venuesPosts: blogPosts || [],
      acf_help: options?.acf?.help,
      related_cases: page?.acf?.cases_info,
      relatedList,
    },
    seo: page?.yoast_head,
  };
};
