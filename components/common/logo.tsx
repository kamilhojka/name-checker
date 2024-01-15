"use client";
import { usePathname, useRouter } from "next/navigation";
import { InputIcon } from "@radix-ui/react-icons";

interface LogoProps {
  name: string;
}

export function Logo({ name }: LogoProps) {
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = () => {
    replace(`${pathname}`);
  };

  return (
    <div
      className="flex h-full space-x-2 items-center cursor-pointer"
      onClick={handleClick}
    >
      <InputIcon className="h-6 w-6" />
      <span className="inline-block font-bold">{name}</span>
    </div>
  );
}
