import { ProfileData } from '@/types';

export const profiles: ProfileData[] = [
  {
    user: {
      id: "TSC0001",
      uname: "quanght"
    },
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
            avatar: '/images/logo/logodelta.png',
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
            avatar: '/images/logo/logodelta.png',
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
            avatar: '/images/logo/logodelta.png',
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
            avatar: '/images/logo/logodelta.png',
            title: 'Công ty Thép Tây Đô Hỗ Trợ Đồng Bào Lào Cai khắc phục hậu quả sau cơn bão số 3',
            content:
              'Vừa qua, hưởng ứng lời kêu gọi của Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam và chia sẻ với những mất mát do cơn bão số 3 (Yagi) gây ra, Công ty Thép Tây Đô đã tham gia cùng Tổng công ty Thép Việt Nam - CTCP (VNSTEEL) trong hoạt động cứu trợ. Thép Tây Đô đã trao tặng 10 tấn gạo và các nhu yếu phẩm cần thiết cho người dân huyện Bắc Hà, tỉnh Lào Cai, với tổng giá trị 500 triệu đồng.',
            image: 'https://theptaydo.com/files/images/ung-ho-lu-lut/460713569_491539506980520_4530219061342069625_n.jpg',
            link: "https://theptaydo.com/tong-cong-ty-thep-viet-nam-va-cong-ty-thep-tay-do-chung-tay-ho-tro-dong-bao-lao-cai"
          }, {
            date: '30/01/2024',
            time: '20:39',
            author: 'Thép Tây Đô',
            avatar: '/images/logo/logodelta.png',
            title: 'Trao 50 tấn gạo và dụng cụ học tập cho người dân, học sinh khó khăn huyện Tây Giang',
            content:
              'Sáng nay 30/01/2024, UBND huyện Tây Giang phối hợp với Công ty Thép Tây Đô (TP.Cần Thơ) và Công ty CP Công nghệ mặt trời Đông Dương (TP.Đà Nẵng) tổ chức chương trình tiếp nhận, trao tặng gạo cùng dụng cụ học tập cho người dân và học sinh khó khăn nhân dịp Tết Nguyên đán Giáp Thìn 2024.',
            image: 'https://theptaydo.com/files/images/TIN%20TUC/2024/20240130.jpg',
            link: "https://theptaydo.com/trao-50-tan-gao-va-dung-cu-hoc-tap-cho-nguoi-dan-hoc-sinh-kho-khan-huyen-tay-giang"
          }]
      }
    ]
  },
  {
    user: {
      id: 'TSC0004',
      uname: 'khaivv',
    },
    about: {
      name: 'Võ Văn Khải',
      role: 'Phó Tổng Giám Đốc Kinh doanh',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '1970',
      gender: 'Nam',
      phone: '0909252626',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó Tổng Giám đốc Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [
          'Từ năm 1994 - 1996: Công tác tại Cục thuế Kiên Giang',
          'Từ năm 1996 - 10/1998, phụ trách Bộ phận Kế toán của Công ty Xổ số Kiên Giang',
        ],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0002',
      uname: 'anhhn',
    },
    about: {
      name: 'Huỳnh Nam Anh',
      role: 'Phó Tổng Giám đốc Kinh doanh quốc tế',
      avatar: '',
    },
    contact: {
      email: 'anhhn@theptaydo.com',
      // email: 'anhhn@theptaydo.com',
      birthdate: '1996',
      gender: 'Nam',
      phone: '0939201778',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó Tổng Giám đốc Kinh doanh quốc tế Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [
          // 'Từ năm 1994 - 1996: Công tác tại Cục thuế Kiên Giang',
          // 'Từ năm 1996 - 10/1998, phụ trách Bộ phận Kế toán của Công ty Xổ số Kiên Giang',
        ],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0864',
      uname: 'tranghk',
    },
    about: {
      name: 'Hoàng Khánh Trang',
      role: 'Trợ lý Tổng Giám đốc',
      avatar: '',
    },
    contact: {
      email: 'tranghk@theptaydo.com',
      // email: 'anhhn@theptaydo.com',
      birthdate: '1994',
      gender: 'Nữ',
      phone: '0888326495',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Trợ lý Tổng Giám đốc Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [
          // 'Từ năm 1994 - 1996: Công tác tại Cục thuế Kiên Giang',
          // 'Từ năm 1996 - 10/1998, phụ trách Bộ phận Kế toán của Công ty Xổ số Kiên Giang',
        ],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0003',
      uname: 'hungddt',
    },
    about: {
      name: 'Đào Duy Tuấn Hùng',
      role: 'Phó Tổng Giám Đốc Quản lý Chất lượng',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '15/11/1965',
      gender: 'Nam',
      phone: '0903331289',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó Tổng Giám đốc Quản lý Chất lượng Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [
          'Từ năm 1988 - 1989: Phó phòng kỹ thuật - Kế hoạch Cơ khí XN Bến Tre',
          'Từ năm 1989 - 1990: Phó phòng thiết kế Nhà máy mì ăn liền MIA GI - Công ty XNK Long Xuyên',
          'Từ năm 1990 - 1995: Phụ trách kỹ thuật nhà máy xay xát ANGIMEX - Công ty XNK An Giang',
        ],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0189',
      uname: 'thanhpdt',
    },
    about: {
      name: 'Phan Đình Thanh',
      role: 'Phó Tổng Giám đốc Kỹ thuật',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '28/01/1980',
      gender: 'Nam',
      phone: '0935559877',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó Tổng Giám đốc Kỹ thuật Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0086',
      uname: 'vannpk',
    },
    about: {
      name: 'Nguyễn Phan Kiều Vân',
      role: 'Trưởng Ban kiểm soát nội bộ',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '03/10/1986',
      gender: 'Nữ',
      phone: '0907664785',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Trưởng Ban kiểm soát nội bộ Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0545',
      uname: 'hiepdv',
    },
    about: {
      name: 'Dương Văn Hiệp',
      role: 'Kế toán trưởng',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '19/02/1975',
      gender: 'Nam',
      phone: '0903030975',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Kế toán trưởng Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0305',
      uname: 'loanntk',
    },
    about: {
      name: 'Nguyễn Thị Kim Loan',
      role: 'Phó phòng Kế toán tài chính',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '01/12/1986',
      gender: 'Nữ',
      phone: '0989334054',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó phòng Kế toán tài chính Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0546',
      uname: 'hieuntt',
    },
    about: {
      name: 'Nguyễn Thị Hiếu',
      role: 'Phó phòng Kế toán tài chính',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '23/01/1981',
      gender: 'Nữ',
      phone: '0909237227',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó phòng Kế toán tài chính Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0475',
      uname: 'tranphtt',
    },
    about: {
      name: 'Phạm Huỳnh Thảo Trân',
      role: 'Thư ký Tổng Giám đốc kiêm Phó chánh văn phòng',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '18/11/2001',
      gender: 'Nữ',
      phone: '0792655068',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Thư ký Tổng Giám đốc kiêm Phó chánh văn phòng Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0074',
      uname: 'thinhnv',
    },
    about: {
      name: 'Nguyễn Văn Thịnh',
      role: 'Trưởng phòng Kế hoạch Kinh doanh',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '15/05/1984',
      gender: 'Nam',
      phone: '0907384907',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Trưởng phòng Kế hoạch Kinh doanh Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0076',
      uname: 'sennm',
    },
    about: {
      name: 'Nguyễn My Sên',
      role: 'Phó phòng Kế hoạch Kinh doanh',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '01/01/1987',
      gender: 'Nam',
      phone: '0976112833',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó phòng Kế hoạch Kinh doanh Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0058',
      uname: 'chungnv',
    },
    about: {
      name: 'Nguyễn Văn Chung',
      role: 'Phó phòng Kế hoạch Kinh doanh',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '14/01/1983',
      gender: 'Nam',
      phone: '0907226724',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Phó phòng Kế hoạch Kinh doanh Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0469',
      uname: 'manhvph',
    },
    about: {
      name: 'Võ Phạm Hùng Mạnh',
      role: 'Chuyên viên Xuất Nhập khẩu',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '21/02/1991',
      gender: 'Nam',
      phone: '0907920421',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Chuyên viên Xuất Nhập khẩu Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0151',
      uname: 'thaihv',
    },
    about: {
      name: 'Hứa Viết Thái',
      role: 'Trưởng phòng Kỹ thuật',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '06/06/1986',
      gender: 'Nam',
      phone: '0908535586',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Trưởng phòng Kỹ thuật Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  },
  {
    user: {
      id: 'TSC0847',
      uname: 'nguyentv',
    },
    about: {
      name: 'Trần Võ Nguyên',
      role: 'Trưởng văn phòng đại diện tại HCM',
      avatar: '',
    },
    contact: {
      email: '',
      birthdate: '19/11/1984',
      gender: 'Nam',
      phone: '0909573696',
      website: 'https://theptaydo.com',
    },
    sections: [
      {
        title: 'Mô tả',
        content: '',
      },
      {
        title: 'Chức vụ hiện tại',
        content: [
          'Trưởng văn phòng đại diện tại HCM Công ty TNHH Thép Tây Đô',
        ],
      },
      {
        title: 'Kinh nghiệm & vai trò nổi bật',
        content: [],
      },
      {
        title: 'Thành tựu nổi bật',
        content: [],
      },
      {
        title: 'Công tác xã hội & Đảng viên',
        content: [],
      },
      {
        title: 'Triết lý lãnh đạo',
        content: '',
      },
      {
        title: 'Bài viết & Sự kiện',
        type: 'articles',
        content: [],
      },
    ],
  }
]
