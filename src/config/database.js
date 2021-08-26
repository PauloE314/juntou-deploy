module.exports = {
    dialect: "postgres",
    host: process.env.HOST || "localhost",
    username: process.env.USERNAME || "postgres",
    password: process.env.PASSWORD || "docker",
    database: process.env.DATABASE || "juntouApp",
    define: {
        timestamps: true,
        underscored: true,
    },
};
