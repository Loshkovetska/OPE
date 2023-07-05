import CaseItem from "@/components/common/CaseItem";
import ImageComponent from "@/components/common/ImageComponent";
import Select from "@/components/common/Select";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import GlobalState, { bottomSheetState } from "@/stores/GlobalState";
import { CaseItem as CaseItemType, EventType } from "@/types";
import { observer } from "mobx-react";
import { useEffect, useMemo, useState } from "react";

const CasesList = () => {
  const {
    content: { block_2_filters, industries },
    cases,
    eventsType,
    icons,
  } = useContentState();

  const [filters, setFilters] = useState({
    f1: "",
    f2: "",
  });

  const casesList = useMemo(() => {
    let result = cases.sort(
      (c: CaseItemType, b: CaseItemType) =>
        new Date(c.date).getTime() - new Date(b.date).getTime()
    );
    if (!filters.f1.length && !filters.f2.length) return result;
    if (filters?.f1?.length) {
      result = result.filter((c: CaseItemType) => {
        const el = c.event_type?.find((c: any) => c.name == filters?.f1);
        if (el) {
          return c;
        }
      });
    }
    if (filters?.f2?.length) {
      result = result.filter((c: CaseItemType) => {
        const el = c.industries?.find((c: any) => c.name == filters?.f2);
        if (el) {
          return c;
        }
      });
    }
    return result;
  }, [filters, cases]);

  useEffect(() => {
    if (window.innerWidth <= 480 && GlobalState.bottomSheetValue) {
      const fils = JSON.parse(GlobalState.bottomSheetValue);

      if (typeof fils == "object") {
        setFilters({
          ...filters,
          ...fils,
        });
      }
    }
  }, [GlobalState.bottomSheetValue]);

  return (
    <section className="cases-list">
      <div className="cases-list__container">
        <div className="cases-list__selects">
          <Select
            label={block_2_filters?.filter1_title}
            placeHolder={block_2_filters?.filter1}
            dt={eventsType?.map((c: any) => c.name)}
            returnValue={(value) =>
              setFilters({
                ...filters,
                f1: value,
              })
            }
          />
          <Select
            label={block_2_filters?.filter2_title}
            placeHolder={block_2_filters?.filter2}
            dt={industries?.map((c: any) => c.name)}
            returnValue={(value) =>
              setFilters({
                ...filters,
                f2: value,
              })
            }
          />
          <Text16
            content={`${casesList?.length}
            ${!casesList?.length || casesList?.length > 1 ? "cases" : "case"}`}
            color="black"
          />
          <div className="posts-list__filter" onClick={bottomSheetState}>
            <ImageComponent img={icons?.filter_icon} />
          </div>
        </div>
        <div className="cases-list__list">
          {casesList?.slice(0, 2).map((c: CaseItemType, i: number) => (
            <CaseItem item={c} key={i} />
          ))}
          <div className="cases-list__row">
            {casesList?.slice(2, 3).map((c: CaseItemType, i: number) => (
              <CaseItem item={c} key={i} />
            ))}
          </div>
          {casesList?.slice(3).map((c: CaseItemType, i: number) => {
            if (i && !((i + 1) % 7)) {
              return (
                <div className="cases-list__row">
                  <CaseItem item={c} key={i} />
                </div>
              );
            }
            return <CaseItem item={c} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default observer(CasesList);
