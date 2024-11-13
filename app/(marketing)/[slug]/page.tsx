import { notFound } from "next/navigation";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/content/mdx-components";

import "@/styles/mdx.css";

import { Metadata } from "next";

import { constructMetadata, getBlurDataURL } from "@/lib/utils";

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const page = allPages.find((page) => page.slugAsParams === params.slug);
  if (!page) {
    return;
  }

  const { title, description } = page;

  return constructMetadata({
    title: `${title} – InspireYT`,
    description: description,
  });
}

export default async function PagePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const page = allPages.find((page) => page.slugAsParams === params.slug);

  if (!page) {
    notFound();
  }

  const images = await Promise.all(
    page.images.map(async (src: string) => ({
      src,
      blurDataURL: await getBlurDataURL(src),
    })),
  );

  return (
    <article className="hero lg:pt-[180px] max-lg:pt-[160px] pb-[100px] overflow-hidden lg:overflow-visible bg-white dark:bg-dark-300 pt-[100px] max-md:py-25 relative max-md:overflow-hidden">
      <div className="relative z-10">
        
        <Mdx code={page.body.code} images={images} />
      </div>
    </article>
  );
}
