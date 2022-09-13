function Categoria (sequelize,Datatypes) {
    let nome = 'Categoria';
    let cols = 
    {
        categoria:{type: Datatypes.STRING},
    };
    let configs = 
    {
        tableName: 'categorias',
        timestamps: false
    };
    const Categoria = sequelize.define(nome, cols, configs)
    Categoria.associate = (models)=>{
        Categoria.hasMany(models.Produto,{
            as:"categoria_produto",
            foreignKey:"categorias_id"
        })
    }
    
    return Categoria;
};


module.exports = Categoria; 