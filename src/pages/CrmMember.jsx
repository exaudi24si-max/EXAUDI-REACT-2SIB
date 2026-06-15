import { crmProfile, crmPurchaseHistory, crmRecommendations, crmVouchers, crmReminders } from '../data/crmData';
import { FiGift, FiClock, FiTrendingUp, FiPackage } from 'react-icons/fi';

export default function CrmMember() {
  return (
    <div className="space-y-8 pb-10 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Member Portal</h1>
          <p className="text-sm text-slate-500 mt-2">Lihat status membership, poin, voucher, riwayat pembelian, dan rekomendasi personal.</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-slate-900">Halo, {crmProfile.name}</h2>
          <p className="text-sm text-slate-500 mt-2">Level {crmProfile.membership} · Bergabung sejak {crmProfile.joinDate}</p>
          <div className="mt-6 grid gap-4">
            <Stat label="Poin" value={crmProfile.points} icon={<FiTrendingUp size={20} />} />
            <Stat label="Kategori Favorit" value={crmProfile.favoriteCategory} icon={<FiPackage size={20} />} />
            <Stat label="Menuju Platinum" value={`${crmProfile.nextTierProgress}%`} icon={<FiClock size={20} />} />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-slate-900">Voucher Saya</h2>
          <div className="mt-5 space-y-3">
            {crmVouchers.map((voucher) => (
              <div key={voucher.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-bold text-slate-900">{voucher.code}</p>
                  <span className="text-[11px] uppercase tracking-widest text-slate-500">{voucher.status}</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">{voucher.description}</p>
                <p className="text-[11px] text-slate-400 mt-3">Berlaku sampai {voucher.validUntil}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-slate-900">Reminder Pembelian Ulang</h2>
          <div className="mt-5 space-y-3">
            {crmReminders.map((reminder) => (
              <div key={reminder.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <p className="font-bold text-slate-900">{reminder.product}</p>
                <p className="text-xs text-slate-500 mt-1">Jadwal: {reminder.nextPurchase}</p>
                <p className="text-[11px] text-slate-400 mt-2">Interval {reminder.intervalDays} hari</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-black text-slate-900">Riwayat Pembelian</h2>
            <span className="text-xs uppercase tracking-widest text-slate-400">Terakhir 3 transaksi</span>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500">
                <tr>
                  <th className="px-4 py-3">Order</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Poin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {crmPurchaseHistory.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-bold text-slate-900">{order.orderId}</td>
                    <td className="px-4 py-4 text-slate-500">{order.date}</td>
                    <td className="px-4 py-4 text-slate-700">Rp {order.total.toLocaleString('id-ID')}</td>
                    <td className="px-4 py-4 text-slate-700">{order.pointsEarned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-black text-slate-900">Rekomendasi Produk</h2>
          <div className="mt-5 space-y-4">
            {crmRecommendations.map((item) => (
              <div key={item.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900">{item.product}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.reason}</p>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-slate-500">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Stat({ label, value, icon }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white text-slate-700 flex items-center justify-center">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">{label}</p>
        <p className="text-2xl font-black text-slate-900 mt-1">{value}</p>
      </div>
    </div>
  );
}
