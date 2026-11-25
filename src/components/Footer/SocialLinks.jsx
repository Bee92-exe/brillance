import GitHubIcon from "../icons/GitHubIcon.jsx";
import LinkedInIcon from "../icons/LinkedInIcon.jsx";
import TwitterIcon from "../icons/TwitterIcon.jsx";

export default function SocialLinks() {
    return (
        <div className="flex justify-start items-start gap-4">
            {/* Twitter */}
            <div className="w-6 h-6 relative overflow-hidden">
                <TwitterIcon />
            </div>
            {/* LinkedIn */}
            <div className="w-6 h-6 relative overflow-hidden">
                <LinkedInIcon />
            </div>
            {/* GitHub */}
            <div className="w-6 h-6 relative overflow-hidden">
                <GitHubIcon />
            </div>
        </div>
    );
}
