"use client"

import { useState, useMemo, useEffect, useCallback, CSSProperties } from "react";
import { getGallery } from "@/data/gallery";

type Category = "department" | "mainOffice" | "dormitory";
type FilterOption = "All Gallery" | "Department" | "Main Office" | "Dormitory";

interface Project {
  id: number;
  category: Category;
  title: string;
  year: number;
  imageUrl?: string;
}

const projects: Project[] = getGallery() as Project[];

const FILTERS: FilterOption[] = ["All Gallery", "Department", "Main Office", "Dormitory"];

const categoryIcons: Record<Category, string> = {
  department: "⚙️",
  mainOffice: "🏗️",
  dormitory: "⚡"
};

const tagColors: Record<Category, string> = {
  department: "#E24B4A",
  mainOffice: "#378ADD",
  dormitory: "#639922"
};

const placeholderBg: Record<Category, string> = {
  department: "#fff1f1",
  mainOffice: "#eff6ff",
  dormitory: "#f0fdf4"
};

// ─── Style helpers ──────────────────────────────────────────────────────────

const baseStyles = {
  wrapper: {
    padding: "24px",
    maxWidth: "85%",
    margin: "0 auto",
  } as CSSProperties,

  filtersRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "24px",
  } as CSSProperties,

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "16px",
  } as CSSProperties,

  cardBody: {
    padding: "12px 16px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    flex: 1,
  } as CSSProperties,

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "6px",
  } as CSSProperties,

  cardTitle: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#111827",
    lineHeight: 1.2,
    flex: 1,
  } as CSSProperties,
};

const getFilterBtnStyle = (active: boolean): CSSProperties => ({
  fontSize: "13px",
  fontWeight: 500,
  padding: "8px 16px",
  borderRadius: "6px",
  border: active ? "none" : "1px solid #d1d5db",
  background: active ? "#448153" : "transparent",
  color: active ? "#fff" : "#6b7280",
  cursor: "pointer",
  transition: "all 0.18s ease",
  letterSpacing: "0.02em",
});

const getCardStyle = (hovered: boolean): CSSProperties => ({
  borderRadius: "10px",
  overflow: "hidden",
  border: `1px solid ${hovered ? "#9ca3af" : "#e5e7eb"}`,
  background: "#fff",
  cursor: "pointer",
  transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  transform: hovered ? "translateY(-4px)" : "none",
  boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
  display: "flex",
  flexDirection: "column",
});

const getPlaceholderStyle = (category: Category): CSSProperties => ({
  width: "100%",
  height: "170px",
  background: placeholderBg[category],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "48px",
});

const getCardTagStyle = (category: Category): CSSProperties => ({
  fontFamily: "'Barlow Condensed', sans-serif",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: tagColors[category],
  marginBottom: "2px",
});

const getArrowStyle = (hovered: boolean): CSSProperties => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  border: "1px solid #d1d5db",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  flexShrink: 0,
  background: hovered ? "#111827" : "transparent",
  color: hovered ? "#fff" : "#9ca3af",
  transition: "all 0.18s ease",
  marginLeft: "12px",
});

// ─── Lightbox ───────────────────────────────────────────────────────────────

interface LightboxProps {
  projects: Project[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
}

function Lightbox({ projects, currentIndex, onClose, onPrev, onNext, onJump }: LightboxProps) {
  const project = projects[currentIndex];
  const total = projects.length;
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && !isFirst) onPrev();
      if (e.key === "ArrowRight" && !isLast) onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, isFirst, isLast]);

  const navBtnStyle = (disabled: boolean): CSSProperties => ({
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "none",
    background: disabled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.18)",
    color: disabled ? "rgba(255,255,255,0.25)" : "#fff",
    fontSize: "26px",
    cursor: disabled ? "default" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.18s",
    lineHeight: 1,
  });

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "16px",
          right: "20px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,0.12)",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ✕
      </button>

      {/* Counter */}
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: "0 0 12px", letterSpacing: "0.08em" }}>
        {currentIndex + 1} / {total}
      </p>

      {/* Main row: prev | image | next */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "16px", width: "100%", maxWidth: "900px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button style={navBtnStyle(isFirst)} onClick={onPrev} disabled={isFirst} aria-label="Previous">‹</button>

        <div
          style={{
            flex: 1,
            borderRadius: "12px",
            overflow: "hidden",
            background: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "320px",
            maxHeight: "60vh",
          }}
        >
          {project.imageUrl ? (
            <img
              key={project.id}
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: "100%",
                maxHeight: "60vh",
                objectFit: "contain",
                display: "block",
                animation: "lbfade 0.22s ease",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "360px",
                background: placeholderBg[project.category],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "80px",
              }}
            >
              {categoryIcons[project.category]}
            </div>
          )}
        </div>

        <button style={navBtnStyle(isLast)} onClick={onNext} disabled={isLast} aria-label="Next">›</button>
      </div>

      {/* Info */}
      <div
        style={{ marginTop: "14px", textAlign: "center" }}
        onClick={(e) => e.stopPropagation()}
      >
        <span style={{ ...getCardTagStyle(project.category), display: "block" }}>{project.category}</span>
        <p style={{ color: "#fff", fontSize: "15px", fontWeight: 600, margin: "4px 0 0" }}>{project.title}</p>
      </div>

      {/* Thumbnail strip */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "16px",
          overflowX: "auto",
          maxWidth: "860px",
          width: "100%",
          padding: "4px 0 8px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onJump(i)}
            aria-label={`Go to ${p.title}`}
            style={{
              flexShrink: 0,
              width: "60px",
              height: "44px",
              borderRadius: "6px",
              overflow: "hidden",
              border: i === currentIndex ? "2px solid #448153" : "2px solid rgba(255,255,255,0.15)",
              padding: 0,
              cursor: "pointer",
              background: placeholderBg[p.category],
              transition: "border-color 0.15s, opacity 0.15s",
              opacity: i === currentIndex ? 1 : 0.55,
            }}
          >
            {p.imageUrl ? (
              <img src={p.imageUrl} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                {categoryIcons[p.category]}
              </span>
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes lbfade {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

// ─── Card ───────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={getCardStyle(hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      aria-label={`Preview ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
    >
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{ width: "100%", height: "170px", objectFit: "cover", display: "block" }}
        />
      ) : (
        <div style={getPlaceholderStyle(project.category)} aria-hidden="true">
          {categoryIcons[project.category]}
        </div>
      )}
      <div style={baseStyles.cardBody}>
        <span style={getCardTagStyle(project.category)}>{project.category}</span>
        <div style={baseStyles.cardFooter}>
          <span style={baseStyles.cardTitle}>{project.title}</span>
          <div style={getArrowStyle(hovered)} aria-hidden="true">→</div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ───────────────────────────────────────────────────────────────────

interface ProjectsGalleryProps {
  data?: Project[];
}

export default function ProjectsGallery({ data = projects }: ProjectsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All Gallery");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo<Project[]>(() => {
    const categoryMap: Record<FilterOption, Category | null> = {
        "All Gallery": null,
        "Department": "department",
        "Main Office": "mainOffice",   // ← map to camelCase
        "Dormitory": "dormitory",
    };

    const mapped = categoryMap[activeFilter];
    return mapped === null
        ? [...data]
        : data.filter((p) => p.category === mapped);
    }, [activeFilter, data]);

  const openLightbox = useCallback(
    (project: Project) => {
      const idx = filtered.findIndex((p) => p.id === project.id);
      if (idx !== -1) setLightboxIndex(idx);
    },
    [filtered]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));
  }, [filtered.length]);

  const jumpTo = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <div style={baseStyles.wrapper}>
        <div style={baseStyles.filtersRow} role="toolbar" aria-label="Gallery filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              style={getFilterBtnStyle(activeFilter === f)}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={baseStyles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={openLightbox} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          projects={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          onJump={jumpTo}
        />
      )}
    </>
  );
}