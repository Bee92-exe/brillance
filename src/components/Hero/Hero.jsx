import HeroBackground from "./HeroBackground.jsx";
import HeroHeading from "./HeroHeading.jsx";
import HeroSubheading from "./HeroSubheading.jsx";
import StartForFreeButton from "./StartForFreeButton.jsx";

export default function Hero() {
    return (
        <>
            <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                    <HeroHeading />
                    <HeroSubheading />
                </div>
            </div>

            {/* CTA Button */}
            <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <StartForFreeButton />
            </div>

            <HeroBackground />
        </>
    );
}
