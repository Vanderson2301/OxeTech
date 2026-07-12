import "dotenv/config";
import Express from "express";
import {router as rootRounter} from "./routers/root.js";
import {router as authRouter} from "./routers/auth.routes.js";

const app = new Express();
const port = process.env.PORT

app.use(Express.json());

app.listen(port, () => {
    console.log (`App running at port ${port}`);
})

app.use("/", rootRounter);
app.use("/auth", authRouter);

