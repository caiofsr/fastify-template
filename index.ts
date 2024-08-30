import "dotenv/config";
import app from "./src/server";

const PORT = process.env.PORT ?? 3333;

app.listen({ port: Number(PORT), host: "0.0.0.0" }, (err, _address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
