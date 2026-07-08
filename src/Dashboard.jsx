import { useState } from 'react';

// 1. DATA PRODUK (Mock Data)
const DATAPRODUK = [
  { id: 1, nama: 'Kaos Polos Cotton Combed 30s', harga: 45000, toko: 'KaosPolos ID', gambar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500' },
  { id: 2, nama: 'Sepatu Sneakers Casual Pria', harga: 185000, toko: 'Footwear Co.', gambar: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
  { id: 3, nama: 'Botol Minum Tumbler Estetik 1L', harga: 32000, toko: 'HomeStuff', gambar: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500' },
  { id: 4, nama: 'Earphone Wireless Bluetooth TWS', harga: 125000, toko: 'GadgetZone', gambar: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500' },
];

function Dashboard() {
  const [keranjang, setKeranjang] = useState([]);
  const [cari, setCari] = useState('');

  // Fungsi Tambah ke Keranjang
  const tambahKeKeranjang = (produk) => {
    const itemAda = keranjang.find((item) => item.id === produk.id);
    if (itemAda) {
      setKeranjang(
        keranjang.map((item) =>
          item.id === produk.id ? { ...item, jumlah: item.jumlah + 1 } : item
        )
      );
    } else {
      setKeranjang([...keranjang, { ...produk, jumlah: 1 }]);
    }
  };

  // Fungsi Hapus/Kurang dari Keranjang
  const hapusDariKeranjang = (id) => {
    const itemAda = keranjang.find((item) => item.id === id);
    if (itemAda.jumlah === 1) {
      setKeranjang(keranjang.filter((item) => item.id !== id));
    } else {
      setKeranjang(
        getKeranjang = keranjang.map((item) =>
          item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
        )
      );
    }
  };

  // Filter produk berdasarkan kolom pencarian
  const produkDifilter = DATAPRODUK.filter((produk) =>
    produk.nama.toLowerCase().includes(cari.toLowerCase())
  );

  // Hitung total belanja
  const totalHarga = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0);

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>BlueStore</div>
        <input
          type="text"
          placeholder="Cari produk impianmu di sini..."
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          style={styles.searchBar}
        />
        <div style={styles.cartIcon}>🛒 {keranjang.length} Item</div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={styles.main}>
        {/* DAFTAR PRODUK */}
        <div style={styles.produkSection}>
          <h2 style={styles.sectionTitle}>Katalog Produk</h2>
          <div style={styles.grid}>
            {produkDifilter.map((produk) => (
              <div key={produk.id} style={styles.card}>
                <img src={produk.gambar} alt={produk.nama} style={styles.gambarProduk} />
                <div style={styles.cardBody}>
                  <p style={styles.tokoText}>🏪 {produk.toko}</p>
                  <h4 style={styles.namaProduk}>{produk.nama}</h4>
                  <p style={styles.hargaProduk}>Rp {produk.harga.toLocaleString('id-ID')}</p>
                  <button onClick={() => tambahKeKeranjang(produk)} style={styles.btnBeli}>
                    + Keranjang
                  </button>
                </div>
              </div>
            ))}
            {produkDifilter.length === 0 && <p style={{ color: '#666' }}>Produk tidak ditemukan...</p>}
          </div>
        </div>

        {/* SIDEBAR KERANJANG */}
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Keranjang Belanja</h3>
          {keranjang.length === 0 ? (
            <p style={{ color: '#888', fontSize: '14px' }}>Keranjangmu masih kosong nih.</p>
          ) : (
            <>
              <div style={styles.listKeranjang}>
                {keranjang.map((item) => (
                  <div key={item.id} style={styles.itemKeranjang}>
                    <div>
                      <h5 style={{ margin: '0 0 4px 0', color: '#333' }}>{item.nama}</h5>
                      <span style={{ fontSize: '12px', color: '#666' }}>
                        {item.jumlah} x Rp {item.harga.toLocaleString('id-ID')}
                      </span>
                    </div>
                    <div style={styles.aksiKeranjang}>
                      <button onClick={() => hapusDariKeranjang(item.id)} style={styles.btnMin}>-</button>
                      <button onClick={() => tambahKeKeranjang(item)} style={styles.btnPlus}>+</button>
                    </div>
                  </div>
                ))}
              </div>
              <hr style={{ borderColor: '#eee', margin: '15px 0' }} />
              <div style={styles.totalSection}>
                <h4 style={{ margin: 0, color: '#555' }}>Total:</h4>
                <h3 style={{ color: '#2b6cb0', margin: 0 }}>Rp {totalHarga.toLocaleString('id-ID')}</h3>
              </div>
              <button onClick={() => alert('Terima kasih sudah berbelanja di BlueStore!')} style={styles.btnCheckout}>
                Checkout Sekarang
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// 2. INLINE STYLES (TEMA BIRU)
const styles = {
  container: { fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh', margin: 0 },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e3a8a', padding: '15px 30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 },
  logo: { fontSize: '24px', fontWeight: 'bold', color: '#63b3ed' },
  searchBar: { width: '40%', padding: '8px 15px', borderRadius: '20px', border: '1px solid #2b6cb0', outline: 'none', fontSize: '14px' },
  cartIcon: { fontSize: '16px', fontWeight: 'bold', color: '#fff' },
  main: { display: 'flex', padding: '20px', gap: '20px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' },
  produkSection: { flex: 3, minWidth: '300px' },
  sectionTitle: { color: '#1e40af', marginBottom: '20px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' },
  card: { backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' },
  gambarProduk: { width: '100%', height: '180px', objectFit: 'cover' },
  cardBody: { padding: '12px', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  tokoText: { fontSize: '11px', color: '#2b6cb0', fontWeight: 'bold', margin: '0 0 5px 0' },
  namaProduk: { fontSize: '14px', margin: '0 0 10px 0', height: '40px', overflow: 'hidden', color: '#333', lineHeight: '1.4' },
  hargaProduk: { fontWeight: 'bold', color: '#dd6b20', margin: '0 0 15px 0', fontSize: '16px' }, 
  btnBeli: { backgroundColor: '#3182ce', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', marginTop: 'auto', fontWeight: 'bold', transition: 'background 0.2s' },
  sidebar: { flex: 1, minWidth: '280px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', height: 'fit-content', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', position: 'sticky', top: '90px' },
  sidebarTitle: { color: '#1e40af', margin: '0 0 15px 0' },
  listKeranjang: { maxHeight: '300px', overflowY: 'auto' },
  itemKeranjang: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '13px' },
  aksiKeranjang: { display: 'flex', gap: '5px' },
  btnMin: { backgroundColor: '#e53e3e', color: '#fff', border: 'none', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  btnPlus: { backgroundColor: '#3182ce', color: '#fff', border: 'none', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' },
  totalSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' },
  btnCheckout: { width: '100%', backgroundColor: '#2b6cb0', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }
};

export default Dashboard;