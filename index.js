const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const BaseResponse = require("./base.response");

app.use(cors());
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let blogs = [];

// Tạo một hàm để đọc dữ liệu từ tệp data.json
function readDataFromFile() {
  try {
    const data = fs.readFileSync("data.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data from file:", error);
    return [];
  }
}

// Khởi động ứng dụng bằng cách đọc dữ liệu từ tệp data.json
blogs = readDataFromFile();

app.get("/blogs", (req, res) => {
  try {
    res.json(new BaseResponse(blogs, 200, "Successful!"));
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

app.post("/blogs", (req, res) => {
  try {
    blogs.push(req.body);

    // Cập nhật dữ liệu vào tệp JSON sau khi thêm bài viết
    fs.writeFileSync("data.json", JSON.stringify(blogs, null, 2));

    res.json(new BaseResponse(req.body, 200, "Successful!"));
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

app.get("/blogs/:title", (req, res) => {
  try {
    const { title } = req.params;
    const blog = blogs.find((item) => item.title === title);

    if (blog) {
      res.json(new BaseResponse(blog, 200, "Successful!"));
    } else {
      res.json(new BaseResponse(404, "Blog not found!"));
    }
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

app.delete("/blogs/:title", (req, res) => {
  try {
    const { title } = req.params;
    const index = blogs.findIndex((item) => item.title === title);

    if (index !== -1) {
      blogs.splice(index, 1);

      // Cập nhật dữ liệu vào tệp JSON sau khi xóa bài viết
      fs.writeFileSync("data.json", JSON.stringify(blogs, null, 2));

      res.json(new BaseResponse(index, 200, "Successful!"));
    } else {
      res.json(new BaseResponse(404, "Blog not found!"));
    }
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

app.patch("/blogs/:title", (req, res) => {
  try {
    const { title } = req.params;
    const index = blogs.findIndex((item) => item.title === title);

    if (index !== -1) {
      blogs[index] = {
        title,
        ...req.body,
      };

      // Cập nhật dữ liệu vào tệp JSON sau khi chỉnh sửa bài viết
      fs.writeFileSync("data.json", JSON.stringify(blogs, null, 2));

      res.json(new BaseResponse(blogs[index], 200, "Successful!"));
    } else {
      res.json(new BaseResponse(404, "Blog not found!"));
    }
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

server.listen(PORT, () => {
  console.log("listening on *: " + PORT);
});
