import { useContentState } from "@/hooks/RootStoreProvider";
import H2 from "../H2";
import Text16 from "../Text16";
import Button from "../Button";
import ImageComponent from "../ImageComponent";
import classNames from "classnames";
import GlobalState, { changeThanksPopState } from "@/stores/GlobalState";
import { observer } from "mobx-react";

const ThanksPop = () => {
  const { thanks } = useContentState();
  return (
    <section
      className={classNames("thanks-pop", GlobalState.isThanksPOP && "show")}
      onClick={changeThanksPopState}
    >
      <div
        className="thanks-pop__container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="thanks-pop__image">
          <ImageComponent img={thanks?.image} />
        </div>
        <H2 content={thanks?.title} color="black" />
        <Text16 content={thanks?.text} color="black" />
        <Button
          classStr="black"
          content={thanks?.button_title}
          isLink={false}
          onClick={changeThanksPopState}
        />
      </div>
    </section>
  );
};

export default observer(ThanksPop);
