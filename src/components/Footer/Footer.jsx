import CompanyColumn from "./CompanyColumn.jsx";
import FooterBrand from "./FooterBrand.jsx";
import FooterPattern from "./FooterPattern.jsx";
import FooterTagline from "./FooterTagline.jsx";
import ProductColumn from "./ProductColumn.jsx";
import ResourcesColumn from "./ResourcesColumn.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
    return (
        <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
            {/* Main Footer Content */}
            <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
                {/* Brand Section */}
                <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
                    <FooterBrand />
                    <FooterTagline />
                    <SocialLinks />
                </div>

                {/* Navigation Links */}
                <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
                    <ProductColumn />
                    <CompanyColumn />
                    <ResourcesColumn />
                </div>
            </div>

            <FooterPattern />
        </div>
    );
}
