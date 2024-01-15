import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/lib/constants";

export function GithubButton() {
  return (
    <Button variant="outline" size="icon" aria-label="github" title="GitHub">
      <Link href={GITHUB_URL} rel="noopener noreferrer" target="_blank">
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Link>
    </Button>
  );
}
