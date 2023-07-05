import { useContentState } from "@/hooks/RootStoreProvider";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import { getHomePage } from "./api/getHomePage";
import Layout from "@/components/common/Layout";
import Intro from "@/components/pages/home/Intro";
import Logotypes from "@/components/pages/home/Logotypes";
import FocusBlock from "@/components/common/FocusBlock";
import Experience from "@/components/pages/home/Experience";
import Help from "@/components/pages/home/Help";
import GreenTouch from "@/components/pages/home/GreenTouch";
import Process from "@/components/pages/home/Process";
import Reviews from "@/components/pages/home/Reviews";
import BlackTouch from "@/components/pages/home/BlackTouch";
import Blog from "@/components/pages/home/Blog";
import ContactBlock from "@/components/pages/home/ContactBlock";
import Faqs from "@/components/pages/home/Faqs";
import Gallery from "@/components/pages/home/Gallery";
import EndBlock from "@/components/pages/home/EndBlock";
import Puzzle from "@/components/common/Puzzle";
export default function Home({ hydrationData: props }: any) {
  const { content } = useContentState();
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
        <Intro />
        <Logotypes content={content?.logotypes} style={"line"} />
        <div className="space"></div>
        <FocusBlock>
          <Experience />
        </FocusBlock>
        <div className="space"></div>
        <FocusBlock>
          <Help />
        </FocusBlock>
        <div className="space"></div>
        <FocusBlock>
          <GreenTouch />
        </FocusBlock>
        <div className="space"></div>
        <FocusBlock>
          <Process />
        </FocusBlock>
        <Logotypes content={content?.block_7} style={"center"} />
        <div className="space"></div>
        <FocusBlock>
          <Reviews />
        </FocusBlock>
        <div className="space"></div>
        <FocusBlock>
          <BlackTouch
            color="black"
            block_9={content?.block_9}
            withCircle
            indexStart={4}
          />
        </FocusBlock>
        <div className="space"></div>
        <Blog />
        <Logotypes content={content?.block_14} style={"line"} />
        <div className="space"></div>
        <FocusBlock>
          <ContactBlock />
        </FocusBlock>
        <div className="space"></div>
        <Faqs block_10={content?.block_10} withFirstActive />
        <div className="space"></div>
        <FocusBlock>
          <Gallery />
        </FocusBlock>
        <div className="space"></div>
        <EndBlock />
        <div className="space"></div>
        <Puzzle />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await getHomePage();

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
