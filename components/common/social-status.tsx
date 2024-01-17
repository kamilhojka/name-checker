import { APIResult } from "@/api/route";
import { Badge } from "@/components/ui/badge";

interface SocialStatusProps {
  username: string;
  action?: (args: { username: string }) => Promise<APIResult>;
}

export async function SocialStatus({ username, action }: SocialStatusProps) {
  if (!username) {
    return null;
  }

  if (!action) {
    return <Badge variant="secondary">Not configured</Badge>;
  }

  const result = await action({ username });

  if (result.status === "error") {
    return (
      <Badge variant="secondary" title={result.message ?? undefined}>
        Service does not respond
      </Badge>
    );
  }

  if (!result.available) {
    return <Badge variant="destructive">Not available</Badge>;
  }

  return <Badge variant="good">Available</Badge>;
}

export function SocialStatusLoading() {
  return <Badge variant="outline">Loading...</Badge>;
}
