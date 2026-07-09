import Banner from "@/app/home/banner";
import HomeFeatureSection from "@/app/home/1";
import Section2 from "@/app/home/2";
import Section3 from "@/app/home/3";
import Section4 from "@/app/home/4";
import Section5 from "@/app/home/5";
import Section6 from "@/app/home/6";
import ArticleSection from "@/app/home/article";
import ClientSection from "@/app/home/client";
import Quotation from "@/app/home/quotation";

export default function Home() {
  return (
    <main>
      <Banner />
      <HomeFeatureSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <ArticleSection />
      <ClientSection />
      <Quotation />
    </main>
  );
}
