
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateSection from "@/components/DonateSection";

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <DonateSection />
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
