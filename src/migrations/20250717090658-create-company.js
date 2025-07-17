'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "countries"
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION'
      },
      company_name_ar: {
        type: Sequelize.STRING
      },

      company_name_en: {
        type: Sequelize.STRING
      },
      district_ar: {
        type: Sequelize.STRING
      },
      district_en: {
        type: Sequelize.STRING
      },
      street_ar: {
        type: Sequelize.STRING
      },
      street_en: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      building_number: {
        type: Sequelize.STRING
      },
      additional_number: {
        type: Sequelize.STRING
      },
      floor_number: {
        type: Sequelize.STRING
      },
      office_number: {
        type: Sequelize.STRING
      },
      po_box: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      whatsapp_number: {
        type: Sequelize.STRING
      },
      vat_number: {
        type: Sequelize.STRING
      },
      cr_number: {
        type: Sequelize.STRING
      },
      nphies_id: {
        type: Sequelize.STRING
      },
      address_ar: {
        type: Sequelize.STRING
      },
      address_en: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP'
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP'
      }
    }, {
      timestamps: true,
      underscored: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('companies');
  }
};