import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import FocusBlock from "@/components/common/FocusBlock";
import { getCasesPage } from "../api/getCasesPage";
import SecondIntro from "@/components/common/SecondIntro";
import CasesList from "@/components/pages/cases/CasesList";
import Puzzle from "@/components/common/Puzzle";
import BlackTouch from "@/components/pages/home/BlackTouch";
import SelectBottomSheet from "@/components/common/SelectBottomSheet";

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
        <SecondIntro />
        <Puzzle />
        <div className="cases-width"></div>
        <FocusBlock>
          <CasesList />
        </FocusBlock>
        <div className="space big hidden"></div>
        <BlackTouch
          color="white"
          withCircle={false}
          block_9={props.content?.block_3}
        />
        <div className="space big"></div>
      </Layout>
      <SelectBottomSheet dt={[]} withSelects />
    </>
  );
}

export async function getStaticProps() {
  const response = await getCasesPage();

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
