let person;

async function updateEmployeeInfo() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const skeleton = document.getElementById('loading-skeleton');
  const mainContent = document.getElementById('main-content');

  skeleton.style.display = 'flex';
  mainContent.style.display = 'none';

  if (!id) {
    // skeleton.innerHTML = '<p style="color: white">❌ Không có ID trong URL</p>';
    return;
  }

  try {
    const response = await fetch('./db/person.json');
    const data = await response.json();
    const employee = data.find(emp => emp.id.toLowerCase() === id.toLowerCase());

    person = employee;

    if (employee) {
      document.getElementById('avatar').src = employee.image || './images/avatar/default.png';
      document.getElementById('fullname').textContent = employee.name;
      document.getElementById('position').textContent = employee.position;
      document.title = `Thông tin ${employee.name}`;

      const socialLinks = employee.social_links || [];
      const linksContainer = document.getElementById('social-links');
      linksContainer.innerHTML = '';

      socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.className = 'link-button';

        if (link.name === 'wechat' || link.name === 'whatsapp') {
          anchor.href = 'javascript:void(0);';
          anchor.onclick = () => togglePopup(null, null, link.image);
        } else {
          anchor.href = link.url;
          anchor.target = '_blank';
        }

        anchor.innerHTML = `
          <i class="${link.icon}"></i> ${link.name.charAt(0).toUpperCase() + link.name.slice(1)}
          <span class='link-button-text'>(${link.text})</span>
        `;
        linksContainer.appendChild(anchor);

        // Hiển thị nội dung infor (nếu có)
        if (employee.infor) {
          document.getElementById('employee-infor').innerHTML = employee.infor;
        }

      });

      // ✅ Dữ liệu ok: hiển thị nội dung, ẩn skeleton
      skeleton.style.display = 'none';
      mainContent.style.display = 'block';
    } else {
      // ❌ Không tìm thấy nhân viên
      console.log('❌ Không tìm thấy nhân viên')
    }
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
}


function generateVCard(employee) {
  const safeName = employee.name.replace(/\s+/g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filename = `${employee.id}_${safeName}.vcf`;
  const vcfPath = `./vcf/${filename}`;
  window.location.href = vcfPath;
}


// Gắn sự kiện sau khi DOM sẵn và có dữ liệu nhân viên
const saveBtn = document.getElementById('save-vcard-btn');
if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    generateVCard(person);
  });
}



// Gọi hàm khi trang được tải
document.addEventListener('DOMContentLoaded', updateEmployeeInfo);
