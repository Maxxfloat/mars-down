import NoteForm from "./NoteForm";
import type { NoteData, Tag } from "../../types/form";
import { FC } from "react";
import useNote from "../../hooks/useNote";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
};

const EditNote: FC<EditNoteProps> = ({ onSubmit, onAddTag, availableTags }) => {
  const note = useNote();
  return (
    <>
      <div>NewNote</div>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
