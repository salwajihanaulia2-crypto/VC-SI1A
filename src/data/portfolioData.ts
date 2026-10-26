import { Project, InformationRequirement, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Salwa Jihan Aulia',
  role: 'Mahasiswa Sistem Informasi',
  university: 'Universitas Komputama Cilacap',
  major: 'Program Studi Sistem Informasi',
  cohortYear: '2026',
  location: 'Cilacap, Jawa Tengah, Indonesia',
  avatarImage: '/assets/aistudio/WhatsApp_Image_2026-10-26_at_01.02.36_f7bed686.jpeg',
  originalPdfPhoto: '/salwa_photo_0.jpg',
  pdfPath: '/assets/aistudio/Portofolio_67c513ec.pdf',
  objective:
    'Memenuhi tugas kuliah sekaligus menampilkan karya dan kemampuan saya di bidang sistem informasi.',
  profileStatement:
    'Saya mahasiswa Sistem Informasi yang terbiasa mengamati proses bisnis nyata, menemukan masalah informasinya, lalu mengusulkan sistem yang sesuai kebutuhan, bukan sekadar menyebut aplikasi.',
  contact: {
    email: 'salwajihanaulia2@gmail.com',
    phone: '0831 6958 0604',
    phoneClean: '6283169580604',
    instagram: '@qulia_syae',
    instagramUrl: 'https://instagram.com/qulia_syae',
  },
};

export const projectsData: Project[] = [
  {
    id: 'toko-jalu-jaya',
    title: 'Analisis Sistem Informasi Toko Jalu Jaya',
    subtitle: 'Pemetaan Proses Bisnis & Usulan Arsitektur TPS, MIS, dan DSS',
    course: 'Komputer Bisnis',
    year: '2026',
    role: 'Analis Sistem',
    team: 'Tugas Individu',
    image: '/src/assets/images/case_study_toko_jalu_jaya_1792954075425.jpg',
    objective:
      'Memetakan proses penjualan toko kelontong dan ikan segar dengan layanan pesan antar, menemukan masalah informasinya, dan mengusulkan sistem yang sesuai.',
    results:
      'Tabel kebutuhan informasi (input, proses, output, pengguna), usulan TPS, MIS, dan DSS sederhana, serta diagram alur dari pesanan sampai keputusan belanja.',
    summary:
      'Studi kasus komprehensif mengamati alur operasional toko fisik ritel sembako dan penjualan ikan segar perishable yang melayani pesan antar warga sekitar.',
    details: {
      problemContext:
        'Toko Jalu Jaya menghadapi tantangan unik: komoditas ikan segar memiliki umur simpan sangat pendek (perishable goods) dengan harga fluktuatif setiap subuh di pasar lelang, sementara sembako bersifat non-perishable. Pesanan antar pelanggan lewat telepon/pesan sering tidak tercatat rapi, stok fisik sering berselisih dengan uang kas di laci, dan pemilik kesulitan menentukan berapa kilogram ikan segar yang harus dibeli esok harinya agar tidak membusuk atau kehabisan.',
      systemArchitecture: [
        {
          level: 'Level 1: Operasional',
          name: 'TPS (Transaction Processing System)',
          description:
            'Menangani pencatatan transaksi kasir harian dan antrean pengiriman pesan antar secara terstruktur dan cepat.',
          features: [
            'Pencatatan kasir instan untuk barang timbangan (ikan) & barcode sembako',
            'Modul pesanan pesan antar (alamat, nomor kontak, ongkos kirim, jadwal antar)',
            'Penerbitan nota belanja dan struk kurir delivery otomatis',
            'Pencatatan kas masuk dan metode bayar (Tunai & Transfer)',
          ],
        },
        {
          level: 'Level 2: Manajerial',
          name: 'MIS (Management Information System)',
          description:
            'Menyajikan rekapitulasi performa toko berkala untuk evaluasi operasional oleh pemilik atau pengelola.',
          features: [
            'Laporan rekap omzet harian, mingguan, dan bulanan secara terpilah',
            'Analisis kontribusi margin laba kotor: ikan segar vs sembako harian',
            'Monitoring barang fast-moving dan peringatan stok sembako menipis',
            'Laporan evaluasi radius layanan pesan antar dan ketepatan kurir',
          ],
        },
        {
          level: 'Level 3: Strategis',
          name: 'DSS (Decision Support System)',
          description:
            'Membantu pemilik toko mengambil keputusan belanja harian ke pasar lelang ikan dengan rekomendasi cerdas berbasis data historis.',
          features: [
            'Rekomendasi kuota belanja ikan harian berdasarkan moving-average 3 hari',
            'Penyesuaian faktor eksternal (hari libur/akhir pekan vs hari kerja biasa)',
            'Estimasi risiko sisa ikan tak terjual dan rekomendasi harga diskon sore hari',
            'Simulasi kalkulasi modal belanja esok hari vs arus kas lancar',
          ],
        },
      ],
      deliverables: [
        'Tabel Kebutuhan Informasi Lengkap (Input, Proses, Output, Pengguna)',
        'Diagram Alir Data (DFD) & Alur Proses Bisnis dari Pesanan hingga Pengiriman',
        'Spesifikasi Perangkat Lunak Usulan (TPS, MIS, DSS Sederhana)',
        'Rancangan Formulir Transaksi Kasir dan Kurir Toko Jalu Jaya',
      ],
      impact:
        'Mengubah alur informal berbasis ingatan menjadi alur kerja berbasis data terstruktur yang mampu memangkas potensi selisih kas dan menekan kerugian ikan rusak hingga estimasi 60%.',
    },
  },
  {
    id: 'manajemen-informasi-islam',
    title: 'Makalah Manajemen Informasi Islam',
    subtitle: 'Kajian Etika, Akuntabilitas, dan Tata Kelola Informasi dalam Perspektif Nilai Islam',
    course: 'Pendidikan Agama',
    year: '2026',
    role: 'Penyusun Makalah & Presenter',
    team: 'Kolaborasi Bersama Satu Rekan',
    image: '/src/assets/images/case_study_islamic_information_1792954075916.jpg',
    objective: 'Membahas pengelolaan informasi dari sudut pandang Islam.',
    results: 'Makalah lengkap dan slide presentasi yang disusun dari makalah tersebut.',
    summary:
      'Kajian akademik mendalam mengenai integrasi prinsip moral Islam (amanah, tabayyun, fathanah, dan keadilan) dalam tata kelola sistem informasi modern dan etika digital.',
    details: {
      problemContext:
        'Di era banjir informasi digital dan maraknya disinformasi serta kebocoran data pribadi, pengelolaan sistem informasi seringkali hanya memprioritaskan efisiensi teknis semata tanpa landasan etika yang kokoh. Makalah ini mengkaji bagaimana prinsip-prinsip Islam dapat menjadi pilar fundamental dalam etika data, keamanan informasi, serta integritas penyampaian berita di ranah teknologi.',
      deliverables: [
        'Naskah Makalah Akademik Lengkap Terstruktur (Bab I s/d Bab IV)',
        'Slide Presentasi Edukatif Berbasis Visual Hierarchy',
        'Matriks Perbandingan Nilai Etika Islam vs Standar Tata Kelola TI Modern (ISO/COBIT)',
        'Rangkuman Panduan Etika Bermedia Sosial & Berbagi Data bagi Mahasiswa',
      ],
      impact:
        'Menjadi acuan presentasi kelas yang menginspirasi diskusi tentang urgensi tabayyun (verifikasi data) sebelum data diproses dalam sistem enterprise.',
      islamicPrinciples: [
        {
          name: 'Tabayyun',
          arabic: 'التثبت والتبين',
          meaning: 'Verifikasi, validasi, dan klarifikasi data sebelum disebarluaskan atau diproses.',
          applicationInIT:
            'Penerapan data cleansing, validasi input formulir, dan mekanisme verifikasi dua arah (2FA) untuk mencegah penyebaran data keliru.',
        },
        {
          name: 'Amanah',
          arabic: 'الأمانة',
          meaning: 'Tanggung jawab penuh dan menjaga kerahasiaan amanat yang dipercayakan.',
          applicationInIT:
            'Perlindungan data pribadi (GDPR/UU PDP), enkripsi data sensitif pengguna, dan hak akses berbasis peran (RBAC).',
        },
        {
          name: 'Shiddiq',
          arabic: 'الصدق',
          meaning: 'Kejujuran dan integritas dalam menyajikan kebenaran fakta tanpa manipulasi.',
          applicationInIT:
            'Integritas data (Data Integrity), audit logging transaksi, dan pelaporan keuangan sistem yang transparan tanpa pemalsuan data.',
        },
        {
          name: 'Fathanah',
          arabic: 'الفطانة',
          meaning: 'Kecerdasan, kebijaksanaan, dan kepakaran dalam mengelola urusan sistem.',
          applicationInIT:
            'Perancangan sistem informasi yang efisien, pemilihan arsitektur yang tepat guna, serta pemecahan masalah dengan algoritma cerdas.',
        },
      ],
    },
  },
];

export const informationRequirementsData: InformationRequirement[] = [
  {
    id: 'req-1',
    subsystem: 'TPS',
    name: 'Pencatatan Penjualan Langsung di Toko',
    input: 'Barcode produk, kuantiti/berat ikan (kg), harga per satuan, nominal bayar tunai/QRIS',
    process: 'Penghitungan subtotal & total belanja, kalkulasi kembalian, pemotongan stok otomatis',
    output: 'Struk transaksi belanja cetak/digital, log kasir harian',
    users: 'Kasir Toko Jalu Jaya',
  },
  {
    id: 'req-2',
    subsystem: 'TPS',
    name: 'Penerimaan & Antrean Pesanan Antar (Delivery)',
    input: 'Nama pelanggan, nomor WhatsApp, alamat tujuan pengantaran, daftar pesanan barang & ikan',
    process: 'Pengecekan ketersediaan stok, kalkulasi biaya kirim berdasar zona radius, penugasan kurir',
    output: 'Lembar invoice pesanan jalan kurir, antrean daftar antar',
    users: 'Admin Pesanan & Kurir Delivery',
  },
  {
    id: 'req-3',
    subsystem: 'TPS',
    name: 'Pencatatan Penerimaan Barang Kulakan Ikan Segar',
    input: 'Nota pembelian pasar lelang subuh, jenis ikan (Mujair, Lele, Nila, Tongkol), total bobot (kg), modal beli',
    process: 'Pencatatan harga pokok penjualan (HPP), pembaharuan stok timbangan gudang dingin',
    output: 'Laporan penerimaan barang harian, kartu stok ikan',
    users: 'Petugas Gudang / Bagian Kulakan',
  },
  {
    id: 'req-4',
    subsystem: 'MIS',
    name: 'Rekapitulasi Penjualan Harian Terpilah',
    input: 'Log seluruh transaksi TPS (toko fisik + pesan antar) dalam rentang waktu 24 jam',
    process: 'Agregasi total omzet, pemisahan omzet kategori ikan segar vs produk kelontong kemasan',
    output: 'Dashboard ringkasan laba kotor harian dan rasio penjualan tunai vs nontunai',
    users: 'Pemilik Toko Jalu Jaya',
  },
  {
    id: 'req-5',
    subsystem: 'MIS',
    name: 'Monitoring Perputaran Stok & Barang Menipis',
    input: 'Data mutasi stok keluar dari kasir dan ambang batas stok minimum (safety stock)',
    process: 'Pengecekan selisih stok sisa vs safety stock untuk sembako seperti minyak, beras, telur',
    output: 'Daftar peringatan restock sembako mingguan',
    users: 'Pemilik & Bagian Pengadaan',
  },
  {
    id: 'req-6',
    subsystem: 'DSS',
    name: 'Rekomendasi Kuota Belanja Ikan Segar Subuh',
    input: 'Rata-rata penjualan harian 3 hari ke belakang, sisa stok malam ini, kalender (akhir pekan/pasar ramai)',
    process: 'Algoritma moving-average tertimbang dengan buffer toleransi susut 5%',
    output: 'Estimasi rekomendasi kilogram belanja tiap jenis ikan untuk subuh berikutnya',
    users: 'Pemilik Toko (Penentu Belanja Subuh)',
  },
  {
    id: 'req-7',
    subsystem: 'DSS',
    name: 'Keputusan Kebijakan Diskon Cuci Gudang Ikan Sore',
    input: 'Jam operasional saat ini (misal pukul 16:30) dan sisa stok ikan segar yang belum terjual',
    process: 'Komparasi sisa stok dengan biaya risiko pembusukan vs margin HPP',
    output: 'Rekomendasi besaran potongan harga diskon sore hari (10% - 25%) agar stok habis terjual',
    users: 'Kasir & Pemilik Toko',
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Analisis dan Perancangan Sistem',
    description:
      'Mendiagnosis kebutuhan operasional organisasi, memetakan use case, dan merancang spesifikasi sistem informasi terstruktur.',
    competencies: [
      'Data Flow Diagram (DFD) Level 0 s/d Level 2',
      'Entity Relationship Diagram (ERD)',
      'Spesifikasi Kebutuhan Sistem (SRS Sederhana)',
      'Perancangan Antarmuka Kasir & Alur Pengguna (UI Wireframe)',
    ],
    deliverableExamples: [
      'Arsitektur TPS, MIS, DSS Toko Jalu Jaya',
      'Matriks Kebutuhan Informasi Input-Proses-Output',
    ],
  },
  {
    title: 'Manajemen Basis Data',
    description:
      'Merancang skema relasional, normalisasi tabel data bisnis, dan memastikan integritas data terpusat.',
    competencies: [
      'Normalisasi Tabel (1NF, 2NF, 3NF)',
      'Relational Database Modeling (Primary & Foreign Keys)',
      'Query SQL Dasar (SELECT, JOIN, GROUP BY, Aggregate)',
      'Penyusunan Kamus Data (Data Dictionary)',
    ],
    deliverableExamples: [
      'Skema Tabel Transaksi Toko Jalu Jaya',
      'Kamus Data Komoditas Ikan & Sembako',
    ],
  },
  {
    title: 'Pengembangan Web',
    description:
      'Membangun antarmuka web yang bersih, responsif, berkinerja tinggi, dan nyaman digunakan pengguna akhir.',
    competencies: [
      'HTML5, Modern CSS & Tailwind Framework',
      'React & TypeScript Komponen Terstruktur',
      'Desain Responsif Mobile-First & Desktop',
      'Integrasi Formulir & Manajemen State Interaktif',
    ],
    deliverableExamples: [
      'Portofolio Web Interaktif Ini',
      'Simulasi Antarmuka Kasir & Dashboard MIS',
    ],
  },
  {
    title: 'Analisis Proses Bisnis',
    description:
      'Mengobservasi interaksi kerja di lapangan, menemukan bottleneck, dan mengeliminasi proses manual yang rentan kesalahan.',
    competencies: [
      'Pemetaan Alur Bisnis Nyata (Business Process Mapping)',
      'Identifikasi Masalah & Akar Masalah (Root Cause)',
      'Analisis Kebutuhan Aktor/Pengguna (Multi-Role)',
      'Usulan Rekayasa Alur Kerja Lebih Cepat & Akurat',
    ],
    deliverableExamples: [
      'Pemetaan Layanan Pesan Antar Toko Kelontong',
      'Diagram Alur dari Pemesanan s/d Keputusan Belanja',
    ],
  },
  {
    title: 'Penulisan dan Presentasi',
    description:
      'Menyusun dokumentasi teknis dan karya ilmiah akademis yang runtut, lugas, serta menyampaikannya secara meyakinkan.',
    competencies: [
      'Penyusunan Makalah Akademis Sesuai Standar Ilmiah',
      'Slide Presentasi Komunikasi Visual Terarah',
      'Penyampaian Gagasan Teknis ke Bahasa Bisnis',
      'Penerapan Etika Data & Integritas Penulisan',
    ],
    deliverableExamples: [
      'Makalah Manajemen Informasi Islam (2026)',
      'Slide Paparan Etika & Tata Kelola Sistem',
    ],
  },
];
