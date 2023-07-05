import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import DocsContent from "@/components/pages/privacy/DocsContent";
import { getDocs } from "./api/getDocs";

export default function Privacy({ hydrationData: props }: any) {
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
        <DocsContent />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await getDocs(1187);

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
