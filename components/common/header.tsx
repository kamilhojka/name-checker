import { InputIcon } from "@radix-ui/react-icons";
import { ModeToggleButton } from "./mode-toggle-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex space-x-2 items-center">
          <InputIcon className="h-6 w-6" />
          <span className="inline-block font-bold">name-checker</span>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggleButton />
        </div>
      </div>
    </header>
  );
}
