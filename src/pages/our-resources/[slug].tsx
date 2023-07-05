import Layout from "@/components/common/Layout";
import useLocoScroll from "@/hooks/useLoco";
import { useEffect, useState } from "react";
import { getPosts } from "@/stores/ContentState";
import FocusBlock from "@/components/common/FocusBlock";
import { getPostPage } from "../api/getPostPage";
import PostIntro from "@/components/pages/post/PostIntro";
import Blog from "@/components/pages/home/Blog";
import PostContent from "@/components/pages/post/PostContent";
import ContactBlock from "@/components/pages/home/ContactBlock";
import { PostReadLineHidden } from "@/components/pages/post/PostReadLine";
import PostAside from "@/components/pages/post/PostAside";

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
      <PostReadLineHidden />
      <PostAside className="fixed" />
      <Layout>
        <PostIntro />
        <div className="space"></div>
        <FocusBlock>
          <PostContent />
        </FocusBlock>
        <div className="space"></div>
        <Blog />
        <FocusBlock>
          <ContactBlock />
        </FocusBlock>
        <div className="space"></div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const cases = await getPosts();
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
  const response = await getPostPage(params.slug);

  return {
    props: {
      hydrationData: { ...response },
    },
    revalidate: 10,
  };
}
