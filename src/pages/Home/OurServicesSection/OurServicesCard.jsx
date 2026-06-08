const OurServicesCard = ({ service }) => {
    return (

        <div
            className={`rounded-[24px] p-8 min-h-[280px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:text-gray-700 hover:bg-[#c6e65a] bg-[#f4f4f4] text-[#003d43]`}
        >
            <div className="w-16 h-16 rounded-full bg-[#ece9f7] flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
            </div>

            <h3 className="text-2xl font-bold leading-snug mb-5 max-w-[280px]">
                {service.title}
            </h3>

            <p className="text-sm leading-7 opacity-80">
                {service.description}
            </p>

        </div>
    );
};

export default OurServicesCard;