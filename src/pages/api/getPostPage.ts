import { getCommon } from "@/mocks/common";
import {
  getBlogCats,
  getOptions,
  getPostsById,
  getSinglePost,
} from "@/stores/ContentState";

export const getPostPage = async (slug: string) => {
  const options = await getOptions();
  const page = await getSinglePost(slug);
  const cats = await getBlogCats();
  const ids =
    typeof page[0]?.acf?.related_posts?.list == "object"
      ? page[0]?.acf?.related_posts?.list?.map((c: any) => c.ID)
      : [];
  let relatedList: any = [];

  if (ids?.length) {
    relatedList = await getPostsById(ids.join(","));
  }

  if (relatedList) {
    relatedList = relatedList.map((c: any) => {
      return {
        ...c,
        cats: cats.filter((ci: any) => c["category-blog"].includes(ci.id)),
        link: `/${c.type}/${c.slug}`,
      };
    });
  }
  const menu = await getCommon(options);
  return {
    ...menu,
    content: {
      ...page[0],
      contact: options?.acf?.contact_form,
      news_block: {
        ...options?.acf?.related_posts,
        title: page[0]?.acf?.related_posts?.title,
        cards: relatedList,
      },
      acf_help: options?.acf?.help,
    },
    cats,
    seo: page[0]?.yoast_head,
  };
};
