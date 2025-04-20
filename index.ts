import app from "./src/server";
app.listen(process.env.PORT, () => {
  console.log("Express is listen ", process.env.PORT);
});
