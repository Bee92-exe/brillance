export default function ProductColumn() {
    return (
        <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Features
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Pricing
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Integrations
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Real-time Previews
                </div>
                <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Multi-Agent Coding
                </div>
            </div>
        </div>
    );
}
