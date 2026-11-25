import SectionBadge from "../SectionBadge.jsx";
import ServicesIcon from "../icons/ServicesIcon.jsx";
import EffortlessIntegration from "./EffortlessIntegration.jsx";
import FeaturesHeading from "./FeaturesHeading.jsx";
import FeaturesSubheading from "./FeaturesSubheading.jsx";
import NumbersThatSpeak from "./NumbersThatSpeak.jsx";
import PatternStrip from "./PatternStrip.jsx";
import SmartSimpleBrilliant from "./SmartSimpleBrilliant.jsx";
import YourWorkInSync from "./YourWorkInSync.jsx";

export default function Features() {
    return (
        <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
            {/* Header */}
            <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
                    <SectionBadge icon={<ServicesIcon />}>
                        Services
                    </SectionBadge>
                    <FeaturesHeading />
                    <FeaturesSubheading />
                </div>
            </div>

            {/* Features Content */}
            <div className="self-stretch flex justify-center items-start">
                <PatternStrip />

                {/* Grid Content */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    <SmartSimpleBrilliant />
                    <YourWorkInSync />
                    <EffortlessIntegration />
                    <NumbersThatSpeak />
                </div>

                <PatternStrip />
            </div>
        </div>
    );
}
