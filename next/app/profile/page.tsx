import React from 'react';
import {
  Mail,
  Calendar,
  User,
  Link as LinkIcon,
  PhoneCall,
  Facebook
} from 'lucide-react';

const UserCard: React.FC = () => {
  return (
    <div className="">

      <div className="relative h-screen overflow-hidden">
        {/* Fixed background */}
        <div className="fixed inset-0 bg-gradient-to-b from-sky-600 via-sky-300 to-sky-100 z-0" />

        <div className="relative z-10 overflow-y-auto h-full px-4 py-10 flex justify-center pt-[100px]">
          <div className="w-full max-w-sm">
            {/* Card */}
            <div className="relative bg-white rounded-xl shadow-md pt-20 pb-6 px-6 z-10">
              {/* Avatar - lớn, không viền, đổ bóng mạnh */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img
                  src="/avt/quanght.png"
                  alt="Maria Elliott"
                  className="w-32 h-32 rounded-full object-cover shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Info */}
              <div className="text-center mt-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 font-medium">Huỳnh Trung Quang</h2>
                <p className="text-sm text-blue-500">Tổng Giám đốc công ty Thép Tây Đô</p>
              </div>

              {/* Stats */}
              {/* <div className="flex justify-around mt-6 text-sm text-gray-700">
            <div className="text-center">
              <p className="text-lg font-bold">120</p>
              <span className="uppercase text-xs">Purchased</span>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">271</p>
              <span className="uppercase text-xs">Wished</span>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">12K</p>
              <span className="uppercase text-xs">Likes</span>
            </div>
          </div> */}

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Thông tin liên hệ</h2>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 hover:text-orange-500">
                  <Mail size={16} className="text-orange-500" />
                  <a href='mailto:quanght@theptaydo.com'>quanght@theptaydo.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-orange-500" />
                  <span>Nov 1, 1957</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-orange-500" />
                  <span>Female</span>
                </div>
                <div className="flex items-center gap-2 hover:text-orange-500 ">
                  <PhoneCall size={16} className="text-orange-500" />
                  <a href='tel:0903500606'>0903 500 606</a>
                </div>
                {/* <div className="flex items-center gap-2 hover:text-orange-500 ">
                  <Facebook size={16} className="text-orange-500" />
                  <a href="https://facebook.com/">Quang Huynh Trung</a>
                </div> */}
                <div className="flex items-center gap-2 hover:text-orange-500 text-blue-600">
                  <LinkIcon size={16} />
                  <a href="https://theptaydo.com" target="_blank" rel="noopener noreferrer">
                    https://theptaydo.com
                  </a>
                </div>
              </div>


              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Mô tả</h2>
              <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                <p>
                  <strong>Huỳnh Trung Quang</strong> hiện là Tổng Giám đốc Công ty Thép Tây Đô – một trong những đơn vị hàng đầu trong lĩnh vực sản xuất và phân phối thép khu vực Đồng bằng sông Cửu Long. Với hơn 30 năm kinh nghiệm trong ngành công nghiệp xây dựng, ông Quang đã góp phần định hình chiến lược phát triển bền vững và mở rộng hệ thống phân phối của doanh nghiệp trên toàn quốc.
                </p>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Chức vụ hiện tại</h2>
              <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                <ul className="list-disc pl-5">
                  <li>Chủ tịch kiêm Tổng Giám đốc Công ty TNHH Thép Tây Đô</li>
                  <li>Chủ tịch HĐQT Công ty Cổ phần Kim Khí Miền Trung (HNX: KMT)</li>
                </ul>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Kinh nghiệm & vai trò nổi bật</h2>
              <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                <ul className="list-disc pl-5">
                  <li>Hơn 30 năm kinh nghiệm trong ngành công nghiệp thép và vật liệu xây dựng.</li>
                  <li>Từng giữ các vị trí quản lý chủ chốt trong hệ thống Tổng Công ty Thép Việt Nam.</li>
                  <li>Từ năm 2020, chính thức tiếp nhận và thực hiện chuyển đổi mô hình hoạt động của Công ty Thép Tây Đô từ doanh nghiệp nhà nước sang mô hình tư nhân, đưa doanh nghiệp bước vào giai đoạn tăng trưởng mạnh mẽ, hiện đại và bền vững.</li>
                </ul>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Thành tựu nổi bật</h2>
              <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                <ul className="list-disc pl-5">
                  <li>Dẫn dắt Thép Tây Đô đạt doanh thu vượt 4.000 tỷ đồng/năm, tăng trưởng đều đặn qua các năm.</li>
                  <li>Tăng công suất sản xuất Phôi, Thép lên đến 250.000 tấn/năm, mở rộng thị trường xuất khẩu (Campuchia, Philippines…).</li>
                  <li>Thúc đẩy chuyển đổi số, ứng dụng ERP, đầu tư điện mặt trời áp mái và phát triển hệ thống phân phối toàn quốc.</li>
                </ul>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Công tác xã hội & Đảng viên</h2>
              <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                <ul className="list-disc pl-5">
                  <li>Được trao tặng Huy hiệu 40 năm tuổi Đảng (năm 2025).</li>
                  <li>Giữ vai trò nòng cốt trong công tác Đảng, định hướng chiến lược phát triển Đảng bộ Công ty Thép Tây Đô nhiệm kỳ 2025–2030.</li>
                </ul>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Triết lý lãnh đạo</h2>
              <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                <p><i>“Mỗi tấn phôi, tấn thép ra lò là minh chứng cho lòng nhiệt huyết và tinh thần đoàn kết của tập thể.”</i></p>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Bài viết & Sự kiện</h2>

              <div className="text-sm text-gray-700 border-b border-gray-200 pb-6 mb-4">
                {/* Dữ liệu bài viết */}
                {[
                  {
                    date: '12/06/2025',
                    time: '13:58',
                    author: 'Thép Tây Đô',
                    avatar: 'https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png',
                    title: 'LỄ TRAO TẶNG HUY HIỆU ĐẢNG CHO ĐỒNG CHÍ HUỲNH TRUNG QUANG',
                    content:
                      'Trong không khí trang nghiêm và đầy tự hào, sáng ngày 04/06/2025, Đảng bộ Quận Bình Thủy phối hợp cùng Đảng bộ Công ty TNHH Thép Tây Đô long trọng tổ chức Lễ trao tặng Huy hiệu 40 năm tuổi Đảng cho đồng chí Huỳnh Trung Quang – Tổng Giám đốc Công ty Thép Tây Đô.',
                    image: 'https://theptaydo.com/files/images/TIN%20TUC/2025/ki-niem-40nam-tuoi-dang/IMG_8809.jpg',
                    link: "https://theptaydo.com/thep-tay-do-tu-hao-voi-le-trao-tang-huy-hieu-dang-cho-dong-chi-huynh-trung-quang"
                  },
                  {
                    date: '23/05/2025',
                    time: '20:39',
                    author: 'Thép Tây Đô',
                    avatar: 'https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png',
                    title: 'THÉP TÂY ĐÔ ĐỒNG HÀNH CÙNG NGÀY HỘI THANH NIÊN CÔNG NHÂN 2025 ',
                    content:
                      'Trong không khí hân hoan chào đón Tháng Công nhân – tháng tôn vinh những đóng góp thầm lặng của lực lượng lao động – và kỷ niệm 135 năm ngày sinh Chủ tịch Hồ Chí Minh, Ban Thường vụ Thành đoàn Cần Thơ đã phối hợp với Công ty TNHH Thép Tây Đô tổ chức thành công “Ngày hội Thanh niên Công nhân 2025”.',
                    image: 'https://theptaydo.com/files/images/TIN%20TUC/2025/tiec-le/5-22-ngay-hoi-hien-mau/524cc19329739c2dc56212.jpg',
                    link: "https://theptaydo.com/thep-tay-do-dong-hanh-cung-ngay-hoi-thanh-nien-cong-nhan-2025"
                  },
                  {
                    date: '21/04/2025',
                    time: '20:39',
                    author: 'Thép Tây Đô',
                    avatar: 'https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png',
                    title: 'HỘI NGHỊ TIẾP XÚC CỬ TRI VỚI THỦ TƯỚNG - CÔNG TY TNHH THÉP TÂY ĐÔ',
                    content:
                      'Cử tri Huỳnh Trung Quang - Tổng Giám đốc Công ty TNHH Thép Tây Đô phát biểu tại hội nghị tiếp xúc cử tri với thủ tướng năm 2025.',
                    image: 'https://github.com/tscltd/del--e-office/blob/main/b2bdd8fa-fd24-47d4-adfa-e1941713dbb9.jpg?raw=true',
                    link: "https://www.youtube.com/watch?v=dg-UU3RaFUc"
                  },
                  {
                    date: '23/09/2024',
                    time: '20:39',
                    author: 'Thép Tây Đô',
                    avatar: 'https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png',
                    title: 'Công ty Thép Tây Đô Hỗ Trợ Đồng Bào Lào Cai khắc phục hậu quả sau cơn bão số 3',
                    content:
                      'Vừa qua, hưởng ứng lời kêu gọi của Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam và chia sẻ với những mất mát do cơn bão số 3 (Yagi) gây ra, Công ty Thép Tây Đô đã tham gia cùng Tổng công ty Thép Việt Nam - CTCP (VNSTEEL) trong hoạt động cứu trợ. Thép Tây Đô đã trao tặng 10 tấn gạo và các nhu yếu phẩm cần thiết cho người dân huyện Bắc Hà, tỉnh Lào Cai, với tổng giá trị 500 triệu đồng.',
                    image: 'https://theptaydo.com/files/images/ung-ho-lu-lut/460713569_491539506980520_4530219061342069625_n.jpg',
                    link: "https://theptaydo.com/tong-cong-ty-thep-viet-nam-va-cong-ty-thep-tay-do-chung-tay-ho-tro-dong-bao-lao-cai"
                  }, {
                    date: '30/01/2024',
                    time: '20:39',
                    author: 'Thép Tây Đô',
                    avatar: 'https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png',
                    title: 'Trao 50 tấn gạo và dụng cụ học tập cho người dân, học sinh khó khăn huyện Tây Giang',
                    content:
                      'Sáng nay 30/01/2024, UBND huyện Tây Giang phối hợp với Công ty Thép Tây Đô (TP.Cần Thơ) và Công ty CP Công nghệ mặt trời Đông Dương (TP.Đà Nẵng) tổ chức chương trình tiếp nhận, trao tặng gạo cùng dụng cụ học tập cho người dân và học sinh khó khăn nhân dịp Tết Nguyên đán Giáp Thìn 2024.',
                    image: 'https://theptaydo.com/files/images/TIN%20TUC/2024/20240130.jpg',
                    link: "https://theptaydo.com/trao-50-tan-gao-va-dung-cu-hoc-tap-cho-nguoi-dan-hoc-sinh-kho-khan-huyen-tay-giang"
                  },

                  //https://github.com/tscltd/del--e-office/blob/main/b2bdd8fa-fd24-47d4-adfa-e1941713dbb9.jpg?raw=true
                ].map((post, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-green-600 pb-5">
                    <div className="absolute left-0 top-0 -ml-[9px] w-4 h-4 bg-green-600 rounded-full"></div>

                    <p className="text-sm font-semibold text-green-700 mb-1">
                      {post.date} <span className="text-gray-500">{post.time}</span>
                    </p>

                    <div className="flex items-center mb-1">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="font-semibold text-gray-800 text-sm">{post.author}</span>
                    </div>

                    <a href={post.link} className="text-red-600 font-semibold mb-1 hover:text-blue">{post.title}</a>
                    <p className="text-sm text-gray-700 whitespace-pre-line">{post.content}</p>

                    <img
                      src={post.image}
                      alt="banner"
                      className="w-full h-auto rounded-md border border-gray-200 shadow-sm"
                    />
                  </div>
                ))}
              </div>
              {/* <img src="https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png" /> */}
            </div>



            <p className='text-center mt-6 pb-4 text-gray-400'>Development by <a href="https://dangth.dev">Davis</a></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserCard;
