import { APIResult } from "@/app/api/route";
import { Badge } from "@/components/ui/badge";

export async function SocialStatus({
  username,
  action,
}: {
  username: string;
  action?: (args: { username: string }) => Promise<APIResult>;
}) {
  if (!username) {
    return null;
  }

  if (!action) {
    return <Badge variant="secondary">Not configured</Badge>;
  }

  const result = await action({ username });

  if (!result.available) {
    return <Badge variant="destructive">Not available</Badge>;
  }

  return <Badge variant="emerald">Available</Badge>;
}

export function SocialStatusLoading() {
  return <Badge variant="outline">Loading...</Badge>;
}
