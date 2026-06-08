import { FaShippingFast, FaTruck, FaBoxes, FaMoneyBillWave, FaWarehouse, FaUndo } from "react-icons/fa";
import OurServicesCard from "./OurServicesCard";

const services = [
    {
        title: "Express & Standard Delivery",
        icon: <FaShippingFast className="text-[#ff7a59] text-3xl" />,
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        title: "Nationwide Delivery",
        icon: <FaTruck className="text-[#ff7a59] text-3xl" />,
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        featured: true,
    },
    {
        title: "Fulfillment Solution",
        icon: <FaBoxes className="text-[#ff7a59] text-3xl" />,
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        title: "Cash on Home Delivery",
        icon: <FaMoneyBillWave className="text-[#ff7a59] text-3xl" />,
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        title: "Corporate Service / Contract In Logistics",
        icon: <FaWarehouse className="text-[#ff7a59] text-3xl" />,
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        title: "Parcel Return",
        icon: <FaUndo className="text-[#ff7a59] text-3xl" />,
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const OurServicesSection = () => {
    return (

        <section className="bg-[#003d43] rounded-[28px] px-6 md:px-12 py-16 max-w-7xl mx-auto my-10">
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Our Services
                </h2>

                <p className="text-gray-200 max-w-3xl mx-auto text-sm md:text-base leading-7">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero
                    hassle. From personal packages to business shipments — we deliver on
                    time, every time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <OurServicesCard
                        key={index}
                        service={service}
                    ></OurServicesCard>
                ))}
            </div>
        </section>
    );
}
export default OurServicesSection;