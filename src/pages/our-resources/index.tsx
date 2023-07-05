import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import FocusBlock from "@/components/common/FocusBlock";
import SecondIntro from "@/components/common/SecondIntro";
import { getBlogPage } from "../api/getBlogPage";
import PostsList from "@/components/pages/blog/PostsList";
import SelectBottomSheet from "@/components/common/SelectBottomSheet";
import { useContentState } from "@/hooks/RootStoreProvider";
import Puzzle from "@/components/common/Puzzle";
import BlackTouch from "@/components/pages/home/BlackTouch";

export default function Cases({ hydrationData: props }: any) {
  const { cats } = useContentState();
  const [loading, setLoading] = useState(true);
  useLocoScroll(!loading);

  useEffect(() => {
    if (!loading) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [loading]);

  useEffect(() => {
    if (props?.content) {
      setLoading(false);
    }
  }, [props]);

  return (
    <>
      <Layout>
        <SecondIntro />
        <Puzzle />
        <div className="cases-width"></div>
        <FocusBlock>
          <PostsList />
        </FocusBlock>
        <div className="space big hidden"></div>
        <BlackTouch
          color="white"
          withCircle={false}
          block_9={props.content?.block_3}
        />
        <div className="space big"></div>
      </Layout>
      <SelectBottomSheet
        dt={cats?.map((c: { name: string }) => c.name)}
        withSelects={false}
      />
    </>
  );
}

export async function getStaticProps() {
  const response = await getBlogPage();

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
