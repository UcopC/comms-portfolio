import { useState } from 'react';

interface ProjectProps {
  filter: string;
  setFilter: (newFilter: string) => void;
}

function Projects(props: ProjectProps) {
  const [project, setProject] = useState([
    { id: 1, title: 'Project 1', desc: 'desc 1', isCompleted: false },
    { id: 2, title: 'Project 2', desc: 'desc 2', isCompleted: true },
  ]);
  const filteredProject = project.filter((p) => {
    if (props.filter === 'DONE') return p.isCompleted;
    if (props.filter === 'PROGRESS') return !p.isCompleted;
    return true;
  });

  const [newTitle, setNewTitle] = useState('');

  return (
    <div>
      <div>
        <input
          type='text'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder='Enter new project...'
        />
        <button
          onClick={() => {
            setProject([
              ...project,
              {
                id: Date.now(),
                title: newTitle,
                desc: 'New Description',
                isCompleted: false,
              },
            ]);
            setNewTitle('');
          }}
        >
          Enter
        </button>
      </div>
      <button onClick={() => props.setFilter('ALL')}>ALL</button>
      <button onClick={() => props.setFilter('PROGRESS')}>PROGRESS</button>
      <button onClick={() => props.setFilter('DONE')}>DONE</button>
      {filteredProject.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <p>{project.isCompleted ? 'Done!' : 'in Progress'}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
