import React from 'react';
import { FaPlay } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-12 px-4 text-[#444]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div>
          <div className="relative inline-block mb-4">
            <div className="bg-[#009fe3] text-white font-semibold py-2 px-4 pr-6 text-sm uppercase rounded-sm">
              Chất lượng Thép Tây Đô
            </div>
            {/* <div className="absolute right-0 top-0 w-0 h-0 border-t-[40px] border-t-transparent border-l-[40px] border-l-[#009fe3] border-b-[40px] border-b-transparent -mt-[20px]"></div> */}
          </div>

          <p className="text-base leading-relaxed">
            Với tổng công suất hàng trăm nghìn tấn thép mỗi năm, <strong>Thép Tây Đô</strong> áp dụng công nghệ lò cao hiện đại, dây chuyền sản xuất khép kín từ nguyên liệu đến thành phẩm. Sản phẩm đáp ứng tiêu chuẩn kỹ thuật khắt khe, sẵn sàng phục vụ các công trình trọng điểm quốc gia và xuất khẩu ra thị trường quốc tế.
          </p>

          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-700 hover:underline"
            >
              XEM THÊM <span className="ml-1">▶</span>
            </a>
          </div>
        </div>

        {/* Right: Thumbnail with Play button */}
        <div className="relative">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mgRCwTPyc2o?si=26xpM3Cw0Sz-iNc5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
