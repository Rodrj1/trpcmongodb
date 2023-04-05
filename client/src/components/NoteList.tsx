import { trpc } from '../trpc';
import LoadingNote from './LoadingNote';
import LoadingNoteError from './LoadingNoteError';
import NoteCard from './NoteCard';

export default function NoteList() {
  const { data, isLoading, isError, error } = trpc.notes.get.useQuery();

  if (isLoading) return <LoadingNote />;
  if (isError) return <LoadingNoteError error={error.message} />;

  return (
    <div>
      <ul className="flex gap-5 flex-wrap">
        {data?.map((note: any) => (
          <NoteCard note={note} key={note._id} />
        ))}
      </ul>
    </div>
  );
}
