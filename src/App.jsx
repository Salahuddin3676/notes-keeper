import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import NoteItems from "./components/noteItems";

const getLocalStorageData = () => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    return JSON.parse(localStorage.getItem("notes"));
  } else {
    return [];
  }
};

export default function App() {
  const [notes, setNotes] = useState(getLocalStorageData());

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    return setNotes((prevNote) => {
      return [...prevNote, note];
    });
  };

  const removeNoteItem = (id) => {
    return setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        const filteredItems = index !== id;
        return filteredItems;
      });
    });
  };

  return (
    <>
      <Header />
      <main className=" px-7 py-7 md:px-10 md:py-10 bg-[#eee] min-h-[80vh] ">
        <InputArea onAdd={addNote} />
        <section className="note-item-container">
          {notes.map((note, index) => {
            const { title, content } = note;
            return (
              <NoteItems
                key={index}
                id={index}
                title={title}
                content={content}
                removeNoteItem={removeNoteItem}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
