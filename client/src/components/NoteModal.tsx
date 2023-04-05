import { useNoteModal } from '../features/components';

export default function NoteModal() {
  const { handleOnSave, handleOnChange, note } = useNoteModal();

  return (
    <form
      onSubmit={(e) => handleOnSave(e)}
      className="flex flex-col gap-5 w-full md:w-[380px] rounded-md p-3 bg-white/5 border border-t3-purple-200/20 mb-5"
    >
      <h2 className="text-green-400 text-lg">Create New Note</h2>

      <input
        onChange={(e) => handleOnChange(e, 'title')}
        type="text"
        placeholder="Title"
        name="title"
        value={note.title}
        className="h-[45px] bg-slate-900 bg-opacity-50 px-3 rounded-md text-pink-500 text-sm border-transparent outline-none focus:outline-t3-purple-200/20 placeholder:text-white/80"
      />

      <input
        onChange={(e) => handleOnChange(e, 'description')}
        type="text"
        placeholder="Description"
        name="description"
        value={note.description}
        className="h-[45px] bg-slate-900 bg-opacity-50 px-3 rounded-md text-pink-500 text-sm border-transparent outline-none focus:outline-t3-purple-200/20 placeholder:text-white/80"
      />

      <button className="bg-pink-500 text-white rounded-md hover:bg-purple-500 transition-colors">
        Save
      </button>
    </form>
  );
}
