module.exports = {
    up: async (queryInterface, Sequelize) => {
     return  queryInterface.addColumn(
        'trips',
        'situation',{
          type:Sequelize.STRING,
        },
      );
    },
  
    down: async (queryInterface, Sequelize) => {
      return  queryInterface.removeColumn(
        'trips',
        'situation'
      );
    },
    
  };
  