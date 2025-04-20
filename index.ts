import app from "./src/server";
app.listen(process.env.PORT, () => {
  console.log("Express is listen on port", process.env.PORT);
});
