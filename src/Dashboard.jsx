import { useState, useEffect } from 'react';
import gambarPucukRebung from './assets/pucuk-rebung.jpg';
import gambarSikuKeluang from './assets/siku-keluang.jpg';
import gambarAwanLarat from './assets/awan-larat.jpg';
import fotoHeader from './assets/expo-batik.jpg'; 

// IMPORT ASSETS KEGIATAN SESUAI DIREKTORI
import gambarBatikProduk from './assets/batik-produk.jpg';
import gambarCantingBatik from './assets/canting-batik.jpg';
import gambarBatikTalkshow from './assets/batik-talkshow.jpg';
import gambarKompetisiBatik from './assets/kompetisi-batik.jpg';
import gambarBatikDigital from './assets/batik-digital.jpg';
import gambarBatikFasionShow from './assets/batik-fasionshow.jpg';
import gambarBatikDance from './assets/batik-dance.jpg';

// ==================== CREATIVE MOCK DATA ====================
const FILOSOFI_BATIK = [
  { id: 1, nama: 'Pucuk Rebung Motif', arti: 'Symbolizes nobility of character, hope, and the determination to continuously grow and bring benefits to society.', gambar: gambarPucukRebung },
  { id: 2, nama: 'Siku Keluang Motif', arti: 'Depicts responsibility, fair leadership, and adherence to the traditional customs of Riau Malay culture.', gambar: gambarSikuKeluang },
  { id: 3, nama: 'Awan Larat Motif', arti: 'A symbol of majesty, abundance of fortune, and harmony among the Melayu community that interconnects endlessly.', gambar: gambarAwanLarat }
];

const DATA_TENANT = [
  { id: 1, nama: 'Pekanbaru Batik Riau Malai', gambar: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG3UuJpNyNt2mTx1ZebEtxkJsNf6BSIZ73qFyA9RpsCnCkOA6Q4zvVHV6RfhtxtpA2GWQuxgdm3DVLUm3O3VpGecpdVxcvgSTorORWgCj8QPQa36t31JBAMkwYQ2dIcDrGtUPZ9=w243-h174-n-k-no-nu', produk: 'Pucuk Rebung Motif Silk Fabrics & Natural Dye Stamped Batik' },
  { id: 2, nama: 'Wijaya Kencana - Pusat Batik Pekanbaru', gambar: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG66iqmKtY7WWP9SgT13Xf9CjLB99AcQSILVV2Hdb7_MVIKtB2HDax_rbNAcJCb1zqBJ-VwvS2J-kVUu5gPK0lTfMQXV437LnCX5PSPfK1Bko-iwBUvzNashlXNcp9dkN3ZwWm2Lhufb3JK=s1360-w1360-h1020-rw', produk: 'Men\'s Semi-Handdrawn Batik Shirts & Trendy Blouse Collections' },
  { id: 3, nama: 'Batik Keris', gambar: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnL-81EtAbaFQKFr0FAGsik5bbhvp0gmR672LDTBstPMUJVflcT4s5QsAXINH4t1oatnj6VX0UogNbn5IIsn_Nmy53qVd6TZiqcESUdfPoZcJzKIi8lTRk3A9UUWHCNbYA2kVOs=s1360-w1360-h1020-rw', produk: 'Batik Souvenirs, Cultural Scarves, and Creative Handicrafts' }
];

// DATA KEGIATAN MENGGUNAKAN LOCAL ASSETS
const DATA_KEGIATAN = [
  { jam: '09:00 AM', judul: 'Riau Batik Product Exhibition', deskripsi: 'An exclusive exhibition of premium batik fabrics dyed naturally using mangrove and gambier.', gambar: gambarBatikProduk },
  { jam: '10:30 AM', judul: 'Canting Batik Workshop', deskripsi: 'An interactive experience drawing the Pucuk Rebung motif guided by Riau\'s master artisans.', gambar: gambarCantingBatik },
  { jam: '01:00 PM', judul: 'Batik Business & Culture Talkshow', deskripsi: 'Exploring export opportunities for Melayu textiles with Disperindag and Fashion Industry Observers.', gambar: gambarBatikTalkshow },
  { jam: '03:00 PM', judul: 'Melayu Batik Motif Design Competition', deskripsi: 'A creative arena for young designers across Sumatra competing for the Governor\'s Trophy.', gambar: gambarKompetisiBatik },
  { jam: '04:30 PM', judul: 'MSME Digitalization Coaching', deskripsi: 'Intensive masterclass on global marketing strategies and e-commerce scale-up for batik craftsmen.', gambar: gambarBatikDigital },
  { jam: '07:30 PM', judul: 'Grand Cultural Fashion Show', deskripsi: 'Spectacular runway featuring local and national top models showcasing contemporary Riau Batik designs.', gambar: gambarBatikFasionShow },
  { jam: '09:00 PM', judul: 'Cultural Music & Dance Performance', deskripsi: 'Traditional live orchestrations and dances celebrating the majestic heritage of Lancang Kuning.', gambar: gambarBatikDance }
];

const DATA_REVIEW = [
  { id: 1, nama: 'Siti Rahma', status: 'Visitor', rating: '⭐⭐⭐⭐⭐', teks: 'The workshop was incredible! Learning how to use the canting with original Riau motifs gave me a whole new appreciation for our culture.' },
  { id: 2, nama: 'Andi Wijaya', status: 'Batik Entrepreneur', rating: '⭐⭐⭐⭐⭐', teks: 'The business talkshow and MSME coaching session opened up massive networking opportunities. Highly recommended for creative businesses!' },
  { id: 3, nama: 'Budi Santoso', status: 'Fashion Enthusiast', rating: '⭐⭐⭐⭐⭐', teks: 'The Grand Cultural Fashion Show was absolutely mesmerizing. Seeing the Pucuk Rebung motif styled into modern outfits was world-class!' }
];

const MANFAAT_TENANT = [
  { icon: '📈', judul: 'Maximum Exposure', ket: 'Showcased to over 5,000+ physical visitors and thousands of virtual investors.' },
  { icon: '🤝', judul: 'B2B Matchmaking', ket: 'Dedicated sessions connecting MSMEs directly with corporate buyers and major retailers.' },
  { icon: '📸', judul: 'Free Media Coverage', ket: 'Premium promotional packages in the official printed catalog, media partners, and press releases.' },
  { icon: '🌐', judul: 'Digital Market Access', ket: 'Onboarding support to national e-commerce platforms and cross-border marketplace visibility.' }
];

const FAQS = [
  { q: "Is the event open to the general public?", a: "Yes! Anyone interested in culture, fashion, and business networking can attend." },
  { q: "How do I get my E-ticket after payment?", a: "Your secure booking code and PDF ticket will be automatically dispatched via Email and WhatsApp." },
  { q: "Can I register as both a Buyer and a General Visitor?", a: "You can select the 'Business Buyer' tier in the registration form to obtain B2B matchmaking lounge access privileges." }
];

function Dashboard() {
  const [tiketQty, setTiketQty] = useState(1);
  const [jenisTiket, setJenisTiket] = useState('reguler');
  const [daftarSebagai, setDaftarSebagai] = useState('General Visitor');
  const [searchExhibitor, setSearchExhibitor] = useState('');
  const [isTenantModal, setIsTenantModal] = useState(false);
  const [tenantRole, setTenantRole] = useState('Local Artisan');
  const [activeFaq, setActiveFaq] = useState(null);
  
  // STATE BARU UNTUK MODAL PARTNERSHIP (SPONSOR/MEDPART)
  const [isPartnerModal, setIsPartnerModal] = useState(false);
  const [partnerType, setPartnerType] = useState('Sponsor');
  const [namaInstansi, setNamaInstansi] = useState('');
  
  const [timeLeft, setTimeLeft] = useState({ hari: 45, jam: 12, menit: 59, detik: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.detik > 0) return { ...prev, detik: prev.detik - 1 };
        if (prev.menit > 0) return { ...prev, menit: 59, detik: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hargaTiketSatuan = jenisTiket === 'reguler' ? 25000 : 75000;
  const totalBayar = hargaTiketSatuan * tiketQty;

  const tenantFiltered = DATA_TENANT.filter(t => 
    t.nama.toLowerCase().includes(searchExhibitor.toLowerCase()) || 
    t.produk?.toLowerCase().includes(searchExhibitor.toLowerCase())
  );

  return (
    <div style={styles.container}>
      
      {/* ==================== 1. STICKY PREMIUM NAVBAR ==================== */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <span style={styles.logoText}>EXHIBATIKRIAU</span>
        </div>
        <div style={styles.navLinks}>
          <a href="#beranda" style={styles.navLink}>Home</a>
          <a href="#filosofi" style={styles.navLink}>Philosophy</a>
          <a href="#kegiatan" style={styles.navLink}>Events</a>
          <a href="#exhibitor" style={styles.navLink}>Exhibitors</a>
          <a href="#manfaat" style={styles.navLink}>Tenant Benefits</a>
          <a href="#tiket" style={styles.btnNavTiket}>Buy Tickets</a>
        </div>
      </nav>

      {/* ==================== 2. HERO SECTION / HOME ==================== */}
      <header id="beranda" style={{ ...styles.heroSection, backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${fotoHeader})` }}>
        <div style={styles.heroOverlay}>
          <div style={styles.taglineBadge}>THE PEAK NIGHT OF Melayu CULTURE</div>
          <h1 style={styles.heroTitle}>PESONA BATIK RIAU EXPO 2026</h1>
          <p style={styles.heroSubtitle}>
            "Bringing the Heritage of Lancang Kuning to the Global Stage."
          </p>
          
          <div style={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/Q3VgPbHN99s" 
              title="Batik Riau Explanation"
              style={styles.videoIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <div style={styles.infoMetaGrid}>
            <div style={styles.infoMetaBox}>📅 September 18 - 20, 2026</div>
            <div style={styles.infoMetaBox}>📍 Ska Co Ex Ballroom, Pekanbaru, Riau</div>
            <div style={styles.infoMetaBox}>⏱️ 09:00 AM - 10:00 PM WIB</div>
          </div>

          <div style={styles.countdownContainer}>
            <p style={{ margin: '0 0 10px 0', fontSize: '14px', letterSpacing: '2px', color: '#fbbf24' }}>COUNTDOWN TO MAIN EVENT</p>
            <div style={styles.timerFlex}>
              <div style={styles.timeUnit}><span>{timeLeft.hari}</span><label>Days</label></div>
              <div style={styles.timeUnit}><span>{timeLeft.jam}</span><label>Hours</label></div>
              <div style={styles.timeUnit}><span>{timeLeft.menit}</span><label>Minutes</label></div>
              <div style={styles.timeUnit}><span>{timeLeft.detik}</span><label>Seconds</label></div>
            </div>
          </div>

          <div style={styles.heroCtaGroup}>
            <a href="#tiket" style={styles.btnHeroPrimary}>Register as Visitor</a>
            <a href="#manfaat" style={styles.btnHeroSecondary}>Register as Tenant</a>
          </div>
        </div>
      </header>

      <div style={styles.wrapper}>

        {/* ==================== 3. BATIK MOTIF PHILOSOPHY ==================== */}
        <section id="filosofi" style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Gallery & Motif Philosophy</h2>
            <p style={styles.sectionSubtitle}>Discover the deep stories and spiritual meaning behind each authentic Riau brushstroke</p>
          </div>
          <div style={styles.filosofiGrid}>
            {FILOSOFI_BATIK.map(motif => (
              <div key={motif.id} style={styles.filosofiCard}>
                <div style={{ backgroundImage: `url(${motif.gambar})`, ...styles.motifImage }} />
                <div style={styles.filosofiBody}>
                  <h4 style={styles.motifNama}>{motif.nama}</h4>
                  <p style={styles.motifArti}>"{motif.arti}"</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 4. AGENDA / MAIN EVENTS (VERTICAL TIMELINE VISUAL) ==================== */}
        <section id="kegiatan" style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Main Event Timeline</h2>
            <p style={styles.sectionSubtitle}>A detailed scheduled timeline of our special events and cultural sessions</p>
          </div>
          
          <div style={styles.timelineContainer}>
            {DATA_KEGIATAN.map((keg, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineTimeBox}>
                  <span style={styles.timelineTimeText}>{keg.jam}</span>
                </div>
                
                <div style={styles.timelineDividerNode}>
                  <div style={styles.timelineCircleMarker}>{index + 1}</div>
                  {index !== DATA_KEGIATAN.length - 1 && <div style={styles.timelineVerticalLine}></div>}
                </div>
                
                <div style={styles.timelineContentCard}>
                  <div style={{ backgroundImage: `url(${keg.gambar})`, ...styles.timelineCardImg }} />
                  <div style={styles.timelineCardBody}>
                    <h4 style={styles.timelineCardTitle}>{keg.judul}</h4>
                    <p style={styles.timelineCardDesc}>{keg.deskripsi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== EVENT REVIEWS & FEEDBACK ==================== */}
        <section id="reviews" style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>What Visitors Say</h2>
            <p style={styles.sectionSubtitle}>Real stories and reviews from previous attendees and exhibitors</p>
          </div>
          <div style={styles.reviewGrid}>
            {DATA_REVIEW.map(rev => (
              <div key={rev.id} style={styles.reviewCard}>
                <div style={styles.reviewStars}>{rev.rating}</div>
                <p style={styles.reviewText}>"{rev.teks}"</p>
                <div style={styles.reviewUser}>
                  <strong style={{ color: '#0f172a' }}>{rev.nama}</strong>
                  <span style={{ fontSize: '12px', color: '#64748b' }}> — {rev.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 5. EXHIBITOR LIST WITH SEARCH ==================== */}
        <section id="exhibitor" style={styles.sectionCard}>
          <div style={styles.exhibitorHeaderFlex}>
            <div>
              <h2 style={styles.sectionTitle}>Tenant List</h2>
              <p style={styles.sectionSubtitle}>Exclusive tenants appearing at Pesona Batik Riau Expo 2026</p>
            </div>
            <input 
              type="text" 
              placeholder="🔍 Search stores or your dream designers..." 
              value={searchExhibitor}
              onChange={(e) => setSearchExhibitor(e.target.value)}
              style={styles.searchField}
            />
          </div>
          
          <div style={styles.tenantGrid}>
            {tenantFiltered.map(tenant => (
              <div key={tenant.id} style={styles.tenantCard}>
                <img src={tenant.gambar} alt={tenant.nama} style={styles.tenantImg} />
                <div style={styles.tenantInfo}>
                  <h4 style={styles.tenantNama}>{tenant.nama}</h4>
                  <p style={styles.tenantProduk}><strong>Collection:</strong> {tenant.produk}</p>
                  <button onClick={() => alert(`Please contact Booth ${tenant.nama} for Pre-Orders.`)} style={styles.btnKunjungi}>View Collection</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 6. BENEFITS FOR TENANTS & CTA ==================== */}
        <section id="manfaat" style={styles.sectionCardGold}>
          <div style={styles.manfaatHeaderFlex}>
            <h2 style={{ ...styles.sectionTitle, color: '#0f172a', margin: '0 0 10px 0' }}>Why Should You Join as a Tenant?</h2>
            <p style={{ color: '#334155', margin: '0', maxWidth: '600px', width: '100%', lineHeight: '1.6' }}>
              An acceleration gateway into the creative economy ecosystem for local artisans and batik businesses to scale national markets.
            </p>
          </div>
          <div style={styles.manfaatGrid}>
            {MANFAAT_TENANT.map((m, i) => (
              <div key={i} style={styles.manfaatCard}>
                <div style={styles.manfaatIcon}>{m.icon}</div>
                <h4 style={{ margin: '0 0 10px 0', color: '#0f172a', textAlign: 'center' }}>{m.judul}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.5', textAlign: 'center' }}>{m.ket}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '35px' }}>
            <button onClick={() => setIsTenantModal(true)} style={styles.btnCtaMasyarakat}>Be Part of the Pesona Batik Riau Expo</button>
          </div>
        </section>

        {/* ==================== 7. TICKET SIMULATION FORM & LOCATION MAP ==================== */}
        <section id="tiket" style={styles.sectionCard}>
          <div style={styles.tiketLayoutFlex}>
            <div style={styles.tiketInfoSide}>
              <h2 style={styles.sectionTitle}>E-Ticket & Visitor Registration</h2>
              <p style={{ lineHeight: '1.6', color: '#475569', marginBottom: '20px' }}>
                Register now and enjoy an unforgettable cultural experience. Get full access to the historical galleries, main night fashion show, and a shopping discount voucher worth **IDR 50,000**.
              </p>
              
              <h4 style={{ color: '#0f172a', marginBottom: '10px' }}>📍 Venue Location</h4>
              <div style={styles.mapWrapper}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6896229562725!2d101.41786527585642!3d0.4947477637841198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a96324d33939%3A0x6b4907106095567b!2sBallroom%20Ska%20Co%20Ex!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" 
                  style={styles.mapIframe}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ska Co Ex Venue Map"
                ></iframe>
              </div>
            </div>

            <div style={styles.tiketWidgetForm}>
              <h4 style={{ margin: '0 0 15px 0', color: '#1e3a8a', textAlign: 'center' }}>Ticket Booking Simulation</h4>
              
              <label style={styles.formLabel}>Register As</label>
              <select value={daftarSebagai} onChange={(e) => setDaftarSebagai(e.target.value)} style={styles.formInput}>
                <option value="General Visitor">General Visitor (Public)</option>
                <option value="Business Buyer">Business Buyer / Retail Investor</option>
                <option value="Media Press">Media / Press Crew</option>
                <option value="Cultural Student">Student / Academician</option>
              </select>

              <label style={styles.formLabel}>Choose Ticket Category</label>
              <select value={jenisTiket} onChange={(e) => setJenisTiket(e.target.value)} style={styles.formInput}>
                <option value="reguler">Regular Pass (IDR 25,000)</option>
                <option value="vip">VIP Cultural Pass (IDR 75,000)</option>
              </select>

              <label style={styles.formLabel}>Ticket Quantity</label>
              <input 
                type="number" 
                min="1" 
                value={tiketQty} 
                onChange={(e) => setTiketQty(parseInt(e.target.value) || 1)} 
                style={styles.formInput} 
              />

              <div style={styles.billingSummary}>
                <span>Total Payment:</span>
                <strong style={{ fontSize: '20px', color: '#b45309' }}>IDR {totalBayar.toLocaleString('id-ID')}</strong>
              </div>

              <button onClick={() => alert(`Registration Successful as ${daftarSebagai}! Your E-Ticket code has been generated.`)} style={styles.btnCheckoutPremium}>
                Checkout Ticket Now
              </button>
            </div>
          </div>
        </section>

        {/* ==================== 8. ACCORDION FAQ SECTION ==================== */}
        <section id="faq" style={styles.sectionCard}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p style={styles.sectionSubtitle}>Find instant answers about entry policies, schedules, and partnerships</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {FAQS.map((faq, idx) => (
              <div key={idx} style={styles.faqBlock}>
                <div style={styles.faqQuestionRow} onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                  <span style={{ fontWeight: '600', color: '#0f172a' }}>{faq.q}</span>
                  <span style={{ fontSize: '18px' }}>{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && (
                  <div style={styles.faqAnswerRow}>
                    <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ==================== 9. BRAND SUPPORTERS & NEW PARTNERSHIP CTA ==================== */}
        <section style={styles.partnershipSection}>
          <div style={styles.sponsorBar}>
            <p style={styles.brandTitleHeader}>OFFICIAL EVENT SPONSORS</p>
            <div style={styles.sponsorLogos}>
              <span>🏢 Kemenparekraf RI</span> <span>⚜️ Pemprov Riau</span> <span>🏛️ Dinas Perindustrian Pekanbaru</span> <span>💳 Bank Riau Kepri Syariah</span>
            </div>
          </div>

          <div style={styles.medpartBar}>
            <p style={styles.brandTitleHeader}>OFFICIAL MEDIA PARTNERS</p>
            <div style={styles.medpartLogos}>
              <span>📺 WastraTV National</span> <span>📻 Melayu FM Broadcast</span> <span>📰 Riau Chronicles Press</span> <span>📸 InfoPKU Digital Media</span>
            </div>
          </div>

          {/* INTERNAL FORM TRIGGER - SELECTION FOR SPONSOR / MEDPART */}
          <div style={styles.partnershipCtaBox}>
            <p style={styles.partnershipCtaText}>Want to amplify your brand visibility or cover our cultural night?</p>
            <button onClick={() => setIsPartnerModal(true)} style={styles.btnPartnerCta}>
              🤝 Join as Sponsor / Media Partner
            </button>
          </div>
        </section>

      </div>

      {/* ==================== 10. DEDICATED CONTACT & FOOTER ==================== */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <h4 style={{ color: '#fbbf24', margin: '0 0 10px 0' }}>ExhibatikRiau EO</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>Organizers of premium art, cultural, and national creative industry exhibitions.</p>
          </div>
          <div>
            <h4 style={{ color: '#fff', margin: '0 0 10px 0' }}>Official Secretariat Contact</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0' }}>📧 info@exhibatikriau.co.id</p>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0' }}>📞 +62 813-7848-7119 (Registration Desk)</p>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0' }}>📍 Ska Co Ex Convention Office, Blok H4, Pekanbaru</p>
          </div>
        </div>
        <hr style={{ borderColor: '#334155', margin: '20px 0' }} />
        <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 10px 0' }}>© 2026 Pesona Batik Riau Expo Organizer. All Rights Reserved. Batik Riau Theme Exclusive Design.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap', marginTop: '10px' }}>
          <a href="https://www.instagram.com/kemenparekraf.ri" target="_blank" rel="noreferrer" style={{ ...styles.linkSosmedKemenparekraf, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
            </svg>
            Official Instagram Kemenparekraf RI: @kemenparekraf.ri
          </a>
          <a href="https://www.facebook.com/kemenparekraf.ri" target="_blank" rel="noreferrer" style={{ ...styles.linkSosmedKemenparekraf, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z" fill="currentColor"/>
            </svg>
            Official Facebook Kemenparekraf RI
          </a>
        </div>
      </footer>

      {/* TENANT REGISTRATION MODAL */}
      {isTenantModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Tenant Partnership Form</h3>
            <p style={{ fontSize: '13px', color: '#475569' }}>Register your brand / Batik House for main exhibition slot curating.</p>
            
            <label style={styles.formLabel}>Register As Tenant Category</label>
            <select value={tenantRole} onChange={(e) => setTenantRole(e.target.value)} style={styles.formInput}>
              <option value="Local Artisan">Local Artisan / Individual Weaver</option>
              <option value="Commercial MSME">Commercial MSME / Boutique Store</option>
              <option value="Textile Designer">Textile & Fashion Designer</option>
              <option value="Sponsor Vendor">Sponsor Corporate Vendor Booth</option>
            </select>

            <input type="text" placeholder="Brand Name / Batik House" style={styles.formInput} />
            <input type="text" placeholder="Product Description Ex: Silk, Cotton, Shawls" style={styles.formInput} />
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button onClick={() => alert(`Registration files as ${tenantRole} submitted to the Curatorial Team!`)} style={styles.btnCheckoutPremium}>Submit Files</button>
              <button onClick={() => setIsTenantModal(false)} style={styles.btnBatal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL BARU: PENDAFTARAN SPONSOR ATAU MEDIA PARTNER (BISA MILIH) */}
      {isPartnerModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Event Partnership Form</h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '15px' }}>Collaborate with Pesona Batik Riau Expo 2026 to elevate local ecosystems.</p>
            
            <label style={styles.formLabel}>Select Partnership Type</label>
            <select 
              value={partnerType} 
              onChange={(e) => setPartnerType(e.target.value)} 
              style={styles.formInput}
            >
              <option value="Sponsor">Official Event Sponsor</option>
              <option value="Media Partner">Official Media Partner</option>
            </select>

            <label style={styles.formLabel}>Company / Agency Name</label>
            <input 
              type="text" 
              placeholder="e.g., PT Radja Kain Riau" 
              value={namaInstansi}
              onChange={(e) => setNamaInstansi(e.target.value)}
              style={styles.formInput} 
            />

            <label style={styles.formLabel}>Representative Email</label>
            <input type="email" placeholder="partnership@company.com" style={styles.formInput} />

            <label style={styles.formLabel}>Proposed Collaboration Notes</label>
            <textarea 
              placeholder={partnerType === 'Sponsor' ? "e.g., Gold Sponsorship Packages, Main Stage Branding..." : "e.g., Live Streaming Press Coverage, Weekly Radio Ads..."} 
              style={{ ...styles.formInput, height: '80px', resize: 'none' }}
            />
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <button 
                onClick={() => {
                  alert(`Thank you! Proposal for ${partnerType} from "${namaInstansi || 'Your Agency'}" has been successfully sent to our Public Relations team.`);
                  setIsPartnerModal(false);
                  setNamaInstansi('');
                }} 
                style={styles.btnCheckoutPremium}
              >
                Submit Proposal
              </button>
              <button onClick={() => setIsPartnerModal(false)} style={styles.btnBatal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ==================== CODE INLINE STYLES ====================
const styles = {
  container: { fontFamily: "'Cinzel', 'Playfair Display', 'Segoe UI', sans-serif", backgroundColor: '#f1f5f9', color: '#1e293b', minHeight: '100vh', margin: 0 },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0f172a', padding: '15px 6%', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 15px rgba(0,0,0,0.2)' },
  logoText: { fontSize: '18px', fontWeight: 'bold', color: '#fbbf24', letterSpacing: '2px' },
  navLinks: { display: 'flex', gap: '25px', alignItems: 'center' },
  navLink: { color: '#cbd5e1', textDecoration: 'none', fontSize: '13px', fontWeight: '500', letterSpacing: '1px' },
  btnNavTiket: { backgroundColor: '#fbbf24', color: '#0f172a', padding: '8px 18px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' },
  
  heroSection: { backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', textAlign: 'center', padding: '100px 20px 80px 20px' },
  heroOverlay: { maxWidth: '900px', margin: '0 auto' },
  taglineBadge: { display: 'inline-block', backgroundColor: '#b45309', color: '#fff', fontSize: '11px', padding: '4px 14px', borderRadius: '20px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' },
  heroTitle: { fontSize: '42px', fontWeight: '800', color: '#fbbf24', margin: '0 0 20px 0', letterSpacing: '1px' },
  heroSubtitle: { fontSize: '16px', lineHeight: '1.8', color: '#e2e8f0', marginBottom: '35px' },
  infoMetaGrid: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '35px' },
  infoMetaBox: { backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '6px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.2)' },
  
  videoContainer: { position: 'relative', width: '100%', maxWidth: '640px', margin: '0 auto 35px auto', aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' },
  videoIframe: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' },

  countdownContainer: { backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: '20px', borderRadius: '8px', maxWidth: '450px', margin: '0 auto 40px auto', border: '1px solid #b45309' },
  timerFlex: { display: 'flex', justifyContent: 'space-around' },
  timeUnit: { display: 'flex', flexDirection: 'column', span: { fontSize: '24px', fontWeight: 'bold', color: '#fff' }, label: { fontSize: '11px', color: '#94a3b8' } },
  
  heroCtaGroup: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
  btnHeroPrimary: { backgroundColor: '#2563eb', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' },
  btnHeroSecondary: { backgroundColor: 'transparent', color: '#fbbf24', padding: '12px 26px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', border: '2px solid #fbbf24' },

  wrapper: { maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' },
  
  sectionCard: { backgroundColor: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' },
  sectionCardGold: { backgroundColor: '#fef3c7', padding: '40px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #fde68a' },
  sectionHeader: { textAlign: 'center', marginBottom: '35px' },
  sectionTitle: { fontSize: '26px', color: '#0f172a', margin: '0 0 10px 0', fontWeight: '700' },
  sectionSubtitle: { fontSize: '14px', color: '#64748b', margin: 0 },

  filosofiGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' },
  filosofiCard: { backgroundColor: '#f8fafc', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
  motifImage: { height: '160px', backgroundSize: 'cover', backgroundPosition: 'center' },
  filosofiBody: { padding: '20px' },
  motifNama: { color: '#0f172a', margin: '0 0 10px 0', fontSize: '16px' },
  motifArti: { fontSize: '13px', fontStyle: 'italic', color: '#475569', lineHeight: '1.5' },

  timelineContainer: { position: 'relative', maxWidth: '900px', margin: '0 auto', padding: '20px 0' },
  timelineItem: { display: 'flex', marginBottom: '30px', flexWrap: 'nowrap' },
  timelineTimeBox: { width: '110px', flexShrink: 0, textAlign: 'right', paddingRight: '20px', paddingTop: '12px' },
  timelineTimeText: { fontSize: '14px', fontWeight: 'bold', color: '#2563eb', whiteSpace: 'nowrap' },
  timelineDividerNode: { position: 'relative', width: '40px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' },
  timelineCircleMarker: { width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#b45309', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', zIndex: 2 },
  timelineVerticalLine: { position: 'absolute', top: '30px', bottom: '-35px', width: '2px', backgroundColor: '#e2e8f0', zIndex: 1 },
  timelineContentCard: { flexGrow: 1, backgroundColor: '#f8fafc', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', boxShadow: '0 2px 5px rgba(0,0,0,0.02)', flexWrap: 'wrap' },
  timelineCardImg: { width: '150px', minHeight: '110px', backgroundSize: 'cover', backgroundPosition: 'center' },
  timelineCardBody: { padding: '15px 20px', flex: 1 },
  timelineCardTitle: { fontSize: '16px', color: '#0f172a', margin: '0 0 6px 0', fontWeight: '700' },
  timelineCardDesc: { fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: 0 },

  reviewGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' },
  reviewCard: { backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.01)' },
  reviewStars: { color: '#fbbf24', marginBottom: '10px', fontSize: '14px' },
  reviewText: { fontStyle: 'italic', fontSize: '13px', color: '#475569', lineHeight: '1.6', margin: '0 0 12px 0' },
  reviewUser: { borderTop: '1px dashed #cbd5e1', paddingTop: '8px', fontSize: '13px' },

  exhibitorHeaderFlex: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '30px' },
  searchField: { padding: '12px 18px', borderRadius: '30px', border: '1px solid #cbd5e1', width: '320px', outline: 'none' },
  
  tenantGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' },
  tenantCard: { display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' },
  tenantImg: { width: '100%', height: '200px', objectFit: 'cover' },
  tenantInfo: { padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '10px' },
  tenantNama: { margin: '0', fontSize: '16px', color: '#0f172a', fontWeight: '700' },
  tenantProduk: { fontSize: '13px', color: '#475569', margin: '0', lineHeight: '1.5' },
  btnKunjungi: { marginTop: 'auto', backgroundColor: '#0f172a', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' },

  manfaatHeaderFlex: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' },
  manfaatGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' },
  manfaatCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: '25px', borderRadius: '8px', textAlign: 'center' },
  manfaatIcon: { fontSize: '32px', marginBottom: '10px', textAlign: 'center' },
  btnCtaMasyarakat: { backgroundColor: '#b45309', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 10px rgba(180,83,9,0.3)' },

  tiketLayoutFlex: { display: 'flex', gap: '40px', flexWrap: 'wrap' },
  tiketInfoSide: { flex: 1, minWidth: '300px' },
  mapWrapper: { width: '100%', height: '240px', borderRadius: '8px', overflow: 'hidden', border: '2px solid #e2e8f0', marginTop: '10px' },
  mapIframe: { width: '100%', height: '100%', border: '0' },
  tiketWidgetForm: { flex: 1, minWidth: '300px', backgroundColor: '#f1f5f9', padding: '25px', borderRadius: '10px', border: '1px solid #cbd5e1' },
  formLabel: { display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '6px', color: '#475569' },
  formInput: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '15px', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' },
  billingSummary: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderTop: '1px dashed #cbd5e1', borderBottom: '1px dashed #cbd5e1', marginBottom: '20px' },
  btnCheckoutPremium: { width: '100%', backgroundColor: '#fbbf24', color: '#0f172a', border: 'none', padding: '14px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' },
  btnBatal: { backgroundColor: '#e2e8f0', color: '#475569', border: 'none', padding: '14px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' },

  faqBlock: { borderBottom: '1px solid #e2e8f0', padding: '15px 0' },
  faqQuestionRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '5px 0' },
  faqAnswerRow: { paddingTop: '10px' },

  partnershipSection: { borderTop: '1px solid #e2e8f0', paddingTop: '10px' },
  sponsorBar: { textAlign: 'center', padding: '20px 0 15px 0' },
  medpartBar: { textAlign: 'center', padding: '15px 0 20px 0' },
  brandTitleHeader: { color: '#94a3b8', fontSize: '11px', letterSpacing: '3px', margin: '0 0 15px 0', fontWeight: 'bold' },
  sponsorLogos: { display: 'flex', justifyContent: 'center', gap: '35px', flexWrap: 'wrap', fontSize: '14px', fontWeight: 'bold', color: '#475569' },
  medpartLogos: { display: 'flex', justifyContent: 'center', gap: '35px', flexWrap: 'wrap', fontSize: '14px', fontWeight: '600', color: '#64748b' },
  partnershipCtaBox: { textAlign: 'center', padding: '20px 0 10px 0', borderTop: '1px dashed #cbd5e1', marginTop: '15px' },
  partnershipCtaText: { margin: '0 0 12px 0', fontSize: '14px', color: '#475569', fontWeight: '500' },
  btnPartnerCta: { backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: '600', fontSize: '13px', cursor: 'pointer', boxShadow: '0 2px 8px rgba(30,58,138,0.2)' },
  
  footer: { backgroundColor: '#0f172a', color: '#cbd5e1', padding: '40px 6%', marginTop: '40px' },
  footerGrid: { display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' },
  linkSosmedKemenparekraf: { fontSize: '13px', color: '#93c5fd', textDecoration: 'none', fontWeight: '500' },

  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1100 },
  modalContent: { backgroundColor: '#fff', padding: '30px', borderRadius: '10px', maxWidth: '400px', width: '90%' }
};

export default Dashboard;