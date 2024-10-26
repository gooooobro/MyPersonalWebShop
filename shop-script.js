// Tunggu hingga DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi grid produk
    const productsGrid = document.getElementById('productsGrid');
    
    // Toggle mode gelap saat moon diklik
    const moonButton = document.querySelector('.moon');
    moonButton.addEventListener('click', toggleDarkMode);
    
    // Fungsi untuk toggle mode gelap
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }
    
    // Contoh fungsi untuk memuat produk (bisa disesuaikan dengan kebutuhan)
    function loadProducts() {
        // Di sini Anda bisa menambahkan logika untuk memuat produk
        console.log('Products loading...');
    }
    
    // Panggil fungsi loadProducts saat halaman dimuat
    loadProducts();
});
