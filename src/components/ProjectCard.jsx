import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <h3 title={project.name}>{project.name}</h3>
      <p><strong>Client:</strong> {project.client}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Start:</strong> {project.startDate}</p>
      <p>
        <strong>End:</strong>{" "}
        {project.endDate ? project.endDate : "Not defined"}
      </p>
    </Link>
  );
}

export default ProjectCard;
