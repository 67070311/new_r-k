import Banner from "./banner";
import Body from "./body";
import ArticleSection from "./article";
import ClientSection from "./client";

export default function AboutPage() {
  return (
    <main className="pt-[82px]">
      <Banner />
      <Body />
      <ArticleSection />
      <ClientSection />
    </main>
  );
}
