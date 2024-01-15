import { Header } from "@/components/common/header";
import { SearchInputForm } from "@/components/common/search-input-form";

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
      </main>
    </div>
  );
}
