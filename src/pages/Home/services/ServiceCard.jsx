import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon: IconComponent, title, description } = service;

    return (
        <div className="bg-white rounded-3xl p-8 shadow-sm h-[280px] flex flex-col text-[#03263D]">

            <div className="mb-6 text-[#0c313a]">
                <IconComponent size={36} />
            </div>

            <h3 className="text-lg font-bold mb-3 text-[#0c313a]">
                {title}
            </h3>

            <p className="text-sm text-gray-500">
                {description}
            </p>

        </div>
    );
};

export default ServiceCard;