import Banner from "./banner";
import WorkSection from "./1";
import QualificationSection from "./2";
import DealerSection from "./4";
import ContactSection from "./5";

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Banner />
      <WorkSection />
      <QualificationSection />
      <DealerSection />
      <ContactSection />
    </main>
  );
}
