const navId = document.getElementById("nav_menu"),
    ToggleBtnId = document.getElementById("toggle_btn"),
    CloseBtnId = document.getElementById("close_btn");

ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});

const navLinksForMobile = document.querySelectorAll(".nav_menu_link");
navLinksForMobile.forEach(link => {
    link.addEventListener("click", () => {
        navId.classList.remove("show");
    });
});

AOS.init();

gsap.from(".logo", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
});

gsap.from(".nav_menu_list .nav_menu_item", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
});

gsap.from(".toggle_btn", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
});

gsap.from(".main-heading", {
    opacity: 0,
    y: 20,
    delay: 2,
    duration: 0.5,
});

gsap.from(".btn_wrapper", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".team_img_wrapper img", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".info-text", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".fasilitas", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".tentang", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".kontak", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".title_tipe_rumah", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".tipe_rumah", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".detail_tipe_rumah", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".blog", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

gsap.from(".detail_blog", {
    opacity: 0,
    y: 20,
    delay: 1.8,
    duration: 0.5,
});

window.addEventListener("scroll", (e) => {
    const nav = document.querySelector(".header");
    if (window.pageYOffset >= 30) {
        nav.classList.add("shadow-header");
    } else {
        nav.classList.remove("shadow-header");
    }
});

const defaultRumahData = [
    {
        tipe: "A", gambar_rumah: "./img/house-1.png", nama: "Casa Verde",
        luas_bangunan: 120, luas_tanah: 200, kamar_mandi: 2, kamar_tidur: 3,
        deskripsi: "Casa Verde, rumah dengan desain modern dan luas tanah yang cukup untuk kehidupan keluarga.",
        harga: "700Jt-an", carport: "1", denah_rumah: "./img/denah_rumah.jpg",
    },
    {
        tipe: "B", gambar_rumah: "./img/house-2.png", nama: "Sky Villa",
        luas_bangunan: 180, luas_tanah: 250, kamar_mandi: 3, kamar_tidur: 4,
        deskripsi: "Sky Villa, rumah mewah dengan pemandangan yang menakjubkan.",
        harga: "800Jt-an", carport: "1", denah_rumah: "./img/denah_rumah.jpg",
    }
];

let savedRumahData = JSON.parse(localStorage.getItem('db_rumah'));

if (!savedRumahData || savedRumahData.length === 0) {
    localStorage.setItem('db_rumah', JSON.stringify(defaultRumahData));
    savedRumahData = defaultRumahData;
}

const jsonData = {
    rumah: savedRumahData
};

function createHouseCard(house, index, isMobileView) {
    const isFavorited = checkFavorite(house.tipe);
    const heartClass = isFavorited ? 'fa-heart' : 'fa-heart-o';
    const heartColor = isFavorited ? '#dc3545' : 'var(--primary-color)';

    const penjelasan = `
      <div class="col-md-6 mt-4 mb-4">
        <h2>${house.nama}</h2>
        <p>${house.deskripsi}</p>
        <div class="row">
            <!-- (Bagian spesifikasi luasan dan kamar biarkan sama seperti aslinya) -->
            <div class="col-md-5 mb-3">
              <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
                <i class="fa fa-briefcase"></i>
                <h3>${house.luas_bangunan}</h3>
                <p>Luas Bangunan</p>
              </div>
            </div>
            <div class="col-md-5 mb-3">
              <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
                <i class="fa fa-briefcase"></i>
                <h3>${house.luas_tanah}</h3>
                <p>Luas Tanah</p>
              </div>
            </div>
            <div class="col-md-5 mb-3">
              <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
                <i class="fa fa-shower"></i>
                <h3>${house.kamar_mandi}</h3>
                <p>Kamar Mandi</p>
              </div>
            </div>
            <div class="col-md-5 mb-3">
              <div class="card justify-content-center align-self-center p-3 tipe_rumah_item">
                <i class="fa fa-bed"></i>
                <h3>${house.kamar_tidur}</h3>
                <p>Kamar Tidur</p>
              </div>
            </div>
        </div>
        
        <div class="d-flex align-items-center mt-2">
            <a href="./detail_rumah.html?tipe_rumah=${house.tipe}" class="btn_home view_more_btn" style="text-decoration:none;">
                Selengkapnya
            </a>
            <!-- Tombol Favorit -->
            <button onclick="toggleFavorite('${house.tipe}')" style="width: 55px; height: 55px; border-radius: 7px; border: 1px solid var(--primary-color); background: transparent; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: 0.3s;">
                <i class="fa ${heartClass} fa-lg fav-icon-${house.tipe}" style="color: ${heartColor}; transition: 0.3s;"></i>
            </button>
        </div>
      </div>
    `;

    const gambar_rumah = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.gambar_rumah}" alt="${house.nama}" class="img-fluid" />
        </div>
    `;

    var html = ``;
    if (isOdd) {
        html = gambar_rumah + penjelasan;
    } else {
        html = penjelasan + gambar_rumah;
    }

    if (isMobileView) {
        html = gambar_rumah + penjelasan;
    }

    return html;
}

function createTipeLain(house) {
    const item = `
        <div class="col-md-6 mt-4 mb-4">
            <img src="${house.gambar_rumah}" class="w-100" style="max-height:200px; object-fit:cover; object-position:bottom">
            <br><br>
            <a href="./detail_rumah.html?tipe_rumah=${house.tipe}">
              <h3 class="text-center">Rumah ${house.nama}</h3>
            </a>
        </div>
    `;

    return item;
}

const rumahContainer = document.getElementById("rumahContainer");
if (rumahContainer != null) {
    jsonData.rumah.forEach((house, index) => {
        const houseCard = createHouseCard(house, index, false);
        rumahContainer.innerHTML += houseCard;
    });
}

const rumahContainerMobile = document.getElementById("rumahContainerMobile");
if (rumahContainerMobile != null) {
    jsonData.rumah.forEach((house, index) => {
        const houseCard = createHouseCard(house, index, true);
        rumahContainerMobile.innerHTML += houseCard;
    });
}

const lihatTipeLain = document.getElementById("lihatTipeLain");
if (lihatTipeLain != null) {
    jsonData.rumah.forEach((house) => {
        const tipeCard = createTipeLain(house);
        lihatTipeLain.innerHTML += tipeCard;
    });
}

function filterRumahByTipe(tipe) {
    const filteredRumah = jsonData.rumah.find((rumah) => rumah.tipe == tipe);
    return filteredRumah || null;
}

var queryString = window.location.search;

var searchParams = new URLSearchParams(queryString);

var tipeRumahValue = searchParams.get("tipe_rumah");

if (tipeRumahValue != null && tipeRumahValue != "") {
    const filteredRumah = filterRumahByTipe(tipeRumahValue.toUpperCase());

    if (filteredRumah == null) {
        const titleSection = document.querySelector('.title_tipe_rumah');
        if (titleSection) titleSection.style.display = 'none';

        const detailContainer = document.querySelector('.detail_tipe_rumah');
        if (detailContainer) {
            detailContainer.innerHTML = `
                <div class="col-md-12 text-center mt-5 mb-5 p-5">
                    <i class="fa fa-exclamation-triangle fa-3x mb-3" style="color: #ffcc00;"></i>
                    <h2>Tipe Rumah Tidak Ditemukan</h2>
                    <p class="text-muted">Maaf, data rumah yang Anda cari tidak tersedia atau URL tidak valid.</p>
                    <a href="./tipe_rumah.html" class="btn btn-primary mt-3" style="background-color: var(--primary-color); border:none;">Lihat Daftar Rumah</a>
                </div>
            `;
        }
    } else {
        document.getElementById("title-nama-rumah").innerText =
            "Rumah " + filteredRumah.nama;
        document.getElementById("gambar-rumah").src = filteredRumah.gambar_rumah;
        document.getElementById("nama-rumah").innerText = filteredRumah.nama;
        document.getElementById("deskripsi-rumah").innerText =
            filteredRumah.deskripsi;
        document.getElementById("harga-rumah").innerText = filteredRumah.harga;
        document.getElementById("luas-bangunan-rumah").innerText =
            filteredRumah.luas_bangunan + "m²";
        document.getElementById("luas-tanah-rumah").innerText =
            filteredRumah.luas_tanah + "m²";
        document.getElementById("kamar-mandi-rumah").innerText =
            filteredRumah.kamar_mandi;
        document.getElementById("kamar-tidur-rumah").innerText =
            filteredRumah.kamar_tidur;
        document.getElementById("carport-rumah").innerText = filteredRumah.carport;
        document.getElementById("denah-rumah").src = filteredRumah.denah_rumah;
    }
}

const blogData = [
    {
        id: 1,
        title:
            "Perumahan Dengan Hunian Nyaman dan Modern: Casa Verde di Myskill Residence",
        date: "21 Maret 2024, 09:00 AM",
        description:
            "Dalam dunia properti, terutama di industri perumahan, kebutuhan akan hunian yang nyaman dan modern semakin menjadi prioritas bagi masyarakat urban. Salah satu perumahan yang menawarkan konsep tersebut adalah Myskill Residence dengan tipe hunian bernama Casa Verde...",
        detail_blog: "./content/blog-1.html",
        image_blog: "./img/house-1.png",
    },
    {
        id: 2,
        title:
            "Menikmati Kemewahan Hidup di Sky Villa : Rumah Hunian Modern dengan Pemandangan Mengagumkan",
        date: "22 Maret 2024, 08:00 AM",
        description:
            "Selamat datang di Sky Villa, rumah hunian modern yang menghadirkan kemewahan dan kenyamanan di tengah-tengah pemandangan yang menakjubkan. Ini bukan sekadar tempat tinggal, tetapi sebuah pengalaman hidup bergaya dan bersantai di atas langit biru..",
        detail_blog: "./content/blog-2.html",
        image_blog: "./img/house-2.png",
    },
];

function generateBlogHTML(blogPost) {
    return `
        <div class="card mb-4">
            <div class="row">
                <div class="col-md-4">
                    <img src="${blogPost.image_blog}" width="100%" height="100%" />
                </div>
                <div class="col-md-8 p-4">
                    <div>
                        <h5>${blogPost.title}</h5>
                        <div class="blog-date d-flex mt-1">
                            <i class="fa fa-calendar me-2 mt-1"></i>
                            <p>${blogPost.date}</p>
                        </div>
                        <p class="description-blog mt-1">${blogPost.description}</p>
                        <a href="./detail_blog.html?id=${blogPost.id}" class="btn btn-sm btn-primary btn-readmore">
                           <i class="fa fa-book me-1"></i>
                           read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateLatestBlogHTML(blogPost) {
    return `
        <a href="./detail_blog.html?id=${blogPost.id}" class="latest-blog-items">
            <p>${blogPost.title}</p>
            <div class="blog-date d-flex mt-1">
                <i class="fa fa-calendar me-2 mt-1"></i>
                <p>${blogPost.date}</p>
            </div>
            <hr>
        </a>
    `;
}

function renderBlogPosts(filteredBlogData, isFiltered) {
    const blogContainer = document.getElementById("blogContainer");
    const latestBlogContent = document.getElementById("latestBlogContent");

    if (latestBlogContent != null) {
        latestBlogContent.innerHTML = "";

        const lastTwoBlogPosts = blogData.slice(-2);
        lastTwoBlogPosts.forEach((blogPost) => {
            latestBlogContent.innerHTML += generateLatestBlogHTML(blogPost);
        });
    }

    if (blogContainer == null) {
        return;
    }

    blogContainer.innerHTML = "";

    if (isFiltered) {
        if (filteredBlogData.length == 0) {
            const emptyStateDiv = document.createElement("div");
            emptyStateDiv.className = "col-md-12 text-center mt-5 mb-5";
            emptyStateDiv.innerHTML = `
                <i class="fa fa-search fa-3x mb-3" style="color: #ccc;"></i>
                <h4 style="color: #666;">Maaf, artikel tidak ditemukan.</h4>
                <p style="color: #999;">Coba gunakan kata kunci pencarian yang lain.</p>
            `;
            blogContainer.appendChild(emptyStateDiv);
        } else {
            filteredBlogData.forEach((blogPost) => {
                blogContainer.innerHTML += generateBlogHTML(blogPost);
            });
        }
    } else {
        blogData.forEach((blogPost) => {
            blogContainer.innerHTML += generateBlogHTML(blogPost);
        });
    }
}

function searchBlog(input) {
    const searchTerm = input.value.toLowerCase();
    const filteredBlogData = [];
    blogData.forEach((blogPost) => {
        if (blogPost.title.toLowerCase().includes(searchTerm)) {
            filteredBlogData.push(blogPost);
        }
    });
    console.log("blogData", blogData);
    console.log("searchTerm", searchTerm);
    console.log("filteredBlogData", filteredBlogData);

    if (searchTerm != null && searchTerm != "" && searchTerm != undefined) {
        renderBlogPosts(filteredBlogData, true);
    } else {
        renderBlogPosts([], false);
    }
}

window.onload = renderBlogPosts([], false);

var idBlogValue = searchParams.get("id");

if (idBlogValue != null && idBlogValue != "") {
    const filteredBlogData = getBlogById(parseInt(idBlogValue, 10));
    if (filteredBlogData != null && filteredBlogData != undefined) {
        document.getElementById("cardDetailImg").src = filteredBlogData.image_blog;
        document.getElementById("tgl-blog").innerText = filteredBlogData.date;
        document.getElementById("title-blog").innerText = filteredBlogData.title;
        loadDetailBlog(filteredBlogData.detail_blog);
    } else {
        const titleBlog = document.getElementById("title-blog");
        if (titleBlog) titleBlog.innerText = "Artikel Tidak Ditemukan";

        const cardContainer = document.querySelector(".card.p-4");
        if (cardContainer) {
            cardContainer.innerHTML = `
                <div class="text-center mt-5 mb-5 p-5">
                    <i class="fa fa-exclamation-triangle fa-3x mb-3" style="color: #ffcc00;"></i>
                    <h2>Oops!</h2>
                    <p class="text-muted">Artikel blog yang Anda cari tidak tersedia atau URL tidak valid.</p>
                    <a href="./blog.html" class="btn btn-primary mt-3" style="background-color: var(--primary-color); border:none;">Kembali ke Blog</a>
                </div>
            `;
        }
    }
}

function getBlogById(blogId) {
    return blogData.filter((blog) => blog.id === blogId)[0];
}

function loadDetailBlog(detailBlogURL) {
    const cardDetailBlog = document.getElementById("cardDetailBlog");
    if (cardDetailBlog == null || cardDetailBlog == undefined) {
        console.log("no element has id cardDetailBlog");
        return;
    }

    document.getElementById("cardDetailBlog").src = detailBlogURL;
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nama = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const subject = document.querySelector('input[name="subject"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();

        if (!nama || !email || !message) {
            alert("Mohon lengkapi Nama, Email, dan Pesan terlebih dahulu sebelum mengirim.");
            return;
        }

        const phoneDestination = "6282223136022";

        const waText = `Halo MySkill Residence,%0A%0APerkenalkan saya *${nama}* (${email}).%0A%0ATerkait: *${subject}*%0A%0A${message}`;

        const waUrl = `https://api.whatsapp.com/send/?phone=${phoneDestination}&text=${waText}`;

        window.open(waUrl, '_blank');

        contactForm.reset();
    });
}

const currentPath = window.location.pathname;
const pathName = currentPath.split('/').pop();
const menuLinks = document.querySelectorAll(".nav_menu_link");

menuLinks.forEach(link => {
    link.classList.remove("menu_active");

    const href = link.getAttribute("href").replace('./', '');

    if (pathName === '' || pathName === '/') {
        if (href === 'index.html') {
            link.classList.add("menu_active");
        }
    }
    else if (href.includes(pathName)) {
        link.classList.add("menu_active");
    }
});

function checkFavorite(tipe) {
    let favorites = JSON.parse(localStorage.getItem('fav_rumah')) || [];
    return favorites.includes(tipe);
}

function toggleFavorite(tipe) {
    let favorites = JSON.parse(localStorage.getItem('fav_rumah')) || [];
    const icons = document.querySelectorAll(`.fav-icon-${tipe}`);

    if (favorites.includes(tipe)) {
        favorites = favorites.filter(fav => fav !== tipe);
        icons.forEach(icon => {
            icon.classList.remove('fa-heart');
            icon.classList.add('fa-heart-o');
            icon.style.color = 'var(--primary-color)';
        });
    } else {
        favorites.push(tipe);
        icons.forEach(icon => {
            icon.classList.remove('fa-heart-o');
            icon.classList.add('fa-heart');
            icon.style.color = '#dc3545';
        });
    }

    localStorage.setItem('fav_rumah', JSON.stringify(favorites));
}