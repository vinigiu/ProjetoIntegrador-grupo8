function DadoPagamento (sequelize,Datatypes) {
    let nome = 'DadoPagamento';
    let cols = 
    {
        forma_pagamento:{type: Datatypes.STRING},
        bandeira_cartao:{type: Datatypes.STRING}
    };
    let configs = 
    {
        tableName: 'dados_pagamentos',
        timestamps: false
    };
    const DadoPagamento = sequelize.define(nome, cols, configs)
    DadoPagamento.associate = (models) => {
        DadoPagamento.belongsTo(models.Pedido, {
            as:"dado_pagamento_pedido",
            foreignKey:"dados_pagamentos_id"
        })
    }
    
    return DadoPagamento;
};


module.exports = DadoPagamento; 