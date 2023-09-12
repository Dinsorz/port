document.addEventListener("DOMContentLoaded", function () {
    // Function to handle smooth scrolling for anchor links
    function smoothScroll(targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // ปรับตำแหน่งการเลื่อนหน้าให้เหมาะสม (ถ้าต้องการ)
          behavior: "smooth", // ทำให้การเลื่อนเป็นแบบสมูธ
        });
      }
    }
  
    // Smooth scrolling for anchor links in the navigation menu
    const navLinks = document.querySelectorAll("a[href^='#']");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // ยกเลิกการทำงานของลิงก์
        const targetId = this.getAttribute("href").substring(1); // ดึง ID ของเป้าหมายจากลิงก์
        smoothScroll(targetId); // เรียกใช้ฟังก์ชันการเลื่อนเนื่องจากการคลิกลิงก์
      });
    });
  
    // Toggle mobile navigation menu
    const menuButton = document.getElementById("menuButton");
    const navbar = document.getElementById("myNavbar");
    menuButton.addEventListener("click", function () {
      navbar.classList.toggle("w3-show"); // เปิดหรือปิดเมนูบนโทรศัพท์มือถือ
    });
  });

  const typed = new Typed('.multiple-text', {
    strings: ['Programmer', 'Graphic Design'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});