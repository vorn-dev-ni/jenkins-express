import request from "supertest";
import express, { Request, Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("This is cool World");
});

describe("GET /", () => {
  it("should be return status 200 OK", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("This is cool World");
  });
});
