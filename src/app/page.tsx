import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import BranchSelector from "@/components/sections/BranchSelector";
import SignatureDishes from "@/components/sections/SignatureDishes";
import BuffetBanner from "@/components/sections/BuffetBanner";
import SpiceDivider from "@/components/ui/SpiceDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpiceDivider />
      <Intro />
      <SpiceDivider />
      <BranchSelector />
      <SignatureDishes />
      <BuffetBanner />
    </>
  );
}
