import React from 'react';

const products = [
  {
    name: 'Lớp vẽ thiếu nhi - Cơ bản',
    price: '450.000đ',
    oldPrice: '500.000đ',
    img: 'https://4.bp.blogspot.com/-aHRhxHvqNNM/V5Q01jM1u5I/AAAAAAAAAJ4/v_ZKwY_9BBg0rES2ywW1Am6RSEPbqjmLgCLcB/s1600/L%25E1%25BB%259Bp%2Bv%25E1%25BA%25BD%2Bthi%25E1%25BA%25BFu%2Bnhi%2BJunior%2BArt.jpg',
    discount: '10%',
    rating: 5,
  },
  {
    name: 'Khóa học Organ cho trẻ',
    price: '750.000đ',
    oldPrice: '950.000đ',
    img: 'https://upponia.com/wp-content/uploads/2021/06/20201124_185149.jpg',
    discount: '21%',
    rating: 4.5,
  },
  {
    name: 'Bộ cọ vẽ chuyên dụng',
    price: '190.000đ',
    oldPrice: '250.000đ',
    img: 'https://down-vn.img.susercontent.com/file/3abd20982abbf4b83983b1e1ecf5e9d4',
    discount: '24%',
    rating: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FFE7CB] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#EF4036]">
          🎯 Sản phẩm / khóa học nổi bật
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img
                src={item.img}
                alt={item.name}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#EF4036] font-bold">{item.price}</span>
                  <span className="line-through text-gray-400 text-sm">{item.oldPrice}</span>
                  <span className="text-[#F7941D] text-sm font-medium">-{item.discount}</span>
                </div>
                <div className="mt-2 text-yellow-500 text-sm">
                  {'⭐'.repeat(Math.floor(item.rating))} ({item.rating})
                </div>
                <button className="mt-4 bg-[#EF4036] hover:bg-[#C9352B] text-white py-2 w-full rounded transition">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
