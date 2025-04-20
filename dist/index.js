import app from "./src/server.js";
app.listen(process.env.PORT, () => {
    console.log("Express is listen ", process.env.PORT);
});
