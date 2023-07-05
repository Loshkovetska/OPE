import { emailValidate } from "@/hooks/funs";
import { useContentState } from "@/hooks/RootStoreProvider";
import { contactPopForm } from "@/stores/ContentState";
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import classNames from "classnames";
import { changeThanksPopState } from "@/stores/GlobalState";

const ContactPopForm = () => {
  const {
    contactPop: contact,
    // content: { contact },
    eventsType,
  } = useContentState();
  const [state, setState] = useState({
    msg: "",
    destination: "",
    eventType: "",
  });
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    msg: "",
    destination: "",
    eventType: "",
  });

  const [clearAllFields, setClear] = useState(false);

  const submit = () => {
    const ers = {
      fname: !fname?.length ? "Enter First Name" : "",
      lname: !lname?.length ? "Enter Last Name" : "",
      email: !email?.length
        ? "Enter Email"
        : email?.length && !emailValidate(email)
        ? "Incorrect email"
        : "",
      msg: !state.msg?.length ? "Enter Message" : "",
      destination: !state.destination?.length ? "Enter Destination" : "",
      eventType: !state.eventType?.length ? "Choose Event Type" : "",
    };
    const isCorrect = Object.values(ers).every((v) => !v.length);
    setErrors({
      ...errors,
      ...ers,
    });
    if (isCorrect) {
      contactPopForm({
        ...state,
        email,
        fname,
        lname,
      }).then(() => {
        changeThanksPopState();
        setClear(true);

        setState({
          ...state,
          eventType: "",
          msg: "",
          destination: "",
        });
        setTimeout(() => {
          setClear(false);
        }, 5000);
      });
    }
  };

  return (
    <section className="contact-form">
      <Input
        needToClear={clearAllFields}
        isRequired
        name={"name"}
        content={{
          label: contact?.label_firstname,
          placeholder: contact?.placeholder_firstname,
          error_icon: contact?.error_icon,
          success_icon: contact?.success_icon,
        }}
        returnValue={(value) => setFname(value)}
        error={errors?.fname}
      />
      <Input
        needToClear={clearAllFields}
        isRequired
        name={"lname"}
        content={{
          label: contact?.label_lastname,
          placeholder: contact?.placeholder_lastname,
          error_icon: contact?.error_icon,
          success_icon: contact?.success_icon,
        }}
        returnValue={(value) => setLname(value)}
        error={errors?.lname}
      />
      <Input
        needToClear={clearAllFields}
        isRequired
        name={"email"}
        type="email"
        content={{
          label: contact?.label_email,
          placeholder: contact?.placeholder_email,
          error_icon: contact?.error_icon,
          success_icon: contact?.success_icon,
        }}
        returnValue={(value) => setEmail(value)}
        error={errors?.email}
      />
      <Input
        needToClear={clearAllFields}
        isRequired
        name={"destination"}
        type="text"
        content={{
          label: contact?.label_destination,
          placeholder: contact?.placeholder_destination,
          error_icon: contact?.error_icon,
          success_icon: contact?.success_icon,
        }}
        returnValue={(value) => setState({ ...state, destination: value })}
        error={errors?.destination}
      />
      <div
        className={classNames(
          "contact-pop__select",
          errors.eventType?.length > 0 && "error",
          state.eventType?.length && !errors.eventType?.length && "success"
        )}
      >
        <Select
          label={contact?.label_event}
          placeHolder={contact?.placeholder_event}
          dt={eventsType?.map((c: any) => c.name)}
          needToClear={clearAllFields}
          returnValue={(value) =>
            setState({
              ...state,
              eventType: value,
            })
          }
        />
        {errors.eventType?.length > 0 && (
          <span className="input__error">{errors.eventType}</span>
        )}
      </div>
      <Input
        needToClear={clearAllFields}
        isRequired
        name={"msg"}
        content={{
          label: contact?.label_msg,
          placeholder: contact?.placeholder_msg,
          error_icon: contact?.error_icon,
          success_icon: contact?.success_icon,
        }}
        returnValue={(value) => setState({ ...state, msg: value })}
        isTextArea
        error={errors?.msg}
      />
      <Button
        onClick={submit}
        isLink={false}
        classStr="black w100"
        content={contact?.button_text}
      />
      <div
        className="contact-block__bottom"
        dangerouslySetInnerHTML={{ __html: contact?.subtext }}
      ></div>
    </section>
  );
};

export default ContactPopForm;
