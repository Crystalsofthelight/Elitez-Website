export function SupplyBar({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "gold" | "teal" | "sky";
}) {
  const color = {
    gold: "bg-[#d7b35a]",
    teal: "bg-[#1ad4c8]",
    sky: "bg-[#7eb6ff]",
  }[tone];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-[#9aa4af]">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/6">
        <div className={`h-full ${color}`} style={{ width: value }} />
      </div>
    </div>
  );
}
