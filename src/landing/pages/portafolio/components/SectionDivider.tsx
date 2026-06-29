interface SectionDividerProps {
  title: string;
}

export function SectionDivider({ title }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-4 mb-12 relative z-10 py-4 scroll-reveal">
      <h2 className="text-[28px] font-semibold shrink-0" style={{ color: "#e4e1e6" }}>
        {title}
      </h2>
      <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.1)" }} />
    </div>
  );
}
