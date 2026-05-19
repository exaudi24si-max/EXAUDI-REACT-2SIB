export default function Table({ headers, children, className = "" }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full min-w-[640px] border border-slate-200 rounded-3xl overflow-hidden">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border-b border-slate-200 px-4 py-3 text-left text-xs uppercase tracking-[0.2em] text-slate-500">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {children}
        </tbody>
      </table>
    </div>
  );
}
