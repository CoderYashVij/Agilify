import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrganization } from "@/actions/organizations";
import OrgSwitcher from "@/components/org-switcher";
import ProjectList from "./_components/project-list";
import UserIssues from "./_components/user-issues";

export default async function OrganizationPage({ params }) {
  const { slug } = params;
  const { userId } = auth();

  // console.log("Params",params);
  if (!userId) {
    redirect("/sign-in");
  }

  console.log("Slug:", slug);
  const organization = await getOrganization(slug);
  // console.log("Organization:", organization);

  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-5xl font-bold gradient-title pb-2">
            {organization.name}&rsquo;s Projects
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all your organization&rsquo;s projects
          </p>
        </div>

        <OrgSwitcher />
      </div>
      <div className="mb-8">
        <ProjectList orgId={organization.id} />
      </div>
      <div className="mt-12">
        <UserIssues userId={userId} />
      </div>
    </div>
  );
}
