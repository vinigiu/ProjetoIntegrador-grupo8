function Endereco (sequelize,Datatypes) {
    let nome = 'Endereco';
    let cols = 
    {
        endereco_fatura:{type: Datatypes.STRING},
        endereco_entrega:{type: Datatypes.STRING}
    };
    let configs = 
    {
        tableName: 'enderecos',
        timestamps: false
    };
    const Endereco = sequelize.define(nome, cols, configs)
    Endereco.associate = (models) => {
        Endereco.hasMany(models.Usuario,{
            as:"endereco_usuario",
            foreignKey: "enderecos_id"
        })
    }
    return Endereco;
};


module.exports = Endereco; 