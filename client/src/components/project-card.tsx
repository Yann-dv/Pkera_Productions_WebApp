import { type Documentary } from "@shared/schema";
import { Play, Award, Globe, Flame, Heart, GraduationCap, Leaf, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

interface ProjectCardProps {
  documentary: Documentary;
}

export default function ProjectCard({ documentary }: ProjectCardProps) {
  const socialLinks = documentary.socialLinks ? JSON.parse(documentary.socialLinks) : {};

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "social-issues":
        return "bg-secondary text-secondary-foreground";
      case "environment":
        return "bg-green-100 text-green-800";
      case "technology":
        return "bg-blue-100 text-blue-800";
      case "culture":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "trending":
        return <Flame className="h-4 w-4 text-primary" />;
      case "global":
        return <Globe className="h-4 w-4 text-primary" />;
      case "award-winning":
        return <Heart className="h-4 w-4 text-primary" />;
      case "educational":
        return <GraduationCap className="h-4 w-4 text-primary" />;
      case "sustainability":
        return <Leaf className="h-4 w-4 text-primary" />;
      default:
        return <Award className="h-4 w-4 text-primary" />;
    }
  };

  const getStatusText = (status?: string, awards?: string) => {
    if (awards) return awards;
    switch (status) {
      case "trending":
        return "Trending";
      case "global":
        return "Global Release";
      case "award-winning":
        return "Audience Choice";
      case "educational":
        return "Educational Impact";
      case "sustainability":
        return "Eco Winner";
      default:
        return "Best Documentary";
    }
  };

  return (
    <div className="project-card bg-card rounded-2xl overflow-hidden shadow-lg" data-testid={`card-project-${documentary.id}`}>
      <div className="relative group">
        <img
          src={documentary.imageUrl}
          alt={`${documentary.title} Documentary`}
          className="w-full h-64 object-cover"
          data-testid={`img-project-${documentary.id}`}
        />
        
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="h-8 w-8 mb-2 mx-auto" />
            <p className="font-semibold">Watch Preview</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(documentary.category)}`}>
            {documentary.category.charAt(0).toUpperCase() + documentary.category.slice(1).replace('-', ' ')}
          </span>
          <span className="text-sm text-muted-foreground" data-testid={`text-year-${documentary.id}`}>
            {documentary.year}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-semibold mb-3" data-testid={`text-title-${documentary.id}`}>
          {documentary.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`text-description-${documentary.id}`}>
          {documentary.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getStatusIcon(documentary.status || undefined)}
            <span className="text-sm text-muted-foreground" data-testid={`text-status-${documentary.id}`}>
              {getStatusText(documentary.status || undefined, documentary.awards || undefined)}
            </span>
          </div>
          
          <div className="flex space-x-3">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-instagram-${documentary.id}`}
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {socialLinks.tiktok && (
              <a
                href={socialLinks.tiktok}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-tiktok-${documentary.id}`}
              >
                <SiTiktok className="h-4 w-4" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-linkedin-${documentary.id}`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {socialLinks.youtube && (
              <a
                href={socialLinks.youtube}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-youtube-${documentary.id}`}
              >
                <Youtube className="h-4 w-4" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-twitter-${documentary.id}`}
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
