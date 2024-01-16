import { IconType } from "react-icons/lib";
import { Suspense } from "react";

import {
  SocialStatus,
  SocialStatusLoading,
} from "@/components/common/social-status";
import { APIResult } from "@/api/route";

export type SocialPlatformType = {
  name: string;
  icon: IconType;
  action?: (args: { username: string }) => Promise<APIResult>;
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
        <div className="cursor-pointer">
          <Suspense key={username} fallback={<SocialStatusLoading />}>
            <SocialStatus username={username} action={social.action} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
