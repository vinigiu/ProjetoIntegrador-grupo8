function Produto (sequelize,Datatypes) {
    let nome = 'Produto';
    let cols = 
    {
        nome:{type: Datatypes.STRING},
        preco:{type: Datatypes.FLOAT},
        cor:{type: Datatypes.STRING},
        tamanho:{type: Datatypes.STRING},
        marca:{type: Datatypes.STRING},
        img1:{type: Datatypes.STRING},
        img2:{type: Datatypes.STRING},
        img3:{type: Datatypes.STRING},
        img4:{type: Datatypes.STRING},
        qtd_estoque:{type: Datatypes.INTEGER},
        categorias_id:{type: Datatypes.INTEGER},
        descricao:{type: Datatypes.STRING},
    };
    let configs = 
    {
        tableName: 'produtos',
        timestamps: false
    };
    const Produto = sequelize.define(nome, cols, configs)
    Produto.associate = (models)=>{
        Produto.belongsTo(models.Categoria,{
            as:"produto_categoria",
            foreignKey:"categorias_id"
        })

        Produto.belongsToMany(models.Pedido,{
            as: "produto_pedido",
            through: "produtos_has_pedidos",
            foreignKey: "produto_id",
            otherKey: "pedido_id",
            timestamps:false
        })
    }
    
    return Produto;
};


module.exports = Produto; 