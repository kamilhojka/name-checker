import Link from "next/link";

import { GITHUB_PROFILE_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="container w-full flex h-14 items-center bg-secondary/45">
      <p className="text-sm text-muted-foreground">
        website created by{" "}
        <Link
          href={GITHUB_PROFILE_URL}
          className="font-bold underline decoration-2 cursor-pointer after:content-['_↗'] hover:text-primary"
          target="_blank"
        >
          kamilhojka
        </Link>
      </p>
    </footer>
  );
}
