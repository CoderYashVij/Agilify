"use client";

import { OrganizationList } from "@clerk/nextjs";

export default function Onboarding() {
  return (
    <div className="flex justify-center items-center pt-14">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/organization/:slug"
        afterSelectOrganizationUrl="/organization/:slug"
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4",
            rootBox: "w-full",
          },
        }}
      />
    </div>
  );
}
