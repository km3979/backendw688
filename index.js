const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const mysql = require("mysql2");

// Thông tin đăng nhập cơ sở dữ liệu WordPress
const dbConfig = {
  host: "103.130.212.57",
  user: "vyzvssee_wp392",
  password: "5[73t]p0pS",
  database: "vyzvssee_wp392"
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến MySQL:", err);
  } else {
    console.log("Đã kết nối đến MySQL");
  }
});

// Xử lý REST API để lấy dữ liệu từ WordPress (ví dụ)
app.get("/getWordPressData", async (req, res) => {
  try {
    // Thực hiện truy vấn cần thiết để lấy dữ liệu từ WordPress
    // Ví dụ: const wordpressData = await getWordPressData();
    // Gửi dữ liệu về client
    res.json({ success: true, data: wordpressData });
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu WordPress:", error);
    res.json({ success: false, error: "Lỗi khi lấy dữ liệu WordPress" });
  }
});

// Xử lý REST API để tạo bài đăng mới trong cơ sở dữ liệu của bạn
app.post("/createBlogPost", async (req, res) => {
  try {
    const blogPostData = req.body;
    // Thực hiện xử lý để tạo bài đăng mới trong cơ sở dữ liệu của bạn
    // Ví dụ: const result = await createBlogPost(blogPostData);
    res.json({ success: true, message: "Bài viết đã được tạo thành công" });
  } catch (error) {
    console.error("Lỗi khi tạo bài viết mới:", error);
    res.json({ success: false, error: "Lỗi khi tạo bài viết mới" });
  }
});

// Rest của mã của bạn...

server.listen(PORT, () => {
  console.log("Đang lắng nghe trên cổng: " + PORT);
});
