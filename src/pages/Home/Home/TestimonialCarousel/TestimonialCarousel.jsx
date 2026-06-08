import { useState } from 'react';
import customer from '../../../../assets/customer-top.png';
// React Icons এবং Lucide Icons ইম্পোর্ট করা হয়েছে
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { RxQuote } from 'react-icons/rx';

const testimonialsData = [
    {
        id: 1,
        name: 'Maliha Khan',
        role: 'Senior Analyst',
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatarColor: 'bg-slate-300'
    },
    {
        id: 2,
        name: 'Rasel Ahamed',
        role: 'CTO',
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatarColor: 'bg-slate-300'
    },
    {
        id: 3,
        name: 'Awlad Hossin',
        role: 'Senior Product Designer',
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatarColor: 'bg-[#064e51]'
    },
    {
        id: 4,
        name: 'Nasir Uddin',
        role: 'CEO',
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatarColor: 'bg-slate-300'
    },
    {
        id: 5,
        name: 'Aisha Ahmed',
        role: 'Marketing Lead',
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatarColor: 'bg-slate-300'
    }
];

const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full bg-gray-200 py-16 px-4 overflow-hidden select-none font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Top Header Image */}
                <div className="mb-6 opacity-90">
                    <img src={customer} alt="Customer Feedback" className="h-32 object-contain" />
                </div>

                {/* Headings */}
                <h2 className="text-[#022325] text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide">
                    What our customers are sayings
                </h2>
                <p className="text-gray-500 text-sm max-w-2xl text-center leading-relaxed mb-16 px-4 font-light">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>

                {/* Testimonials Viewport Container */}
                <div className="relative w-full flex justify-center items-center h-[420px] overflow-visible">
                    {/* Main Wrapper Track */}
                    <div
                        className="flex items-center justify-center gap-6 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(${(2 - activeIndex) * 364}px)`,
                        }}
                    >
                        {testimonialsData.map((item, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-[340px] shrink-0 rounded-[28px] p-8 bg-white transition-all duration-500 cursor-pointer flex flex-col justify-between select-none
                                        ${isActive
                                            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.06)] scale-105 z-20 opacity-100 border border-gray-50'
                                            : 'scale-95 opacity-25 z-10 blur-[0.4px] hover:opacity-40'
                                        }`}
                                    style={{ height: isActive ? '340px' : '300px' }}
                                >
                                    <div>
                                        {/* React Icon: RxQuote (Quotation Mark) */}
                                        <RxQuote className="text-[#a5e3e6] text-5xl -mt-2 -ml-2.5" />

                                        {/* Review Content */}
                                        <p className="text-[#4b5563] text-[13.5px] leading-relaxed font-normal tracking-wide mt-2">
                                            {item.text}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Dashed Separator Line */}
                                        <div className="w-full border-t border-dashed border-gray-200 my-4" />

                                        {/* User Info Profile Footer */}
                                        <div className="flex items-center gap-4">
                                            <div className={`w-11 h-11 rounded-full transition-colors duration-500 ${isActive ? 'bg-[#064e51]' : 'bg-slate-300'}`} />
                                            <div>
                                                <h4 className="text-[#022325] font-bold text-sm tracking-wide">
                                                    {item.name}
                                                </h4>
                                                <p className="text-gray-400 text-xs mt-0.5 font-light">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Control Button Area */}
                <div className="flex items-center justify-center gap-8 mt-6 w-full">
                    {/* Left Arrow (LuArrowLeft) */}
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white hover:bg-[#bce252] flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all text-[#022325]"
                    >
                        <LuArrowLeft className="text-xl stroke-[2.5]" />
                    </button>

                    {/* Dots Pagination indicators */}
                    <div className="flex items-center gap-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-2 bg-[#022325]' : 'w-2 bg-[#a3cbd1]'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Right Arrow (LuArrowRight) */}
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white hover:bg-[#bce252] flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all text-[#022325]"
                    >
                        <LuArrowRight className="text-xl stroke-[2.5]" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TestimonialCarousel;