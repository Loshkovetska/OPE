import { useEffect, useRef, useState } from "react";
import Text16 from "../Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import ImageComponent from "../ImageComponent";
import classNames from "classnames";
import Radio from "../Radio";

const SelectRadio = ({
  placeHolder = "",
  dt,
  returnValue,
}: {
  placeHolder: string;
  dt: Array<any>;
  returnValue: (value: string) => void;
}) => {
  const { header, icons } = useContentState();
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [selectValue, setSelect] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!selectRef.current) return;
    document.addEventListener("click", (e) => {
      const target: EventTarget | null = e.target;
      if (!target) return;
      if (!selectRef.current?.contains(target as Node)) {
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    returnValue(selectValue);
  }, [selectValue]);

  return (
    <div className={classNames("select", open && "open")} ref={selectRef}>
      <div
        className={classNames("select__top", selectValue?.length && "selected")}
        onClick={() => setOpen(!open)}
      >
        <Text16
          content={selectValue?.length ? selectValue : placeHolder}
          color="black"
        />
        <ImageComponent img={header?.arrow_down} />
      </div>
      <div className="select__list">
        {selectValue?.length > 0 && open && (
          <div
            className="select__clear"
            onClick={() => {
              setOpen(false);
              setSelect("");
            }}
          >
            <ImageComponent img={icons?.refresh_icon} />
            <Text16 color="black" content="Clear" />
          </div>
        )}
        {dt?.map((c, i) => (
          <div
            className={classNames("select__item")}
            key={i}
            onClick={() => {
              setOpen(false);
              setSelect(c);
            }}
          >
            <Text16 color="black" content={c} />
            <Radio isSelected={c == selectValue} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRadio;
