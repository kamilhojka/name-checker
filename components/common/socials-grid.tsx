import { Separator } from "@/components/ui/separator";

export function SocialsGrid({ query }: { query: string }) {
  return (
    <div className="w-full flex-1 space-y-6">
      <Separator />
      {query && (
        <h4 className="scroll-m-20 text-xl tracking-tight">
          Results for <span className="font-semibold underline">{query}</span>
        </h4>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {/* SocialCard here */}
      </section>
    </div>
  );
}
