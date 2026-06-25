import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { branches, getBranchBySlug, getAllBranchSlugs } from "@/data/branches";
import BranchHero from "@/components/sections/branch/BranchHero";
import BranchQuickbar from "@/components/sections/branch/BranchQuickbar";
import BranchStaff from "@/components/sections/branch/BranchStaff";
import BranchMenu from "@/components/sections/branch/BranchMenu";
import BranchGallery from "@/components/sections/branch/BranchGallery";
import BranchInfoMap from "@/components/sections/branch/BranchInfoMap";
import SpiceDivider from "@/components/ui/SpiceDivider";
<<<<<<< HEAD
import BranchReviews from "@/components/sections/branch/BranchReviews";
=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e

export function generateStaticParams() {
  return getAllBranchSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) return {};
  return {
    title: `Al Jannat — ${branch.name.en} | Indian, Pakistani & Afghan Halal Dining`,
    description: branch.longDescription.en,
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = getBranchBySlug(slug);
  if (!branch) notFound();

  return (
    <>
      <BranchHero branch={branch} />
      <BranchQuickbar branch={branch} />
      <BranchStaff branch={branch} />
      <SpiceDivider />
      <BranchMenu branch={branch} />
      <BranchGallery branch={branch} />
      <SpiceDivider />
      <BranchInfoMap branch={branch} />
<<<<<<< HEAD
      <BranchReviews slug={branch.slug} />
=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
    </>
  );
}

// Keep the branches array import "used" for type inference convenience in
// other files that may import from this module during static analysis.
export { branches };
