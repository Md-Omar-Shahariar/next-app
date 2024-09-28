import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Link href={"/performance"}>Performance</Link>
      </div>
      <div>
        <Link href={"/scale"}>Scale</Link>
      </div>
      <div>
        <Link href={"/reliability"}>Reliability</Link>
      </div>
      Home Page
    </div>
  );
}
