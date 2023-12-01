import React, { useRef, useState } from "react";
import { MdAdd } from "react-icons/md";

const InputArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isInputActive, setIsInputActive] = useState(false);

  const showInput = () => {
    setIsInputActive(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    return setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
    if (note.title && note.content) {
      onAdd(note);
    }
  };

  return (
    <section>
      <form className={`${isInputActive ? "notes-form" : "notes-form"}`}>
        <input
          className={`${
            isInputActive ? "min-h-fit duration-100 notes-input" : "h-0"
          }`}
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          onClick={showInput}
          className="duration-200 notes-textarea"
          type="textarea"
          rows={`${isInputActive ? 4 : 0}`}
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder={`${
            isInputActive ? "Content" : "Enter your notes here!"
          }`}
        />
        <button onClick={handleClick} className="notes-btn">
          <MdAdd />
        </button>
      </form>
    </section>
  );
};

export default InputArea;
