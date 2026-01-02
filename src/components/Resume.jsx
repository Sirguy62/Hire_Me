export default function Resume() {
  return (
    <article className="bg-[#1a1a1a] rounded-2xl p-6">
      {/* HEADER */}
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Resume</h2>
        <div className="my-2 h-1 w-full bg-gray-700/40 rounded-full overflow-hidden">
          <div className="h-full w-[25%] bg-orange-300 rounded-full" />
        </div>
      </header>

      {/* ===================== */}
      {/* EDUCATION */}
      {/* ===================== */}
      <section className="mb-10">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <span className="text-[#D4B15F]">📘</span> Education
        </h3>

        {/* TIMELINE */}
        <ol className="relative pl-6 border-l border-gray-700">
          {/* ITEM 1 */}
          <li
            className="
              relative
              mb-8

              /* OUTER DOT */
              before:content-['']
              before:absolute
              before:-left-[31px]
              before:top-1
              before:w-3
              before:h-3
              before:rounded-full
              before:bg-[#D4B15F]

              /* INNER DOT / GLOW */
              after:content-['']
              after:absolute
              after:-left-[28px]
              after:top-[7px]
              after:w-[6px]
              after:h-[6px]
              after:rounded-full
              after:before:bg-[#D4B15F]
              after:shadow-[0_0_4px_rgba(250,204,21,0.8)]
            "
          >
            <h4 className="font-semibold">
              Enugu State University Of Science and Technology
            </h4>

            <span className="text-[#D4B15F] text-sm block mb-1">
              2017 — 2022
            </span>

            <p className="text-gray-300 text-sm leading-relaxed">
              BSC Computer Computer Engineering
            </p>
          </li>
          {/* ITEM 2 */}
        </ol>
      </section>

      {/* ===================== */}
      {/* EXPERIENCE */}
      {/* ===================== */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <span className="text-[#D4B15F]">💼</span> Experience
        </h3>

        <ol className="relative pl-6 border-l border-gray-700">
          {/* ITEM 1 */}
          <li
            className="
              relative
              mb-8

              /* OUTER DOT */
              before:content-['']
              before:absolute
              before:-left-[31px]
              before:top-1
              before:w-3
              before:h-3
              before:rounded-full
              before:bg-[#D4B15F]

              /* INNER DOT / GLOW */
              after:content-['']
              after:absolute
              after:-left-[28px]
              after:top-[7px]
              after:w-[6px]
              after:h-[6px]
              after:rounded-full
              after:bg-[#D4B15F]
              after:shadow-[0_0_4px_rgba(250,204,21,0.8)]
            "
          >
            <h4 className="font-semibold">Audix</h4>

            <span className="text-[#D4B15F] text-sm block mb-1">
              2023 -2024
            </span>

            <p className="text-gray-300 text-sm leading-relaxed">
              i and few team members built a Digital currency risk management
              system that helps users make the right decision on what to invest
              on,this application calculate the probability of a good or bad
              investment
            </p>
          </li>

          {/* ITEM 2 */}
          <li
            className="
              relative
              mb-8

              /* OUTER DOT */
              before:content-['']
              before:absolute
              before:-left-[31px]
              before:top-1
              before:w-3
              before:h-3
              before:rounded-full
              before:bg-[#D4B15F]

              /* INNER DOT / GLOW */
              after:content-['']
              after:absolute
              after:-left-[28px]
              after:top-[7px]
              after:w-[6px]
              after:h-[6px]
              after:rounded-full
              after:bg-[#D4B15F]
              after:shadow-[0_0_4px_rgba(250,204,21,0.8)]
            "
          >
            <h4 className="font-semibold">Hermex Travels</h4>

            <span className="text-[#D4B15F] text-sm block mb-1">
              January 2025 - Present
            </span>

            <p className="text-gray-300 text-sm leading-relaxed">
              I and seven team members including the team lead Built a full
              booking agency web app using Next.js, that consists of a hotel and
              Flight booking system. i mostly worked on the hotel section
              inorder to get familiar with the system incase there is any fixes,
              should be easy to work on.
            </p>
          </li>
        </ol>
      </section>
      <section className="mt-10 mb-10">
        {/* TITLE */}
        <h2 className="text-2xl font-bold mb-6">My Skills</h2>

        {/* CARD */}
        <div
          className="
          relative
          rounded-2xl
          p-6
          bg-[#1a1a1a]
          shadow-inner
        "
        >
          {/* React */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">React</span>
              <span className="text-gray-300">80%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#2a2a2a] overflow-hidden">
              <div className="h-full w-[90%] rounded-full bg-[#D4B15F]" />
            </div>
          </div>

          {/* TypeScript */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">TypeScript</span>
              <span className="text-gray-300">70%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#2a2a2a] overflow-hidden">
              <div className="h-full w-[80%] rounded-full bg-[#D4B15F]" />
            </div>
          </div>

          {/* Next JS */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Next JS</span>
              <span className="text-gray-300">80%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#2a2a2a] overflow-hidden">
              <div className="h-full w-[90%] rounded-full bg-[#D4B15F]" />
            </div>
          </div>

          {/* Postgres */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Prisma</span>
              <span className="text-gray-300">70%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#2a2a2a] overflow-hidden">
              <div className="h-full w-[70%] rounded-full bg-[#D4B15F]" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
