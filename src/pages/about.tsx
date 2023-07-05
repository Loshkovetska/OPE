import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import { getAboutPage } from "./api/getAbout";
import EventIntro from "@/components/pages/event/EventIntro";
import ZeroBlock from "@/components/pages/about/ZeroBlock";
import EventTraits from "@/components/pages/event/EventTraits";
import MakeEasy from "@/components/pages/about/MakeEasy";
import FocusBlock from "@/components/common/FocusBlock";
import EventConnect from "@/components/pages/event/EventConnect";
import Puzzle from "@/components/common/Puzzle";
import Logotypes from "@/components/pages/home/Logotypes";
import Team from "@/components/pages/about/Team";
import EndBlock from "@/components/pages/home/EndBlock";
import AboutEnd from "@/components/pages/about/AboutEnd";
import Principles from "@/components/pages/about/Principles";
import GreenEvents from "@/components/pages/about/GreenEvents";
import Map from "@/components/pages/about/Map";

export default function Home({ hydrationData: props }: any) {
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
        <EventIntro />
        <div className="space"></div>
        <ZeroBlock />
        <div className="space"></div>
        <EventTraits />
        <div className="space"></div>
        <FocusBlock>
          <MakeEasy />
        </FocusBlock>
        <div className="space"></div>
        <EventConnect block_5={props.content?.acf?.block_5} />
        <div className="space"></div>
        <FocusBlock>
          <Principles />
        </FocusBlock>
        <div className="space"></div>
        <GreenEvents />
        <div className="space"></div>
        <Logotypes style={"line"} content={props.content?.acf?.block_8} />
        <div className="space"></div>
        <EventConnect block_5={props.content?.acf?.block_5_1} />
        <div className="space"></div>
        <Map/>
        <div className="space"></div>

        <Team />
        <div className="space"></div>
        <EndBlock />
        <div className="space"></div>
        <AboutEnd />
        <div className="space"></div>

        <Puzzle />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await getAboutPage();

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
