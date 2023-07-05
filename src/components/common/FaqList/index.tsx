import { FaqItemType } from "@/types";
import { useEffect, useState } from "react";
import FaqItem from "../FaqItem";
import classNames from "classnames";

const FaqList = ({
  list,
  theme,
  withFirstActive = false,
}: {
  list: Array<FaqItemType>;
  theme: string;
  withFirstActive?: boolean;
}) => {
  const [activeTab, setActive] = useState(-1);

  useEffect(() => {
    if (withFirstActive) {
      setTimeout(() => {
        setActive(0);
      }, 500);
    }
  }, [withFirstActive]);
  return (
    <section className={classNames("faqs-list", theme)}>
      {list?.map((li, i) => (
        <FaqItem
          item={li}
          key={i}
          isActive={activeTab == i}
          setActive={() => {
            if (withFirstActive) {
              setActive(i);
            } else {
              if (activeTab == i) {
                setActive(-1);
              } else setActive(i);
            }
          }}
          theme={theme}
        />
      ))}
    </section>
  );
};

export default FaqList;
