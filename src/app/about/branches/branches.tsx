"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import styles from "@/styles/BranchLocator.module.css";
import { useTranslations } from "next-intl";

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
  { id: 1,  name: "Angono",                               region: "Luzon",  lat: 17.6132, lng: 121.7270, address: "Unit C-1 3rd Floor, E.M Torres Bldg., Diversion Road, Ugac Norte, Tuguegarao City" },
  { id: 2,  name: "Bicol",                                region: "Luzon",    lat: 13.1476712, lng: 123.7521332, address: "Room 202 RR Sarte Building, Quezon Avenue, Brangay 34 Oro Site, Legazpi City" },
  { id: 7,  name: "Bacolod",                              region: "Visayas",  lat: 10.67056, lng: 122.94933, address: "Centroplex Mall, Corner Gonzaga–Locsin Street, Bacolod City" },
  { id: 8,  name: "Kalibo",                               region: "Visayas",  lat: 11.6845344, lng: 122.2482259, address: "Refindor Building, 2nd Floor, Unit 3, Osmeña Avenue, Kalibo, Aklan" },
  { id: 9,  name: "Cebu",                                 region: "Visayas",  lat: 10.30068733143866, lng: 123.89935281771659, address: "Unit B, Cor. Sanciangko & Junquera Streets, Cebu City (beside Silogan ni Gian / across Clean Day)" },
  { id: 10, name: "Dumaguete (Triple One)",                region: "Visayas",  lat:  9.30875573049183, lng: 123.30882164223914, address: "Quiamco Building, 2nd Floor, Noblefranca Street, Dumaguete City 6200, Philippines (In front of Holy Cross High School))" },
  { id: 11, name: "Cagayan de Oro",                       region: "Mindanao", lat:  8.4818634, lng: 124.6426148, address: "3rd Floor, Room 308 Knights of the Columbus Bldg. beside Main Graphics Store along Centrio Ayala Mall Brgy. 27, Captain Vicen                      te Roa St. Cagayan de Oro City, Mis. Or." },
  { id: 12, name: "Davao",                                region: "Mindanao", lat:  7.0707, lng: 125.6087, address: "Hermosa Bldg. Cor. Mitsui St. J. P. Laurel Ave. Bajada, Davao City (infront of Victoria Plaza Mall, near NBI office)" },                     
  { id: 13, name: "General Santos",                       region: "Mindanao", lat:  6.116616484561059, lng: 125.16901292452214, address: "J.P Laurel corner Recto Sts, Dadiangas North, GSC (sa itaas ng Ishmael Clinic)" },                      

  { id: 15, name: "Butuan",                               region: "Mindanao", lat:  8.9307698, lng: 125.4848411, address: "2nd Floor Empress Building Montilla Blvd., Butuan City Landmark: Above of Hi-Seas Pharmacy & Digi Life" },                     
  { id: 16, name: "Iloilo",                               region: "Visayas", lat:  10.722536704043904, lng: 122.56553444254877, address: "Jesena Building, 3rd Floor, Room 301, Jalandoni Street, Iloilo City" },
  { id: 16, name: "Isabela (Triple One)",         region: "Luzon", lat:  16.94182924823973, lng: 121.76893635167006, address: "Majestic Bldg, Nisperos St., Cabaruan, Cauayan City, Isabela (beside Bank of Commerce near Addessa)" },
  { id: 17,  name: "Koronadal ",     region: "Mindanao",    lat: 6.491168207122304, lng: 124.84491306326093, address: "Med Arcade Building, Stall 16, 2nd Floor, Along Arellano Street, Corner Mariano–Ponce Street, Koronadal City" },
  { id: 18,  name: "Pampanga",                               region: "Luzon",  lat: 15.039433995166709, lng: 120.68153060868316, address: "R5, 2F PARAS BLDG., COR. JOSE ABAD SANTOS AVE. DOLORES, SAN FERNANDO, PAMPANGA" },
  { id: 19,  name: "Tuguegarao",                               region: "Luzon",  lat: 17.613965096680353, lng: 121.70606572284926, address: "Stall No. C-1 3rd floor EM Torres Building Diversion Road Ugac Norte, Tuguegarao City" },
  { id: 19,  name: "Tacurong (Triple One)",  region: "Mindanao",  lat: 6.683575079580638, lng: 124.66688197849201, address: "Mervic Commercial Building, Unit 2-C, 2nd Floor, National Highway, Tacurong City" },
  { id: 20,  name: "ZAMBOANGA",  region: "Mindanao",  lat: 6.9165948427794435, lng: 122.07584062854997, address: "FLK Building, 3rd Floor, Nuñez Extension, Camino Nuevo, Canelar, Zamboanga City (Landmark: In front of Remedios Crematory, beside EastWest Bank – Nuñez Extension Branch)" },
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
  const t = useTranslations("branch");
  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : ""}`} onClick={() => onViewMap(branch)}>
      <span className={styles.cardBadge} style={{ background: color }}>{index + 1}</span>
      <div className={styles.cardIcon}><PinIcon color={color} /></div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{branch.name}</h3>
        <p className={`${styles.cardAddress}`}>{branch.address}</p>
      </div>
      <button
        className={styles.mapBtn}
        style={isActive ? { background: color, color: "#fff", borderColor: color } : {}}
        onClick={(e) => { e.stopPropagation(); onViewMap(branch); }}
      >
        {t("view")}
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