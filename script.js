document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  menuToggle.addEventListener("click", function() {
      sidebar.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Hiển thị thông báo ưu đãi khi trang được tải
  Swal.fire({
      title: 'Ưu đãi đặc biệt!',
      html: '<img src="img/sale/sale20.png" style="width: 100%;" /><br><br>Chúng tôi có một ưu đãi đặc biệt dành cho bạn. Hãy ghé thăm cửa hàng của chúng tôi ngay!',
      confirmButtonText: 'Đồng ý'
  });
});
