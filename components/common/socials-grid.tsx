import { Separator } from "@/components/ui/separator";
import {
  FaSlack,
  FaDiscord,
  FaYoutube,
  FaTumblr,
  FaTwitch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { SlSocialReddit } from "react-icons/sl";
import {
  SocialCard,
  SocialPlatformType,
} from "@/components/common/social-card";

const SOCIAL_PLATFORMS: Record<string, SocialPlatformType> = {
  INSTAGRAM: {
    name: "Instagram",
    icon: FaInstagram,
  },
  TWITTER: { name: "Twitter", icon: FaTwitter },
  FACEBOOK: { name: "Facebook", icon: FaFacebookF },
  TWITCH: { name: "Twitch", icon: FaTwitch },
  TUMBLR: { name: "Tumblr", icon: FaTumblr },
  REDDIT: {
    name: "Reddit",
    icon: SlSocialReddit,
  },
  SLACK: { name: "Slack", icon: FaSlack },
  YOUTUBE: { name: "Youtube", icon: FaYoutube },
  DISCORD: { name: "Discord", icon: FaDiscord },
};

export function SocialsGrid({ query }: { query: string }) {
  return (
    <div className="w-full flex-1 space-y-6">
      <Separator />
      {query && (
        <h4 className="scroll-m-20 text-xl tracking-tight">
          Results for <span className="font-semibold underline">{query}</span>
        </h4>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {Object.entries(SOCIAL_PLATFORMS).map(([platform, social]) => (
          <SocialCard key={platform} username={query} social={social} />
        ))}
      </section>
    </div>
  );
}
