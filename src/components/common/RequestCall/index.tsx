import { useContentState } from "@/hooks/RootStoreProvider";
import { requestCall } from "@/stores/ContentState";
import { useState } from "react";
import Button from "../Button";
import ListSmallIcon from "../ListSmallIcon";
import Text16 from "../Text16";

const RequestCall = () => {
  const {
    header: { contactPop },
    icons,
  } = useContentState();

  return (
    <div className="contact-pop__phone">
      <div className="contact-pop__phone-row">
        <ListSmallIcon icon={icons?.phone_icon} />
        <Text16 content={contactPop.call_text} color="black" />
      </div>

      <Button
        isLink={true}
        link={`tel:${contactPop?.button_call}`}
        classStr="black w100"
        content={`Call ${contactPop?.button_call}`}
      />
    </div>
  );
};

export default RequestCall;
