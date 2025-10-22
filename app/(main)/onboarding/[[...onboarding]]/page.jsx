"use client";

import { OrganizationList } from "@clerk/nextjs";

export default function Onboarding() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] px-4">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/organization/:slug"
        afterSelectOrganizationUrl="/organization/:slug"
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
            rootBox: "w-full max-w-2xl",
            card: "shadow-xl border border-border",
          },
        }}
      />
    </div>
  );
}
