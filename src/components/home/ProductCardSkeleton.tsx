export function ProductCardSkeleton() {
  return (
    <article className="animate-pulse">
      <div className="aspect-[3/4] bg-section-bg mb-sm" />
      <div className="space-y-2">
        <div className="h-3 bg-section-bg rounded w-16" />
        <div className="h-4 bg-section-bg rounded w-full" />
        <div className="h-4 bg-section-bg rounded w-3/4" />
        <div className="h-4 bg-section-bg rounded w-20" />
      </div>
    </article>
  );
}
