import { Suspense } from "react";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { SearchInputForm } from "@/components/common/search-input-form";
import {
  SocialsGrid,
  SocialsGridSkeleton,
} from "@/components/common/socials-grid";

export default function HomePage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || "";

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container flex flex-col flex-1 items-center py-12 space-y-12">
        <SearchInputForm placeholder="Username" inputValue={query} />
        <Suspense key={query} fallback={<SocialsGridSkeleton />}>
          <SocialsGrid query={query} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
