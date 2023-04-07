import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const taskFind = await Task.find().lean();
  console.log(taskFind);
  res.render("index", { taskFind: taskFind });
};

export const createTasks = async (req, res) => {
  try {
    const task = Task(req.body);
    const saveTask = await task.save();
    console.log(saveTask);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};
export const renderAbout = (req, res) => {
  res.render("about");
};
export const renderEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.error(error);
  }
};
export const renderUdapte = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  console.log(req.body);
  res.redirect("/");
};
export const renderDelete = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  console.log(req.body);
  res.redirect("/");
};
export const renderToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  console.log(task);
  res.redirect("/");
};
