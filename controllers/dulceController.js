const get = async (req, res) => {
  try {
    const hola = {
      hola: "Mundo",
      desde: "jerrysbackend",
    };
    return res.status(200).json(hola);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

export { get };
