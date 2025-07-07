'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const forumPosts = [
  {
    id: 1,
    path: "trung-tam-art-key-dong-hanh-cung-doan-thanh-nien-cac-khu-pho-thuoc-phuong-tan-quy-khai-giang-sinh-hoat-he-2025",
    title: "TRUNG TÂM ART KEY ĐỒNG HÀNH CÙNG ĐOÀN THANH NIÊN CÁC KHU PHỐ THUỘC PHƯỜNG TÂN QUÝ KHAI GIẢNG SINH HOẠT HÈ 2025",
    subtitle: " Ngày 08/6/2025, Trung tâm Mỹ thuật ART KEY phối hợp cùng Ban Chấp hành Đoàn phường Tân Quý tổ chức khai giảng các lớp học vẽ...",
    date: "Tháng 6/2025",
    image: "/post/khai-giang-sinh-hoat-he-2025/1.jpg",
    content: `<div class="prose prose-lg max-w-none prose-blue">
  <h2 class="text-2xl font-bold mb-6">TRUNG TÂM ART KEY ĐỒNG HÀNH CÙNG ĐOÀN THANH NIÊN CÁC KHU PHỐ THUỘC PHƯỜNG TÂN QUÝ KHAI GIẢNG SINH HOẠT HÈ 2025</h2>

  <p>
    Ngày 08/6/2025, Trung tâm Mỹ thuật ART KEY phối hợp cùng Ban Chấp hành Đoàn phường Tân Quý tổ chức khai giảng các lớp học vẽ miễn phí,
    chính thức khởi động chuỗi hoạt động hè năm 2025 đầy bổ ích dành cho các bạn thiếu nhi trên địa bàn phường.
  </p>

  <p>
    Chương trình là một phần trong chiến lược cộng đồng của ART KEY nhằm mang nghệ thuật và kỹ năng sáng tạo đến gần hơn với các thiếu nhi,
    đồng thời tạo không gian sinh hoạt lành mạnh, bổ ích trong kỳ nghỉ hè năm học 2024-2025.
  </p>

  <h3 class="text-xl font-semibold mt-8">KHÔNG GIAN NGHỆ THUẬT – NƠI ƯƠM MẦM TÀI NĂNG TRẺ</h3>

  <p>
    Trong buổi khai giảng, các bạn nhỏ đã được trải nghiệm những hoạt động phong phú như: vẽ tranh theo chủ đề, thiết kế các sản phẩm như: túi,
    mặt nạ, sáng tạo với đất nặn, khám phá màu nước và nhiều trò chơi tương tác kết hợp mỹ thuật. Đội ngũ giáo viên của ART KEY trực tiếp hướng dẫn,
    tạo nên bầu không khí sôi nổi, thân thiện và đầy cảm hứng sáng tạo.
  </p>

  <blockquote class="border-l-4 border-blue-400 pl-4 italic text-gray-700 my-3">
    <strong class="block">Đại diện ART KEY chia sẻ:</strong>
    “Chúng tôi tin rằng, mỗi đứa trẻ đều có khả năng sáng tạo riêng. ART KEY mong muốn tạo ra không gian để các em được thể hiện bản thân,
    phát triển cảm xúc và tư duy thông qua nghệ thuật”.
  </blockquote>

  <h3 class="text-xl font-semibold mt-8">GẮN KẾT CỘNG ĐỒNG – HƯỚNG ĐẾN SỰ PHÁT TRIỂN TOÀN DIỆN</h3>

  <p>
    Việc phối hợp với Đoàn phường Tân Quý không chỉ giúp lan tỏa giá trị nghệ thuật đến với cộng đồng,
    mà còn là dịp để ART KEY thực hiện sứ mệnh "Nuôi dưỡng tâm hồn - Khơi dậy đam mê - Định hình nhân cách trẻ thông qua mỹ thuật".
  </p>

  <p>
    Trong thời gian tới, ART KEY sẽ tiếp tục đồng hành cùng địa phương tổ chức các lớp học trải nghiệm,
    các buổi trưng bày tranh học viên và hoạt động giao lưu nghệ thuật dành cho thiếu nhi.
  </p>

  <h3 class="text-xl font-semibold  mt-8 mb-4">MỘT SỐ HÌNH ẢNH NỔI BẬT</h3>

  <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
    <img src="/post/khai-giang-sinh-hoat-he-2025/1.jpg" alt="khai-giang" class="w-full  object-cover rounded shadow my-2" />
    <img src="/post/khai-giang-sinh-hoat-he-2025/2.jpg" alt="khai-giang" class="w-full object-cover rounded shadow my-2" />
    <img src="/post/khai-giang-sinh-hoat-he-2025/3.jpg" alt="khai-giang" class="w-full object-cover rounded shadow my-2" />
    <img src="/post/khai-giang-sinh-hoat-he-2025/4.jpg" alt="khai-giang" class="w-full object-cover rounded shadow my-2" />
    <img src="/post/khai-giang-sinh-hoat-he-2025/5.jpg" alt="khai-giang" class="w-full object-cover rounded shadow my-2" />
  </div>
</div>`
  },
  {
    id: 2,
    path: "art-key-tham-du-hoi-thi-net-ve-xanh-2025-voi-tac-pham-banh-cuon-que-huong",
    title: "ART KEY THAM DỰ HỘI THI NÉT VẼ XANH 2025 VỚI TÁC PHẨM “BÁNH CUỐN QUÊ HƯƠNG”",
    subtitle: "Sáng ngày 23-3-2025, tại Thư viện Khoa học tổng hợp TP.HCM đã diễn ra Lễ Khai mạc và vòng Chung khảo Hội thi Nét Vẽ Xanh cấp Thành phố lần thứ 28...",
    date: "Tháng 3/2025",
    image: "/post/net-ve-xanh-2025/1.jpg",
    content: `<div class="prose prose-lg max-w-none prose-blue">
  <h2 class="text-2xl font-bold mb-6">ART KEY THAM DỰ HỘI THI NÉT VẼ XANH 2025 VỚI TÁC PHẨM “BÁNH CUỐN QUÊ HƯƠNG”</h2>

  <p>
    Sáng ngày 23-3-2025, tại Thư viện Khoa học tổng hợp Thành phố Hồ Chí Minh đã tổ chức Lễ Khai mạc và vòng thi Chung khảo Hội thi Nét Vẽ Xanh cấp Thành phố lần thứ 28, năm học 2024-2025.
    Hội thi được chỉ đạo bởi Sở Giáo dục và Đào tạo cùng Sở Văn hóa và Thể thao, và trực tiếp tổ chức bởi Thư viện Khoa học tổng hợp TP.HCM.
  </p>

  <p>
    Trung tâm ART KEY vinh dự được tham gia cuộc thi với tác phẩm “<strong>BÁNH CUỐN QUÊ HƯƠNG</strong>” của thí sinh <strong>Đỗ Thy Giang</strong>,
    học sinh trường THCS Phan Bội Châu, Quận Tân Phú. Tác phẩm thuộc thể loại vẽ tranh trên giấy khổ A3.
  </p>

  <h3 class="text-xl font-semibold mt-8">HỘI THI NÉT VẼ XANH 2025 – SÂN CHƠI SÁNG TẠO DÀNH CHO THIẾU NHI</h3>

  <p>
    Với tâm huyết phát triển sâu và rộng các hoạt động mỹ thuật cho thiếu nhi Thành phố, Hội thi Nét Vẽ Xanh lần thứ 28 đã có bước đột phá,
    mang đến nhiều trải nghiệm mới với bốn loại hình: tranh vẽ A3, sáng tác truyện ngắn qua tranh, tranh máy tính và tranh tập thể.
    Đặc biệt, năm nay có thêm một loại hình thi mới: <em>Sáng tác truyện ngắn qua tranh</em> với 21 nhóm (84 thí sinh) vào vòng Chung khảo.
  </p>

  <p>
    Học viên ART KEY tham gia cuộc thi không chỉ là dịp giao lưu, học hỏi mà còn giúp rèn luyện tư duy thẩm mỹ, phát triển khả năng cảm nhận nghệ thuật.
    Đây là cơ hội để các em nhỏ thể hiện sự tự tin, tinh thần chủ động và sáng tạo thông qua hội họa.
  </p>

  <blockquote class="border-l-4 border-blue-400 pl-4 italic text-gray-700 my-3">
    <strong class="block">Thông điệp từ ART KEY:</strong>
    “Khai mở tiềm năng sáng tạo – Phát triển toàn diện tư duy nghệ thuật cho thế hệ trẻ”.
  </blockquote>

  <h3 class="text-xl font-semibold mt-8 mb-4">MỘT SỐ HÌNH ẢNH NỔI BẬT</h3>

  <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
  
    <img src="/post/net-ve-xanh-2025/1.jpg" alt="thanh-vien-artkey" class="w-full object-cover rounded shadow my-2" />
    <p class="text-center mt-2">Tác phẩm dự thi “BÁNH CUỐN QUÊ HƯƠNG” của thí sinh Đỗ Thy Giang.</p>
    <div class="flex gap-4">
  <img src="/post/net-ve-xanh-2025/2.jpg" alt="thanh-vien-artkey" class="w-1/2 object-cover rounded shadow my-2" />
  <img src="/post/net-ve-xanh-2025/3.jpg" alt="le-khai-mac-net-ve-xanh" class="w-1/2 object-cover rounded shadow my-2" />
</div>

<p class="mt-2 text-center">Sự lan tỏa thông điệp giá trị cốt lõi “Khai mở tiềm năng sáng tạo” của trung tâm ART KEY</p>

    <img src="/post/net-ve-xanh-2025/4.jpg" alt="phong-thi-ve-a3" class="w-full object-cover rounded shadow my-2" />
    <p class="text-center mt-2">Hơn 700 thí sinh tham dự Lễ khai mạc Hội thi Nét Vẽ Xanh vòng chung khảo cấp Thành phố</p>
    <img src="/post/net-ve-xanh-2025/5.jpg" alt="banh-cuon-que-huong" class="w-full object-cover rounded shadow my-2" />
  <p class="text-center mt-2">Phòng thi vẽ tranh trên giấy A3 khối Trung học Cơ sở</p>
  </div>

  <p class="mt-6 italic text-sm">Nguồn: <a href="https://netvexanh.thuvientphcm.gov.vn/index.php?route=information/post&post_id=4392" target="_blank" rel="noopener">Thư viện Khoa học Tổng hợp TP.HCM</a></p>
</div>`
  }
];

const ContactForum = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? forumPosts : forumPosts.slice(0, 3);

  return (
    <section className="text-white">
      {/* DIỄN ĐÀN */}
      <div className="bg-white text-center text-[#444] mt-16 px-4 pb-[50px]">
        <h2 className="text-3xl font-bold text-blue-600 mb-10 border-b-2 border-blue-500 inline-block">
          DIỄN ĐÀN
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-6xl mx-auto">
          {visiblePosts.map((post) => (
            <Link href={`/forum/${post.path}`} key={post.id} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-blue-700">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.subtitle}</p>
                  <p className="mt-2 text-xs text-gray-500 italic">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* Nút xem tất cả */}
        {/* {forumPosts.length > 3 && (
          <div className="mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition duration-300"
            >
              {showAll ? "Thu gọn" : "Xem tất cả"}
            </button>
          </div>
        )} */}
        <div className="mt-10">
          <Link href="/forum"
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition duration-300"
          >
            Xem tất cả
          </Link>
        </div>
      </div>
      {/* Đăng ký tư vấn */}
      <div className="bg-gradient-to-r from-cyan-400 to-green-300 py-[50px] px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 text-white px-4 pt-[50px] pb-[50px]">
          <h2 className="text-3xl md:text-4xl font-bold">ĐĂNG KÝ NHẬN TƯ VẤN</h2>
          <p className="text-yellow-200 text-lg font-medium">
            Nâng cao kỹ năng - Nâng cao nhận thức cho trẻ
          </p>
          <p className="text-white text-sm md:text-base font-bold">
            Đăng ký để nhận ngay thông tin về các khóa học kỹ năng mềm dành cho trẻ nhé!
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
            <input type="text" placeholder="Họ tên học viên..." className="p-3 rounded-md w-full text-gray-800 bg-white" />
            <input type="text" placeholder="Địa chỉ..." className="p-3 rounded-md w-full text-gray-800 bg-white" />
            <input type="text" placeholder="Điện thoại..." className="p-3 rounded-md w-full text-gray-800 bg-white" />
            <input type="email" placeholder="Email..." className="p-3 rounded-md w-full text-gray-800 bg-white" />
          </form>

          <div className="mt-6">
            <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-full text-base hover:scale-105 transition-transform duration-300 shadow-lg flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
              ĐĂNG KÝ NGAY
            </button>

          </div>
        </div>
      </div>

      {/* Google Map nhúng */}
      <div className="w-full h-[400px] mt-10 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10 border-b-2 border-blue-500 inline-block">
          ĐỊA CHỈ TRUNG TÂM
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.522514247482!2d106.62631473363552!3d10.792431091857344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c0012fb6c91%3A0x9664b219a8f771dc!2zMzgvOSDEkMaw4budbmcgxJDDtCDEkOG7kWMgTG9uZywgVMOibiBRdcO9LCBUw6JuIFBow7osIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1750217085800!5m2!1svi!2s"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </div>

    </section>
  );
};

export default ContactForum;
