import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { Fragment, useEffect, useState } from "react";
import { getEvents, getPosts } from "@/stores/ContentState";
import { getEventPage } from "../api/getEventPage";
import EventIntro from "@/components/pages/event/EventIntro";
import Puzzle from "@/components/common/Puzzle";
import EventAbout from "@/components/pages/event/EventAbout";
import Logotypes from "@/components/pages/home/Logotypes";
import { useContentState } from "@/hooks/RootStoreProvider";
import EventConferences from "@/components/pages/event/EventConferences";
import FocusBlock from "@/components/common/FocusBlock";
import EventConnect from "@/components/pages/event/EventConnect";
import EventTechnology from "@/components/pages/event/EventTechnology";
import EventBook from "@/components/pages/event/EventBook";
import Reviews from "@/components/pages/home/Reviews";
import EventCases from "@/components/pages/event/EventCases";
import ContactBlock from "@/components/pages/home/ContactBlock";
import OtherEvents from "@/components/pages/event/OtherEvents";
import EventTraits from "@/components/pages/event/EventTraits";
import EventPlanners from "@/components/pages/event/EventPlanners";
import BlackTouch from "@/components/pages/home/BlackTouch";
import EventVenues from "@/components/pages/event/EventVenues";
import Faqs from "@/components/pages/home/Faqs";
import EventDestination from "@/components/pages/event/EventDestination";
import EventQuote from "@/components/pages/event/EventQuote";

export default function Event({ hydrationData: props }: any) {
  const {
    content: { acf },
  } = useContentState();
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

  const arrayBlocks = [
    {
      key: "block_4",
      component: (
        <FocusBlock>
          <EventConferences />
        </FocusBlock>
      ),
    },
    {
      key: "block_5",
      component: <EventConnect block_5={acf?.block_5} />,
    },
    {
      key: "block_6",
      component: (
        <FocusBlock>
          <EventTechnology />
        </FocusBlock>
      ),
    },
    {
      key: "block_7",
      component: <Logotypes style={"center"} content={acf?.block_7} />,
    },
    {
      key: "block_8",
      component: (
        <FocusBlock>
          <EventBook />
        </FocusBlock>
      ),
    },
    {
      key: "block_9",
      component: (
        <FocusBlock>
          <Reviews />
        </FocusBlock>
      ),
    },
    {
      key: "cases",
      component: <EventCases />,
    },
    {
      key: "block_11",
      component: <Logotypes style={"line"} content={acf?.block_11} />,
    },
    {
      key: "block_14",
      component: <EventTraits />,
    },
    {
      key: "block_15",
      component: (
        <FocusBlock>
          <EventPlanners />
        </FocusBlock>
      ),
    },
    {
      key: "block_16",
      component: <BlackTouch withCircle={false} block_9={acf.block_16} />,
    },
    {
      key: "block_17",
      component: (
        <FocusBlock>
          <EventVenues />
        </FocusBlock>
      ),
    },
    {
      key: "faq",
      component: <Faqs block_10={acf?.faq} withFirstActive />,
    },
    {
      key: "destinations",
      component: (
        <FocusBlock>
          <EventDestination />
        </FocusBlock>
      ),
    },
    {
      key: "quote_block",
      component: <EventQuote />,
    },
  ];
  return (
    <>
      <Layout>
        {/* UNCHANGEABLE CONTENT */}
        <EventIntro />
        <div className="space"></div>
        <EventAbout />

        <div className="space"></div>

        {/* DYNAMIC CONTENT */}
        {acf.order_blocks?.map((co: { acf_fc_layout: string }, i: number) => {
          const current = arrayBlocks.find((c) => c.key == co.acf_fc_layout);

          if (current) {
            return (
              <Fragment key={i}>
                {current.component}
                <div className="space"></div>
              </Fragment>
            );
          }
          return <Fragment key={i}></Fragment>;
        })}

        {/* UNCHANGEABLE CONTENT */}
        <FocusBlock>
          <ContactBlock indexStart={acf?.block_12?.circle_position} />
        </FocusBlock>
        <div className="space"></div>
        <OtherEvents
          other_services={{
            title: acf?.other_services?.title,
            list: acf?.other_services?.list?.map(
              (c: {
                post_title: string;
                post_name: string;
                post_type: string;
              }) => {
                return {
                  url: `/${c.post_type}/${c.post_name}/`,
                  post_title: c.post_title,
                };
              }
            ),
          }}
        />
        <div className="space"></div>
        <Puzzle />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const cases = await getEvents();
  const paths: any = [];
  cases?.forEach((p: any) => {
    paths.push({
      params: {
        slug: p.slug,
        path: `/${p.type}/${p.slug}`,
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const response = await getEventPage(params.slug);

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
