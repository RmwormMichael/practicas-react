import User from "../models/model.js";

//Get todos
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//POST crear
export const createUser = async (req, res) => {
  const { name, email } = req.body;

  const newUser = new User({ name, email });
  const savedUser = await newUser.save();

  res.status(201).json(savedUser);

  
};

//Delete Eliminar
export const deleteUser = async (req, res) => {
  const {id} = req.params;
  await User.findByIdAndDelete(id);
  res.json({ message: "usuario eliminado" });
};

//PUT editar
export const updateUser = async (req, res) => {
  const {id} = req.params;
  const updated = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};
