function prosesOrder(jenis, budgetId) {
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const roblox = document.getElementById('username').value;
    const budget = document.getElementById(budgetId).value;

    if(!nama || !wa || !roblox || !budget) {
        alert("Mohon lengkapi semua data pendaftaran & budget!");
        return;
    }

    if(jenis === 'Custom' && budget < 300000) {
        alert("Minimal budget untuk Custom adalah 300k");
        return;
    }

    // Ambil data detail jika custom
    let detail = "";
    if(jenis === 'Custom') detail = document.getElementById('desc-custom').value;

    // Simpan ke LocalStorage agar Admin bisa baca
    const newOrder = {
        nama, wa, roblox, jenis, budget, detail, 
        waktu: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Pindah ke Halaman Tunggu
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('waiting-page').style.display = 'block';
}

function showDonasi() { document.getElementById('donasi-modal').style.display = 'flex'; }
function closeDonasi() { document.getElementById('donasi-modal').style.display = 'none'; }