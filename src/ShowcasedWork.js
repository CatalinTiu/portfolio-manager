import React from "react";

const ShowcasedWork = ({ work, onDelete, onToggleVisibility, onEdit }) => {
  return (
    <div>
      <h3>{work.title}</h3>
      <img src={work.imageUrl} alt={work.title} />
      <p>{work.description}</p>
      <p>
        Customer Link:{" "}
        <a href={work.customerLink} target="_blank" rel="noopener noreferrer">
          {work.customerLink}
        </a>
      </p>
      <button onClick={() => onToggleVisibility(work.id)}>
        {work.isHidden ? "Unhide" : "Hide"}
      </button>
      <button onClick={() => onEdit(work.id)}>Edit</button>
      <button onClick={() => onDelete(work.id)}>Delete</button>
    </div>
  );
};

export default ShowcasedWork;
