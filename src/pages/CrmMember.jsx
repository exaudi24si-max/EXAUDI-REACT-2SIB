import { useState } from 'react';
import { crmProfile, crmPurchaseHistory, crmRecommendations, crmVouchers, crmReminders } from '../data/crmData';
import { FiGift, FiClock, FiTrendingUp, FiPackage, FiStar, FiAward, FiShoppingBag, FiCheckCircle, FiArrowRight, FiActivity, FiCreditCard, FiMessageSquare, FiSend } from 'react-icons/fi';
import { feedbackAPI } from '../services/authAPI';

export default function CrmMember() {
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const userName = user?.full_name || crmProfile.name;

  // Feedback States
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackMsg.trim()) return;
    
    setIsSubmitting(true);
    try {
        await feedbackAPI.submitFeedback({
            user_id: user?.id || null,
            user_name: userName,
            rating: rating,
            message: feedbackMsg
        });
        setSubmitSuccess(true);
        setFeedbackMsg("");
        setRating(5);
        setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
        console.error("Gagal kirim feedback", err);
        alert("Gagal mengirim feedback. Pastikan tabel 'feedbacks' sudah dibuat di database Supabase.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-12 animate-fade-in">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-indigo-950 via-primary to-indigo-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl shadow-primary/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center text-white text-3xl font-black shadow-inner">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Halo, {userName}!</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-widest">
                  <FiAward size={14} /> Level {crmProfile.membership}
                </span>
                <span className="text-indigo-200 text-sm font-medium">Member sejak {crmProfile.joinDate}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 flex items-center gap-5 min-w-[200px]">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/20 text-yellow-900">
              <FiStar size={24} className="fill-current" />
            </div>
            <div>
              <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-0.5">Total Poin</p>
              <p className="text-3xl font-black text-white leading-none">{crmProfile.points}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {/* Progress Card */}
        <div className="xl:col-span-1 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-transform duration-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-primary flex items-center justify-center">
                <FiTrendingUp size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-900">Status Level</h2>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-slate-500">Menuju Platinum</span>
                <span className="text-primary">{crmProfile.nextTierProgress}%</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-indigo-400 rounded-full" 
                  style={{ width: `${crmProfile.nextTierProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-slate-400 mt-3 font-medium">Kumpulkan 480 poin lagi untuk naik level.</p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Kategori Favorit Anda</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <FiPackage size={24} />
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900">{crmProfile.favoriteCategory}</p>
                  <p className="text-xs text-slate-500 font-medium">Berdasarkan riwayat belanja</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vouchers */}
        <div className="xl:col-span-1 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                <FiGift size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-900">Voucher Aktif</h2>
            </div>
            <span className="bg-rose-100 text-rose-600 text-xs font-black px-3 py-1 rounded-full">{crmVouchers.length}</span>
          </div>
          
          <div className="space-y-4">
            {crmVouchers.map((voucher) => (
              <div key={voucher.id} className="group relative rounded-2xl border border-rose-100 bg-gradient-to-r from-rose-50 to-white p-5 overflow-hidden hover:border-rose-200 transition-colors">
                <div className="absolute right-0 top-0 h-full w-2 border-l border-dashed border-rose-200"></div>
                <div className="flex justify-between items-start pr-4">
                  <div>
                    <p className="font-black text-rose-600 text-lg">{voucher.code}</p>
                    <p className="text-xs text-slate-600 font-medium mt-1 pr-2">{voucher.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <FiClock size={12} /> Berlaku s/d {voucher.validUntil}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div className="xl:col-span-1 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center">
              <FiActivity size={20} />
            </div>
            <h2 className="text-xl font-black text-slate-900">Pengingat Kesehatan</h2>
          </div>
          
          <div className="space-y-4">
            {crmReminders.map((reminder) => (
              <div key={reminder.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <FiCheckCircle size={20} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">{reminder.product}</p>
                    <p className="text-xs font-bold text-slate-500 mt-1">Estimasi habis: <span className="text-primary">{reminder.nextPurchase}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        {/* Purchase History */}
        <section className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <FiCreditCard size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-900">Riwayat Transaksi</h2>
            </div>
            <button className="text-sm font-bold text-primary hover:text-indigo-700 flex items-center gap-2">
              Lihat Semua <FiArrowRight />
            </button>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <tr>
                  <th className="px-6 py-4">ID Pesanan</th>
                  <th className="px-6 py-4">Tanggal</th>
                  <th className="px-6 py-4">Total Belanja</th>
                  <th className="px-6 py-4 text-right">Poin Didapat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {crmPurchaseHistory.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-5 font-black text-slate-900 group-hover:text-primary transition-colors">{order.orderId}</td>
                    <td className="px-6 py-5 text-slate-500 font-medium">{order.date}</td>
                    <td className="px-6 py-5 font-bold text-slate-700">Rp {order.total.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-5 text-right font-black text-emerald-500">+{order.pointsEarned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendations */}
        <section className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 bg-gradient-to-br from-white to-slate-50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
              <FiShoppingBag size={20} />
            </div>
            <h2 className="text-xl font-black text-slate-900">Direkomendasikan</h2>
          </div>
          
          <div className="space-y-5">
            {crmRecommendations.map((item) => (
              <div key={item.id} className="group relative rounded-2xl border border-white bg-white p-4 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                    <img src={`https://source.unsplash.com/random/100x100/?medicine,${item.category}`} alt={item.product} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" onError={(e) => e.target.style.display='none'}/>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{item.category}</p>
                    <p className="font-black text-slate-900 text-sm">{item.product}</p>
                    <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-1">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Feedback Section */}
      <section className="rounded-[2rem] border border-slate-100 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/40 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-indigo-100 text-primary flex items-center justify-center mx-auto mb-4">
            <FiMessageSquare size={28} />
          </div>
          <h2 className="text-2xl font-black text-slate-900">Bantu Kami Menjadi Lebih Baik</h2>
          <p className="text-slate-500 mt-2">Kritik, saran, atau pengalaman berbelanja Anda sangat berharga bagi kami.</p>
        </div>

        <form onSubmit={handleFeedbackSubmit} className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-3 text-center">Beri Rating</label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${
                    rating >= star 
                      ? 'bg-yellow-100 text-yellow-500 shadow-inner' 
                      : 'bg-slate-50 text-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <FiStar size={24} className={rating >= star ? 'fill-current' : ''} />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <textarea
              value={feedbackMsg}
              onChange={(e) => setFeedbackMsg(e.target.value)}
              placeholder="Ceritakan pengalaman Anda di ApotekPro..."
              className="w-full rounded-2xl border border-slate-200 p-4 min-h-[120px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !feedbackMsg.trim()}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-black text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Mengirim...' : submitSuccess ? 'Terkirim! Terima Kasih' : <><FiSend size={18} /> Kirim Feedback</>}
          </button>
          
          {submitSuccess && (
            <p className="text-center text-emerald-500 text-xs font-bold mt-4 animate-fade-in">
              Feedback Anda berhasil dikirim ke Admin!
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

