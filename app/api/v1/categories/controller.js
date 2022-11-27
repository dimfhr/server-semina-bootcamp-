const Categories = require('./model');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await Categories.create({ name });

    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await Categories.find();
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const find = async (req, res, next) => {
  try {
    const { id } = req.params;

		// mencari categories di MongoDB berdasarkan field _id
    const result = await Categories.findOne({ _id: id });
    // bila result tidak mendapatkan data categories maka akan mereturn response `message: 'Id categories tidak ditemukan'`
    if (!result) {
      return res.status(404).json({ message: 'Id categories tidak ditemukan' });
    }

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  index,
  create,
  find
};