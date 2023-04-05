import { publicProcedure, router } from '../trpc';
import { z } from 'zod';
import Note from '../models/note';

const getNotes = publicProcedure.query(async () => {
  const getNotes = await Note.find();
  return getNotes;
});

const createNote = publicProcedure
  .input(z.object({ title: z.string(), description: z.string() }))
  .mutation(async ({ input: { title, description } }) => {
    const addNote = new Note({ title, description });
    const saved = await addNote.save();
    return saved;
  });

const deleteNote = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    const noteFound = await Note.findByIdAndDelete(input);
    if (!noteFound) throw new Error('Note not found');
    return true;
  });

const markAsDone = publicProcedure
  .input(z.string())
  .mutation(async ({ input }) => {
    try {
      const findNote = await Note.findById(input);
      if (!findNote) throw new Error('Note not found');
      findNote.done = !findNote.done;
      await findNote.save();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  });

export const noteRouter = router({
  get: getNotes,
  create: createNote,
  delete: deleteNote,
  markAsDone,
});
