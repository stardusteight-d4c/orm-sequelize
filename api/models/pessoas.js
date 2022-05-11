'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: { 
      type: DataTypes.STRING,
      validate: {
        validar: function(dado) {
          if (dado.length < 3) throw new Error('O campo nome deve conter mais de 3 caracteres.')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: { 
        isEmail: {
          args: true,
          msg: 'Dado do tipo email inválido'
        }
       }
    },
    role: DataTypes.STRING,
  }, { 
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: { 
      todos: { where: {} },
    }
  });
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id',
    });
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: { status: 'confirmado' },
      as: 'aulasMatriculadas'
    });
  };
  return Pessoas;
};
