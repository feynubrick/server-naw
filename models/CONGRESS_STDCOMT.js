/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('CONGRESS_STDCOMT', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		MNA_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'MNA',
				key: 'mna_id'
			}
		},
		STDCOMT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'STDCOMT',
				key: 'stdcomt_id'
			}
		}
	}, {
		tableName: 'CONGRESS_STDCOMT'
	});
};
