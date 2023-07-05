import { useState } from "react";
import GlobalState, { bottomSheetState } from "@/stores/GlobalState";
import classNames from "classnames";
import { observer } from "mobx-react";
import RadiosListBottomSheet from "../RadiosListBottomSheet";
import SelectsBottomSheet from "../SelectsBottomSheet";

const SelectBottomSheet = observer(
  ({ dt, withSelects }: { dt: any; withSelects: boolean }) => {
    const [pos, setPos] = useState(-1);

    return (
      <div
        className={classNames(
          "bottom-sheet",
          GlobalState.isBottomSheetOpen && "open"
        )}
        onTouchStart={(e) => {
          setPos(e.changedTouches[0].clientY);
        }}
        onTouchMove={(e) => {
          if (e.changedTouches[0].clientY > pos) {
            bottomSheetState();
          }
        }}
        onTouchEnd={(e) => {
          if (pos > 0) {
            bottomSheetState();
          }
        }}
      >
        <div
          className={classNames("bottom-sheet__content", withSelects && 'with-select')}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
          }}
        >
          {!withSelects && <RadiosListBottomSheet dt={dt} />}
          {withSelects && <SelectsBottomSheet />}
        </div>
      </div>
    );
  }
);
export default SelectBottomSheet;
