function Status (sequelize,Datatypes) {
    let nome = 'Status';
    let cols = 
    {
        status:{type: Datatypes.STRING},
    };
    let configs = 
    {
        tableName: 'status',
        timestamps: false
    };
    const Status = sequelize.define(nome, cols, configs)
    Status.associate = (models) => {
        Status.hasMany(models.Pedido,{
            as:"status_pedido",
            foreignKey: "status_id"
        })
    }
    
    return Status;
};


module.exports = Status; 