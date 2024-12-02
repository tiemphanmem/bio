// Function to fetch and update the data dynamically based on ID
async function updateEmployeeInfo() {
  // Lấy ID từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (!id) {
    document.body.style.display = 'none';
    return;
  }

  try {
    // Fetch data từ file JSON
    const response = await fetch('./db/person.json'); // Cập nhật đường dẫn file JSON
    const data = await response.json();

    // Tìm thông tin nhân viên theo ID
    const employee = data.find(emp => emp.id === id);

    if (employee) {
      // Cập nhật các phần tử HTML
      document.getElementById('avatar').src = employee.image || './images/avatar/default.png';
      document.getElementById('fullname').textContent = employee.name;
      document.getElementById('position').textContent = employee.position;

      document.title = `Thông tin ${employee.name}`;
      // Cập nhật mạng xã hội (nếu có)
      const socialLinks = employee.social_links;
      socialLinks.forEach(link => {
        if (link.url) {
          if (link.name === 'wechat' || link.name === 'whatsapp') {
            // Chọn container để render
            const linksContainer = document.getElementById('social-links');
            const anchor = document.createElement('a');
            anchor.className = 'link-button';

            // Xử lý các liên kết có ảnh cần popup
            if (link.image) {
              anchor.href = "javascript:void(0);";
              anchor.onclick = () => togglePopup(null, null, link.image);
            } else {
              anchor.href = link.url;
              anchor.target = '_blank';
            }

            // Thêm icon và text
            anchor.innerHTML = `
              <i class="${link.icon}"></i> ${link.name.charAt(0).toUpperCase() + link.name.slice(1)}
              <span class='link-button-text'>(${link.text})</span>
            `;

            // Thêm vào container
            linksContainer.appendChild(anchor);
          } else {
            // Chọn container để render
            const linksContainer = document.getElementById('social-links');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.target = '_blank';
            anchor.className = 'link-button';
            anchor.alt = link.name;
            anchor.title = link.text;

            // Thêm icon và text
            anchor.innerHTML = `<i class="${link.icon}"></i> ${link.name.charAt(0).toUpperCase() + link.name.slice(1)} <span class='link-button-text'>(${link.text})</span>`;

            console.log(anchor);

            // Thêm vào container
            linksContainer.appendChild(anchor);
          }
        }
      });
    } else {
      console.error("Không tìm thấy nhân viên với ID:", id);
      document.body.style.display = 'none';
    }
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
}

// Gọi hàm khi trang được tải
document.addEventListener('DOMContentLoaded', updateEmployeeInfo);