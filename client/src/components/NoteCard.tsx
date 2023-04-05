import { useNote } from '../features/components';
import { Note } from '../types';
import SVGDone from './SVGDone';

interface Props {
  note: Note;
}

export default function NoteCard({ note }: Props) {
  const { handleOnDelete, handleMarkAsDone } = useNote({ _id: note._id });

  return (
    <div className="h-[200px] w-full md:w-[380px] rounded-md  bg-white/5 border border-t3-purple-200/20 flex flex-col justify-between">
      <h2 className="text-green-400 text-xl font-thin py-1 px-3 bg-white/10">
        {note.title}
      </h2>

      <p className="text-white text-base p-3 font-thin h-[80%]">
        {note.description}
      </p>

      <button
        onClick={handleMarkAsDone}
        className={`bg-red-500 px-3 mx-3 text-white rounded-md hover:bg-purple-500 transition-colors mb-3 ${
          note.done && '!bg-green-500 w-[50px]'
        }`}
      >
        {note.done ? <SVGDone /> : 'Mark as done'}
      </button>

      <button
        className="bg-red-500 px-3 mx-3 text-white rounded-md hover:bg-purple-500 transition-colors mb-3"
        onClick={handleOnDelete}
      >
        Delete
      </button>
    </div>
  );
}
