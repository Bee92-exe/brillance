import SectionBadge from "../SectionBadge.jsx";
import PricingIcon from "../icons/PricingIcon.jsx";
import PricingHeading from "./PricingHeading.jsx";
import PricingSubheading from "./PricingSubheading.jsx";

export default function Pricing() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]">
            {/* Pricing Header */}
            <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                <div className="w-full max-w-[586px] px-6 py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
                    <SectionBadge icon={<PricingIcon />}>
                        Plans &amp; Pricing
                    </SectionBadge>
                    <PricingHeading />
                    <PricingSubheading />
                </div>
            </div>
        </div>
    );
}
