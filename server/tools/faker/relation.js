const { Products, Categories } = require("../../entity");

const relation = async () => {
  const productsAll = await Products.findAll();
  const categoriesAll = await Categories.findAll();

  productsAll.forEach((item) => {
    const categoryIndex = Math.floor(Math.random() * categoriesAll.length);

    const categoryRandom = parseInt(categoriesAll[categoryIndex].category_id);

    console.table({
      id: item.id,
      categoryIndex,
      categoryRandom,
    });

    Products.update({ category_id: categoryRandom });
  });
};

module.exports = relation;
