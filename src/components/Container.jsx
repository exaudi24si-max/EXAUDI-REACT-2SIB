export default function Container({ children, className = "" }) {
  return (
    <section className={`container mx-auto px-4 py-8 ${className}`}>
      {children}
    </section>
  );
}
