function Pedido (sequelize,Datatypes) {
    let nome = 'Pedido';
    let cols = 
    {
        usuarios_id:{type: Datatypes.STRING},
        valor_final:{type: Datatypes.FLOAT},
        dados_pagamentos_id:{type: Datatypes.INTEGER},
        status_id:{type: Datatypes.INTEGER},
    };
    let configs = 
    {
        tableName: 'pedidos',
        timestamps: false
    };
    const Pedido = sequelize.define(nome, cols, configs)
    Pedido.associate = (models) => {
        Pedido.belongsTo(models.Usuario,{
            as:"pedido_usuario",
            foreignKey: "usuarios_id"
        })

        Pedido.belongsTo(models.Status,{
            as:"pedido_status",
            foreignKey: "status_id"
        })

        Pedido.hasOne(models.DadoPagamento,{
            as:"pedido_dado_pagamento",
            foreignKey: "dados_pagamentos_id"
        })

        Pedido.belongsToMany(models.Produto,{
            as: "pedido_produto",
            through: "produtos_has_pedidos",
            foreignKey: "pedidos_id",
            otherKey: "produtos_id",
            timestamps:false
        })
    }
    return Pedido;
};


module.exports = Pedido;