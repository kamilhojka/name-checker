import { GithubButton } from "@/components/common/github-button";
import { Logo } from "@/components/common/logo";
import { ModeToggleButton } from "@/components/common/mode-toggle-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Logo name="name-checker" />
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <GithubButton />
          <ModeToggleButton />
        </div>
      </div>
    </header>
  );
}
