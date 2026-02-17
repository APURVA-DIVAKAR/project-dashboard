import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="container">
      <Link to="/">← Back to Dashboard</Link>

      <h2>{project.name}</h2>
      <p><strong>Client:</strong> {project.client}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Start Date:</strong> {project.startDate}</p>
      <p>
        <strong>End Date:</strong>{" "}
        {project.endDate ? project.endDate : "Not defined"}
      </p>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Priority:</strong> {project.priority}</p>
    </div>
  );
}

export default ProjectDetail;
