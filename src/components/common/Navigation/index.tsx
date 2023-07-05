import { useContentState } from "@/hooks/RootStoreProvider";
import Link from "next/link";
import ImageComponent from "../ImageComponent";
import ListSmallIcon from "../ListSmallIcon";
import { BlogPostType } from "@/types";
import Text18 from "../Text18";

const Navigation = () => {
  const { header, icons } = useContentState();

  const toggleClasses = (mode: "enter" | "leave") => {
    const header = document.querySelector(".header"),
      nav = document.querySelector(".navigation");

    if (!header || !nav) return;
    setTimeout(() => {
      if (mode == "enter") {
        if (!header.classList.contains("fixed")) {
          header?.classList.add("white");
        }
        document
          .querySelector(".navigation__link.sublist")
          ?.classList.add("visible");
      } else {
        if (!header.classList.contains("fixed")) {
          header?.classList.remove("white");
        }
        document
          .querySelector(".navigation__link.sublist")
          ?.classList.remove("visible");
      }
    }, 30);
  };

  return (
    <nav className="navigation">
      {header?.menu?.map((m: any, i: number) => {
        if (m.children) {
          return (
            <div
              className="navigation__link sublist"
              onMouseEnter={() => toggleClasses("enter")}
              onMouseLeave={() => toggleClasses("leave")}
              key={i}
            >
              <span>
                {m.title}
                <ImageComponent img={header?.arrow_down} />
              </span>
              <div
                className="navigation__sublist"
                onMouseEnter={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="navigation__sublist-block">
                  <div className="navigation__sublist-left">
                    {m.children?.map((ci: any, id: number) => (
                      <Link
                        href={`/${ci.object}/${ci.object_slug}`}
                        key={id}
                        legacyBehavior
                        aria-label={ci.title || ``}
                      >
                        <a
                          className="navigation__subitem"
                          onClick={() => {
                            toggleClasses("leave");
                          }}
                        >
                          <div className="navigation__subitem-left">
                            <ListSmallIcon icon={ci?.icon} />
                            <span>{ci.title}</span>
                          </div>
                          <div className="navigation__subitem-right">
                            <ImageComponent img={icons?.arrow_right} />
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                  {header?.menuPost?.map((post: BlogPostType, idx: number) => (
                    <Link
                      href={`/${post?.type}/${post?.slug}`}
                      legacyBehavior
                      key={idx}
                      aria-label={post.title?.rendered || ``}
                    >
                      <div className="navigation__sublist-right">
                        <ImageComponent img={post?.acf?.img} />
                        <div className="navigation__sublist-content">
                          <div className="navigation__sublist-cont">
                            <Text18
                              color="white"
                              content={post.title?.rendered}
                            />
                            <span className="navigation__sublist-subtext">
                              Learn more about it from our blog
                            </span>
                          </div>
                          <div className="navigation__subitem-right">
                            <ImageComponent img={icons?.arrow_right} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        return (
          <Link
            href={`${m.url}`}
            key={i}
            legacyBehavior
            aria-label={m?.title || ``}
          >
            <a className="navigation__link">
              <span>{m.title}</span>
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
