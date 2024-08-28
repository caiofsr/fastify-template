import fastify from "fastify";

const server = fastify();

server.get("/", async () => {
  return { hello: "World" };
});

server.get("/ping", async () => {
  return "pong\n";
});

server.listen({ port: 3333, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
