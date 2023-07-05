import { useContentState } from "@/hooks/RootStoreProvider";
import Select from "../Select";
import { useEffect, useState } from "react";
import { runInAction } from "mobx";
import GlobalState from "@/stores/GlobalState";

const SelectsBottomSheet = () => {
  const {
    content: { block_2_filters, industries },
    eventsType,
  } = useContentState();

  const [filters, setFilters] = useState({
    f1: "",
    f2: "",
  });

  useEffect(() => {
    if (!GlobalState.isBottomSheetOpen) {
      runInAction(() => {
        GlobalState.bottomSheetValue = JSON.stringify(filters);
      });
    }
  }, [filters, GlobalState.isBottomSheetOpen]);
  return (
    <>
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
    </>
  );
};

export default SelectsBottomSheet;
