// components/ProjectList.jsx
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getProjects } from "@/actions/organizations";
import DeleteProject from "./delete-project";
import { FolderKanban, Plus, ArrowRight, Calendar, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ProjectList({ orgId }) {
  const projects = await getProjects(orgId);

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-full border border-blue-500/20">
            <FolderKanban className="h-16 w-16 text-blue-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          No Projects Yet
        </h3>
        <p className="text-muted-foreground text-center mb-6 max-w-md">
          Get started by creating your first project. Organize your work, track progress, and collaborate with your team.
        </p>
        <Link href="/project/create">
          <Button className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300">
            <Plus className="h-4 w-4" />
            Create Your First Project
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">
          {projects.length} {projects.length === 1 ? "Project" : "Projects"}
        </p>
        <Link href="/project/create">
          <Button size="sm" variant="outline" className="gap-2 hover:border-blue-500/50 hover:bg-blue-500/5 transition-colors">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card 
            key={project.id}
            className="group relative overflow-hidden border-border hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-card"
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <CardHeader className="relative">
              <CardTitle className="flex justify-between items-start gap-2">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors shrink-0">
                    <Layers className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate text-foreground group-hover:text-blue-500 transition-colors">
                      {project.name}
                    </h3>
                    {project.createdAt && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(project.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <DeleteProject projectId={project.id} />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative space-y-4">
              <p className="text-sm text-foreground/70 line-clamp-2 min-h-[2.5rem]">
                {project.description || "No description provided"}
              </p>
              
              <Link
                href={`/project/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 group/link transition-colors"
              >
                View Project
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
