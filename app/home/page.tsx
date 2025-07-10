import React from "react";
import {
  Mail,
  Calendar,
  User,
  Link as LinkIcon,
  PhoneCall,
} from 'lucide-react';

interface Post {
  date: string;
  time: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  image: string;
  link: string;
}

interface Section {
  title: string;
  type?: string;
  content: string | string[] | Post[];
}

interface ProfileData {
  about: {
    name: string;
    role: string;
    avatar: string;
  };
  contact: {
    email: string;
    birthdate: string;
    gender: string;
    phone: string;
    website: string;
  };
  sections: Section[];
}

const profileData: ProfileData = {
  about: {
    name: "Huỳnh Trung Quang",
    role: "Tổng Giám đốc công ty Thép Tây Đô",
    avatar: "/avt/quanght.png"
  },
  contact: {
    email: "quanght@theptaydo.com",
    birthdate: "01/11/1957",
    gender: "Nam",
    phone: "0903 500 606",
    website: "https://theptaydo.com"
  },
  sections: [
    {
      title: "Mô tả",
      content: "<strong>Huỳnh Trung Quang</strong> hiện là Tổng Giám đốc Công ty Thép Tây Đô – một trong những đơn vị hàng đầu trong lĩnh vực sản xuất và phân phối thép khu vực Đồng bằng sông Cửu Long. Với hơn 30 năm kinh nghiệm trong ngành công nghiệp xây dựng, ông Quang đã góp phần định hình chiến lược phát triển bền vững và mở rộng hệ thống phân phối của doanh nghiệp trên toàn quốc."
    },
    {
      title: "Chức vụ hiện tại",
      content: [
        "Chủ tịch kiêm Tổng Giám đốc Công ty TNHH Thép Tây Đô",
        "Chủ tịch HĐQT Công ty Cổ phần Kim Khí Miền Trung (HNX: KMT)"
      ]
    },
    {
      title: "Kinh nghiệm & vai trò nổi bật",
      content: [
        "Hơn 30 năm kinh nghiệm trong ngành công nghiệp thép và vật liệu xây dựng.",
        "Từng giữ các vị trí quản lý chủ chốt trong hệ thống Tổng Công ty Thép Việt Nam.",
        "Từ năm 2020, chính thức tiếp nhận và thực hiện chuyển đổi mô hình hoạt động của Công ty Thép Tây Đô từ doanh nghiệp nhà nước sang mô hình tư nhân, đưa doanh nghiệp bước vào giai đoạn tăng trưởng mạnh mẽ, hiện đại và bền vững."
      ]
    },
    {
      title: "Thành tựu nổi bật",
      content: [
        "Dẫn dắt Thép Tây Đô đạt doanh thu vượt 4.000 tỷ đồng/năm, tăng trưởng đều đặn qua các năm.",
        "Tăng công suất sản xuất Phôi, Thép lên đến 250.000 tấn/năm, mở rộng thị trường xuất khẩu (Campuchia, Philippines…).",
        "Thúc đẩy chuyển đổi số, ứng dụng ERP, đầu tư điện mặt trời áp mái và phát triển hệ thống phân phối toàn quốc."
      ]
    },
    {
      title: "Công tác xã hội & Đảng viên",
      content: [
        "Được trao tặng Huy hiệu 40 năm tuổi Đảng (năm 2025).",
        "Giữ vai trò nòng cốt trong công tác Đảng, định hướng chiến lược phát triển Đảng bộ Công ty Thép Tây Đô nhiệm kỳ 2025–2030.",
      ]
    },
    {
      title: "Triết lý lãnh đạo",
      content: "<i>“Mỗi tấn phôi, tấn thép ra lò là minh chứng cho lòng nhiệt huyết và tinh thần đoàn kết của tập thể.”</i>"
    },
    {
      title: "Bài viết & Sự kiện",
      type: "articles",
      content: [
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
        }]
    }
  ]
};

const UserCard: React.FC = () => {
  const { about, contact, sections } = profileData;

  return (
    <div className="">
      <div className="relative h-screen overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-b from-sky-600 via-sky-300 to-sky-100 z-0" />

        <div className="relative z-10 overflow-y-auto h-full px-4 py-10 flex justify-center pt-[100px]">
          <div className="w-full max-w-sm">
            <div className="relative bg-white rounded-xl shadow-md pt-20 pb-6 px-6 z-10">
              {/* Avatar */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img
                  src={about.avatar}
                  alt={about.name}
                  className="w-32 h-32 rounded-full object-cover shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="text-center mt-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-800">{about.name}</h2>
                <p className="text-sm text-blue-500">{about.role}</p>
              </div>

              {/* Contact Info */}
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">Thông tin liên hệ</h2>
              <div className="space-y-3 text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 hover:text-orange-500">
                  <Mail size={16} className="text-orange-500" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-orange-500" />
                  <span>{contact.birthdate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-orange-500" />
                  <span>{contact.gender}</span>
                </div>
                <div className="flex items-center gap-2 hover:text-orange-500">
                  <PhoneCall size={16} className="text-orange-500" />
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
                <div className="flex items-center gap-2 hover:text-orange-500 text-blue-600">
                  <LinkIcon size={16} />
                  <a href={contact.website} target="_blank" rel="noopener noreferrer">
                    {contact.website}
                  </a>
                </div>
              </div>

              {/* Dynamic Sections */}
              <div className="mt-6 space-y-6">
                {sections.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">{section.title}</h2>

                    {section.type === "articles" && Array.isArray(section.content) ? (
                      <div className="text-sm text-gray-700 border-b border-gray-200 pb-6 mb-4">
                        {(section.content as Post[]).map((post, idx) => (
                          <div key={idx} className="relative pl-6 border-l-2 border-green-600 pb-5">
                            <div className="absolute left-0 top-0 -ml-[9px] w-4 h-4 bg-green-600 rounded-full" />
                            <p className="text-sm font-semibold text-green-700 mb-1">
                              {post.date} <span className="text-gray-500">{post.time}</span>
                            </p>
                            <div className="flex items-center mb-1">
                              <img src={post.avatar} alt={post.author} className="w-6 h-6 rounded-full mr-2" />
                              <span className="font-semibold text-gray-800 text-sm">{post.author}</span>
                            </div>
                            <a href={post.link} className="text-red-600 font-semibold mb-1 hover:text-blue">
                              {post.title}
                            </a>
                            <p className="text-sm text-gray-700 whitespace-pre-line">{post.content}</p>
                            <img
                              src={post.image}
                              alt="banner"
                              className="w-full h-auto rounded-md border border-gray-200 shadow-sm"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-sm text-gray-700 pb-6 mb-4 border-b border-gray-200 leading-relaxed">
                        {Array.isArray(section.content) && typeof section.content[0] === 'string' ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {(section.content as string[]).map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : typeof section.content === 'string' ? (
                          section.content.includes("<") ? (
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                          ) : (
                            <p>{section.content}</p>
                          )
                        ) : null}
                      </div>

                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center mt-6 pb-4 text-gray-400">
              Development by <a href="https://dangth.dev">Davis</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
