"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Products", "category_id", {
      type: Sequelize.BIGINT,
      references: {
        model: "Categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface
      .addColumn("Orders", "user_id", {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      })
      .then(() => {
        return queryInterface.addColumn("Orders", "product_id", {
          type: Sequelize.BIGINT,
          references: {
            model: "Products",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      });

    await queryInterface.addColumn("Brands", "product_id", {
      type: Sequelize.BIGINT,
      references: {
        model: "Products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("Cart", "product_id", {
      type: Sequelize.BIGINT,
      references: {
        model: "Products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("Wishlist", "product_id", {
      type: Sequelize.BIGINT,
      references: {
        model: "Products",
        key: "id",
      },
    });
    await queryInterface
      .addColumn("Reviews", "user_id", {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      })
      .then(() => {
        return queryInterface.addColumn("Reviews", "product_id", {
          type: Sequelize.BIGINT,
          references: {
            model: "Products",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Products", "category_id");
    await queryInterface.removeColumn("Orders", "user_id").then(() => {
      return queryInterface.removeColumn("Orders", "product_id");
    });
    await queryInterface.removeColumn("Brands", "product_id");
    await queryInterface.removeColumn("Cart", "product_id");
    await queryInterface.removeColumn("Wishlist", "product_id");
    await queryInterface.removeColumn("Reviews", "user_id").then(() => {
      return queryInterface.removeColumn("Reviews", "product_id");
    });
  },
};
