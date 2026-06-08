import bannerImg from "../../../assets/How/location-merchant.png";

const MerchantBanner = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="relative overflow-hidden rounded-[30px] bg-[#03363D] px-8 md:px-14 py-12">

                {/* Top Wave */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-40">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_70%)]">
                    </div>
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Merchant and Customer Satisfaction
                            <br />
                            is Our First Priority
                        </h2>

                        <p className="text-gray-300 mt-6 leading-7">
                            We offer the lowest delivery charge with the highest value along
                            with 100% safety of your product. Pathao courier delivers your
                            parcels in every corner of Bangladesh right on time.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="bg-lime-300 hover:bg-lime-400 text-[#03363D] font-semibold px-8 py-3 rounded-full transition">
                                Become a Merchant
                            </button>

                            <button className="border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-[#03363D] font-semibold px-8 py-3 rounded-full transition">
                                Earn with Profast Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src={bannerImg}
                            alt="Parcel"
                            className="w-[380px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MerchantBanner;