const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const Role = sequelize.define("Role", {
  role_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Role.addHook('afterSync', async () => {
    try {
        const rolesCount = await Role.count();
        if (rolesCount === 0) {
            await Role.bulkCreate([
                { role: 'Admin' },
                { role: 'Initiator' },
                { role: 'Reviewer' },
                { role: 'Approver' },
                { role: 'Viewonly' },
                { role: 'Fullpermission' },
                { role: 'QA Reviewer' },
                { role: 'QA Approver' },
                { role: 'QC Reviewer' },
                { role: 'QC Approver' },
                { role: 'CQA Reviewer' },
                { role: 'CQA Approver' },
                { role: 'CFT' },
                { role: 'Investigator' },
                { role: 'RA Reviewer' },
                { role: 'RA Approver' },
            ]);
            console.log('Roles created');
        } else {
            console.log('Roles already exist');
        }
    } catch (error) {
        console.error('Error creating roles:', error);
    }
});


module.exports = Role;
