export const crmSummary = {
  totalMembers: 312,
  silver: 134,
  gold: 96,
  platinum: 82,
  totalPoints: 12450,
  activeVouchers: 8,
  remindersDue: 16,
};

export const crmMemberLevels = [
  { id: 1, name: 'Silver', minSpend: 1000000, discountRate: 3, pointMultiplier: 1.0 },
  { id: 2, name: 'Gold', minSpend: 3000000, discountRate: 5, pointMultiplier: 1.2 },
  { id: 3, name: 'Platinum', minSpend: 6000000, discountRate: 8, pointMultiplier: 1.5 },
];

export const crmCustomers = [
  { id: 1, name: 'Siti Aminah', level: 'Gold', totalSpent: 4200000, points: 520, lastPurchase: '2026-06-02', favoriteCategory: 'Obat' },
  { id: 2, name: 'Budi Santoso', level: 'Silver', totalSpent: 1250000, points: 210, lastPurchase: '2026-06-08', favoriteCategory: 'Vitamin' },
  { id: 3, name: 'Dewi Persik', level: 'Platinum', totalSpent: 9500000, points: 1320, lastPurchase: '2026-06-10', favoriteCategory: 'Obat' },
  { id: 4, name: 'Irfan Hakim', level: 'Gold', totalSpent: 5200000, points: 640, lastPurchase: '2026-06-05', favoriteCategory: 'Alat Kesehatan' },
];

export const crmVouchers = [
  { id: 1, code: 'CRM10', description: 'Diskon 10% untuk member Silver ke atas', validUntil: '2026-07-15', status: 'Aktif' },
  { id: 2, code: 'OBAT20', description: 'Potongan Rp 20.000 untuk pembelian obat minimal Rp 150.000', validUntil: '2026-06-30', status: 'Aktif' },
  { id: 3, code: 'FREEVIT', description: 'Gratis ongkir untuk pembelian vitamin', validUntil: '2026-08-01', status: 'Aktif' },
];

export const crmRecommendations = [
  { id: 1, product: 'Vitamin C 1000mg', reason: 'Pelanggan sering membeli suplemen imun', category: 'Vitamin' },
  { id: 2, product: 'Paracetamol 500mg', reason: 'Obat pereda nyeri yang sering dibeli bersama resep', category: 'Obat' },
  { id: 3, product: 'Tensimeter Digital', reason: 'Pelanggan memiliki riwayat obat tekanan darah', category: 'Alat Kesehatan' },
];

export const crmReminders = [
  { id: 1, product: 'Vitamin C 1000mg', nextPurchase: '2026-06-20', intervalDays: 30, status: 'Menunggu' },
  { id: 2, product: 'Paracetamol 500mg', nextPurchase: '2026-06-18', intervalDays: 14, status: 'Menunggu' },
];

export const crmPurchaseHistory = [
  { id: 1, orderId: '#ORD-101', date: '2026-06-02', total: 235000, pointsEarned: 23, status: 'Selesai' },
  { id: 2, orderId: '#ORD-094', date: '2026-05-25', total: 98000, pointsEarned: 9, status: 'Selesai' },
  { id: 3, orderId: '#ORD-088', date: '2026-05-10', total: 145000, pointsEarned: 14, status: 'Selesai' },
];

export const crmProfile = {
  name: 'Siti Aminah',
  membership: 'Gold',
  joinDate: '2025-09-10',
  email: 'siti.aminah@example.com',
  phone: '0812-3456-7890',
  points: 520,
  nextTier: 'Platinum',
  nextTierProgress: 68,
  favoriteCategory: 'Obat',
};
