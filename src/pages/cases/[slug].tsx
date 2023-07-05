import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import { getCases } from "@/stores/ContentState";
import { getCasePage } from "../api/getCasePage";
import CaseIntro from "@/components/pages/case/CaseIntro";
import CaseContent from "@/components/pages/case/CaseContent";
import FocusBlock from "@/components/common/FocusBlock";
import Logotypes from "@/components/pages/home/Logotypes";
import ContactBlock from "@/components/pages/home/ContactBlock";
import RelatedCases from "@/components/pages/case/RelatedCases";

export default function Cases({ hydrationData: props }: any) {
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
        <CaseIntro />
        <div className="space"></div>
        <FocusBlock>
          <CaseContent />
        </FocusBlock>
        <div className="space"></div>
        <div className="gen-block">
          <RelatedCases />
          <Logotypes
            style={"center"}
            content={props?.content?.acf?.logotypes}
          />
        </div>
        <div className="space"></div>
        <FocusBlock>
          <ContactBlock />
        </FocusBlock>
        <div className="space"></div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const cases = await getCases();
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
  const response = await getCasePage(params.slug);

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
