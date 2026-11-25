export default function CompanyColumn() {
    return (
        <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                Company
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    About us
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Our team
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Careers
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Brand
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Contact
                </div>
            </div>
        </div>
    );
}
