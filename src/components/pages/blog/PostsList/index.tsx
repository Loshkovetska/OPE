import BigBlogCard from "@/components/common/BigBlogCard";
import BlogCard from "@/components/common/BlogCard";
import Button from "@/components/common/Button";
import ImageComponent from "@/components/common/ImageComponent";
import Pagination from "@/components/common/Pagination";
import SelectRadio from "@/components/common/SelectRadio";
import Text16 from "@/components/common/Text16";
import { useContentState } from "@/hooks/RootStoreProvider";
import { useWindowDimensions } from "@/hooks/getWindowDimensions";
import GlobalState, { bottomSheetState } from "@/stores/GlobalState";
import { BlogPostType } from "@/types";
import { observer } from "mobx-react";
import { useEffect, useMemo, useRef, useState } from "react";

const PostsList = observer(() => {
  const {
    content: { block_2_filter },
    posts,
    cats,
    icons,
  } = useContentState();

  const postListRef = useRef<HTMLDivElement | null>(null);

  const { width } = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [showMore, setMore] = useState(0);
  const [countPerPage, setCount] = useState(width >= 1024 ? 7 : 8);
  const [count, setPageCount] = useState(Array());
  const [filter, setFilter] = useState("");

  const getCardsByFilter = (filter: string) => {
    return posts.filter((c: BlogPostType) => {
      const currentCat = c.cats.find((ci: any) => ci.name.includes(filter));
      if (currentCat) {
        return c;
      }
    });
  };

  const currentItems = useMemo(() => {
    if (!filter.length) return posts;
    return getCardsByFilter(filter);
  }, [filter, posts]);

  const currentTableData = useMemo(() => {
    let prev = 0;
    if (currentPage - 1) {
      for (let i = currentPage - 2; i >= 0; i--) {
        prev += count[i];
      }
    }

    const firstPageIndex = prev;
    const lastPageIndex =
      firstPageIndex + (count?.length ? count[currentPage - 1] : 1);

    return currentItems?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, currentItems, count, filter]);

  useEffect(() => {
    setMore(0);
    const cnt = Math.ceil(currentItems.length / countPerPage);
    const arr: Array<number> = [];
    let maxLength = currentItems.length;
    for (let i = cnt - 1; i >= 0; i--) {
      arr.push(maxLength - countPerPage * i);
      maxLength -= maxLength - countPerPage * i;
    }
    setPageCount(arr.reverse());
  }, [currentItems]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  useEffect(() => {
    if (showMore) {
      let arr = count;
      arr[currentPage - 1] += count[currentPage] ? count[currentPage] : 0;

      arr.splice(currentPage, 1);
      setPageCount([...arr]);
    }
  }, [showMore]);

  useEffect(() => {
    setMore(0);
  }, [currentPage]);

  useEffect(() => {
    setFilter(GlobalState.bottomSheetValue);
  }, [GlobalState.bottomSheetValue]);

  return (
    <section className="posts-list">
      <div className="posts-list__container">
        <div className="posts-list__top" ref={postListRef}>
          <Text16
            content={`${currentItems?.length}
            ${
              !currentItems?.length || currentItems?.length > 1
                ? "articles"
                : "article"
            }`}
            color="black"
          />
          <div className="posts-list__select">
            <Text16 content={block_2_filter?.filter_title} color="black" />
            <SelectRadio
              dt={cats?.map((c: { name: string }) => c.name)}
              placeHolder={block_2_filter.default_}
              returnValue={(value) => setFilter(value)}
            />
            <div className="posts-list__filter" onClick={bottomSheetState}>
              <ImageComponent img={icons?.filter_icon} />
            </div>
          </div>
        </div>
        <div className="posts-list__list">
          {currentTableData.map((c: BlogPostType, i: number) => (
            <BlogCard item={c} key={i} withText />
          ))}
        </div>

        {/* {currentItems && currentItems.length ? (
          <div className="posts-list__bottom">
            {currentPage != lastPage && (
              <Button
                classStr="white grey-border"
                onClick={() => {
                  setMore(showMore + countPerPage);
                }}
                content={"Load more articles"}
              />
            )}
            <Pagination
              getLastPage={(value) => setLastPage(value)}
              currentPage={currentPage}
              setCurrentPage={(value) => {
                setCurrentPage(value);
                if (GlobalState.isTouch) {
                  postListRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  GlobalState.locoScroll &&
                    GlobalState.locoScroll.scrollTo(
                      0,
                      postListRef.current?.scrollTop
                    );
                }
              }}
              data={currentItems}
              itemsPerPage={count.length}
            />
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </section>
  );
});

export default PostsList;
