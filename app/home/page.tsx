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
    role: "Tổng Giám Đốc",
    avatar: "/avt/quanght.png"
  },
  contact: {
    email: "quanght@theptaydo.com",
    birthdate: "01/11/1957",
    gender: "Male",
    phone: "0903 500 606",
    website: "https://theptaydo.com"
  },
  sections: [
    {
      title: "Mô tả",
      content: "Huỳnh Trung Quang hiện là Tổng Giám đốc Công ty Thép Tây Đô – một trong những đơn vị hàng đầu trong lĩnh vực sản xuất và phân phối thép khu vực Đồng bằng sông Cửu Long..."
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
        "Từ năm 2020, thực hiện chuyển đổi mô hình hoạt động của Công ty Thép Tây Đô..."
      ]
    },
    {
      title: "Bài viết & Sự kiện",
      type: "articles",
      content: [
        {
          date: "12/06/2025",
          time: "13:58",
          author: "Thép Tây Đô",
          avatar: "https://theptaydo.com/files/images/logo/Logo_30nam_TTD(1).png",
          title: "LỄ TRAO TẶNG HUY HIỆU ĐẢNG CHO ĐỒNG CHÍ HUỲNH TRUNG QUANG",
          content: "Trong không khí trang nghiêm...",
          image: "https://theptaydo.com/files/images/TIN%20TUC/2025/ki-niem-40nam-tuoi-dang/IMG_8809.jpg",
          link: "https://theptaydo.com/thep-tay-do-tu-hao-..."
        }
      ]
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
                          <p>{section.content}</p>
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
