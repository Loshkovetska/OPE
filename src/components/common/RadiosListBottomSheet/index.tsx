import Radio from "../Radio";
import GlobalState, {
  setBottomSheetValue,
} from "@/stores/GlobalState";
const RadiosListBottomSheet = ({ dt }: { dt: Array<string> }) => {
  return (
    <>
      {dt?.map((c, i) => (
        <div
          className="bottom-sheet__item"
          key={i}
          onClick={() => setBottomSheetValue(c)}
        >
          <span className="bottom-sheet__item-text">{c}</span>
          <Radio isSelected={c == GlobalState.bottomSheetValue} />
        </div>
      ))}
    </>
  );
};

export default RadiosListBottomSheet;
