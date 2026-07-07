import { useState, useEffect } from 'react';
import { crmSummary, crmCustomers, crmVouchers, crmMemberLevels, crmReminders } from '../data/crmData';
import { FiTrendingUp, FiUsers, FiGift, FiBell, FiPercent, FiCreditCard, FiMessageSquare, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { feedbackAPI } from '../services/authAPI';

export default function CrmAdmin() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(true);

  const [promoForm, setPromoForm] = useState({
    title: "Promo Flash Sale",
    product: "Blackmores Vitamin C",
    discount: "30%",
    validUntil: ""
  });

  useEffect(() => {
    const saved = localStorage.getItem("promoDiskon");
    if (saved) {
      try {
        setPromoForm(JSON.parse(saved));
      } catch(e){}
    }
  }, []);

  const handleSavePromo = (e) => {
    e.preventDefault();
    localStorage.setItem("promoDiskon", JSON.stringify(promoForm));
    alert("Promo berhasil disimpan!");
  };

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await feedbackAPI.getFeedbacks();
        setFeedbacks(data);
      } catch (error) {
        console.error("Gagal mengambil feedback", error);
      } finally {
        setLoadingFeedbacks(false);
      }
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="space-y-8 pb-10 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">CRM Admin Dashboard</h1>
          <p className="text-sm text-slate-500 mt-2">Pantau pelanggan, membership, voucher, dan reminder pembelian ulang dari satu halaman.</p>
        </div>
        <Link to="/crm/customers" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-indigo-700 transition-all">
          Kelola Pelanggan
        </Link>
      </div>

      <div className="grid gap-6 xl:grid-cols-4">
        <Card icon={<FiUsers size={24} />} title="Total Member" value={crmSummary.totalMembers} />
        <Card icon={<FiTrendingUp size={24} />} title="Total Poin" value={crmSummary.totalPoints} />
        <Card icon={<FiGift size={24} />} title="Voucher Aktif" value={crmSummary.activeVouchers} />
        <Card icon={<FiBell size={24} />} title="Reminder Due" value={crmSummary.remindersDue} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <Panel title="Level Member" badge="Silver, Gold, Platinum">
            <div className="grid gap-4 md:grid-cols-3">
              {crmMemberLevels.map((level) => (
                <div key={level.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black text-slate-900">{level.name}</h3>
                  <p className="text-sm text-slate-500 mt-2">Diskon {level.discountRate}% | Poin x{level.pointMultiplier}</p>
                  <p className="text-sm text-slate-400 mt-3">Minimal pembelian Rp {level.minSpend.toLocaleString('id-ID')}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Voucher Aktif" badge="Promo & Diskon">
            <div className="space-y-3">
              {crmVouchers.map((voucher) => (
                <div key={voucher.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-black text-slate-900">{voucher.code}</h4>
                      <p className="text-xs text-slate-500 mt-1">{voucher.description}</p>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">{voucher.status}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-3">Berlaku sampai {voucher.validUntil}</p>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <Panel title="Reminder Pembelian Ulang" badge="Obat & Vitamin">
          <div className="space-y-3">
            {crmReminders.map((reminder) => (
              <div key={reminder.id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-900">{reminder.product}</p>
                <p className="text-xs text-slate-500 mt-1">Jadwal ulang: {reminder.nextPurchase}</p>
                <p className="text-[11px] text-slate-400 mt-2">Interval {reminder.intervalDays} hari — {reminder.status}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel title="Pelanggan Unggulan" badge="Top Member">
        <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-5 py-4">Nama</th>
                <th className="px-5 py-4">Level</th>
                <th className="px-5 py-4">Total Belanja</th>
                <th className="px-5 py-4">Poin</th>
                <th className="px-5 py-4">Terakhir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {crmCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-900">{customer.name}</td>
                  <td className="px-5 py-4 text-slate-500">{customer.level}</td>
                  <td className="px-5 py-4 text-slate-700">Rp {customer.totalSpent.toLocaleString('id-ID')}</td>
                  <td className="px-5 py-4 text-slate-700">{customer.points}</td>
                  <td className="px-5 py-4 text-slate-500">{customer.lastPurchase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* Feedback Panel */}
      <Panel title="Feedback Member" badge="Masukan & Rating">
        {loadingFeedbacks ? (
          <p className="text-slate-500 text-sm">Memuat feedback...</p>
        ) : feedbacks.length === 0 ? (
          <div className="text-center py-10 rounded-2xl bg-slate-50 border border-slate-100">
            <FiMessageSquare size={32} className="text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm font-medium">Belum ada feedback dari member.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {feedbacks.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-lg transition-all">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-primary flex items-center justify-center font-black">
                      {item.user_name ? item.user_name.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{item.user_name || 'Anonim'}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{new Date(item.created_at).toLocaleString('id-ID')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} size={14} className={i < item.rating ? 'fill-current' : 'text-slate-300'} />
                    ))}
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-slate-100 transform rotate-45"></div>
                  <p className="text-sm text-slate-700 relative z-10">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Panel>

      {/* Promo Settings Panel */}
      <Panel title="Pengaturan Promo Diskon (Halaman Guest)" badge="CRM Promo Aktif">
        <form onSubmit={handleSavePromo} className="space-y-4 max-w-lg">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Judul Promo</label>
            <input 
              type="text" 
              className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={promoForm.title}
              onChange={(e) => setPromoForm({...promoForm, title: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nama Produk Diskon</label>
            <input 
              type="text" 
              className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={promoForm.product}
              onChange={(e) => setPromoForm({...promoForm, product: e.target.value})}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Diskon</label>
              <input 
                type="text" 
                className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                value={promoForm.discount}
                onChange={(e) => setPromoForm({...promoForm, discount: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Berlaku Sampai</label>
              <input 
                type="datetime-local" 
                className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                value={promoForm.validUntil}
                onChange={(e) => setPromoForm({...promoForm, validUntil: e.target.value})}
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 mt-4">
            Simpan Promo
          </button>
        </form>
      </Panel>
    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-700 flex items-center justify-center">{icon}</div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{title}</p>
      </div>
      <p className="mt-6 text-4xl font-black text-slate-900">{value}</p>
    </div>
  );
}

function Panel({ title, badge, children }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500 mt-1">{badge}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
