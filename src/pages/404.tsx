import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import { get404 } from "./api/get404";
import Puzzle from "@/components/common/Puzzle";
import OtherEvents from "@/components/pages/event/OtherEvents";
import Intro from "@/components/pages/404/Intro";

export default function Page404({ hydrationData: props }: any) {
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
        <div className="space"></div>
        <OtherEvents
          other_services={{
            title: props.content?.acf?.other_pages?.title,
            list: props.content?.acf?.other_pages?.list?.map((c: any) => {
              return {
                post_title: c.page?.title,
                url: c.page?.url,
              };
            }),
          }}
        />
        <div className="space"></div>
        <Puzzle />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const response = await get404();

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
