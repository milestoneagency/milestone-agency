"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCcw, Move, Search, Target, Share2, Code2, PenTool, Palette, Mail, BarChart3, Workflow } from "lucide-react";
import Matter from "matter-js";
type Service = { slug: string; number: string; icon: string; title: string; short: string };

const icons = [Search, Target, Share2, Code2, PenTool, Palette, Mail, BarChart3, Workflow];
const palettes = ["mint", "violet", "blue", "pink", "amber", "cyan", "lime", "coral", "purple"];

export function MatterServices({ services }: { services: Service[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [physicsReady, setPhysicsReady] = useState(false);
  const draggedRef = useRef(false);
  const resetRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhysicsReady(false);
      return;
    }

    let disposed = false;
    let raf = 0;
    const engine = Matter.Engine.create({ gravity: { x: 0, y: 0.82, scale: 0.001 } });
    engine.positionIterations = 8;
    engine.velocityIterations = 6;
    const width = stage.clientWidth;
    const columns = width < 600 ? 2 : 4;
    const cardHeight = width < 600 ? 188 : 196;
    const rows = Math.ceil(services.length / columns);
    const height = Math.max(stage.clientHeight, 100 + rows * (cardHeight + 18) + 14);
    stage.style.height = `${height}px`;
    const cardWidth = Math.min(232, Math.max(width < 600 ? 112 : 145, (width - 48) / columns - 12));
    const gapX = width < 600 ? width / 2 : width / 4;
    const bodies = services.map((service, i) => {
      const col = i % (width < 600 ? 2 : 4);
      const row = Math.floor(i / (width < 600 ? 2 : 4));
      const x = Math.min(width - cardWidth / 2 - 10, Math.max(cardWidth / 2 + 10, gapX * col + gapX / 2));
      const y = Math.min(height - cardHeight / 2 - 14, 100 + row * (cardHeight + 18));
      const body = Matter.Bodies.rectangle(x, y, cardWidth, cardHeight, {
        chamfer: { radius: 16 }, restitution: 0.62, friction: 0.12, frictionAir: 0.012,
        density: 0.0012, label: service.slug
      });
      Matter.Body.setAngle(body, (i % 2 ? 1 : -1) * (0.015 + (i % 3) * 0.012));
      return body;
    });
    const wall = 70;
    const bounds = [
      Matter.Bodies.rectangle(width / 2, -wall / 2, width + wall * 2, wall, { isStatic: true }),
      Matter.Bodies.rectangle(width / 2, height + wall / 2, width + wall * 2, wall, { isStatic: true }),
      Matter.Bodies.rectangle(-wall / 2, height / 2, wall, height + wall * 2, { isStatic: true }),
      Matter.Bodies.rectangle(width + wall / 2, height / 2, wall, height + wall * 2, { isStatic: true })
    ];
    Matter.Composite.add(engine.world, [...bounds, ...bodies]);
    const mouse = Matter.Mouse.create(stage);
    mouse.pixelRatio = 1;
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.16, damping: 0.08, render: { visible: false } }
    });
    Matter.Composite.add(engine.world, mouseConstraint);
    const onDragStart = () => { draggedRef.current = false; };
    const onDragEnd = () => {
      draggedRef.current = true;
      window.setTimeout(() => { draggedRef.current = false; }, 220);
    };
    Matter.Events.on(mouseConstraint, "startdrag", onDragStart);
    Matter.Events.on(mouseConstraint, "enddrag", onDragEnd);

    const update = () => {
      if (disposed) return;
      Matter.Engine.update(engine, 1000 / 60);
      bodies.forEach((body, i) => {
        const element = cardRefs.current[i];
        if (!element) return;
        element.style.transform = `translate3d(${body.position.x - cardWidth / 2}px, ${body.position.y - cardHeight / 2}px, 0) rotate(${body.angle}rad)`;
      });
      raf = window.requestAnimationFrame(update);
    };
    resetRef.current = () => {
      bodies.forEach((body, i) => {
        const col = i % (width < 600 ? 2 : 4);
        const row = Math.floor(i / (width < 600 ? 2 : 4));
        const x = Math.min(width - cardWidth / 2 - 10, Math.max(cardWidth / 2 + 10, gapX * col + gapX / 2));
        const y = Math.min(height - cardHeight / 2 - 14, 100 + row * (cardHeight + 18));
        Matter.Body.setPosition(body, { x, y });
        Matter.Body.setVelocity(body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(body, 0);
        Matter.Body.setAngle(body, 0);
      });
    };
    setPhysicsReady(true);
    raf = window.requestAnimationFrame(update);
    return () => {
      disposed = true;
      window.cancelAnimationFrame(raf);
      Matter.Events.off(mouseConstraint, "startdrag", onDragStart);
      Matter.Events.off(mouseConstraint, "enddrag", onDragEnd);
      Matter.Mouse.clearSourceEvents(mouse);
      Matter.Engine.clear(engine);
      resetRef.current = null;
    };
  }, [services]);

  return (
    <div className="matter-services-wrap">
      <div className="matter-toolbar"><span><i className="matter-live-dot" /> INTERACTIVE SERVICE FIELD</span><span className="matter-hint"><Move size={14} /> Drag, throw and explore</span><button type="button" onClick={() => resetRef.current?.()} aria-label="Reset service cards"><RotateCcw size={14} /> Reset</button></div>
      <div className={`matter-stage ${physicsReady ? "is-physical" : "is-static"}`} ref={stageRef}>
        <div className="matter-stage-glow" aria-hidden="true" />
        {services.map((service, i) => {
          const Icon = icons[i % icons.length];
          return <Link key={service.slug} href={`/services/${service.slug}`} ref={(node) => { cardRefs.current[i] = node; }} className={`matter-service-card tone-${palettes[i % palettes.length]}`} onClick={(event) => { if (draggedRef.current) event.preventDefault(); }} style={{ left: 0, top: 0, width: `min(232px, calc((100% - 72px) / 4))`, height: 196 }}>
            <span className="matter-card-top"><span className="matter-card-icon"><Icon size={20} strokeWidth={1.8} /></span><span className="matter-card-number">{service.number}</span></span>
            <span className="matter-card-title">{service.title}</span><span className="matter-card-description">{service.short}</span>
            <span className="matter-card-link">Explore service <ArrowUpRight size={15} /></span><span className="matter-card-orb" aria-hidden="true" />
          </Link>;
        })}
        {!physicsReady && <p className="matter-static-note">Service cards remain available as links when reduced motion is enabled.</p>}
      </div>
      <p className="matter-caption">Every card is a real link. Throw a card around, then tap it to explore that service.</p>
    </div>
  );
}
