interface Props {
  error: string;
}

export default function LoadingNoteError({ error }: Props) {
  return (
    <div className="bg-gradient-to-b from-bg-t3-purple-600 to-slate-700 w-full md:w-[600px] h-[200px] flex justify-center items-center rounded-md">
      <h1>Oops, something went wrong :_ {error}</h1>
    </div>
  );
}
