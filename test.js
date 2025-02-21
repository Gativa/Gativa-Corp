// Mendapatkan elemen tombol
const backToTopButton = document.getElementById("backToTop");

// Menambahkan event listener untuk menggulir
window.onscroll = function() {
    // Jika halaman digulir lebih dari 100px, tombol akan muncul
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

// Fungsi untuk menggulir ke atas
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Gulir dengan halus
    });
}
