import { useContentState } from "@/hooks/RootStoreProvider";
import GlobalState, {
  changeLocale,
  changeMenuState,
} from "@/stores/GlobalState";
import classNames from "classnames";
import { observer } from "mobx-react";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import ListSmallIcon from "../ListSmallIcon";
import ImageComponent from "../ImageComponent";

const Menu = observer(() => {
  const { header, footer, icons } = useContentState();
  return (
    <section className={classNames("menu", GlobalState.isMenuOpen && "open")}>
      <div className="menu__list">
        {header?.menu?.map((m: any, i: number) => (
          <MenuItem key={i} m={m} header={header} icons={icons} />
        ))}
      </div>
      <div className="menu__bottom">
        <p className="menu__bottom-copy">
          On purpose events {new Date().getFullYear()}. All Rights Reserved
        </p>
        <div className="menu__bottom-list">
          {footer?.links?.map((li: any, i: number) => (
            <Link
              href={li?.link?.url}
              key={i}
              className="menu__bottom-link"
              aria-label={li?.link?.title || ``}
            >
              {li?.link?.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Menu;

const MenuItem = observer(({ m, header, icons }: any) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!GlobalState.isMenuOpen) {
      setOpen(false);
    }
  }, [GlobalState.isMenuOpen]);
  return (
    <>
      {m.children ? (
        <div className={classNames("menu__item", isOpen && "active")}>
          <div className="menu__item-top" onClick={() => setOpen(!isOpen)}>
            <span>{m.title}</span>
            <img src={header?.arrow_down?.url} alt={header?.arrow_down?.alt} />
          </div>
          <div className="menu__item-list">
            {m.children?.map((ci: any, id: number) => (
              <Link
                href={`/${ci.object}/${ci.object_slug}`}
                key={id}
                legacyBehavior
                aria-label={ci.title || ``}
              >
                <a className="menu__item-sub" onClick={changeMenuState}>
                  <ListSmallIcon icon={ci?.icon} />{" "}
                  <span className="menu__item-content">{ci.title}</span>
                  <span className="menu__item-arrow">
                    <ImageComponent img={icons?.arrow_right} />
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          href={m.url}
          className="menu__item"
          aria-label={m.title || ``}
          onClick={changeMenuState}
        >
          {m.title}
        </Link>
      )}
    </>
  );
});

const MenuLocale = observer(({ header }: any) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!GlobalState.isMenuOpen) {
      setOpen(false);
    }
  }, [GlobalState.isMenuOpen]);

  return (
    <div className={classNames("menu__locale", isOpen && "active")}>
      <div className="menu__locale-top" onClick={() => setOpen(!isOpen)}>
        <span>
          <img src={header?.locale_icon?.url} alt={header?.locale_icon?.alt} />
          {header?.locales?.title}
        </span>
        <img src={header?.arrow_down?.url} alt={header?.arrow_down?.alt} />
      </div>
      <div className="menu__locale-list">
        {header?.locales?.list?.map((li: any, i: number) => (
          <div
            className="menu__locale-item"
            key={i}
            onClick={() => changeLocale(li)}
          >
            {li.lang}
          </div>
        ))}
      </div>
    </div>
  );
});
