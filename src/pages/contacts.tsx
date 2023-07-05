import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import { getContactPage } from "./api/getContactPage";
import ContactIntro from "@/components/pages/contact/ContactIntro";
import ContactContent from "@/components/pages/contact/ContactContent";

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
        <ContactIntro />
        <div className="space"></div>
        <ContactContent />
        <div className="space"></div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await getContactPage();

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
