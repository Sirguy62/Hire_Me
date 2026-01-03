import Image from "next/image";
import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export default function Portfolio() {
  return (
    <section className=" bg-[#201f1f] rounded-2xl p-6  max-w-174.5 lg:max-w-217">
      <h1 className="text-2xl font-bold mb-6 text-left">Projects</h1>
      <div className="my-2 h-1 w-full bg-gray-700/40 rounded-full overflow-hidden">
        <div className="h-full w-[25%] bg-orange-300 rounded-full" />
      </div>

      <div>
        <PortfolioGrid />
      </div>
    </section>
  );
}
