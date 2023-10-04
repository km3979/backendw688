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

let blogs = [
  {
    id: 0.03268631033824909,
    body: '<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nh&agrave; c&aacute;i <span style="color: rgb(224, 62, 45);"><strong>W688</strong></span> l&agrave; một trong những t&ecirc;n h&agrave;ng đầu trong lĩnh vực c&aacute; cược trực tuyến. Với hơn một thập kỷ hoạt động v&agrave; ph&aacute;t triển, <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>đ&atilde; x&acirc;y dựng được uy t&iacute;n v&agrave; niềm tin từ h&agrave;ng ng&agrave;n người chơi tr&ecirc;n to&agrave;n thế giới.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Đa Dạng C&aacute;c Sản Phẩm C&aacute; Cược</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nh&agrave; c&aacute;i <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>kh&ocirc;ng chỉ cung cấp một loạt c&aacute;c tr&ograve; chơi c&aacute; cược trực tuyến đa dạng, m&agrave; c&ograve;n mang đến sự đa dạng về sản phẩm. D&ugrave; bạn l&agrave; người y&ecirc;u th&iacute;ch c&aacute; cược thể thao, s&ograve;ng b&agrave;i, hay c&aacute;c tr&ograve; chơi casino trực tuyến như Baccarat, X&oacute;c Đĩa, Slot, Xổ Số, Đ&aacute; G&agrave;, Thể Thao, Sicbo, v&agrave; tiến l&ecirc;n miền nam, <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>đều c&oacute; những sản phẩm ph&ugrave; hợp với sở th&iacute;ch của bạn.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Trải Nghiệm C&aacute; Cược Tại W688</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Một trong những điểm đặc biệt của <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>ch&iacute;nh l&agrave; trải nghiệm c&aacute; cược đỉnh cao m&agrave; họ mang đến cho người chơi. Giao diện dễ sử dụng, t&iacute;ch hợp c&ocirc;ng nghệ hiện đại, v&agrave; dịch vụ kh&aacute;ch h&agrave;ng 24/7 l&agrave; những yếu tố gi&uacute;p <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>nổi bật.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Ứng Dụng Di Động Tiện Lợi</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Ngo&agrave;i phi&ecirc;n bản trang web, <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>cũng cung cấp ứng dụng di động cho cả iOS v&agrave; Android. Điều n&agrave;y gi&uacute;p bạn c&oacute; thể đặt cược v&agrave; tham gia c&aacute;c tr&ograve; chơi mọi l&uacute;c, mọi nơi chỉ cần một chiếc điện thoại th&ocirc;ng minh.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">An To&agrave;n v&agrave; Đ&aacute;ng Tin Cậy</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;"><strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>lu&ocirc;n đặt sự an to&agrave;n v&agrave; bảo mật th&ocirc;ng tin c&aacute; nh&acirc;n của người chơi l&ecirc;n h&agrave;ng đầu. Hệ thống bảo mật&nbsp; ti&ecirc;n tiến v&agrave; quy tr&igrave;nh kiểm tra chặt chẽ đảm bảo rằng bạn c&oacute; thể tham gia c&aacute; cược một c&aacute;ch an t&acirc;m.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Đ&aacute;nh B&agrave;i Đổi Thưởng v&agrave; Live Casino</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Tại <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>, bạn c&oacute; thể tham gia v&agrave;o c&aacute;c tr&ograve; chơi đ&aacute;nh b&agrave;i đổi thưởng, live casino, v&agrave; nhiều tr&ograve; chơi kh&aacute;c nhau. Nơi đ&acirc;y, s&ograve;ng b&agrave;i v&agrave; c&aacute; cược thể thao được kết hợp để mang đến trải nghiệm giải tr&iacute; đa dạng.</span></p>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">H&atilde;y trải nghiệm s&ograve;ng b&agrave;i v&agrave; tr&ograve; chơi casino tại <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>để tận hưởng kh&ocirc;ng gian đỉnh cao của giải tr&iacute;&nbsp; trực tuyến. Với sự đa dạng v&agrave; chất lượng của sản phẩm, bạn sẽ c&oacute; một trải nghiệm th&uacute; vị tại nh&agrave; c&aacute;i n&agrave;y.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Chất Lượng V&agrave; C&ocirc;ng Bằng</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;"><strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>cam kết đảm bảo chất lượng v&agrave; c&ocirc;ng bằng trong mọi tr&ograve; chơi. Hệ thống c&ocirc;ng nghệ ti&ecirc;n tiến gi&uacute;p đảm bảo sự c&ocirc;ng bằng v&agrave; ngẫu nhi&ecirc;n của kết quả. Điều n&agrave;y đồng nghĩa với việc bạn c&oacute; cơ hội thắng lớn một c&aacute;ch c&ocirc;ng bằng.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Kh&aacute;ch H&agrave;ng L&agrave; Trọng T&acirc;m</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Kh&aacute;ch h&agrave;ng lu&ocirc;n được đặt l&ecirc;n h&agrave;ng đầu tại <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>. Dịch vụ kh&aacute;ch h&agrave;ng 24/7 sẵn s&agrave;ng hỗ trợ bạn mọi l&uacute;c, mọi nơi. H&atilde;y y&ecirc;n t&acirc;m khi tham gia v&agrave; biết rằng bạn sẽ lu&ocirc;n được quan t&acirc;m v&agrave; hỗ trợ khi cần.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Kết Luận</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nh&agrave; c&aacute;i <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>kh&ocirc;ng chỉ l&agrave; một nơi c&aacute; cược trực tuyến, m&agrave; c&ograve;n l&agrave; sự lựa chọn tốt cho những người y&ecirc;u th&iacute;ch trải nghiệm c&aacute; cược đỉnh cao. Với sự đa dạng về sản phẩm, trải nghiệm c&aacute; cược tiện lợi, v&agrave; sự đ&aacute;ng tin cậy, <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>đang trở th&agrave;nh một trong những nh&agrave; c&aacute;i h&agrave;ng đầu tr&ecirc;n thị trường.</span></p>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nếu bạn đang t&igrave;m kiếm một nơi để tham gia c&aacute; cược trực tuyến, h&atilde;y c&acirc;n nhắc <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>v&agrave; trải nghiệm một c&aacute;ch tự tin. Chắc chắn rằng bạn sẽ kh&ocirc;ng phải thất vọng với sự lựa chọn n&agrave;y.</span></p>',
    title: "Khám Phá Nhà Cái W688",
    author: "W688",
  },
  {
    id: 0.2093826188827279,
    body: '<p><span style="font-family: \'times new roman\', times, serif;">Nhắc đến những nh&agrave; c&aacute;i trực tuyến h&agrave;ng đầu, kh&ocirc;ng thể kh&ocirc;ng nhắc đến <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>. Với một danh tiếng v&ocirc; c&ugrave;ng uy t&iacute;n v&agrave; đa dạng về tr&ograve; chơi, <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>đ&atilde; thu h&uacute;t sự quan t&acirc;m của rất nhiều người chơi tr&ecirc;n khắp mọi miền đất nước. B&agrave;i viết n&agrave;y sẽ đưa bạn điểm qua những điều quan trọng về nh&agrave; c&aacute;i <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>, từ c&aacute;c tr&ograve; chơi phổ biến, ưu điểm nổi bật đến dịch vụ kh&aacute;ch h&agrave;ng 24/7 v&agrave; tốc độ giao dịch nhanh ch&oacute;ng. C&ugrave;ng ch&uacute;ng t&ocirc;i t&igrave;m hiểu!</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>1. C&aacute;c Tr&ograve; Chơi Đa Dạng <span style="color: rgb(224, 62, 45);">W688 </span></strong>l&agrave; điểm đến l&yacute; tưởng cho những người y&ecirc;u th&iacute;ch c&aacute; cược trực tuyến. Nh&agrave; c&aacute;i n&agrave;y đ&atilde; tự h&agrave;o mang đến người chơi một loạt tr&ograve; chơi phong ph&uacute;, đa dạng, v&agrave; hấp dẫn. Dưới đ&acirc;y l&agrave; một số tr&ograve; chơi nổi bật tại <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>:</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>- X&oacute;c Đĩa:</strong> Tr&ograve; chơi phổ biến được nhiều người y&ecirc;u th&iacute;ch với sự hấp dẫn của việc dự đo&aacute;n kết quả tung x&uacute;c xắc.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>- Baccarat:</strong> Một trong những tr&ograve; chơi thẻ phổ biến nhất thế giới, Baccarat tại <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>đem lại cảm gi&aacute;c chơi tại s&ograve;ng b&agrave;i thực sự.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>- Thể Thao: <span style="color: rgb(224, 62, 45);">W688 </span></strong>cung cấp cược trực tuyến tr&ecirc;n nhiều m&ocirc;n thể thao kh&aacute;c nhau, từ b&oacute;ng đ&aacute; đến b&oacute;ng rổ v&agrave; cả eSports.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>- Xổ Số:</strong> Với c&aacute;c kết quả xổ số trực tiếp từ nhiều quốc gia, người chơi c&oacute; nhiều cơ hội để tr&uacute;ng lớn.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>- Slot:</strong> Đối với người chơi y&ecirc;u th&iacute;ch sự may mắn, danh mục game Slot tại <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>l&agrave; một kho t&agrave;ng với nhiều tr&ograve; chơi hấp dẫn v&agrave; tiềm năng rinh tiền khủng.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>2. Ưu Điểm Nạp R&uacute;t Nhanh Ch&oacute;ng</strong> Một trong những ưu điểm nổi bật của <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>ch&iacute;nh l&agrave; tốc độ nạp v&agrave; r&uacute;t tiền nhanh ch&oacute;ng. Với sự hỗ trợ của c&aacute;c đối t&aacute;c thanh to&aacute;n uy t&iacute;n, bạn c&oacute; thể thực hiện giao dịch một c&aacute;ch dễ d&agrave;ng v&agrave; thuận tiện. Kh&ocirc;ng c&ograve;n phải lo lắng về việc chờ đợi l&acirc;u để tiền v&agrave;o t&agrave;i khoản hoặc r&uacute;t tiền về ng&acirc;n h&agrave;ng c&aacute; nh&acirc;n.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>3. Dịch Vụ Kh&aacute;ch H&agrave;ng 24/7 <span style="color: rgb(224, 62, 45);">W688 </span></strong>lu&ocirc;n đặt sự h&agrave;i l&ograve;ng của kh&aacute;ch h&agrave;ng l&ecirc;n h&agrave;ng đầu. Để đảm bảo bạn lu&ocirc;n c&oacute; trải nghiệm c&aacute; cược tốt nhất, họ cung cấp dịch vụ kh&aacute;ch h&agrave;ng 24/7. Bất kể bạn gặp vấn đề g&igrave; trong qu&aacute; tr&igrave;nh chơi, bạn c&oacute; thể li&ecirc;n hệ với đội ngũ hỗ trợ chuy&ecirc;n nghiệp để được gi&uacute;p đỡ. Điều n&agrave;y gi&uacute;p tạo n&ecirc;n sự tin tưởng v&agrave; an t&acirc;m cho người chơi.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>4. Bảo Mật V&agrave; An To&agrave;n</strong> Sự an to&agrave;n v&agrave; bảo mật th&ocirc;ng tin c&aacute; nh&acirc;n của người chơi lu&ocirc;n được đặt l&ecirc;n h&agrave;ng đầu tại <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>. Nh&agrave; c&aacute;i n&agrave;y sử dụng c&ocirc;ng nghệ m&atilde; h&oacute;a cao cấp để đảm bảo rằng mọi giao dịch v&agrave; th&ocirc;ng tin c&aacute; nh&acirc;n của bạn được bảo vệ một c&aacute;ch tốt nhất. Điều n&agrave;y đồng nghĩa với việc bạn c&oacute; thể y&ecirc;n t&acirc;m tham gia c&aacute;c tr&ograve; chơi m&agrave; kh&ocirc;ng phải lo lắng về việc th&ocirc;ng tin c&aacute; nh&acirc;n bị r&ograve; rỉ hoặc lừa đảo.</span></p>\n<p><span style="font-family: \'times new roman\', times, serif;"><strong>Kết Luận</strong> Nh&agrave; c&aacute;i <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>kh&ocirc;ng chỉ l&agrave; nơi giải tr&iacute; đỉnh cao m&agrave; c&ograve;n l&agrave; một nền tảng an to&agrave;n v&agrave; đ&aacute;ng tin cậy để đặt cược trực tuyến. Với sự đa dạng về tr&ograve; chơi, ưu điểm về tốc độ giao dịch, dịch vụ kh&aacute;ch h&agrave;ng 24/7 v&agrave; sự quan t&acirc;m đặc biệt đến an ninh th&ocirc;ng tin, <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>thực sự xứng đ&aacute;ng với danh tiếng của m&igrave;nh. H&atilde;y tham gia ngay h&ocirc;m nay v&agrave; trải nghiệm sự hứng th&uacute; v&agrave; th&uacute; vị m&agrave; nh&agrave; c&aacute;i n&agrave;y mang lại!</span></p>',
    title:
      "Giới Thiệu Tổng Quan Nhà Cái W688: Đánh Bài, Đá Bóng, Rinh Tiền Thả Ga!",
    author: "W688",
  },
  {
    id: 0.03773864598243737,
    body: '<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>l&agrave; phi&ecirc;n bản mới nhất trong chuỗi game đổi thưởng nổi tiếng, đem đến cho bạn một trải nghiệm tuyệt vời với những c&uacute; nổ hũ đầy m&ecirc; hoặc. Với từ kh&oacute;a "Nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>", bạn sẽ bước v&agrave;o một thế giới hư cấu h&ugrave;ng vĩ, nơi bạn sẽ t&igrave;m thấy kh&ocirc;ng chỉ h&agrave;ng ng&agrave;n cơ hội để tr&uacute;ng jackpot khủng, m&agrave; c&ograve;n những trận đấu ly kỳ với si&ecirc;u qu&aacute;i vật. H&atilde;y chuẩn bị sẵn s&agrave;ng cho cuộc h&agrave;nh tr&igrave;nh tuyệt vời n&agrave;y! Đăng nhập v&agrave;o nổ hũ <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>ngay h&ocirc;m nay v&agrave; trở th&agrave;nh nh&agrave; v&ocirc; địch trong thế giới đầy hứa hẹn của game đổi thưởng.&nbsp;</span></p>\n<h2 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Giới thiệu về nổ hũ W688</span></h2>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>l&agrave; một phi&ecirc;n bản game đổi thưởng đầy hấp dẫn, thuộc h&agrave;ng đầu trong lĩnh vực game đ&aacute;nh b&agrave;i v&agrave; slot trực tuyến. Được ph&aacute;t triển dựa tr&ecirc;n th&agrave;nh c&ocirc;ng của c&aacute;c phi&ecirc;n bản trước đ&oacute;, Nổ hũ <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>mang đến cho người chơi một trải nghiệm ho&agrave;n to&agrave;n mới v&agrave; kh&ocirc;ng thể bỏ qua.</span></p>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Với nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>, người chơi sẽ được h&ograve;a m&igrave;nh v&agrave;o một thế giới ảo đầy sắc m&agrave;u v&agrave; kỳ diệu. Người chơi sẽ được đắm ch&igrave;m v&agrave;o những tựa game với đồ họa đẹp mắt c&ugrave;ng với đ&oacute; l&agrave; tỷ lệ nổ thưởng cực cao.</span></p>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Điểm đặc biệt của nổ hũ <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>ch&iacute;nh l&agrave; sự ph&aacute;t triển kh&ocirc;ng ngừng, lu&ocirc;n mang đến những cập nhật mới nhất v&agrave; n&acirc;ng cấp đ&aacute;ng kinh ngạc. Đội ngũ ph&aacute;t triển kh&ocirc;ng ngừng t&igrave;m c&aacute;ch n&acirc;ng cao trải nghiệm người chơi, đồng thời đưa ra những t&iacute;nh năng v&agrave; sự kiện đặc biệt, đảm bảo sự đa dạng v&agrave; kh&oacute; qu&ecirc;n trong qu&aacute; tr&igrave;nh chơi.</span></p>\n<h2 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Tham gia trải nghiệm đấu trường đỉnh cao tại nổ hũ W688</span></h2>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Đấu trường đa dạng</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>mang đến cho người chơi một loạt c&aacute;c đấu trường đa dạng, từ những cuộc chiến một đấu một đến c&aacute;c cuộc tranh t&agrave;i đội h&igrave;nh. Bạn c&oacute; thể tham gia v&agrave;o c&aacute;c trận đấu với người chơi kh&aacute;c, tạo ra những trận c&acirc;n n&atilde;o v&agrave; đầy t&iacute;nh chiến thuật. Sự đa dạng n&agrave;y gi&uacute;p tạo ra những trải nghiệm th&uacute; vị v&agrave; kh&ocirc;ng bao giờ nh&agrave;m ch&aacute;n.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Th&aacute;ch thức v&agrave; cơ hội ph&aacute;t t&agrave;i</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Đấu trường đỉnh cao trong nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>kh&ocirc;ng chỉ đem lại những trận đấu cam go m&agrave; c&ograve;n l&agrave; nơi để người chơi thể hiện kỹ năng v&agrave; may mắn của m&igrave;nh. Với những mức cược thử th&aacute;ch v&agrave; cơ hội tr&uacute;ng jackpot khủng, đấu trường đỉnh cao của nổ hũ <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>l&agrave; nơi m&agrave; bạn c&oacute; thể chinh phục những giới hạn mới v&agrave; thu về những phần thưởng lớn nhất.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Tham gia cộng đồng</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Đấu trường đỉnh cao kh&ocirc;ng chỉ l&agrave; nơi tranh t&agrave;i m&agrave; c&ograve;n l&agrave; nơi để giao lưu v&agrave; kết nối với cộng đồng người chơi nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>kh&aacute;c. Bạn c&oacute; thể th&aacute;ch đấu với bạn b&egrave;, tạo ra c&aacute;c nh&oacute;m đội h&igrave;nh hoặc tham gia c&aacute;c giải đấu h&agrave;ng tuần. Việc tham gia cộng đồng n&agrave;y kh&ocirc;ng chỉ gi&uacute;p tăng th&ecirc;m sự phấn kh&iacute;ch m&agrave; c&ograve;n mở ra cơ hội để học hỏi, chia sẻ kinh nghiệm v&agrave; thắt chặt t&igrave;nh bạn.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Sự ph&aacute;t triển v&agrave; thăng tiến</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Qua c&aacute;c trận đấu trong đấu trường, bạn c&oacute; thể t&iacute;ch lũy điểm kinh nghiệm v&agrave; tiến h&oacute;a trong hệ thống cấp độ của nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>. Điều n&agrave;y cho ph&eacute;p bạn mở kh&oacute;a c&aacute;c t&iacute;nh năng mới, nhận được c&aacute;c phần thưởng độc đ&aacute;o v&agrave; truy cập v&agrave;o c&aacute;c khu vực đặc biệt. Bằng c&aacute;ch ph&aacute;t triển v&agrave; thăng tiến, bạn sẽ trở n&ecirc;n mạnh mẽ hơn, sẵn s&agrave;ng đối mặt với những thử th&aacute;ch đỉnh cao hơn.</span></p>\n<h2 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Lợi &iacute;ch của việc tham gia nổ hũ W688&nbsp;</span></h2>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Cơ hội tr&uacute;ng jackpot khủng</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Đấu trường đỉnh cao trong nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>l&agrave; nơi bạn c&oacute; cơ hội tr&uacute;ng jackpot lớn. Với việc tham gia v&agrave;o những trận đấu căng thẳng v&agrave; thể hiện kỹ năng của m&igrave;nh, bạn c&oacute; thể gi&agrave;nh chiến thắng v&agrave; nhận được những phần thưởng v&ocirc; c&ugrave;ng gi&aacute; trị, bao gồm cả c&aacute;c jackpot với số tiền khổng lồ. Đ&acirc;y l&agrave; cơ hội để bạn thực hiện ước mơ trở th&agrave;nh triệu ph&uacute; chỉ trong một lần quay.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Trải nghiệm sự sống động đến từ đồ họa v&agrave; &acirc;m thanh</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>mang đến trải nghiệm đồ họa đẹp mắt v&agrave; hiệu ứng &acirc;m thanh sống động. Với c&ocirc;ng nghệ ti&ecirc;n tiến, bạn sẽ được ch&igrave;m đắm trong kh&ocirc;ng gian hấp dẫn v&agrave; sống động, tạo cảm gi&aacute;c như đang tham gia v&agrave;o c&aacute;c trận đấu thực sự. Trải nghiệm n&agrave;y gi&uacute;p bạn tận hưởng một c&aacute;ch tối đa mọi khoảnh khắc trong tr&ograve; chơi v&agrave; tạo n&ecirc;n một sự kết nối mạnh mẽ với thế giới ảo.</span></p>\n<h3 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">T&iacute;nh giải tr&iacute; cực cao của c&aacute;c tựa game</span></h3>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Cuối c&ugrave;ng, việc tham gia v&agrave;o đấu trường đỉnh cao trong nổ hũ <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>mang đến cho bạn sự hứng th&uacute; v&agrave; giải tr&iacute; kh&ocirc;ng ngừng. Bạn sẽ lu&ocirc;n c&oacute; những trận đấu mới, những cơ hội ph&aacute;t t&agrave;i v&agrave; những trải nghiệm th&uacute; vị khi tham gia tr&ograve; chơi n&agrave;y. Qu&aacute; tr&igrave;nh chơi sẽ lu&ocirc;n đem đến những cảm x&uacute;c đặc biệt v&agrave; l&agrave;m cho thời gian tr&ocirc;i qua một c&aacute;ch th&uacute; vị v&agrave; nhanh ch&oacute;ng.</span></p>\n<h2 dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Kết luận</span></h2>\n<p dir="ltr"><span style="font-family: \'times new roman\', times, serif;">Nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>kh&ocirc;ng chỉ l&agrave; một tr&ograve; chơi đổi thưởng th&ocirc;ng thường, m&agrave; c&ograve;n l&agrave; một thế giới đầy hứa hẹn v&agrave; th&aacute;ch thức. Nổ hũ <span style="color: rgb(224, 62, 45);"><strong>W688 </strong></span>đem đến cho người chơi kh&ocirc;ng chỉ những trận đấu đỉnh cao v&agrave; cơ hội ph&aacute;t t&agrave;i, m&agrave; c&ograve;n một trải nghiệm đa dạng v&agrave; hấp dẫn. H&atilde;y kh&aacute;m ph&aacute; thế giới nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688 </span></strong>ngay h&ocirc;m nay v&agrave; trở th&agrave;nh nh&agrave; v&ocirc; địch trong đấu trường đỉnh cao. Chỉ cần bắt đầu với từ kh&oacute;a "nổ hũ <strong><span style="color: rgb(224, 62, 45);">W688</span></strong>", bạn sẽ bước v&agrave;o một cuộc phi&ecirc;u lưu đầy m&ecirc; hoặc, cơ hội ph&aacute;t t&agrave;i v&agrave; trải nghiệm đỉnh cao kh&ocirc;ng thể bỏ qua.</span></p>\n<p>&nbsp;</p>',
    title:
      "Khám Phá Thế Giới Nổ Hũ W688: Tham Gia Trải Nghiệm Ngay Những Đấu Trường Đỉnh Cao",
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
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/đ/g, 'd')  // Thay thế chữ "đ" thành "d"
    .replace(/Đ/g, 'd'); // Thay thế chữ "Đ" thành "d"
}

