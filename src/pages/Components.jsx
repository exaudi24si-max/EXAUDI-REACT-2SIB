import { useState } from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import InputField from "../components/InputField";
import Alert from "../components/Alert";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const productList = [
  {
    id: 1,
    title: "Paracetamol 500mg",
    category: "Analgesik",
    price: "Rp 15.000",
    description: "Obat pereda nyeri dan demam yang cocok untuk kebutuhan keluarga.",
    image: "https://images.unsplash.com/photo-1580281657521-1d7a56f2f20d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Amoxicillin 250mg",
    category: "Antibiotik",
    price: "Rp 28.000",
    description: "Kapsul antibiotik untuk infeksi ringan hingga sedang.",
    image: "https://images.unsplash.com/photo-1514995669114-7ea55d0fd0ef?auto=format&fit=crop&w=800&q=80",
  },
];

const tableHeaders = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];
const tableProducts = [
  { id: 1, name: "Vitamin C 1000mg", category: "Suplemen", price: "Rp 35.000" },
  { id: 2, name: "Cough Syrup", category: "Batuk", price: "Rp 22.000" },
  { id: 3, name: "Salep Luka", category: "Topikal", price: "Rp 18.000" },
];

export default function Components() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8 pb-10 animate-fade-in">
      <HeroSection
        title="Komponen React ApotikPro"
        subtitle="Contoh komponen reusable untuk struktur halaman, tampilan data, form, dan umpan balik di aplikasi apotek Anda."
      >
        <div className="flex flex-wrap gap-3">
          <Button type="primary">Simpan</Button>
          <Button type="success">Berhasil</Button>
          <Button type="danger">Hapus</Button>
          <Button type="secondary">Batal</Button>
        </div>
      </HeroSection>

      <Container className="space-y-8">
        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Basic Component</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">Button</h3>
                <div className="flex flex-wrap gap-3">
                  <Button type="primary">Simpan</Button>
                  <Button type="success">Sukses</Button>
                  <Button type="danger">Hapus</Button>
                  <Button type="warning">Peringatan</Button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">Badge</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <Badge type="primary">Aktif</Badge>
                  <Badge type="success">Selesai</Badge>
                  <Badge type="warning">Pending</Badge>
                  <Badge type="danger">Hapus</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">Avatar</h3>
                <div className="flex items-center gap-4">
                  <Avatar name="Andi" />
                  <Avatar name="Sari" />
                  <Avatar name="Wulan" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Wulan" />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Layout Component</h2>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">Container</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Container membantu menata tampilan halaman agar rapi dan konsisten pada semua screen.
                </p>
              </div>
              <Alert type="info">Gunakan layout dan container untuk menjaga jarak dan konsistensi desain.</Alert>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          <Card>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Data Display Component</h2>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {productList.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Tabel Produk</h3>
                    <p className="text-sm text-slate-500">Menampilkan data produk dalam bentuk tabel.</p>
                  </div>
                  <Button type="secondary">Tambah Produk</Button>
                </div>

                <Table headers={tableHeaders}>
                  {tableProducts.map((product, index) => (
                    <tr key={product.id} className="hover:bg-slate-50">
                      <td className="border-t border-slate-200 px-4 py-4">{index + 1}</td>
                      <td className="border-t border-slate-200 px-4 py-4">{product.name}</td>
                      <td className="border-t border-slate-200 px-4 py-4">{product.category}</td>
                      <td className="border-t border-slate-200 px-4 py-4">{product.price}</td>
                      <td className="border-t border-slate-200 px-4 py-4">
                        <Button type="primary" className="text-xs px-3 py-2">Detail</Button>
                      </td>
                    </tr>
                  ))}
                </Table>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Form & Feedback</h2>
            <div className="space-y-6">
              <InputField
                label="Cari Produk"
                id="product-search"
                placeholder="Ketik nama produk..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              <div className="space-y-3">
                <Alert type="success">Form input dapat digunakan untuk menambahkan data pasien atau resep baru.</Alert>
                <Alert type="warning">Pastikan semua field terisi sebelum menyimpan.</Alert>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Section Component</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Section component membantu membuat bagian halaman yang konsisten, seperti hero, fitur, atau ringkasan informasi.
            </p>
          </Card>

          <Footer />
        </section>
      </Container>
    </div>
  );
}
