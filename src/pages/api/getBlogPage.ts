import { getCommon } from "@/mocks/common";
import {
  getBlogCats,
  getOptions,
  getPage,
  getPosts,
} from "@/stores/ContentState";
import { BlogPostType } from "@/types";

export const getBlogPage = async () => {
  const options = await getOptions();
  const page = await getPage(371);
  const cats = await getBlogCats();
  const posts = await getPosts();

  const postsList: Array<BlogPostType> = posts.map((re: any) => {
    return {
      ...re,
      cats: cats?.filter((c: any) => re["category-blog"]?.includes(c.id)),
    };
  });

  const menu = await getCommon(options);

  return {
    ...menu,
    content: {
      ...page?.acf,
      acf_help: options?.acf?.help,
    },
    cats,
    posts: postsList,
    seo: page?.yoast_head,
  };
};
