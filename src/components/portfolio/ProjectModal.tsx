import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  name: string;
  about: string;
  skills: string[];
  link: string;
  image: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'personal' | 'client';
  projects: Project[];  // receive projects as props
}

const ProjectModal = ({ isOpen, onClose, type, projects }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-0 pb-4">
          <DialogTitle className="text-2xl font-bold">
            {type === 'personal' ? 'Personal Projects' : 'Client Projects'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {projects.length === 0 ? (
            <p className="text-muted-foreground text-center">No projects to display.</p>
          ) : (
            projects.map((project) => (
              <div 
                key={project.id}
                className="border border-border rounded-lg p-6 hover:bg-portfolio-hover transition-all duration-300 cursor-pointer group"
                onClick={() => window.open(project.link, '_blank')}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Project Image */}
                  <div className="md:col-span-4">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border group-hover:border-primary transition-colors object-contain">
                      <img src={project.image} alt={project.name} className="w-full h-full object-contain rounded-lg" />
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.about}
                    </p>
                    
                    {type === 'personal' && (
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Skills used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
