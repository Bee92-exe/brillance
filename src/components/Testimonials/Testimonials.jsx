import SectionBadge from "../SectionBadge.jsx";
import TestimonialsIcon from "../icons/TestimonialsIcon.jsx";
import TestimonialImage from "./TestimonialImage.jsx";
import TestimonialName from "./TestimonialName.jsx";
import TestimonialQuote from "./TestimonialQuote.jsx";
import TestimonialRole from "./TestimonialRole.jsx";
import TestimonialsHeading from "./TestimonialsHeading.jsx";
import TestimonialsSubheading from "./TestimonialsSubheading.jsx";

export default function Testimonials() {
    return (
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
            {/* Header */}
            <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
                    <SectionBadge icon={<TestimonialsIcon />}>
                        Testimonials
                    </SectionBadge>
                    <TestimonialsHeading />
                    <TestimonialsSubheading />
                </div>
            </div>

            {/* Testimonial */}
            <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border border-b border-l-0 border-r-0 border-t-0">
                <div className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6">
                    <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
                        <TestimonialImage />

                        {/* Testimonial Content */}
                        <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6">
                            <TestimonialQuote />
                            <div className="self-stretch flex flex-col justify-start items-start gap-1">
                                <TestimonialName />
                                <TestimonialRole />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
