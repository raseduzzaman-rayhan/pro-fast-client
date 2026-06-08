import tracking from "../../../assets/How/live-tracking.png";
import safe from "../../../assets/How/safe-delivery.png";
import support from "../../../assets/How/support.gif";

const features = [
    {
        id: 1,
        image: tracking,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
        id: 2,
        image: safe,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
        id: 3,
        image: support,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-16 bg-[#F4F7F7]">
            <div className="max-w-7xl mx-auto px-4">

                <div className="border-t border-dashed border-teal-400 mb-10"></div>

                <div className="space-y-6">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-lg transition duration-300"
                        >
                            {/* Image */}
                            <div className="md:w-[180px] flex justify-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-36 object-contain"
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block h-28 border-l border-dashed border-teal-400"></div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-[#03373D] mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-gray-500 leading-8">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border-b border-dashed border-teal-400 mt-10"></div>

            </div>
        </section>
    );
};

export default HowItWorks;