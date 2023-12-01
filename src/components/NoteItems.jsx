import React from "react";
import { MdDelete } from "react-icons/md";

const NoteItems = ({ title, content, removeNoteItem, id }) => {
  const deleteNoteItem = () => {
    removeNoteItem(id);
  };

  return (
    <div className="relative capitalize note-item">
      <h3 className="font-semibold ">{title}</h3>
      <p className=" text-gray-500 w-[94%] text-sm">{content}</p>
      <MdDelete onClick={deleteNoteItem} className="delete-btn" />
    </div>
  );
};

export default NoteItems;
