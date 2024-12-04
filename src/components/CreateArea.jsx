import React, { useState } from "react";

function CreateArea(props) {
  const [inputTexts, setInputTexts] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputTexts((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={inputTexts.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputTexts.content}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            props.onAdd(inputTexts);
            setInputTexts({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
