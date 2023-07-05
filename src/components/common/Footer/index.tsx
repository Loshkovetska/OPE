import { useContentState } from "@/hooks/RootStoreProvider";
import { FooterColType } from "@/types";
import Link from "next/link";
import { Fragment } from "react";
import FooterCol from "../FooterCol";
import ImageComponent from "../ImageComponent";
import Text16 from "../Text16";
import Sustain from "../../../assets/sustain.svg";
const Footer = () => {
  const { footer, header, footerMenu } = useContentState();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__left">
            <img
              className="footer__logo"
              src={header?.logotype?.url}
              alt={header?.logotype?.alt}
            />
            <Text16 content={footer?.text} color="white" />
            <Sustain />
            <div className="footer__socials">
              {footer?.socials?.map(
                (
                  so: {
                    icon: { url: string; alt: string };
                    link: string;
                  },
                  i: number
                ) => (
                  <a
                    className="footer__socials-item"
                    href={so?.link}
                    key={i}
                    target="_blank"
                    rel={"noreferrer"}
                  >
                    <ImageComponent img={so?.icon} />
                  </a>
                )
              )}
            </div>
          </div>
          <div className="footer__cols">
            {footerMenu?.map((fo: FooterColType, i: number) => (
              <FooterCol key={i} item={fo} />
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <div className="footer__text footer__copy">
              On purpose events {new Date().getFullYear()}. All Rights Reserved
            </div>
            <div className="footer__bottom-links">
              {footer?.links?.map(
                (
                  c: {
                    link: {
                      title: string;
                      url: string;
                    };
                  },
                  i: number
                ) => (
                  <Fragment key={i}>
                    <span className="footer__separator">|</span>
                    <Link
                      href={c?.link?.url}
                      className="footer__link"
                      aria-label={c?.link?.title || ``}
                    >
                      {c?.link?.title}
                    </Link>
                  </Fragment>
                )
              )}
            </div>
          </div>
          <div className="footer__socials">
            {footer?.socials?.map(
              (
                so: {
                  icon: { url: string; alt: string };
                  link: string;
                },
                i: number
              ) => (
                <a
                  className="footer__socials-item"
                  href={so?.link}
                  key={i}
                  target="_blank"
                  rel={"noreferrer"}
                >
                  <ImageComponent img={so?.icon} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
