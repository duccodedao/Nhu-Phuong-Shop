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


document.addEventListener("DOMContentLoaded", function() {
    let isScrolledToBottom = false;

    function checkScrollToBottom() {
        const windowHeight = window.innerHeight;
        const body = document.body;
        const html = document.documentElement;
        const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        if ((documentHeight - windowHeight - scrollPosition) < 10) { // 10 pixels threshold for being at bottom
            isScrolledToBottom = true;
        } else {
            isScrolledToBottom = false;
        }
    }

    function updateStatistics() {
        if (isScrolledToBottom) {
            const orderCountElement = document.getElementById("orderCount");
            const experienceYearsElement = document.getElementById("experienceYears");
            const totalOrders = 3000;
            const totalYears = 10;
            let currentOrderCount = 0;
            let currentExperienceYears = 0;

            const orderInterval = setInterval(function() {
                currentOrderCount++;
                orderCountElement.textContent = currentOrderCount;
                if (currentOrderCount === totalOrders) {
                    clearInterval(orderInterval);
                }
            }, 3);

            const yearsInterval = setInterval(function() {
                currentExperienceYears++;
                experienceYearsElement.textContent = currentExperienceYears;
                if (currentExperienceYears === totalYears) {
                    clearInterval(yearsInterval);
                }
            }, 1000); // 1000 milliseconds = 1 second

            // Remove scroll event listener once statistics are updated
            window.removeEventListener("scroll", handleScroll);
        }
    }

    function handleScroll() {
        checkScrollToBottom();
        updateStatistics();
    }

    window.addEventListener("scroll", handleScroll);
});
