import { DOMAIN } from "@/mocks/domain";
const ContentState = {};
export default ContentState;

//GENERAL

export const getOptions = async () => {
  const res = await fetch(`${DOMAIN}wp-json/acf/v3/options/options`).then((r) =>
    r.json()
  );

  return res;
};

export const getMenu = async () => {
  const res = await fetch(`${DOMAIN}wp-json/wp-api-menus/v2/menus/2`).then(
    (r) => r.json()
  );
  return res;
};

export const getFooterMenu = async () => {
  const res = await fetch(`${DOMAIN}wp-json/wp-api-menus/v2/menus/4`).then(
    (r) => r.json()
  );
  return res?.items;
};

export const getPage = async (pageId: number, type?: string) => {
  const res = await fetch(
    `${DOMAIN}wp-json/wp/v2/${!type ? "pages" : type}/${pageId}`
  ).then((r) => r.json());
  return res;
};

//NEWS
export const getBlogCats = async () => {
  const response = await fetch(
    `${DOMAIN}wp-json/wp/v2/category-blog?per_page=100`
  ).then((r) => r.json());

  return response;
};

export const getEventsByIds = async (ids: string) => {
  const response = await fetch(
    `${DOMAIN}wp-json/wp/v2/events?include=${ids}`
  ).then((r) => r.json());

  return response;
};

export const getBlogCatsByIds = async (ids: string) => {
  const response = await fetch(
    `${DOMAIN}wp-json/wp/v2/category-blog?include=${ids}`
  ).then((r) => r.json());

  return response;
};
export const getPostsById = async (ids: string) => {
  const res = await fetch(
    `${DOMAIN}wp-json/wp/v2/our-resources/?include=${ids}`
  ).then((r) => r.json());
  return res;
};
export const getSinglePost = async (slug: string) => {
  const res = await fetch(
    `${DOMAIN}wp-json/wp/v2/our-resources?slug=${slug}`
  ).then((r) => r.json());
  return res;
};
export const getPosts = async () => {
  const res = await fetch(
    `${DOMAIN}wp-json/wp/v2/our-resources/?per_page=100`
  ).then((r) => r.json());

  return res;
};
export const getNewsPerCount = async (count: number) => {
  const res = await fetch(
    `${DOMAIN}wp-json/wp/v2/our-resources/?per_page=${count}`
  ).then((r) => r.json());

  const catsL: any = [];
  res.forEach((re: any) => catsL.push(...re["category-blog"]));
  const cats = await getBlogCatsByIds(Array.from(new Set(catsL)).join(","));
  return res.map((re: any) => {
    return {
      ...re,
      cats: cats?.filter((c: any) => re["category-blog"]?.includes(c.id)),
    };
  });
};

//CONTACT POP

export const contactForm = async ({
  full_name,
  email,
  msg,
}: {
  full_name: string;
  email: string;
  msg: string;
}) => {
  try {
    const fd = new FormData();
    fd.append("full_name", full_name);
    fd.append("email", email);
    fd.append("msg", msg);
    await fetch(`${DOMAIN}wp-admin/admin.ajax.php`, {
      method: "POST",
      body: fd,
    }).then((r) => r.json());
  } catch (e) {
    console.log("contact-form", e);
  }
};

export const contactPopForm = async ({
  fname,
  lname,
  email,
  msg,
}: {
  fname: string;
  lname: string;
  email: string;
  msg: string;
}) => {
  try {
    const fd = new FormData();
    fd.append("fname", fname);
    fd.append("lname", lname);
    fd.append("email", email);
    fd.append("msg", msg);
    await fetch(`${DOMAIN}wp-admin/admin.ajax.php`, {
      method: "POST",
      body: fd,
    }).then((r) => r.json());
  } catch (e) {
    console.log("contact-pop-form", e);
  }
};

export const requestCall = async (phone: string) => {
  try {
    const fd = new FormData();
    fd.append("phone", phone);
    await fetch(`${DOMAIN}wp-admin/admin.ajax.php`, {
      method: "POST",
      body: fd,
    }).then((r) => r.json());
  } catch (e) {
    console.log("request-call", e);
  }
};

//CASES

export const getEventsType = async () => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/event-type`).then((r) =>
    r.json()
  );
  return res;
};
export const getIndustryType = async () => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/industry`).then((r) =>
    r.json()
  );
  return res;
};

export const getCases = async () => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/cases?per_page=100`).then(
    (r) => r.json()
  );
  return res;
};

export const getCasesById = async (ids: string) => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/cases/?include=${ids}`).then(
    (r) => r.json()
  );
  return res;
};
export const getSingleCase = async (slug: string) => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/cases?slug=${slug}`).then(
    (r) => r.json()
  );
  return res;
};

//EVENTS
export const getEvents = async () => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/events`).then((r) =>
    r.json()
  );
  return res;
};
export const getSingleEvent = async (slug: string) => {
  const res = await fetch(`${DOMAIN}wp-json/wp/v2/events?slug=${slug}`).then(
    (r) => r.json()
  );
  return res ? res[0] : null;
};
