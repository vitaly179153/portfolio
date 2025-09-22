export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-32 flex flex-col justify-center items-center bg-[#F5F5F5]"
    >
      <div className="max-w-6xl text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Contact</h2>
        <p className="text-lg md:text-xl mb-4 text-gray-700">
          For inquiries, feedback, or collaborations, reach out at:
          <span className="text-[#2563EB] font-medium"> your.email@example.com</span>
        </p>
      </div>
    </section>
  );
}
