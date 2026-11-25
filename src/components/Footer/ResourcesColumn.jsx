export default function ResourcesColumn() {
    return (
        <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                Resources
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Terms of use
                </div>
                <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    API Reference
                </div>
                <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Documentation
                </div>
                <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Community
                </div>
                <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                    Support
                </div>
            </div>
        </div>
    );
}
