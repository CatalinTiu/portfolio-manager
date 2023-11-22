import React, { useState } from "react";

const WorkForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      title: "",
      description: "",
      imageUrl: "",
      customerLink: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:{" "}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:{" "}
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </label>
      <label>
        Customer Link:{" "}
        <input
          type="text"
          name="customerLink"
          value={formData.customerLink}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default WorkForm;
