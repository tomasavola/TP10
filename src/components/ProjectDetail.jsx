import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState({ title: '', description: '', images: [] });

  useEffect(() => {
    // Simula la carga de datos desde un archivo JSON local
    fetch(`./src/json/projects.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedProject = data.find((p) => p.id.toString() === id);
        if (selectedProject) {
          setProject(selectedProject);
        }
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
      });
  }, [id]);

  return (
    <main>
      <section className="project-detail">
        <div className="project-images">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`Project Image ${index + 1}`} />
          ))}
        </div>
        <div className="project-info">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
