import { useState } from 'react';
import { trpc } from './trpc';
import { httpBatchLink } from '@trpc/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { NoteList, NoteModal } from './components';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <main className="bg-gradient-to-b from-[#300171] to-slate-900 min-h-[100vh] w-full p-5">
          <NoteModal />
          <NoteList />
        </main>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
