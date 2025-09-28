export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-32 flex flex-col justify-center items-center bg-[#111827]"
    >
      <div className="max-w-6xl text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Contact</h2>
        <p className="text-lg md:text-xl mb-4 text-gray-300">
          For inquiries, feedback, or collaborations, reach out at:{" "}
          <span className="text-[#2563EB] font-medium">your.email@example.com</span>
        </p>
        <p className="text-lg md:text-xl text-gray-300">
          Check out my GitHub:{" "}
          <a
            href="https://github.com/vitaly179153"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] font-medium hover:underline"
          >
            github.com/vitaly179153
          </a>
        </p>
      </div>
    </section>
  );
}
