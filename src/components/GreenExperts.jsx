import React from 'react';

const GreenExperts = () => {
    const experts = [
        {
            name: "Dr. Anya Sharma",
            role: "Horticulturist",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
            bgColor: "bg-orange-100"
        },
        {
            name: "Sirach Foilem",
            role: "Reperstudiet",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            bgColor: "bg-teal-100"
        }
    ];

    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    Meet Our Green Experts
                </h2>

                {/* Main Content Container */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Section Title */}
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">
                        Eco Decor Ideas
                    </h3>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Left Image */}
                        <div className="order-1">
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <img 
                                    src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&q=80" 
                                    alt="Eco Decor Living Room"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>

                        {/* Center - Expert Profiles */}
                        <div className="order-2 flex flex-col items-center justify-center space-y-8">
                            {experts.map((expert, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <div className={`w-32 h-32 rounded-full ${expert.bgColor} p-1 mb-4 shadow-lg`}>
                                        <img 
                                            src={expert.image} 
                                            alt={expert.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-800">
                                        {expert.name}
                                    </h4>
                                    <p className="text-gray-500">
                                        {expert.role}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Right Image */}
                        <div className="order-3">
                            <div className="rounded-2xl overflow-hidden shadow-md">
                                <img 
                                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" 
                                    alt="Eco Decor Room Setup"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-lg font-semibold text-gray-800 mb-2">
                                        Expert Plant Care Advice
                                    </h5>
                                    <p className="text-gray-600 text-sm">
                                        Get personalized recommendations from our certified horticulturists for your specific space and lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="text-lg font-semibold text-gray-800 mb-2">
                                        Sustainable Living Tips
                                    </h5>
                                    <p className="text-gray-600 text-sm">
                                        Learn how to create eco-friendly spaces that promote wellness and environmental responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                 
                </div>
            </div>
        </div>
    );
};

export default GreenExperts;