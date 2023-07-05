import {
  getEventsByIds,
  getEventsType,
  getFooterMenu,
  getMenu,
  getPostsById,
} from "@/stores/ContentState";

export const getCommon = async (options: any) => {
  const footerMenu = await getFooterMenu();
  let topMenu = await getMenu();
  const ids = options?.acf?.header?.post_in_menu?.map((c: any) => c.ID);
  let menuPost = await getPostsById(ids.join(","));
  const eventsType = await getEventsType();

  if (topMenu?.items) {
    let itIds: Array<string> = [];

    topMenu.items.forEach((c: any) => {
      if (c?.children) {
        itIds = c?.children?.map((c: any) => c.object_id);
      }
    });
    const eventsByIds = await getEventsByIds(itIds.join(","));
    topMenu.items = topMenu.items.map((c: any) => {
      if (c.children) {
        c.children = c.children?.map((ci: any) => {
          const item = eventsByIds.find((ev: any) => ev.id == ci.object_id);
          return {
            ...ci,
            icon: item?.acf?.menu_icon,
          };
        });

        return c;
      }

      return c;
    });
  }

  return {
    header: {
      ...options?.acf?.header,
      menu: topMenu?.items,
      contactPop: {
        ...options?.acf?.contact_pop,
        contactForm: options?.acf?.contact_form,
        reviewsList: options?.acf?.reviews_?.reviews,
      },
      menuPost,
    },
    faqCTA: options?.acf?.faqs_cta,
    eventsType,
    contactPop: options.acf?.contact_form,
    thanks: options.acf?.thanks_pop,
    cookies: options.acf?.cookies,
    footerMenu,
    icons: options?.acf?.icons,
    footer: options?.acf?.footer,
  };
};
