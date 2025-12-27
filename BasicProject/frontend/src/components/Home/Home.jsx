import { Link } from "react-router-dom";

import FeatureCard from "../FeatureCard/FeatureCard";

import useFeatures from "../../Hooks/useFeatures.js";




export default function Home() {

  const {loading , activeFeatureId , toggleFeature} = useFeatures();

    const features = [
        {
            id: 1,
            title: "Fast Performance",
            description: "Optimized rendering ensures smooth and fast user experience across devices.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
        },
        {
            id: 2,
            title: "Secure Data",
            description: "Your data is protected with modern security practices and encryption.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        },
        {
            id: 3,
            title: "Beginner Friendly",
            description: "Clean UI and simple structure make it easy for new developers to learn React.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            id: 4,
            title: "Reusable Components",
            description: "Build once and reuse everywhere with modular React components.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"

        },
        {
            id: 5,
            title: "Modern Design",
            description: "Responsive and modern UI built with best design practices.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        },
        {
            id: 6,
            title: "Scalable Architecture",
            description: "Structured codebase that grows easily as your application expands.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
        }
    ];



    return (
        <div className="mx-auto w-full max-w-7xl px-4">

            {/* HERO */}
            <section className="bg-gray-100 rounded-xl py-20 px-6">
                <div className="grid md:grid-cols-2 items-center gap-12">

                    <div>
                        <h1 className="text-5xl font-bold mb-6">
                            Build React Skills Faster
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Practice React by adding logic to a real-looking UI.
                        </p>

                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-orange-600 text-white rounded-lg">
                                Download App
                            </button>
                            <Link
                                to="/about"
                                className="px-6 py-3 border border-orange-600 text-orange-600 rounded-lg"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
                        alt="app"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24">
                <h2 className="text-center text-4xl font-bold mb-12">
                    Features
                </h2>

                {loading ?
                    (
                        <p className="text-center text-xl">Loading features...</p>
                    )
                    : (<div className="grid sm:grid-cols-3 gap-8">

                        {features.map((feature) => (

                            <FeatureCard
                                key={feature.id}
                                title={feature.title}
                                image={feature.image}
                                description={feature.description}
                                isOpen= {activeFeatureId=== feature.id}

                                onToggle={()=>toggleFeature(feature.id)}
                            />

                        ))}

                    </div>)}
            </section>

            {/* CTA */}
            <section className="bg-orange-600 text-white rounded-xl p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Start Your React Journey
                </h2>
                <p className="mb-6">
                    This Ui  has been Fixed But not Connect with Backend yet
                </p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold">
                    Get Started
                </button>
            </section>
        </div>
    );
}


