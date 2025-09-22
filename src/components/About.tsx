export default function About() {
  return (
    <section
      id="about"
      className="w-full py-32 flex flex-col justify-center items-center bg-[#F5F5F5]"
    >
      <div className="max-w-6xl text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About This Marketplace</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          Explore and preview 3D models interactively. Our platform allows users to
          view, rotate, and inspect high-quality 3D assets directly in the browser.
          Perfect for showcasing your 3D work or browsing assets for inspiration.
        </p>
      </div>
    </section>
  );
}
