import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="mt-10 pb-20">
        <div className="mb-10">
          <WhyChoose />
        </div>

        <Testimonials />
      </div>
    </div>
  );
}
