const usersGet = (req, res) => {
  const { nombre, edad = 5, id } = req.query;
  res.json({
    mge: "get Api - Controller",
    nombre,
    edad,
    id,
  });
};
const usersPost = (req, res) => {
  const body = req.body;
  res.json({
    mge: "post Api - Controller",
    body,
  });
};
const usersPut = (req, res) => {
  const { id } = req.params;
  res.json({
    mge: "put Api - Controller",
    id,
  });
};
const usersDelete = (req, res) => {
  const { id } = req.params;
  res.json({
    mge: "delete Api - Controller",
    id,
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
