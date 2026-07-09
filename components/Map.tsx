"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  lat: number;
  lng: number;
  zoom?: number;
  name?: string;
  address?: string;
};

function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[m] || m));
}

export default function Map({ lat, lng, zoom = 15, name, address }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let map: any;

    function init() {
      const L = (window as any).L;
      if (!L || !ref.current) return;

      map = L.map(ref.current, { center: [lat, lng], zoom, scrollWheelZoom: false });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      const marker = L.marker([lat, lng]).addTo(map);
      const popup = `<strong>${escapeHtml(name || "")}</strong><br/>${escapeHtml(address || "")}`;
      marker.bindPopup(popup).openPopup();
    }

    // Load Leaflet CSS if not already present
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // Load Leaflet JS if needed, then init
    if (!(window as any).L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = () => init();
      document.body.appendChild(script);
    } else {
      init();
    }

    return () => {
      if (map) map.remove();
    };
  }, [lat, lng, zoom, name, address]);

  return <div ref={ref} className="absolute inset-0 h-full w-full" />;
}
