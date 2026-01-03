export default function Contact() {
  return (
    <section className="bg-[#1a1a1a] rounded-2xl mb-20 p-6 max-w-174.5 lg:max-w-217">
      {/* HEADER */}
      <header className="mb-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="my-2 h-1 w-full bg-gray-700/40 rounded-full overflow-hidden">
          <div className="h-full w-[25%] bg-orange-300 rounded-full" />
        </div>
      </header>

      {/* MAP */}
      <div className="mb-8 rounded-2xl overflow-hidden border border-[#2a2a2a]">
        <iframe
          title="Lagos map"
          src="https://www.google.com/maps?q=Abuja,Nigeria&z=10&output=embed"
          className="w-full h-[220px] grayscale contrast-125"
          loading="lazy"
        />
      </div>

      {/* FORM TITLE */}
      <h3 className="text-xl font-semibold mb-6">Reach Out To Me</h3>

      {/* FORM */}
      <form className="space-y-5 w-full">
        {/* Full name */}
        <input
          type="text"
          placeholder="Full name"
          className="
            w-full
            rounded-xl
            bg-[#1f1f1f]
            border
            border-[#2a2a2a]
            px-4
            py-3
            text-sm
            placeholder:text-gray-500
            focus:outline-none
            focus:border-[#D4B15F]
          "
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="
            w-full
            rounded-xl
            bg-[#1f1f1f]
            border
            border-[#2a2a2a]
            px-4
            py-3
            text-sm
            placeholder:text-gray-500
            focus:outline-none
            focus:border-[#D4B15F]
          "
        />

        {/* Message */}
        <textarea
          rows={4}
          placeholder="Your Message"
          className="
            w-full
            rounded-xl
            bg-[#1f1f1f]
            border
            border-[#2a2a2a]
            px-4
            py-3
            text-sm
            placeholder:text-gray-500
            resize-none
            focus:outline-none
            focus:border-[#D4B15F]
          "
        />

        {/* BUTTON */}
        <button
          type="button"
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            py-3
            font-medium
            text-[#D4B15F]
            bg-gradient-to-r
            from-[#D4B15F]/20
            to-[#D4B15F]/10
            hover:from-[#D4B15F]/30
            hover:to-[#D4B15F]/20
            transition
          "
        >
          <span className="text-lg"></span>
          Send Message
        </button>
      </form>
    </section>
  );
}
