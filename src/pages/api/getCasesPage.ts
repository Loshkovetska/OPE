import { getCommon } from "@/mocks/common";
import {
  getCases,
  getEventsType,
  getIndustryType,
  getOptions,
  getPage,
} from "@/stores/ContentState";
import { CaseItem } from "@/types";

export const getCasesPage = async () => {
  const options = await getOptions();
  const page = await getPage(329);
  const eventsType = await getEventsType();
  const industries = await getIndustryType();
  const cases = await getCases();

  const casesList: Array<CaseItem> = [];
  cases.forEach((c: any) => {
    casesList.push({
      ...c,
      event_type: eventsType.filter((ci: any) =>
        c["event-type"].includes(ci.id)
      ),
      link: `/cases/${c.slug}`,
      industries: industries.filter((ci: any) => c["industry"].includes(ci.id)),
      preview_image: c.acf.preview_image,
      preview_text: c.acf.preview_text,
    });
  });
  const menu = await getCommon(options);

  return {
    ...menu,
    eventsType,
    content: {
      ...page?.acf,
      industries,
      acf_help: options?.acf?.help,
    },
    cases: casesList,
    seo: page?.yoast_head,
  };
};
