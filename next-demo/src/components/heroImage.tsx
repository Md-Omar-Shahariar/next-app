import Image, { type StaticImageData } from "next/image";

type HeroProps = {
  img: StaticImageData;
  alt: string;
  title: string;
};

export default function HeroImage(Props: HeroProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute -z-10 inset-0 ">
        <Image
          src={Props.img}
          alt={Props.alt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800"></div>
      </div>
      <div className="pt-48 justify-center items-center flex">
        <h1 className="text-white text-6xl">{Props.title}</h1>
      </div>
    </div>
  );
}
