const nameMapping = {
  'TranMo': 'Trần Mơ',
  'NguyenThuy': 'Nguyễn Thúy',
  'NguyenNgoc': 'Nguyễn Ngọc',
  'ThuyLinh': 'Thùy Linh',
  'NhatLinh': 'Nhật Linh',
  'KhanhHuyen': 'Khánh Huyền',
  'KhanhLy': 'Khánh Ly',
  'ThuyHang': 'Thúy Hằng',
  'ThuyDung': 'Thùy Dung'
};

const wishes = {
  TranMo: [
    "Chúc chị Trần Mơ ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
    "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Trần Mơ những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
    "8/3 này, chúc chị Trần Mơ luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
    "Chúc chị Trần Mơ có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
    "Gửi đến chị Trần Mơ những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
  NguyenThuy: [
    "Chúc chị Nguyễn Thúy ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
    "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Nguyễn Thúy những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
    "8/3 này, chúc chị Nguyễn Thúy luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
    "Chúc chị Nguyễn Thúy có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
    "Gửi đến chị Nguyễn Thúy những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
  NguyenNgoc: [
        "Chúc chị Nguyễn Ngọc ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Nguyễn Ngọc những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Nguyễn Ngọc luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Nguyễn Ngọc có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Nguyễn Ngọc những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
  ThuyLinh: [
        "Chúc chị Thùy Linh ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Thùy Linh những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Thùy Linh luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Thùy Linh có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Thùy Linh những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
    NhatLinh: [
        "Chúc chị Nhật Linh ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Nhật Linh những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Nhật Linh luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Nhật Linh có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Nhật Linh những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
    KhanhHuyen: [
        "Chúc chị Khánh Huyền ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Khánh Huyền những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Khánh Huyền luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Khánh Huyền có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Khánh Huyền những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
    KhanhLy: [
        "Chúc chị Khánh Ly ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Khánh Ly những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Khánh Ly luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Khánh Ly có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Khánh Ly những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
    ThuyHang: [
        "Chúc chị Thúy Hằng ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Thúy Hằng những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Thúy Hằng luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Thúy Hằng có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Thúy Hằng những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ],
  ThuyDung: [
        "Chúc chị Thùy Dung ngày 8/3 tràn đầy niềm vui và hạnh phúc! Mong chị luôn xinh đẹp và thành công trong mọi lĩnh vực.",
        "Nhân ngày Quốc tế Phụ nữ, gửi đến chị Thùy Dung những lời chúc tốt đẹp nhất. Chúc chị luôn tươi trẻ, yêu đời và gặt hái được nhiều thành công mới!",
        "8/3 này, chúc chị Thùy Dung luôn là bông hoa đẹp nhất trong vườn hoa của cuộc đời. Mong chị luôn giữ được nụ cười rạng rỡ và trái tim ấm áp.",
        "Chúc chị Thùy Dung có một ngày 8/3 thật ý nghĩa bên gia đình và những người thân yêu. Mong chị luôn được yêu thương và trân trọng!",
        "Gửi đến chị Thùy Dung những lời chúc chân thành nhất nhân ngày 8/3. Chúc chị luôn mạnh khỏe, hạnh phúc và thành công trên con đường sự nghiệp."
  ]
};

document.addEventListener('DOMContentLoaded', function() {
  const wishCard = document.getElementById('wish-card');
  const homePage = document.getElementById('home-page');
  const personNameElement = document.getElementById('person-name');
  const wishTextElement = document.getElementById('wish-text');

  // Hàm lấy tên từ URL
  function getNameFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name');
  }

  // Hàm lấy lời chúc ngẫu nhiên
  function getRandomWish(name) {
    if (wishes[name]) {
      const wishArray = wishes[name];
      const wishIndex = Math.floor(Math.random() * wishArray.length);
      return wishArray[wishIndex];
    } else {
      return "Chúc mừng ngày 8/3! Chúc bạn luôn xinh đẹp và hạnh phúc!"; // Lời chúc mặc định
    }
  }

  // Hàm cập nhật đường link cá nhân
  function updatePersonalLinks() {
    const hostname = window.location.href.split('?')[0];
    const linkItems = document.querySelectorAll('.link-item');
    linkItems.forEach(item => {
      const name = item.dataset.name;
      const linkElement = item.querySelector('.personal-link');
      linkElement.textContent = `${hostname}?name=${name}`;
    });
  }

  // Xử lý khi trang tải xong
  function handlePageLoad() {
    const nameKey = getNameFromUrl();
      const name = nameMapping[nameKey];

    if (nameKey) {
      const wish = getRandomWish(nameKey);
      personNameElement.textContent = name; // Sử dụng tên đầy đủ
      wishTextElement.textContent = wish;
      homePage.style.display = 'none';
      wishCard.style.display = 'block';
    } else {
      homePage.style.display = 'block';
      wishCard.style.display = 'none';
    }

    updatePersonalLinks();
  }

  handlePageLoad();
});
