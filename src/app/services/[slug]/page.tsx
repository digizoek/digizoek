import { Metadata } from "next";
import ServicesData from "@/components/Services/ServicesData";
import { Service } from "@/types/services";
import ErrorPage from "../../error/page";
import UpperShape from "@/components/Common/UpperShape";
import Hero from "@/components/Hero/ServicesHeroSection";
import TextCarousel from "@/components/Carousel/TextCarousel";


interface SingleServiceProps {
  params: { slug: string };
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: SingleServiceProps): Promise<Metadata> {
  const service = ServicesData.find((service) => service.id === params.slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return { title: service.heading };
}

// Generate static paths
export async function generateStaticParams() {
  return ServicesData.map((service) => ({
    slug: service.id,
  }));
}

// Page Component
export default function SingleServicePage({ params }: SingleServiceProps) {
  const service = ServicesData.find((service) => service.id === params.slug);

  if (!service) {
    return <ErrorPage />;
  }

  return (
    <div>
      <UpperShape/>
      <Hero
        backgroundImage={service.imagePath}
        pageTitle={service.pageTitle}
        description={service.description}
      />
      <TextCarousel slug={params.slug} />    </div>
  );
}
