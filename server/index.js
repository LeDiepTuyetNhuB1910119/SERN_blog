import express from "express";

const app = express();

// để gửi data đến DB
app.use(express.json());

// lắng nghe kết nối
app.listen(8800, () => {
  console.log("Connected");
});
