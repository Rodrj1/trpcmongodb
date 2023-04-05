import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { createContext, router } from './trpc';
import { noteRouter } from './routes/notes';
import cors from 'cors';
import path from "path";

const app = express();

const appRouter = router({
  notes: noteRouter,
});

app.use(cors());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.use(express.static(path.join(__dirname, "../client/dist")));

export type AppRouter = typeof appRouter;

export default app;
