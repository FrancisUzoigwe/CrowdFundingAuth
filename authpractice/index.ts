import express from "express";
const app = express();
const port: number = 4300;
const realPort = port;

const Server = app.listen(realPort, () => {
  console.log("Server is now live on port", realPort);
});
process.on("uncaughtException", (error) => {
  console.log("");
  console.log("Server is shutting down due to an uncaughtException", error);
  process.exit(1);
});
process.on("unhandledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down due to an unhandledrejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});
