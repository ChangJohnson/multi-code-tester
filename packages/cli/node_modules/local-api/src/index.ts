import express from 'express';

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

  // to make our own async to handle errors in express to catch at serve.ts CLIin
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });
};
