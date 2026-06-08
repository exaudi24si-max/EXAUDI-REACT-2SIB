const fs = require('fs');

const firstNames = ["Budi", "Siti", "Andi", "Dewi", "Agus", "Ayu", "Rudi", "Rina", "Joko", "Sri", "Eko", "Endang", "Heri", "Ani", "Tono", "Wati", "Yudi", "Iwan", "Putri", "Dian"];
const lastNames = ["Santoso", "Wijaya", "Kusuma", "Sari", "Setiawan", "Hidayat", "Lestari", "Nugroho", "Saputra", "Pratama", "Siregar", "Simanjuntak", "Halim", "Wibowo", "Gunawan"];
const cities = ["Jakarta", "Surabaya", "Bandung", "Medan", "Semarang", "Makassar", "Palembang", "Tangerang", "Depok", "Bekasi", "Denpasar", "Malang", "Yogyakarta", "Balikpapan", "Banjarmasin"];
const membershipLevels = ["Bronze", "Silver", "Gold", "Platinum"];
const paymentMethods = ["Transfer Bank", "Kartu Kredit", "E-Wallet", "Cash on Delivery", "Virtual Account"];
const genders = ["Laki-laki", "Perempuan"];
const statuses = ["Aktif", "Tidak Aktif"];
const sources = ["Instagram", "TikTok", "Referral", "Organik", "Facebook Ads"];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

function getRandomPhone() {
    return "08" + Math.floor(1000000000 + Math.random() * 9000000000);
}

// Menentukan kolom yang akan digunakan sesuai dengan instruksi
let csvContent = "ID Customer,Nama Lengkap,Username,Jenis Kelamin,Tanggal Lahir,Email,Nomor HP,Kota / Provinsi,Status Member,Level Membership,Tanggal Daftar,Total Transaksi (Rp),Tanggal Transaksi Terakhir,Metode Pembayaran,Sumber User,Status Promo\n";

for (let i = 1; i <= 800; i++) {
    const id = "CUST-" + String(i).padStart(4, '0');
    const gender = getRandomItem(genders);
    const firstName = getRandomItem(firstNames);
    const lastName = getRandomItem(lastNames);
    const name = `${firstName} ${lastName}`;
    const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${i}`;
    const email = `${username}@example.com`;
    const phone = getRandomPhone();
    const city = getRandomItem(cities);
    const status = getRandomItem(statuses);
    const level = status === "Aktif" ? getRandomItem(membershipLevels) : "-";
    const dob = getRandomDate(new Date(1975, 0, 1), new Date(2005, 0, 1));
    const joinDate = getRandomDate(new Date(2020, 0, 1), new Date(2023, 11, 31));
    const lastTransaction = getRandomDate(new Date(2023, 0, 1), new Date());
    const totalTransaction = Math.floor(Math.random() * 50) * 100000 + 50000;
    const payment = getRandomItem(paymentMethods);
    const source = getRandomItem(sources);
    const promo = Math.random() > 0.5 ? "Digunakan" : "Belum Digunakan";

    // Gabungkan ke CSV
    csvContent += `${id},${name},${username},${gender},${dob},${email},${phone},${city},${status},${level},${joinDate},${totalTransaction},${lastTransaction},${payment},${source},${promo}\n`;
}

fs.writeFileSync('Data_Dummy_CRM_800.csv', csvContent);
console.log("File Data_Dummy_CRM_800.csv berhasil dibuat!");
