import Image from "next/image";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

export default function About() {
  return (
    <section className="bg-[#201f1f] mb-20 py-2 px-3 rounded-lg lg:rounded-xl max-w-174.5">
      <h1 className="text-2xl font-bold mb-2">About Me</h1>
      <div className="my-2 h-1 w-full bg-gray-700/40 rounded-full overflow-hidden">
        <div className="h-full w-[25%] bg-orange-300 rounded-full" />
      </div>
      <p className="text-gray-400 leading-relaxed mt-6">
        I’m a Frontend Developer with two years experience building modern,
        responsive web applications using JavaScript and modern tools. I focus
        mainly on React.js and Next.js, also try my best to replicate any given
        UI to satisfy users need and better experience. I currently work as a
        Frontend Developer at Hermex Travels, a travel agency company. where i
        handled end to end implementation of the hotel system.
      </p>

      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-2">Hobby</h1>
        <div className="my-2 h-1 w-full bg-gray-700/40 rounded-full overflow-hidden">
          <div className="h-full w-[25%] bg-orange-300 rounded-full" />
        </div>
        <p className="text-gray-400 leading-relaxed mt-6">
          I will say i enjoy learning about new technology related to my field
          of profession, taking courses, reading open source codes.{" "}
        </p>
      </div>

      <div className="flex flex-col mb-20 gap-4 mt-6">
        <h1 className="text-2xl">Specialties</h1>
        <div className="flex flex-col md:flex-row lg:items-center gap-5">
          <div className=" flex flex-col justify-center items-center gap-1  p-4 rounded-xl bg-gray-700/40">
            <Image src="/image/code.png" alt="code" width={80} height={60} />
            <div>
              <h3 className="font-semibold text-xl">Frontend Development</h3>
              <p className="text-sm text-gray-400">
                High-quality professional development.
              </p>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-1  p-4 rounded-xl bg-gray-700/40">
            <Image src="/image/web.png" alt="code" width={60} height={40} />
            <div>
              <h3 className="font-semibold">Mobile Responsiveness</h3>
              <p className="text-sm text-gray-400">
                iOS & Android applications.
              </p>
            </div>
          </div>
        </div>

        <div>
          <section className="mb-12 relative">
            {/* TITLE */}
            <h2 className="text-2xl font-bold mb-9 mt-4">Testimonials</h2>

            {/* CARD */}
            <div className=" bg-[#1a1a1a] rounded-2xl p-2 overflow-hidden">
              {/* AVATAR WITH ::BEFORE */}
              <div className="absolute top-12 left-6">
                <div
                  className="
              relative
              w-20 h-20
              rounded-2xl
              bg-[#2a2a2a]
              p-1

              before:content-['']
              before:absolute
              before:-inset-1
              before:rounded-2xl
              before:bg-gradient-to-r
              before:from-orange-400/40
              before:to-orange-600/40
              before:blur-md
              before:-z-10
            "
                >
                  <IoPerson size={70} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-14 flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold">MR Praise Ordu</h3>

                <p className="text-orange-300 text-sm font-medium mt-1">
                  Founder At Hermex Travels
                </p>

                <p className="text-gray-300 mt-4 leading-relaxed text-center">
                  Gospel&apos;s Professionalism and dedication exceeded our
                  expectations. He brought our vision to life with precision,
                  creativity to the team.
                </p>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="mt-6 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-orange-300 rounded-full" />
            </div>
          </section>
          <div>
            <h1 className="text-2xl pb-3">Clients</h1>
            <Link href="https://www.hermextravels.com/">
              <Image
                src="/image/hermex.png"
                alt="hermex"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
