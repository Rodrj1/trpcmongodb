import { useState } from 'react';
import { Note } from '../../types';
import { trpc } from '../../trpc';

export const useNoteModal = () => {
  const [note, setNote] = useState<Note>({
    title: '',
    description: '',
    _id: '',
    done: false,
  });

  const createNote = trpc.notes.create.useMutation();
  const utils = trpc.useContext();

  const noteFieldsAreCompleted = note.title != '' && note.description != '';

  type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

  const handleOnSave = (e: FormSubmitEvent) => {
    e.preventDefault();
    if (noteFieldsAreCompleted)
      createNote.mutate(
        { ...note },
        {
          onSuccess: () => {
            const destroyNote = {
              title: '',
              description: '',
              _id: '',
              done: false,
            };
            setNote(destroyNote);
            utils.notes.get.invalidate();
          },
        }
      );
  };

  type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
  type InputValue = 'title' | 'description';

  const handleOnChange = (e: InputChangeEvent, val: InputValue) => {
    setNote({ ...note, [val]: e.target.value });
  };
  return { handleOnSave, handleOnChange, note };
};
