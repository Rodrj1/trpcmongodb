import { trpc } from '../../trpc';

interface Props {
  _id: string;
}

export const useNote = ({ _id }: Props) => {
  const deleteNote = trpc.notes.delete.useMutation();
  const markAsDone = trpc.notes.markAsDone.useMutation();
  const utils = trpc.useContext();

  const handleOnDelete = async () => {
    await deleteNote.mutate(_id, {
      onSuccess: () => {
        utils.notes.get.invalidate();
      },
    });
  };

  const handleMarkAsDone = async () => {
    await markAsDone.mutate(_id, {
      onSuccess: () => {
        utils.notes.get.invalidate();
      },
    });
  };

  return { handleOnDelete, handleMarkAsDone };
};
