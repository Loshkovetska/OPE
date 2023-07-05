import { useContentState } from "@/hooks/RootStoreProvider";
import Button from "../Button";
import Text16 from "../Text16";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Cookies from "js-cookie";

const CookiePop = () => {
  const [isShow, setShow] = useState(false);
  const { cookies } = useContentState();

  const closeModal = () => setShow(false);

  const accept = () => {
    if (document.cookie.length) {
      Cookies.set("hideModal", "true", { expires: 7 });
    } else {
      Cookies.set("hideModal", "true", { expires: 7 });
    }
    closeModal();
  };

  useEffect(() => {
    if (!Cookies.get("hideModal")) {
      setTimeout(() => {
        setShow(true);
      }, 1300);
    }
  }, []);
  return (
    <div className={classNames("cookies", isShow && "show")}>
      <Text16 content={cookies?.text} color="black" />
      <div className="cookies__btns">
        <Button
          isLink={false}
          onClick={closeModal}
          classStr="white"
          content={cookies?.decline_btn}
        />
        <Button
          isLink={false}
          onClick={accept}
          classStr="black"
          content={cookies?.accept_btn}
        />
      </div>
    </div>
  );
};
export default CookiePop;
