import AnalyticsInsights from "./AnalyticsInsights.jsx";
import CollaborateSeamlessly from "./CollaborateSeamlessly.jsx";
import PatternStrip from "./PatternStrip.jsx";
import PlanYourSchedules from "./PlanYourSchedules.jsx";

export default function ServiceCards() {
    return (
        <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
            <PatternStrip />

            {/* Feature Cards */}
            <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                <PlanYourSchedules />
                <AnalyticsInsights />
                <CollaborateSeamlessly />
            </div>

            <PatternStrip />
        </div>
    );
}
