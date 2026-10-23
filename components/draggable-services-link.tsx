"use client";
import Link from "next/link";
import { ArrowUpRight, Shuffle } from "lucide-react";
import { useRef, useState } from "react";

export function DraggableServicesLink() {
  const stage = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 12, y: 12 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  function down(e: React.PointerEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    setOffset({ x: e.clientX - r.left, y: e.clientY - r.top }); setDragging(true); e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: React.PointerEvent<HTMLAnchorElement>) {
    if (!dragging || !stage.current) return;
    const r = stage.current.getBoundingClientRect(); const w = e.currentTarget.offsetWidth; const h = e.currentTarget.offsetHeight;
    setPos({ x: Math.max(6, Math.min(r.width - w - 6, e.clientX - r.left - offset.x)), y: Math.max(5, Math.min(r.height - h - 5, e.clientY - r.top - offset.y)) });
  }
  function shuffle() { if (!stage.current) return; const w = stage.current.clientWidth; setPos({ x: Math.max(6, Math.floor(Math.random() * Math.max(1, w - 185))), y: Math.random() > .5 ? 8 : 17 }); }
  return <div className="draggable-cta-stage" ref={stage} aria-label="Movable services link area">
    <Link href="/services" className="draggable-cta" style={{ left: pos.x, top: pos.y }} onPointerDown={down} onPointerMove={move} onPointerUp={() => setDragging(false)} onPointerCancel={() => setDragging(false)} onClick={(e) => { if (dragging) e.preventDefault(); }}><span>View all services</span><ArrowUpRight size={15}/></Link>
    <button type="button" onClick={shuffle} aria-label="Shuffle services link" style={{ position:"absolute",right:7,top:7,border:0,background:"transparent",color:"#8b5cf6",cursor:"pointer",padding:4 }}><Shuffle size={14}/></button>
    <small>Drag to move · shuffle</small>
  </div>;
}
