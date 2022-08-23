function Usuario (sequelize,Datatypes) {
    let nome = 'Usuario';
    let cols = 
    {
        nome:{type: Datatypes.STRING},
        sobrenome:{type: Datatypes.STRING},
        email:{type: Datatypes.STRING},
        senha:{type: Datatypes.STRING},
        data_nasc:{type: Datatypes.DATEONLY},
        cpf:{type: Datatypes.STRING},
        tel:{type: Datatypes.STRING},
        genero:{type: Datatypes.STRING},
        enderecos_id:{type: Datatypes.INTEGER},
    };
    let configs = 
    {
        tableName: 'usuarios',
        timestamps: false
    };
    const Usuario = sequelize.define(nome, cols, configs)
    Usuario.associate = (models) => {
        Usuario.belongsTo(models.Endereco,{
            as:"usuario_endereco",
            foreignKey: "enderecos_id"
        })

        Usuario.hasMany(models.Pedido,{
            as:"usuario_pedido",
            foreignKey:"usuarios_id",
        })
    }
    
    return Usuario;
};


module.exports = Usuario; 