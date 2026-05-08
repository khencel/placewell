"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import styles from "@/styles/BranchLocator.module.css";

type Region = "Luzon" | "Visayas" | "Mindanao";

interface Branch {
  id: number;
  name: string;
  address: string;
  region: Region;
  lat: number;
  lng: number;
}

const BRANCHES: Branch[] = [
  { id: 1,  name: "Tuguegarao",     region: "Luzon",    lat: 17.6132, lng: 121.7270, address: "Unit C-1 3rd Floor, E.M Torres Bldg., Diversion Road, Ugac Norte, Tuguegarao City" },
  { id: 2,  name: "Isabela",        region: "Luzon",    lat: 16.9754, lng: 121.8107, address: "Door1B, Majesty Commercial Building Cauayan City, Isabela" },
  { id: 3,  name: "Pampanga",       region: "Luzon",    lat: 15.0794, lng: 120.6200, address: "R5, 2nd Floor, FF Paras Building corner Jose Abad Santos Ave., Dolores, San Fernando City, Pampanga" },
  { id: 4,  name: "Cabanatuan City",region: "Luzon",    lat: 15.4890, lng: 120.9660, address: "2nd Floor, Unit 2B, V.P. Building Maharlika highway, H. Concepcion District, Cabanatuan City" },
  { id: 5,  name: "Laguna",         region: "Luzon",    lat: 14.3294, lng: 121.1700, address: "LTO/Areza Compound, Barangay Canlalay Binan National Highway, Binan, Laguna" },
  { id: 6,  name: "Bicol",          region: "Luzon",    lat: 13.1391, lng: 123.7438, address: "3rd Floor, Tower Building II, Landco Business Park, Legazpi City" },
  { id: 7,  name: "Iloilo",         region: "Visayas",  lat: 10.7202, lng: 122.5621, address: "2nd Floor, Robinsons Place Iloilo, Ledesma St., Iloilo City" },
  { id: 8,  name: "Cebu",           region: "Visayas",  lat: 10.3157, lng: 123.8854, address: "Unit 301, 3rd Floor, Keppel Center, Samar Loop cor. Cardinal Rosales Ave., Cebu Business Park" },
  { id: 9,  name: "Tacloban",       region: "Visayas",  lat: 11.2543, lng: 125.0000, address: "Door 4, Ground Floor, Robinsons Place Tacloban, Justice Romualdez St., Tacloban City" },
  { id: 10, name: "Dumaguete",      region: "Visayas",  lat:  9.3068, lng: 123.3054, address: "3rd Floor, Lee Plaza, Dumaguete City, Negros Oriental" },
  { id: 11, name: "Cagayan de Oro", region: "Mindanao", lat:  8.4542, lng: 124.6319, address: "Unit 301, Limketkai Center, Limketkai Drive, Cagayan de Oro City" },
  { id: 12, name: "Davao",          region: "Mindanao", lat:  7.0707, lng: 125.6087, address: "Unit 302-303, 3rd Floor, Davao Chinatown Square, F. Torres St., Davao City" },
  { id: 13, name: "General Santos", region: "Mindanao", lat:  6.1164, lng: 125.1716, address: "Unit 3B, 3rd Floor, Robinsons Place General Santos, General Santos City" },
  { id: 14, name: "Zamboanga",      region: "Mindanao", lat:  6.9214, lng: 122.0790, address: "3rd Floor, Grand Astoria Hotel, Mayor Jaldon St., Zamboanga City" },
  { id: 15, name: "Butuan",         region: "Mindanao", lat:  8.9475, lng: 125.5406, address: "2nd Floor, Robinsons Place Butuan, National Highway, Butuan City" },
];

const REGION_ICONS: Record<Region, string> = { Luzon: "🌿", Visayas: "🍇", Mindanao: "🦀" };
const REGION_COLORS: Record<Region, string> = { Luzon: "#2d7a4f", Visayas: "#3b82f6", Mindanao: "#f59e0b" };
const REGION_CENTER: Record<Region, [number, number]> = { Luzon: [15.5, 121.0], Visayas: [10.5, 123.5], Mindanao: [7.5, 124.5] };
const REGION_ZOOM: Record<Region, number> = { Luzon: 7, Visayas: 8, Mindanao: 7 };

function PinIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={color} />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  );
}

function BranchCard({ branch, index, isActive, onViewMap }: {
  branch: Branch; index: number; isActive: boolean; onViewMap: (b: Branch) => void;
}) {
  const color = REGION_COLORS[branch.region];
  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : ""}`} onClick={() => onViewMap(branch)}>
      <span className={styles.cardBadge} style={{ background: color }}>{index + 1}</span>
      <div className={styles.cardIcon}><PinIcon color={color} /></div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{branch.name}</h3>
        <p className={styles.cardAddress}>{branch.address}</p>
      </div>
      <button
        className={styles.mapBtn}
        style={isActive ? { background: color, color: "#fff", borderColor: color } : {}}
        onClick={(e) => { e.stopPropagation(); onViewMap(branch); }}
      >
        View on Map
      </button>
    </div>
  );
}

function LeafletMap({ branches, region, highlighted, onSelectBranch }: {
  branches: Branch[]; region: Region; highlighted: Branch | null; onSelectBranch: (b: Branch) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instanceRef = useRef<{ map: any; L: any } | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  const branchesRef = useRef(branches);
  const regionRef = useRef(region);
  branchesRef.current = branches;
  regionRef.current = region;

  // Init map once on mount
  useEffect(() => {
    if (!mapRef.current || instanceRef.current) return;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapRef.current || instanceRef.current) return;

      // Fix webpack icon paths
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current, {
        center: REGION_CENTER[regionRef.current],
        zoom: REGION_ZOOM[regionRef.current],
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      instanceRef.current = { map, L };

      // Place initial markers
      placeMarkers(L, map, branchesRef.current, regionRef.current, onSelectBranch);
    });

    return () => {
      cancelled = true;
      if (instanceRef.current) {
        markersRef.current.forEach((m) => m.remove());
        markersRef.current = [];
        instanceRef.current.map.remove();
        instanceRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update markers + fly when branches/region change
  useEffect(() => {
    if (!instanceRef.current) return;
    const { map, L } = instanceRef.current;
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];
    map.setView(REGION_CENTER[region], REGION_ZOOM[region], { animate: true });
    placeMarkers(L, map, branches, region, onSelectBranch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [branches, region]);

  // Pan to highlighted branch
  useEffect(() => {
    if (!instanceRef.current || !highlighted) return;
    instanceRef.current.map.setView([highlighted.lat, highlighted.lng], 13, { animate: true });
    // Open popup for the matching marker
    const idx = branches.findIndex((b) => b.id === highlighted.id);
    if (markersRef.current[idx]) markersRef.current[idx].openPopup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlighted]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function placeMarkers(L: any, map: any, bs: Branch[], rgn: Region, onSelect: (b: Branch) => void) {
    const color = REGION_COLORS[rgn];
    bs.forEach((b, i) => {
      const icon = L.divIcon({
        className: "",
        html: `<div style="background:${color};color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;font-family:sans-serif;border:2px solid rgba(255,255,255,0.8);box-shadow:0 2px 8px rgba(0,0,0,0.25);cursor:pointer;">${i + 1}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -16],
      });
      const marker = L.marker([b.lat, b.lng], { icon })
        .addTo(map)
        .bindPopup(`<strong style="color:${color}">${b.name}</strong><br/><small style="color:#475569">${b.address}</small>`)
        .on("click", () => onSelect(b));
      markersRef.current.push(marker);
    });
  }

  return (
    <div className={styles.mapPanel}>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div ref={mapRef} className={styles.mapContainer} />
      <div className={styles.mapLegend}>
        {(["Luzon", "Visayas", "Mindanao"] as Region[]).map((r) => (
          <span key={r} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: REGION_COLORS[r] }} />
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BranchLocator() {
  const [activeRegion, setActiveRegion] = useState<Region>("Luzon");
  const [search, setSearch] = useState("");
  const [highlighted, setHighlighted] = useState<Branch | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => BRANCHES.filter((b) => b.region === activeRegion && b.name.toLowerCase().includes(search.toLowerCase())),
    [activeRegion, search]
  );
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  const handleViewMap = (branch: Branch) => setHighlighted(branch);
  const handleRegionChange = (r: Region) => {
    setActiveRegion(r);
    setHighlighted(null);
    setShowAll(false);
    setSearch("");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.tabs}>
          {(["Luzon", "Visayas", "Mindanao"] as Region[]).map((r) => (
            <button
              key={r}
              className={`${styles.tab} ${activeRegion === r ? styles.tabActive : ""}`}
              onClick={() => handleRegionChange(r)}
              style={activeRegion === r ? { background: REGION_COLORS[r] } : {}}
            >
              <span>{REGION_ICONS[r]}</span>{r}
            </button>
          ))}
        </div>
        <div className={styles.searchBox}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.searchIcon} aria-hidden>
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="Search branch or city…" value={search} onChange={(e) => setSearch(e.target.value)} className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.listCol}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>No branches found.</div>
          ) : (
            <>
              <div className={styles.list}>
                {displayed.map((branch, i) => (
                  <BranchCard key={branch.id} branch={branch} index={i} isActive={highlighted?.id === branch.id} onViewMap={handleViewMap} />
                ))}
              </div>
              {filtered.length > 6 && (
                <button className={styles.viewAllBtn} onClick={() => setShowAll((v) => !v)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {showAll ? "Show Less" : `View All Branches (${filtered.length})`}
                </button>
              )}
            </>
          )}
        </div>

        <LeafletMap branches={filtered} region={activeRegion} highlighted={highlighted} onSelectBranch={handleViewMap} />
      </div>
    </section>
  );
}