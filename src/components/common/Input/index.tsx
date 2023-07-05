import classNames from "classnames";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import ImageComponent from "../ImageComponent";

const Input = ({
  type = "text",
  content,
  returnValue,
  isTextArea = false,
  isPhone = false,
  name,
  isRequired = false,
  error = "",
  needToClear = false,
}: {
  type?: string;
  isPhone?: boolean;
  content: {
    label: string;
    placeholder: string;
    error_icon: {
      url: string;
      alt: string;
    };
    success_icon: {
      url: string;
      alt: string;
    };
  };
  name: string;
  returnValue: (val: string) => void;
  isTextArea?: boolean;
  isRequired: boolean;
  error: string;
  needToClear: boolean;
}) => {
  const [isFocus, setFocus] = useState(false);
  const [isTyping, setTyping] = useState(false);

  const [value, setValue] = useState("");

  const changeInputValue: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    if (isPhone) {
      {
        if (
          !/[A-Za-zА-Яа-яїі]/g.test(event.target.value) &&
          event.target.value.length <= 15
        ) {
          setValue(event?.target?.value);
        }
      }
    } else {
      setValue(event?.target?.value);
    }

    setTyping(true);
  };

  useEffect(() => {
    returnValue(value);
  }, [value]);

  useEffect(() => {
    if (needToClear) {
      setValue("");
    }
  }, [needToClear]);

  const isSuccess = value?.length && !error.length;

  return (
    <label className="input">
      <span className="input__label">{content?.label}</span>
      <div
        className={classNames(
          "input__block",
          isTextArea && "textarea-block",
          isFocus && !isSuccess && "focused",
          isTyping && !isSuccess && "typing",
          isSuccess && "success",
          error?.length > 0 && "error"
        )}
      >
        {isTextArea ? (
          <textarea
            required={isRequired}
            onChange={changeInputValue}
            className="input__field"
            name={name}
            value={value}
            placeholder={content?.placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
              setTyping(false);
            }}
          />
        ) : (
          <input
            required={isRequired}
            name={name}
            type={type}
            onChange={changeInputValue}
            className="input__field"
            placeholder={content?.placeholder}
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
              setTyping(false);
            }}
            value={value}
          />
        )}
        {error?.length > 0 && <ImageComponent img={content?.error_icon} />}
        {!!isSuccess && <ImageComponent img={content?.success_icon} />}
      </div>
      {error?.length > 0 && <span className="input__error">{error}</span>}
    </label>
  );
};

export default Input;
