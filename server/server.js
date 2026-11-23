import dns from "dns"
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from "express"
import dotenv from "dotenv"
import dbConnection from "./config/dbConfing.js"

dotenv.config()

const app = express()
const databaseConnected = await dbConnection()

const PORT = process.env.PORT || 5000

app.get("/health", (req, res) => {
    res.json({
        status: 200,
        databaseConnected: databaseConnected,
        message: "SERVER IS RUNNING..."
    })
})


app.listen(PORT, () => console.log(`SERVER IS RUNNING AT ${PORT}`))