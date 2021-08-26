module.exports = {
    dialect: "postgres",
    host: process.env.HOST || "localhost",
    username: process.env.USERNAME || "postgres",
    password: process.env.PASSWORD || "docker",
    database: process.env.DATABASE || "juntouApp",
    port: process.env.DB_PORT || 3306,
    protocol: "postgres",
    dialectOptions: {
        ssl: true,
    },
    define: {
        timestamps: true,
        underscored: true,
    },
};
