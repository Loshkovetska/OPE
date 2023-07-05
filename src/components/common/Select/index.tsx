import { useEffect, useRef, useState } from "react";
import Text16 from "../Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import ImageComponent from "../ImageComponent";
import classNames from "classnames";
import { observer } from "mobx-react";
import GlobalState from "@/stores/GlobalState";

const Select = ({
  placeHolder = "",
  label = "",
  dt,
  returnValue,
  needToClear = false,
}: {
  label: string;
  placeHolder: string;
  dt: Array<any>;
  returnValue: (value: string) => void;
  needToClear?:boolean;
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

  useEffect(() => {
    if (!open) {
      GlobalState.locoScroll?.start();
    }
  }, [open]);

  useEffect(() => {
    if (needToClear) {
      setSelect("");
    }
  }, [needToClear]);

  return (
    <div className={classNames("select", open && "open")} ref={selectRef}>
      <span className="select__label">{label}</span>
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
      <div
        className="select__list"
        onScroll={() => {
          GlobalState.locoScroll?.stop();
        }}
      >
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
            className={classNames(
              "select__item",
              c == selectValue && "selected"
            )}
            key={i}
            onClick={() => {
              setOpen(false);
              setSelect(c);
            }}
          >
            <Text16 color="black" content={c} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(Select);
