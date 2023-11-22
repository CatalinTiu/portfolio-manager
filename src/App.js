import React, { useState } from "react";
import ShowcasedWork from "./ShowcasedWork";
import WorkForm from "./WorkForm";

const App = () => {
  const [works, setWorks] = useState([
    {
      id: 1,
      title: "Work 1",
      description: "Description 1",
      imageUrl: "url1",
      customerLink: "https://customer1.com",
      isHidden: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleAddWork = (newWork) => {
    setWorks([...works, { ...newWork, id: works.length + 1 }]);
    setShowForm(false);
  };

  const handleEditWork = (id) => {
    const workToEdit = works.find((work) => work.id === id);
    setSelectedWork(workToEdit);
    setShowForm(true);
  };

  const handleUpdateWork = (updatedWork) => {
    setWorks((prevWorks) =>
      prevWorks.map((work) => (work.id === updatedWork.id ? updatedWork : work))
    );
    setShowForm(false);
    setSelectedWork(null);
  };

  const handleDeleteWork = (id) => {
    setWorks(works.filter((work) => work.id !== id));
  };

  const handleToggleVisibility = (id) => {
    setWorks((prevWorks) =>
      prevWorks.map((work) =>
        work.id === id ? { ...work, isHidden: !work.isHidden } : work
      )
    );
  };

  return (
    <div>
      <h1>Portfolio Manager</h1>
      {showForm ? (
        <WorkForm
          onSubmit={selectedWork ? handleUpdateWork : handleAddWork}
          onCancel={() => setShowForm(false)}
          initialData={selectedWork}
        />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Add Work</button>
          {works.map((work) => (
            <ShowcasedWork
              key={work.id}
              work={work}
              onDelete={handleDeleteWork}
              onToggleVisibility={handleToggleVisibility}
              onEdit={handleEditWork}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
