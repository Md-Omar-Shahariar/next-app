import Link from "next/link";

export default function Header() {
  return (
    <div className="z-10 text-white w-full absolute shadow-2xl">
      <nav className="flex flex-wrap text-center relative justify-between p-8 w-full">
        <Link className="text-3xl font-bold" href={"/"}>
          Home
        </Link>
        <div className="text-xl space-x-4">
          <Link href={"/performance"}>Performance</Link>
          <Link href={"/scale"}>Scale</Link>
          <Link href={"/reliability"}>Reliability</Link>
        </div>
      </nav>
    </div>
  );
}
