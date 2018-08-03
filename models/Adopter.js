module.exports=function(sequelize,DataTypes){
    var Adopter = sequelize.define("Adopter",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        uid: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63de74668d8517b43662a6fcf3870f22&auto=format&fit=crop&w=774&q=80"
        },
        bio: {
            type: DataTypes.TEXT,
    
        },
        conditions: {
            type: DataTypes.TEXT,
        },
        profile: {
            type: DataTypes.STRING,
        },
        interested: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    });
    return Adopter;
}