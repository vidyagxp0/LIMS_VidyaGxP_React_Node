const express = require("express");
const { connectToDB } = require("./config/db");
const config = require("./config/config.json");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");
const path = require("path");
const userRoutes = require('./routes/user.routes');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.get('/', (req, res) => {
    res.send('Welcome to Lims Vidyagxp')
})

app.use('/user', userRoutes);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "documents")));

server.listen(config.development.PORT, "0.0.0.0", async () => {
  connectToDB()
    .then(() => {
      console.log("Server is running at port: " + config.development.PORT);
    })
    .catch((e) => {
      console.log("Error in database connection", e);
    });
});
