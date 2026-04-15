"use client";

import { useState } from "react";
import { siteContent } from "@/data/content";
import {
  BusinessSection,
  ContactSection,
  EcosystemSection,
  Footer,
  FutureSection,
  HeroSection,
  HomeFrame,
  ImpactSection,
  LegalSection,
  MaterialsSection,
  NavBar,
  TeamSection,
  TechnologySection,
} from "@/components/home/sections";

export function HomePage() {
  const [submittedAt, setSubmittedAt] = useState<number | null>(null);

  return (
    <HomeFrame>
      <NavBar content={siteContent} />
      <main className="relative z-10">
        <HeroSection content={siteContent} />
        <EcosystemSection content={siteContent} />
        <MaterialsSection content={siteContent} />
        <TechnologySection content={siteContent} />
        <BusinessSection content={siteContent} />
        <ImpactSection content={siteContent} />
        <FutureSection content={siteContent} />
        <TeamSection content={siteContent} />
        <LegalSection content={siteContent} />
        <ContactSection content={siteContent} onSubmitted={() => setSubmittedAt(Date.now())} />
        {submittedAt ? <span className="sr-only">Submitted at {submittedAt}</span> : null}
      </main>
      <Footer content={siteContent} />
    </HomeFrame>
  );
}

