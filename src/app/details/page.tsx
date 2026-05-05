import ScrollOverlay from "@/components/ScrollOverlay";
import DecorativeFrames from "@/components/DecorativeFrames";
import FloatingNav from "@/components/FloatingNav";
import WeddingTitle from "@/components/WeddingTitle";
import CoupleInfo from "@/components/CoupleInfo";
import EventTimeline from "@/components/EventTimeline";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function DetailsPage() {
  return (
    <main className="w-full flex justify-center bg-background min-h-[100dvh] relative">
      <div className="min-h-svh w-full max-w-[500px] bg-background relative shadow-2xl overflow-hidden">
        <FloatingNav />
        <DecorativeFrames />
        <ScrollOverlay />
        
        {/* MAIN SCROLLING CONTENT */}
        <div className="flex z-10 items-center flex-col pt-10 gap-4 relative pb-20">
          <WeddingTitle />
          <CoupleInfo />
          <EventTimeline />
          <ContactInfo />
          <Footer />
          
          {/* Gallery Integrated at bottom */}
          <div className="w-full relative z-10 pb-20">
             <Gallery />
          </div>
        </div>
      </div>
    </main>
  );
}
