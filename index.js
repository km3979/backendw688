const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

const cors = require("cors");
app.use(cors());

app.use("/", express.static("public"));

const bodyParser = require("body-parser");
const BaseResponse = require("./base.response");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let blogs =  [
  {
    id: 0.9307484511830817,
    body: "<p dir=\"ltr\">- <a href=\"https://w688.pro/gioi-thieu-nha-cai-truc-tuyen-w688\"><span style=\"color: rgb(224, 62, 45);\"><strong>W688</strong> </span></a>l&agrave; s&ograve;ng bạc trực tuyến xuất hiện tr&ecirc;n thị trường từ năm 2010 , dưới sự hợp t&aacute;c của của Nhật Bản v&agrave; Trung Quốc . N&ecirc;n c&oacute; thể n&oacute;i đem tới một kh&ocirc;ng gian giải tr&iacute; cực kỳ hiện đại , chất lượng . Trụ sở tại nước ngo&agrave;i đảm bảo t&iacute;nh c&ocirc;ng bằng , minh bạch của nh&agrave; c&aacute;i . <br><br>Nh&agrave; c&aacute;i trực tuyến <strong>W688 </strong>d&ugrave; chỉ xuất hiện ở nước ta được khoảng v&agrave;i năm . Nhưng nhờ ch&iacute;nh s&aacute;ch quảng c&aacute;o&nbsp; , nh&agrave; c&aacute;i nhanh ch&oacute;ng nhận được sự quan t&acirc;m kh&aacute; nhiều từ game thủ . Trở th&agrave;nh s&acirc;n chơi giải tr&iacute; , kiếm tiền số một tại nước ta .<br><br>C&aacute;c sản phẩm giải tr&iacute; của nh&agrave; c&aacute;i trực tuyến <strong>W688</strong><br><strong>W688 </strong>mang tới v&ocirc; số dịch vụ c&aacute; cược ăn tiền d&agrave;nh cho bạn . Nếu m&ecirc; c&aacute; cược bạn c&oacute; thể tham khảo qua :<br><br>Thể thao<br>S&acirc;n chơi tập thể đầy đủ c&aacute;c bộ m&ocirc;n thể thao từ truyền thống tới hiện đại .&nbsp; Cũng như cung cấp v&ocirc; số sảnh cược hay , đảm bảo bạn sẽ h&agrave;i l&ograve;ng . Tỷ lệ k&egrave;o cao , nhiều k&egrave;o hấp dẫn cho bạn thoải m&aacute;i lựa chọn , giải tr&iacute; c&oacute; lợi .<br><br>Live casino<br>Sảnh cược casino trực tuyến của nh&agrave; c&aacute;i , tỷ lệ thắng cao , nhiều tr&ograve; chơi th&acirc;n thuộc với người Việt . C&oacute; thể n&oacute;i s&acirc;n chơi n&agrave;y được thiết kế ri&ecirc;ng với nền văn h&oacute;a nước ta . N&ecirc;n c&oacute; thể mang tới những s&acirc;n chơi hay , tỷ lệ thắng hấp dẫn cho bạn , c&ograve;n kh&aacute; nhiều s&acirc;n chơi casino quốc tế . Đem cho bạn kh&ocirc;ng &iacute;t tr&ograve; chơi hay , tỷ lệ thắng cao , cũng như trải nghiệm được c&aacute;i hay m&agrave; dịch vụ quốc tế mang lại<br><br>Games<br>Địa chỉ giải tr&iacute; được đ&aacute;nh gi&aacute; cao với tỷ lệ thắng cao . Đồng thời c&aacute;c tr&ograve; chơi được thiết lập đẹp mắt . đa dạng thể loại . Tiền thưởng t&iacute;ch lũy li&ecirc;n tục c&oacute; thể mang tới bạn cơ hội đổi đời khi tham gia s&ograve;ng bạc .<br><br>Xổ số<br>Sảnh cược đang được ph&aacute;t triển mạnh tại nước ta . Sở hữu nhiều tr&ograve; chơi số hay , tỷ lệ thắng hấp dẫn . Ch&uacute;ng c&oacute; thể gi&uacute;p c&oacute; một nguồn thu nhập kh&ocirc;ng tưởng . Mức cược y&ecirc;u cầu cũng kh&aacute; thấp , n&ecirc;n kh&ocirc;ng tốn qu&aacute; nhiều tiền .<br><br>Esports<br>C&aacute;c tr&ograve; chơi thể thao điện tử cũng được nh&agrave; c&aacute;i<a href=\"https://w688.pro/blog\"> <strong><span style=\"color: rgb(224, 62, 45);\">W688</span></strong></a> ph&aacute;t triển cực kỳ mạnh . Đem tới một kh&ocirc;ng gian giải tr&iacute; hiện đại , tiền thưởng hấp dẫn . Tuy c&aacute;c k&egrave;o cược c&ograve;n kh&aacute; hạn chế , nhưng lại được cập nhật thường xuy&ecirc;n n&ecirc;n sức h&uacute;t cực kỳ lớn .<br><br>Bắn c&aacute;<br>Ch&uacute;ng ta một trong c&aacute;c s&acirc;n chơi hiện được đ&aacute;nh gi&aacute; cao cực kỳ . T&iacute;nh giải tr&iacute; cao , tiền thưởng kh&ocirc;ng qu&aacute; lớn&nbsp; nhưng đều đặn . Lu&ocirc;n gi&uacute;p người chơi thu được một nguồn lợi nhất định khi tham gia giải tr&iacute; .<br><br>&nbsp; Đối kh&aacute;ng<br>S&acirc;n chơi cuối c&ugrave;ng tại <strong>W688 </strong>, sảnh cược mang tới nhiều tr&ograve; chơi hay . V&igrave; lối chơi đối kh&aacute;ng , n&ecirc;n n&oacute; l&agrave; tr&ograve; chơi cực kỳ c&ocirc;ng bằng . Nhận được sự quan t&acirc;m của đại bộ phận nam giới . Nhưng c&oacute; phần v&igrave; kh&aacute; mới lạ , n&ecirc;n nhiều người vẫn c&ograve;n nghi ngờ khi lựa chọn .<br><br>Xem th&ecirc;m: &gt;&gt; Kh&aacute;m ph&aacute; thế giới <a href=\"https://w688.pro/blog/kham-pha-the-gioi-no-hu-w688-tham-gia-trai-nghiem-ngay-nhung-dau-truong-dinh-cao\"><strong><span style=\"color: rgb(224, 62, 45);\">Nổ hũ W688</span></strong></a>: Tham gia trải nghiệm ngay những đấu trường đỉnh cao<br>Th&ocirc;ng qua c&aacute;c sảnh cược của nh&agrave; c&aacute;i , c&aacute;c bạn c&oacute; lẽ đ&atilde; biết n&ecirc;n tới địa chỉ n&agrave;o giải tr&iacute; rồi đ&uacute;ng kh&ocirc;ng n&agrave;o ? Mặc d&ugrave; kh&aacute; đa dạng nhưng mỗi thể loại game lại ph&ugrave; hợp với từng đối tượng kh&aacute;c nhau . N&ecirc;n khi lựa chọn bạn cũng n&ecirc;n trải nghiệm thực tế để tr&aacute;nh mất tiền oan .<br><br>Một số lưu &yacute; khi c&aacute; cược tại nh&agrave; c&aacute;i trực tuyến <strong>W688</strong><br>c&aacute; cược ăn tiền th&ocirc;ng qua nh&agrave; c&aacute;i phải đầu tư tiền mặt&nbsp; . Ch&iacute;nh v&igrave; thế c&aacute;c bạn cũng cần lưu &yacute; một số yếu tố quan trọng như :<br>&nbsp; <br>Nạp tiền khuyến m&atilde;i , nh&agrave; c&aacute;i <strong>W688 </strong>cung cấp khuyến m&atilde;i nạp đầu , nạp lại . Ch&uacute;ng đem lại số tiền thưởng th&ecirc;m kh&ocirc;ng qu&aacute; lớn . Nhưng lại v&ocirc; c&ugrave;ng hữu &iacute;ch , đ&aacute;ng để bạn quan tam , tham khảo nhiều hơn .<br><br>&nbsp; Th&ecirc;m số t&agrave;i khoản ng&acirc;n h&agrave;ng , ch&uacute;ng phục vụ việc x&aacute;c nhận th&ocirc;ng tin , cũng như r&uacute;t tiền nhanh hơn trong tương lai . bạn c&oacute; thể th&ecirc;m tới 5 t&agrave;i khoản ng&acirc;n h&agrave;ng kh&aacute;c nhau , hỗ trợ qu&aacute; tr&igrave;nh nạp tiền nhanh hơn .<br><br>Đ&aacute;nh gi&aacute; từng sảnh cược , nh&agrave; c&aacute;i trực tuyến <strong>W688 </strong>ph&aacute;t triển kh&aacute; nhiều sảnh cược hay . Tuy nhi&ecirc;n kh&ocirc;ng phải s&acirc;n chơi n&agrave;o cũng dễ kiếm tiền .&nbsp; Bạn n&ecirc;n đến sản live Casino v&agrave; xổ số . Ch&uacute;ng c&oacute; phần thắng kh&aacute; lớn , cũng nhiều cầu cược dễ thắng gi&uacute;p bạn dễ kiếm tiền hơn .<br><br>Đầu tư số vốn nhỏ d&ugrave; bạn c&oacute; nhiều tiền nhưng cũng chỉ để đầu tư một số vốn nhỏ th&ocirc;i . Sau đ&oacute; t&igrave;m hiểu xem tỷ lệ thắng c&aacute;c tr&ograve; chơi c&oacute; minh bạch hay kh&ocirc;ng&nbsp; , thậm ch&iacute; r&uacute;t tiền với số tiền r&uacute;t tối thiểu l&agrave; 200k , ch&uacute;ng c&oacute; thể đảm bảo cho bạn nguồn th&ocirc;ng tin c&oacute; &iacute;ch khi giải tr&iacute;&nbsp; .<br><br>Từng yếu tố nhỏ tại nh&agrave; c&aacute;i<a href=\"https://w688.pro/\"> <span style=\"color: rgb(224, 62, 45);\"><strong>W688</strong></span></a><span style=\"color: rgb(224, 62, 45);\"><strong> </strong></span>c&oacute; thể ảnh hưởng trực tiếp tới qu&aacute; tr&igrave;nh giải tr&iacute; của bạn. N&ecirc;n đ&atilde; quyết định đầu tư . Bạn n&ecirc;n t&igrave;m hiểu thật kỹ . số vốn vừa phải để giải tr&iacute; quan trọng nhất khi c&aacute; cược kh&ocirc;ng phải để thắng tiền . H&atilde;y t&igrave;m kiếm niềm vui từ tr&ograve; chơi n&agrave;y bạn nh&eacute; ! .</p>",
    title: "GIỚI THIỆU NHÀ CÁI TRỰC TUYẾN W688",
    author: "W688",
  },
];

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
    res.json(new BaseResponse(req.body, 200, "Successful!"));
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

app.get("/blogs/:slug", (req, res) => {
  try {
    const { slug } = req.params;
    const blog = blogs.find((item) => convertToSlug(item.title) === slug);
    res.json(new BaseResponse(blog, 200, "Successful!"));
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

app.delete("/blogs/:slug", (req, res) => {
  try {
    const { slug } = req.params;
    const index = blogs.findIndex((item) => convertToSlug(item.title) === slug);
    if (index !== -1) {
      blogs.splice(index, 1);
      res.json(new BaseResponse(index, 200, "Successful!"));
    } else {
      res.json(new BaseResponse(404, "Error!"));
    }
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
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
      res.json(new BaseResponse(blogs[index], 200, "Successful!"));
    } else {
      res.json(new BaseResponse(404, "Error!"));
    }
  } catch (error) {
    res.json(new BaseResponse(404, "Error!"));
  }
});

server.listen(PORT, () => {
  console.log("listening on *: " + PORT);
});

function convertToSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Loại bỏ các dấu thanh và ký tự đặc biệt
    .replace(/đ/g, 'd')  // Thêm quy tắc thay thế cho chữ "đ"
    .replace(/Đ/g, 'd')  // Thêm quy tắc thay thế cho chữ "Đ"
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
}
