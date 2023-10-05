const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// Sử dụng bodyParser để có thể đọc dữ liệu gửi đến từ client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Xử lý REST API để lấy danh sách bài viết từ WordPress
app.get("/getWordPressPosts", async (req, res) => {
  try {
    // Thực hiện truy vấn cần thiết để lấy danh sách bài viết từ WordPress
    const query = "SELECT * FROM wp_posts WHERE post_type = 'post' AND post_status = 'publish'";
    const [rows, fields] = await connection.promise().query(query);

    // Gửi danh sách bài viết về client
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài viết từ WordPress:", error);
    res.json({ success: false, error: "Lỗi khi lấy danh sách bài viết từ WordPress" });
  }
});

// Xử lý REST API để tạo bài đăng mới trong cơ sở dữ liệu WordPress
app.post("/createWordPressPost", async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Thực hiện truy vấn cần thiết để tạo bài đăng mới trong WordPress
    const query = "INSERT INTO wp_posts (post_title, post_content, post_author, post_type, post_status) VALUES (?, ?, ?, 'post', 'publish')";
    const [result] = await connection.promise().query(query, [title, content, author]);

    // Gửi thông báo về client
    res.json({ success: true, message: "Bài viết đã được tạo thành công", postId: result.insertId });
  } catch (error) {
    console.error("Lỗi khi tạo bài viết mới:", error);
    res.json({ success: false, error: "Lỗi khi tạo bài viết mới" });
  }
});

// Rest của mã của bạn...

server.listen(PORT, () => {
  console.log("Đang lắng nghe trên cổng: " + PORT);
});
