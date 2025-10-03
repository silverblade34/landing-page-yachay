import { Nav } from "@/components/hero/nav";
import { BetaAccess } from "@/components/pricing/plans";
import { RadialBlur } from "@/components/pricing/radial-blur";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Yachay IA",
  description: "Unlock Scam Protection, VPN, and more",
};

export default function Pricing() {
  return (
    <div className="bg-card isolate flex h-full min-h-screen w-full flex-col p-8">
      <RadialBlur />
      <Nav />
      <BetaAccess />
    </div>
  );
}
