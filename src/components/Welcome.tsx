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
                    a front-end developer passionate about 3D web technology and interactive digital experiences.
                    I build modern, responsive web apps using React, TypeScript, and Tailwind CSS, and I integrate Three.js / React Three Fiber to bring 3D content to life in the browser.

                    I’m especially interested in using 3D modeling and visualization to create impactful, human-focused solutions — blending my technical background with my creative experience in Blender and Unreal Engine.
                </p>
            </div>
        </section>
    );
}
