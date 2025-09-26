export default function Welcome() {
    return (
        <section
            id="welcome"
            className="flex flex-col md:flex-row items-center justify-center py-32 px-6 bg-[#1F2937] w-full min-h-[80vh]"
        >
            <div className="w-48 h-48 rounded-full bg-gray-600 overflow-hidden mr-0 md:mr-12 mb-8 md:mb-0">
                <img
                    src="/thumbnails/profile.jpeg"
                    alt="Vitali"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 text-[#F5F5F5]">Hi, I'm Vitali</h2>
                <p className="text-gray-300 text-lg">
                    I'm a frontend developer passionate about building modern web apps,
                    interactive experiences, and visually appealing UI.
                    This portfolio showcases some of my latest projects.
                </p>
            </div>
        </section>
    );
}
