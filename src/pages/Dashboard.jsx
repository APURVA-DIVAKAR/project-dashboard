import { useState,useMemo } from "react";
import {projects as initialProjects } from '../data/projects';
import Filters from "../components/Filters";
import ProjectList from "../components/ProjectList";
import EmptyState from "../components/EmptyState";


function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatuses, setSelectedStatuses] = useState([]);

     const filteredProjects = useMemo(() => {
        return initialProjects.filter((project) => {
        const matchesSearch =
            project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.client.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            selectedStatuses.length === 0 ||
            selectedStatuses.includes(project.status);

        return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatuses]);
    return (
        <div>
            <h1>Project Dashboard</h1>

            <Filters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedStatuses={selectedStatuses}
                setSelectedStatuses={setSelectedStatuses}
             />

            {initialProjects.length===0 ? (
                <EmptyState message="No project available."/>
            ): filteredProjects.length === 0 ? (
                <EmptyState message="No result found."/>
            ) : (
                <ProjectList projects={filteredProjects}/>
            )}
        </div>
    )
}

export default Dashboard;