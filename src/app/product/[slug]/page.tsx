import { notFound } from "next/navigation";

import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductSections } from "@/components/product/ProductSections";
import { getProduct } from "@/lib/getProduct";
import { products } from "@/content";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = () => {
  return products.map((product) => ({ slug: product.slug }));
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Navbar />
      <main>
        <ProductHero product={product} />
        <ProductSections product={product} />
      </main>
      <Footer />
    </div>
  );
}
