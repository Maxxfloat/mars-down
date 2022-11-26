import NoteForm from "./NoteForm";
import type { NoteData, Tag } from "../../types/form";
import { FC } from "react";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
};

const NewNote: FC<NewNoteProps> = ({ onSubmit, onAddTag, availableTags }) => {
  return (
    <>
      <div>NewNote</div>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
