import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className=" bg-[#201f1f] rounded-2xl px-2 py-4 max-w-174.5 lg:min-w-174.5">
      <h1 className="text-2xl font-bold mb-6 text-center lg:text-left">Projects</h1>
      <div className="my-2 h-1 w-full bg-gray-700/40 rounded-full overflow-hidden">
        <div className="h-full w-[25%] bg-orange-300 rounded-full" />
      </div>

      <div className="flex flex-col justify-center items-center gap-3 px-6 rounded-xl py-5">
        <div className="flex flex-col items-left justify-center ">
          <Link className="rounded-lg" href="https://bookora-mu.vercel.app">
            <Image
              src="/image/project.png"
              alt="project"
              width={300}
              height={400}
            />
          </Link>
          <h2 className="px-3 pt-1 text-lg">Bookora | Travel App</h2>
          <p className="px-3 text-gray-300/40">Web Development</p>
        </div>
      </div>
    </section>
  );
}
