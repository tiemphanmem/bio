import React from 'react';

const posts = [
  {
    date: '02/05/2025',
    time: '13:58',
    author: 'Võ Hoàng Tâm',
    avatar: 'https://i.pravatar.cc/30?img=2',
    title: 'Hội nghị chào mừng ngày Doanh nhân Việt Nam năm 2024',
    content: `Ngày 11/10/2024, Hiệp hội doanh nghiệp TP. Cần Thơ tổ chức Hội nghị chào mừng Ngày Doanh nhân Việt Nam, Luật sư Võ Hoàng Tâm vinh dự được UBND TP Cần Thơ tặng bằng khen vì những thành tích đóng góp sự phát triển của thành phố.`
  },
  {
    date: '28/10/2024',
    time: '20:39',
    author: 'Võ Hoàng Tâm',
    avatar: 'https://i.pravatar.cc/30?img=2',
    title: 'Chào mừng đại hội lần thứ X của Đoàn Luật sư TP. Cần Thơ',
    content: `Ngày 23/02/2025, Đoàn Luật sư TP. Cần Thơ tổ chức Đại hội đại biểu lần thứ X, nhiệm kỳ 2024–2029. Luật sư Võ Hoàng Tâm được tín nhiệm bầu làm Ủy viên Ban Chủ nhiệm Đoàn Luật sư TP. Cần Thơ.`
  },
  {
    date: '15/09/2024',
    time: '09:15',
    author: 'Võ Hoàng Tâm',
    avatar: 'https://i.pravatar.cc/30?img=2',
    title: 'Tham gia tọa đàm về pháp lý doanh nghiệp tại ĐH Cần Thơ',
    content: `Luật sư Võ Hoàng Tâm tham gia buổi tọa đàm cùng sinh viên khoa Luật – Đại học Cần Thơ, chia sẻ kinh nghiệm thực tiễn và giải đáp các vấn đề pháp lý xoay quanh khởi nghiệp doanh nghiệp.`
  },
  {
    date: '01/08/2024',
    time: '15:40',
    author: 'Võ Hoàng Tâm',
    avatar: 'https://i.pravatar.cc/30?img=2',
    title: 'Tham dự diễn đàn pháp luật Doanh nghiệp khu vực ĐBSCL',
    content: `Diễn đàn do Bộ Tư pháp phối hợp cùng các cơ quan địa phương tổ chức. Ông Võ Hoàng Tâm đóng vai trò là diễn giả chính, nêu các giải pháp pháp lý hỗ trợ doanh nghiệp vừa và nhỏ.`
  }
];

const TimelinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 relative">
        <h1 className="text-xl font-bold mb-6 text-center text-gray-800">
          Bài viết & Sự kiện
        </h1>

        <div className="relative border-l-2 border-green-600 pl-6">
          {posts.map((post, index) => (
            <div key={index} className="relative mb-8">
              {/* Dot marker */}
              <div className="absolute -left-[11px] top-1 w-4 h-4 rounded-full bg-green-600" />

              {/* Date + Time */}
              <p className="text-sm font-semibold text-green-700 mb-1">
                {post.date} <span className="text-gray-500">{post.time}</span>
              </p>

              {/* Author */}
              <div className="flex items-center mb-1">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="font-semibold text-gray-800 text-sm">{post.author}</span>
              </div>

              {/* Title */}
              <p className="text-red-600 font-semibold mb-1">{post.title}</p>

              {/* Content */}
              <p className="text-sm text-gray-700 whitespace-pre-line">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
