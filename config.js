module.exports = {
    devBotEnabled: true,
    dev: {
        id: "DEV_CLIENT_ID",
        secret: "DEV_CLIENT_SECRET",
        token: "DEV_CLIENT_TOKEN",
        logs: "DEV_LOGS_CHANNEL_ID",
        db: "DEV_DATABASE_URL"
    },
    prod: {
        id: "PROD_CLIENT_ID",
        secret: "PROD_CLIENT_SECRET",
        token: "PROD_CLIENT_TOKEN",
        logs: "PROD_LOGS_CHANNEL_ID",
        db: "PROD_DATABASE_URL"
    },
    guilds: {
        dev: ["DEV_GUILD_ID_1", "DEV_GUILD_ID_2"],
    },
    color: "Blue",
    developers: ["DEV_ID_1", "DEV_ID_2"]
}