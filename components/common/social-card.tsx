import { IconType } from "react-icons/lib";
import { SocialStatus } from "@/components/common/social-status";

export type SocialPlatformType = {
  name: string;
  icon: IconType;
  action?: (args: { username: string }) => Promise<{ available: boolean }>;
};

export interface SocialCardProps {
  username: string;
  social: SocialPlatformType;
}

export function SocialCard({ username, social }: SocialCardProps) {
  return (
    <div className="flex p-4 border rounded-md space-x-4 items-center">
      <social.icon className="h-10 w-10" />
      <div className="flex flex-col space-y-1">
        <h3 className="font-bold">{social.name}</h3>
        <div>
          <SocialStatus username={username} action={social.action} />
        </div>
      </div>
    </div>
  );
}
