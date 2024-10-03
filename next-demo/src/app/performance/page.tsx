import performanceImage from "@/../public/performance.jpg";
import HeroImage from "@/components/heroImage";

export default function PerformancePage() {
  return (
    <HeroImage
      img={performanceImage}
      alt="Performance"
      title="Great Performance"
    />
  );
}
