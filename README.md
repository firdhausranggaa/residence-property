# MySkill Residence - Frontend Slicing Project & Mini CMS

![MySkill Residence Banner](./img/home.png) 

## 📌 Deskripsi Proyek
**MySkill Residence** adalah sebuah proyek portofolio *frontend* berupa *website* pemasaran perumahan modern. Proyek yang berawal dari tugas *slicing* UI ini telah berevolusi menjadi sebuah **Aplikasi Web Skala Kecil (Single Page Application)** menggunakan **Vanilla JavaScript murni**.

Proyek ini tidak hanya mendemonstrasikan antarmuka statis, tetapi juga interaktivitas penuh termasuk *Client-Side Rendering*, *Dynamic Routing*, dan sebuah **Admin Dashboard (CMS)** terintegrasi yang memanfaatkan *Web Storage API* sebagai simulasi *database* lokal untuk melakukan operasi CRUD.

## 🚀 Fitur Unggulan

*   **Admin Dashboard & CRUD Operations:** Portal khusus (`admin.html`) bagi pengelola properti untuk menambah (Create), membaca (Read), dan menghapus (Delete) katalog rumah. Pembaruan data akan langsung terefleksikan di halaman utama pengguna.
*   **Authentication System:** Dasbor admin dilindungi oleh sistem *login* sederhana yang memanfaatkan `sessionStorage`.
*   **Local Storage Pseudo-Database:** Mengelola *state* dan persistensi data katalog rumah pengguna di dalam memori *browser* secara dinamis, sehingga data yang ditambah/dihapus tidak hilang saat *refresh*.
*   **Dynamic Data Rendering:** Daftar tipe rumah dan artikel blog dirender secara dinamis tanpa penulisan HTML berulang.
*   **Vanilla JS "Routing":** Menggunakan `URLSearchParams` untuk menangkap parameter `?tipe_rumah=` dan `?id=`, merender konten spesifik secara otomatis.
*   **Edge Case Handling (404 Fallback):** Dilengkapi dengan UI *Error State* khusus apabila ID/URL yang diakses tidak valid.
*   **Real-time Search Filter:** Fitur pencarian artikel blog yang merespons setiap ketikan secara instan beserta penanganan *Empty State*.
*   **WhatsApp Gateway Integration:** Form Kontak fungsional yang meneruskan data *input* (*user*, *email*, *subject*, pesan) menjadi draf pesan WhatsApp secara otomatis.
*   **Smart Active Navigation:** Indikator menu aktif yang mendeteksi path URL saat ini secara dinamis.

## 🛠️ Teknologi yang Digunakan
*   **HTML5** (Semantik struktur halaman)
*   **CSS3** (Variabel global `:root`, Flexbox, CSS Grid, Media Queries)
*   **Vanilla JavaScript** (ES6+, DOM Manipulation, Event Listeners, Web Storage API)
*   **AOS (Animate On Scroll)** (Transisi saat *scroll*)
*   **GSAP** (Animasi *hero section* dan *header*)

## 📂 Struktur Proyek Terpenting
*   `index.html` - Halaman Beranda (Hero section, Fasilitas)
*   `admin.html` - Dashboard Admin (Sistem Login & Manajemen CRUD Properti)
*   `tipe_rumah.html` & `detail_rumah.html` - Katalog properti dinamis.
*   `blog.html` & `detail_blog.html` - Daftar artikel & pencarian.
*   `kontak.html` - Form terintegrasi WhatsApp API.
*   `css/style.css` - Desain antarmuka & tema.
*   `js/script.js` - Logika inti (Database Simulasi, Rendering, Routing).

## 💻 Cara Menjalankan Proyek Secara Lokal

Sangat disarankan menjalankan proyek ini menggunakan *Local Web Server* (protokol `http://`) agar fitur *routing* URL dan autentikasi berjalan sempurna.

1. Lakukan *Clone* repositori ini:
```bash
git clone https://github.com/firdhausranggaa/residence-property.git
```
2. Buka folder proyek di Visual Studio Code.
3. Gunakan ekstensi **Live Server** (klik kanan pada `index.html` -> *Open with Live Server*).
4. **Cara Akses Dashboard Admin:**
   * Buka `http://127.0.0.1:5500/admin.html`
   * Masukkan Username: `admin`
   * Masukkan Password: `1234`

*Desain UI asli berdasarkan materi bootcamp MySkill. Semua pengembangan logika JavaScript, fitur CMS, dan pengkodean HTML/CSS dilakukan secara independen.*
