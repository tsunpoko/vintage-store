import { Suspense } from 'react';
import { Hero } from '@/components/home/Hero';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { BrandSection } from '@/components/home/BrandSection';
import { NewArrivals } from '@/components/home/NewArrivals';
import { CategoryVisuals } from '@/components/home/CategoryVisuals';
import { StaffSnap } from '@/components/home/StaffSnap';
import { CareSection } from '@/components/home/CareSection';
import { MagazineSection } from '@/components/home/MagazineSection';
import { InstagramFeed } from '@/components/home/InstagramFeed';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { ProductCardSkeleton } from '@/components/home/ProductCardSkeleton';

function NewArrivalsSkeleton() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-between items-end mb-lg">
          <h2 className="font-serif text-[32px]">NEW ARRIVALS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-md gap-y-lg">
          {[...Array(4)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <BrandSection />
      <Suspense fallback={<NewArrivalsSkeleton />}>
        <NewArrivals />
      </Suspense>
      <CategoryVisuals />
      <StaffSnap />
      <CareSection />
      <MagazineSection />
      <InstagramFeed />
      <FloatingNav />
    </>
  );
}
