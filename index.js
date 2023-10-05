const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const httpModule = require("http");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let blogs = [];

// Lấy dữ liệu từ API và cập nhật mảng blogs
function fetchAndSetBlogs() {
  const options = {
    hostname: "w688.fun",
    port: 80,
    path: "/wp-json/wp/v2/posts",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = httpModule.request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        blogs = JSON.parse(data).map((post) => ({
          id: post.id,
          body: post.content.rendered,
          title: post.title.rendered,
          author: post.author,
        }));
      } catch (error) {
        console.error("Error parsing data from API:", error.message);
      }
    });
  });

  req.on("error", (error) => {
    console.error("Error fetching data from API:", error.message);
  });

  req.end();
}

// Gọi hàm trên để cập nhật mảng blogs khi server khởi động
fetchAndSetBlogs();

app.get("/blogs", (req, res) => {
  try {
    res.json({ data: blogs, status: 200, message: "Successful!" });
  } catch (error) {
    res.json({ status: 404, message: "Error!" });
  }
});

app.post("/blogs", (req, res) => {
  try {
    blogs.push(req.body);
    res.json({ data: req.body, status: 200, message: "Successful!" });
  } catch (error) {
    res.json({ status: 404, message: "Error!" });
  }
});

app.get("/blogs/:slug", (req, res) => {
  try {
    const { slug } = req.params;
    const blog = blogs.find((item) => convertToSlug(item.title) === slug);
    res.json({ data: blog, status: 200, message: "Successful!" });
  } catch (error) {
    res.json({ status: 404, message: "Error!" });
  }
});

app.delete("/blogs/:slug", (req, res) => {
  try {
    const { slug } = req.params;
    const index = blogs.findIndex((item) => convertToSlug(item.title) === slug);
    if (index !== -1) {
      blogs.splice(index, 1);
      res.json({ data: index, status: 200, message: "Successful!" });
    } else {
      res.json({ status: 404, message: "Error!" });
    }
  } catch (error) {
    res.json({ status: 404, message: "Error!" });
  }
});

app.patch("/blogs/:slug", (req, res) => {
  try {
    const { slug } = req.params;
    const normalizedSlug = convertToSlug(slug); // Chuẩn hóa slug
    const index = blogs.findIndex((item) => convertToSlug(item.title) === normalizedSlug);
    if (index !== -1) {
      blogs[index] = {
        ...blogs[index],
        ...req.body,
      };
      res.json({ data: blogs[index], status: 200, message: "Successful!" });
    } else {
      res.json({ status: 404, message: "Error!" });
    }
  } catch (error) {
    res.json({ status: 404, message: "Error!" });
  }
});

server.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});

function convertToSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu thanh và ký tự đặc biệt
    .replace(/đ/g, "d") // Thêm quy tắc thay thế cho chữ "đ"
    .replace(/Đ/g, "d") // Thêm quy tắc thay thế cho chữ "Đ"
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-");
}
