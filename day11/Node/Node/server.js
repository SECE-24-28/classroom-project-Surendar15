import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
let courses = JSON.parse(
  fs.readFileSync("./data/db.json", "utf-8")
);
app.get("/course/list", (req, res) => {
  res.json(courses);
});
app.get("/course/list/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find(c => c.cid === id);

  if (!course) {
    return res.status(404).json({ msg: "course not found" });
  }
  res.json(course);
});
app.post("/course/list", (req, res) => {
  const { cname, cdur } = req.body;
  const cid = courses.length ? courses[courses.length - 1].cid + 1 : 1;
  const newCourse = { cid, cname, cdur };
  courses.push(newCourse);
  res.status(201).json({ msg: "course added", courses });
});
app.delete("/course/list/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = courses.findIndex(c => c.cid === id);
  if (index === -1) {
    return res.status(404).json({ msg: "course not found" });
  }
  courses.splice(index, 1);
  res.json({ msg: "course deleted", courses });
});
app.put("/course/list/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = courses.findIndex(c => c.cid === id);
  if (index === -1) {
    return res.status(404).json({ msg: "course not found" });
  }
  const { cname, cdur } = req.body;
  courses[index].cname = cname;
  courses[index].cdur = cdur;
  res.json({ msg: "course updated", courses });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
