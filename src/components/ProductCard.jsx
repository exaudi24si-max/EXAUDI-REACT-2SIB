import Card from "./Card";

export default function ProductCard({ image, title, category, price, description }) {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="mt-5 space-y-4">
        <BadgeLabel>{category}</BadgeLabel>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-black text-primary">{price}</span>
          <button className="bg-primary text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-primary/90 transition">
            Detail
          </button>
        </div>
      </div>
    </Card>
  );
}

function BadgeLabel({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase px-3 py-1">
      {children}
    </span>
  );
}
