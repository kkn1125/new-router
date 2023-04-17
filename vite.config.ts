import { defineConfig, loadEnv } from "vite";
import path from "path";
import dotenv from "dotenv";

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "");
  dotenv.config({
    path: path.join(path.resolve(), ".env"),
  });
  dotenv.config({
    path: path.join(path.resolve(), `.env.${mode}`),
  });
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    server: {
      host: process.env.HOST,
      port: Number(process.env.PORT) || 4000,
    },
    base: "",
    build: {
      outDir: "build",
    },
  };
});
