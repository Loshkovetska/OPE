import { emailValidate } from "@/hooks/funs";
import { useContentState } from "@/hooks/RootStoreProvider";
import { contactForm } from "@/stores/ContentState";
import { FormEvent, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { changeThanksPopState } from "@/stores/GlobalState";

const ContactForm = () => {
  const {
    content: { contact },
  } = useContentState();
  const [state, setState] = useState({
    full: "",
    email: "",
    msg: "",
  });

  const [errors, setErrors] = useState({
    full: "",
    email: "",
    msg: "",
  });

  const [clearAllFields, setClear] = useState(false);

  const submit = () => {
    const ers = {
      full: !state.full?.length ? "Enter Full Name" : "",
      email: !state.email?.length
        ? "Enter Email"
        : state.email?.length && !emailValidate(state.email)
        ? "Incorrect email"
        : "",
      msg: !state.msg?.length ? "Enter Message" : "",
    };
    const isCorrect = Object.values(ers).every((v) => !v.length);
    setErrors({
      ...errors,
      ...ers,
    });
    if (isCorrect) {
      contactForm({
        full_name: state.full,
        email: state.email,
        msg: state.msg,
      }).then(() => {
        changeThanksPopState();

        setClear(true);

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
        name={"full-name"}
        content={{
          label: contact?.label_full,
          placeholder: contact?.placeholder_full,
          error_icon: contact?.error_icon,
          success_icon: contact?.success_icon,
        }}
        returnValue={(value) => setState({ ...state, full: value })}
        error={errors?.full}
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
        returnValue={(value) => setState({ ...state, email: value })}
        error={errors?.email}
      />
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

export default ContactForm;
