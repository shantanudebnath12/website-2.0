// portfolio.jsx — terminal-variant personal portfolio for Shantanu Debnath

function useBreakpoint() {
  const [bp, setBp] = React.useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    return w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
  });
  React.useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setBp(w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop');
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return bp;
}

const { useState, useEffect, useLayoutEffect, useRef, useCallback } = React;

// ── Content ──────────────────────────────────────────────────
const OWNER = {
  name: "Shantanu Debnath",
  role: "Data Scientist",
  tagline: "Transforming complex data into actionable insights.",
  email: "shantanudebnath12@gmail.com",
  github: "github.com/shantanudebnath12",
  githubUrl: "https://github.com/shantanudebnath12",
  linkedin: "linkedin.com/in/shantanu-debnath-512463129",
  linkedinUrl: "https://www.linkedin.com/in/shantanu-debnath-512463129/",
  location: "Montreal, QC",
};

const ABOUT = [
  "As a Data Scientist, I specialize in transforming complex data into actionable insights. My journey spans from property management to financial services, always focusing on leveraging data to drive results.",
  "Currently leading Enterprise Data & Data Governance at Egon Zehnder, I've integrated cutting-edge technologies like ML, NLP, and GPT. My passion lies in solving data puzzles and pushing the boundaries of what's possible with data science.",
];

const EXPERIENCE = [
  {
    role: "Data Scientist — Enterprise Data & Data Governance",
    company: "Egon Zehnder",
    loc: "Montreal, QC",
    date: "Apr 2023 — Present",
    desc: "Led a team managing global data cleansing and preparation. Managed transition to Azure-based cloud CRM, improving data governance. Spearheaded ML model fine-tuning, NLP, and Semantic Search projects. Integrated enterprise GPT for improved data cleansing efficiency.",
    kind: "work",
  },
  {
    role: "Data Migration Analyst",
    company: "Concordia University",
    loc: "Montreal, QC",
    date: "Jan 2023 — Apr 2023",
    desc: "Managed data migration for Corporate Risk Management division, using SQL and Python for efficient data cleaning and transfer. Collaborated with cross-functional teams to understand and meet data requirements.",
    kind: "work",
  },
  {
    role: "Associate Data Analyst — Revenue Management",
    company: "Lifehouse",
    loc: "Montreal, QC",
    date: "Jan 2022 — Dec 2022",
    desc: "Implemented pricing strategies resulting in 15% increase in average revenue. Developed data models and dashboards using Tableau and Excel, analyzing data across 12 hotels in USA and Mexico.",
    kind: "work",
  },
  {
    role: "Business Analyst Intern",
    company: "Holt Cypher",
    loc: "Montreal, QC",
    date: "Sep 2021 — Dec 2021",
    desc: "Conducted user research, reducing reported issues by 25%. Assisted in developing new features for online banking platform and helped onboard first users of the platform.",
    kind: "work",
  },
  {
    role: "Business Operations Associate",
    company: "Groupe Tourbee Inc.",
    loc: "Montreal, QC",
    date: "Sep 2018 — Oct 2020",
    desc: "Helped Property Management business reach $2,000,000 in Revenue. Developed automation processes, reducing tenant turnover by 25% and increasing occupancy rate by 20%.",
    kind: "work",
  },
  {
    role: "B.Comm — Business Technology Management",
    company: "Concordia University",
    loc: "Montreal, QC",
    date: "Graduated",
    desc: "Bachelor of Commerce with a specialization in Business Technology Management — bridging business strategy and applied technology.",
    kind: "edu",
  },
];

const PROJECTS = [
  {
    title: "NVDA Stock Prediction",
    desc: "Predicts whether NVIDIA (NVDA) stock price will rise or fall the next day using a Random Forest classifier trained on historical technical indicators. Started after following the NVDA hype on r/wallstreetbets a little too closely.",
    stack: ["Python", "Machine Learning", "Random Forest", "Stock Analysis"],
    size: "lg",
    href: "https://github.com/shantanudebnath12/NVDA-Stock-Prediction",
  },
  {
    title: "Discord Bot — Canadian Immigration",
    desc: "A Discord bot that helps users navigate Canadian immigration law — real-time info, common-question answers, and guidance through application steps.",
    stack: ["Python", "Discord.py", "AWS EC2", "Docker"],
    size: "md",
    href: "https://github.com/shantanudebnath12/discord-bot-immigration",
  },
  {
    title: "Algorithmic Trading with ML",
    desc: "Algorithmic trading system built on S&P 500 data. Computes stock betas via Rolling OLS regression and trains on returns, volume, volatility, and Fama-French factors to inform trading decisions.",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "YFinance"],
    size: "md",
    href: "https://github.com/shantanudebnath12/algorithmic-trading-system",
  },
  {
    title: "Portfolio Website",
    desc: "This site — a responsive personal portfolio showcasing skills and projects.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    size: "sm",
    href: "#",
  },
];

const SKILLS = {
  "Languages": ["SQL", "Python", "JavaScript"],
  "Python Libraries": ["Django", "Matplotlib", "Pandas", "NumPy", "Scikit-Learn", "Selenium", "PyTorch"],
  "Tools & Platforms": ["Tableau", "PowerBI", "Azure DevOps", "Azure Synapse", "Azure Cognitive Search", "MongoDB", "Docker", "Git", "Hadoop", "Jira"],
};

const NAV_ITEMS = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

// ── Palettes ─────────────────────────────────────────────────
const PALETTES = {
  green: {
    zoneA: "#1E3A2F", zoneAInk: "#ffffff", zoneAMuted: "#a8c3af",
    zoneB: "#0F1724", zoneBInk: "#ffffff", zoneBMuted: "#94a3b8",
    accent: "#4ade80", accentInk: "#062814",
    card: "#152138", cardBorder: "rgba(255,255,255,0.08)",
    meshA: "#2a5a3f", meshB: "#0d4d2f", gradMid: "#162a28",
  },
  blue: {
    zoneA: "#0F2847", zoneAInk: "#ffffff", zoneAMuted: "#9fb3cc",
    zoneB: "#0B1220", zoneBInk: "#ffffff", zoneBMuted: "#94a3b8",
    accent: "#60a5fa", accentInk: "#061427",
    card: "#111c30", cardBorder: "rgba(255,255,255,0.08)",
    meshA: "#1e3a66", meshB: "#0a2f5c", gradMid: "#0d1c34",
  },
  warm: {
    zoneA: "#3a2418", zoneAInk: "#fff1e6", zoneAMuted: "#c9a78f",
    zoneB: "#1a0e0a", zoneBInk: "#fff1e6", zoneBMuted: "#a89082",
    accent: "#fb923c", accentInk: "#2a1206",
    card: "#2a1812", cardBorder: "rgba(255,240,230,0.08)",
    meshA: "#5a2f1c", meshB: "#3d1a0f", gradMid: "#281912",
  },
  mono: {
    zoneA: "#1a1a1a", zoneAInk: "#ffffff", zoneAMuted: "#9ca3af",
    zoneB: "#0a0a0a", zoneBInk: "#ffffff", zoneBMuted: "#9ca3af",
    accent: "#ffffff", accentInk: "#000000",
    card: "#141414", cardBorder: "rgba(255,255,255,0.09)",
    meshA: "#262626", meshB: "#171717", gradMid: "#121212",
  },
};

const PALETTES_LIGHT = {
  green: {
    zoneA: "#e8f0e6", zoneAInk: "#0e2218", zoneAMuted: "#4a5f4f",
    zoneB: "#f4f6f3", zoneBInk: "#0e2218", zoneBMuted: "#5a6b5f",
    accent: "#166534", accentInk: "#ffffff",
    card: "#ffffff", cardBorder: "rgba(20,40,30,0.10)",
    meshA: "#c9ddc4", meshB: "#b8d4b0", gradMid: "#eef3ec",
  },
  blue: {
    zoneA: "#e6eef7", zoneAInk: "#0a1a2e", zoneAMuted: "#4a5e75",
    zoneB: "#f3f6fa", zoneBInk: "#0a1a2e", zoneBMuted: "#5a6e85",
    accent: "#1d4ed8", accentInk: "#ffffff",
    card: "#ffffff", cardBorder: "rgba(20,30,50,0.10)",
    meshA: "#c4d6ea", meshB: "#b0c8e2", gradMid: "#edf2f8",
  },
  warm: {
    zoneA: "#f7eee5", zoneAInk: "#2a1408", zoneAMuted: "#6b4a38",
    zoneB: "#fbf5ee", zoneBInk: "#2a1408", zoneBMuted: "#7a5948",
    accent: "#c2410c", accentInk: "#ffffff",
    card: "#ffffff", cardBorder: "rgba(50,25,10,0.10)",
    meshA: "#ead5bf", meshB: "#e0c3a8", gradMid: "#f9f1e8",
  },
  mono: {
    zoneA: "#f5f5f5", zoneAInk: "#0a0a0a", zoneAMuted: "#525252",
    zoneB: "#fafafa", zoneBInk: "#0a0a0a", zoneBMuted: "#525252",
    accent: "#0a0a0a", accentInk: "#ffffff",
    card: "#ffffff", cardBorder: "rgba(0,0,0,0.12)",
    meshA: "#e5e5e5", meshB: "#d4d4d4", gradMid: "#f7f7f7",
  },
};

// ── Icons (inline SVG) ────────────────────────────────────────
const Icon = {
  github: (p) => (<svg viewBox="0 0 24 24" width={p.size||20} height={p.size||20} fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.53.11-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.19.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>),
  linkedin: (p) => (<svg viewBox="0 0 24 24" width={p.size||20} height={p.size||20} fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>),
  mail: (p) => (<svg viewBox="0 0 24 24" width={p.size||20} height={p.size||20} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>),
  briefcase: (p) => (<svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>),
  cap: (p) => (<svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6"/><path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>),
  arrowUp: (p) => (<svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>),
  chev: (p) => (<svg viewBox="0 0 24 24" width={p.size||24} height={p.size||24} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>),
  arrowRight: (p) => (<svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>),
};

// ── Scroll spy ───────────────────────────────────────────────
function useScrollSpy(rootRef, ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const elements = ids.map((id) => root.querySelector(`[data-section="${id}"]`)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best && best.isIntersecting) setActive(best.target.getAttribute("data-section"));
      },
      { root, threshold: [0.3, 0.55, 0.8] }
    );
    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef, ids.join("|")]);
  return active;
}

// ── Reveal on scroll ─────────────────────────────────────────
function Reveal({ children, delay = 0, from = "up", rootRef }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = rootRef?.current;
    const rb = el.getBoundingClientRect();
    const rootB = root ? root.getBoundingClientRect() : { top: 0, bottom: window.innerHeight };
    if (rb.top < rootB.bottom && rb.bottom > rootB.top) { setShown(true); return; }
    const io = new IntersectionObserver(
      (entries) => { for (const e of entries) { if (e.isIntersecting) { setShown(true); io.disconnect(); } } },
      { root, threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootRef]);
  const tx = { up: "translateY(24px)", left: "translateX(-24px)", right: "translateX(24px)", none: "none" }[from];
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : tx,
      transition: `opacity .7s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform .7s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
      willChange: "opacity, transform",
    }}>
      {children}
    </div>
  );
}

// ── Gradient-mesh background (animated) ──────────────────────
function MeshBG() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{
        position: "absolute", inset: "-20%",
        background: `radial-gradient(40% 40% at 20% 30%, var(--meshA) 0%, transparent 60%),
                     radial-gradient(45% 45% at 80% 20%, var(--meshB) 0%, transparent 60%),
                     radial-gradient(50% 50% at 60% 90%, var(--meshA) 0%, transparent 60%)`,
        filter: "blur(40px)", opacity: 0.75,
        animation: "pf-mesh 22s ease-in-out infinite alternate",
      }} />
    </div>
  );
}

// ── Particle-dot background ───────────────────────────────────
function DotsBG() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dots, raf;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    function resize() {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * DPR; canvas.height = h * DPR;
      ctx.scale(DPR, DPR);
      const count = Math.floor((w * h) / 9000);
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 0.4,
      }));
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      const col = getComputedStyle(canvas).getPropertyValue("--accent").trim() || "#4ade80";
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    resize(); frame();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

// ── Cursor follower ───────────────────────────────────────────
function CursorFollower({ scopeRef }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = 0, ry = 0, mx = -100, my = -100, raf;
    let visible = false;
    function onMove(e) {
      const r = scope.getBoundingClientRect();
      mx = e.clientX - r.left; my = e.clientY - r.top;
      if (!visible) {
        visible = true; rx = mx; ry = my;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "0.55";
      }
    }
    function onLeave() {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    }
    function loop() {
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    }
    scope.addEventListener("mousemove", onMove);
    scope.addEventListener("mouseleave", onLeave);
    loop();
    return () => { scope.removeEventListener("mousemove", onMove); scope.removeEventListener("mouseleave", onLeave); cancelAnimationFrame(raf); };
  }, [scopeRef]);
  return (
    <>
      <div ref={ringRef} style={{
        position: "absolute", left: -18, top: -18, width: 36, height: 36, borderRadius: "50%",
        border: "1.5px solid var(--accent)", opacity: 0, pointerEvents: "none", zIndex: 60,
        mixBlendMode: "difference", transition: "opacity .2s", willChange: "transform",
      }} />
      <div ref={dotRef} style={{
        position: "absolute", left: -3, top: -3, width: 6, height: 6, borderRadius: "50%",
        background: "var(--accent)", pointerEvents: "none", zIndex: 61,
        opacity: 0, transition: "opacity .2s", willChange: "transform",
      }} />
    </>
  );
}

// ── Tweaks panel ──────────────────────────────────────────────
function TweaksPanel({ state, setState, onClose }) {
  const swatch = (name, val) => (
    <button key={name} onClick={() => setState({ ...state, palette: name })} style={{
      width: 28, height: 28, borderRadius: 8,
      border: state.palette === name ? "2px solid #111" : "1px solid rgba(0,0,0,.15)",
      background: val, cursor: "pointer", padding: 0,
    }} title={name} />
  );
  return (
    <div style={{
      position: "fixed", right: 16, bottom: 16, zIndex: 1000, width: 260,
      background: "#fff", color: "#111", borderRadius: 14,
      boxShadow: "0 20px 60px rgba(0,0,0,.25), 0 0 0 1px rgba(0,0,0,.08)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontSize: 13, padding: 14,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 13 }}>Tweaks</div>
        <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 18, lineHeight: 1, color: "#666" }}>×</button>
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 6 }}>Palette</div>
        <div style={{ display: "flex", gap: 8 }}>
          {swatch("green", "#1E3A2F")}{swatch("blue", "#0F2847")}{swatch("warm", "#3a2418")}{swatch("mono", "#1a1a1a")}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 6 }}>Mode</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["dark", "light"].map((m) => (
            <button key={m} onClick={() => setState({ ...state, mode: m })} style={{
              flex: 1, padding: "8px 10px", borderRadius: 8,
              border: state.mode === m ? "1.5px solid #111" : "1px solid rgba(0,0,0,.15)",
              background: state.mode === m ? "#f1f1f1" : "#fff", cursor: "pointer",
              fontWeight: state.mode === m ? 600 : 400, textTransform: "capitalize",
            }}>{m}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Section shell ─────────────────────────────────────────────
function Section({ id, zone = "A", children, rootRef, label, isMobile }) {
  const ink = zone === "A" ? "var(--zoneAInk)" : "var(--zoneBInk)";
  const muted = zone === "A" ? "var(--zoneAMuted)" : "var(--zoneBMuted)";
  return (
    <section data-section={id} data-screen-label={label} style={{
      scrollSnapAlign: "start", scrollSnapStop: "always",
      minHeight: "100%", width: "100%",
      background: "transparent", color: ink,
      position: "relative", display: "flex", flexDirection: "column", justifyContent: "center",
      padding: isMobile ? "84px 20px 52px" : "88px 48px 64px", boxSizing: "border-box",
    }}>
      <div style={{ "--muted": muted, maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        {children}
      </div>
    </section>
  );
}

// ── Terminal typing lines ─────────────────────────────────────
function TerminalLines() {
  const lines = [
    { p: "$", t: `whoami`, kind: "cmd" },
    { t: `${OWNER.name}`, kind: "out" },
    { t: `${OWNER.role} · ${OWNER.location}`, kind: "out-muted" },
    { p: "$", t: `cat about.md`, kind: "cmd" },
    { t: `"${OWNER.tagline}"`, kind: "out" },
    { p: "$", t: `./contact --open`, kind: "cmd" },
  ];
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= lines.length) return;
    const t = setTimeout(() => setN(n + 1), 420);
    return () => clearTimeout(t);
  }, [n]);
  return (
    <div>
      {lines.slice(0, n).map((l, i) => (
        <div key={i} style={{
          color: l.kind === "out-muted" ? "var(--muted)" : l.kind === "cmd" ? "var(--zoneAInk)" : "var(--accent)",
          opacity: l.kind === "out-muted" ? 0.75 : 1,
        }}>
          {l.p && <span style={{ color: "var(--accent)", marginRight: 10 }}>{l.p}</span>}
          {l.t}
        </div>
      ))}
      {n >= lines.length && (
        <span style={{
          display: "inline-block", width: 9, height: 18, background: "var(--accent)",
          marginLeft: 2, verticalAlign: "text-bottom",
          animation: "pf-blink 1s steps(2) infinite",
        }} />
      )}
    </div>
  );
}

// ── Timeline ──────────────────────────────────────────────────
function Timeline({ items, rootRef, isTerminal, isMobile }) {
  if (isMobile) {
    return (
      <div style={{ position: "relative", maxWidth: 520, margin: "28px auto 0", paddingLeft: 8 }}>
        <div style={{
          position: "absolute", left: 28, top: 8, bottom: 8, width: 2,
          background: `linear-gradient(to bottom, transparent, var(--cardBorder) 6%, var(--cardBorder) 94%, transparent)`,
        }} />
        {items.map((item, i) => {
          const I = item.kind === "edu" ? Icon.cap : Icon.briefcase;
          return (
            <Reveal key={i} rootRef={rootRef} from="left" delay={i * 40}>
              <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", alignItems: "start", marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "var(--zoneA)", border: `2px solid var(--accent)`, color: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 0 0 4px var(--zoneA)", position: "relative", zIndex: 2,
                  }}>
                    <I size={14} />
                  </div>
                </div>
                <TimelineCard item={item} isTerminal={isTerminal} align="left" />
              </div>
            </Reveal>
          );
        })}
      </div>
    );
  }
  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "40px auto 0" }}>
      <div style={{
        position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
        background: `linear-gradient(to bottom, transparent, var(--cardBorder) 10%, var(--cardBorder) 90%, transparent)`,
        transform: "translateX(-1px)",
      }} />
      {items.map((item, i) => {
        const right = i % 2 === 1;
        const I = item.kind === "edu" ? Icon.cap : Icon.briefcase;
        return (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 48px 1fr", alignItems: "start", marginBottom: 32 }}>
            <div style={{ textAlign: "right", padding: "0 24px 0 0", gridColumn: 1, visibility: right ? "hidden" : "visible" }}>
              {!right && <Reveal rootRef={rootRef} from="left" delay={i * 40}><TimelineCard item={item} isTerminal={isTerminal} align="right" /></Reveal>}
            </div>
            <div style={{ gridColumn: 2, display: "flex", justifyContent: "center" }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "var(--zoneA)", border: `2px solid var(--accent)`, color: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 0 4px var(--zoneA)", position: "relative", zIndex: 2,
              }}>
                <I size={16} />
              </div>
            </div>
            <div style={{ padding: "0 0 0 24px", gridColumn: 3, visibility: right ? "visible" : "hidden" }}>
              {right && <Reveal rootRef={rootRef} from="right" delay={i * 40}><TimelineCard item={item} isTerminal={isTerminal} align="left" /></Reveal>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TimelineCard({ item, isTerminal, align }) {
  return (
    <div style={{ textAlign: align }}>
      <div style={{ fontSize: 11, color: "var(--accent)", fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 4 }}>
        {item.date}
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, margin: 0, letterSpacing: -0.3 }}>{item.role}</div>
      <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 2 }}>
        {item.company} <span style={{ opacity: 0.5 }}>·</span> {item.loc}
      </div>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6, marginTop: 10, textWrap: "pretty" }}>{item.desc}</p>
    </div>
  );
}

// ── Projects carousel ─────────────────────────────────────────
function ProjectsBento({ rootRef, isTerminal, isMobile }) {
  const [idx, setIdx] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [vpWidth, setVpWidth] = useState(0);
  const viewportRef = useRef(null);
  const isDraggingRef = useRef(false);
  const activePointerRef = useRef(null);   // tracks which pointerId we're following
  const pointerStartXRef = useRef(0);
  const maxDragRef = useRef(0);
  const vpWidthRef = useRef(0);            // ref copy so event closures stay current
  const navLockRef = useRef(false);
  const n = PROJECTS.length;
  const GAP = 24;

  // Measure viewport width before first paint so there's no layout flash
  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => { const w = el.offsetWidth; setVpWidth(w); vpWidthRef.current = w; };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Gesture-driven nav — shared 700ms lock stops wheel+touch double-fire
  const navigate = useCallback((dir) => {
    if (navLockRef.current) return;
    navLockRef.current = true;
    setIdx((i) => (i + dir + n) % n);
    setTimeout(() => { navLockRef.current = false; }, 700);
  }, [n]);

  // Arrow buttons / dots bypass the lock (deliberate taps)
  const go = (d) => setIdx((i) => (i + d + n) % n);

  // Keyboard
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onKey = (e) => { if (e.key === "ArrowRight") navigate(1); if (e.key === "ArrowLeft") navigate(-1); };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [navigate]);

  // Trackpad horizontal scroll (non-passive so we can preventDefault)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
      e.preventDefault();
      navigate(e.deltaX > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [navigate]);

  // Pointer drag — follows finger/cursor in real-time.
  // activePointerRef ensures synthetic mouse events that mobile fires after
  // a touch gesture don't re-open a second drag and double-navigate.
  const onPointerDown = (e) => {
    if (activePointerRef.current !== null || navLockRef.current) return;
    activePointerRef.current = e.pointerId;
    isDraggingRef.current = true;
    maxDragRef.current = 0;
    pointerStartXRef.current = e.clientX;
    viewportRef.current?.setPointerCapture(e.pointerId);
    if (viewportRef.current) viewportRef.current.style.cursor = "grabbing";
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current || e.pointerId !== activePointerRef.current) return;
    const dx = e.clientX - pointerStartXRef.current;
    maxDragRef.current = Math.max(maxDragRef.current, Math.abs(dx));
    setDragX(dx);
  };

  const onPointerUp = (e) => {
    if (!isDraggingRef.current || e.pointerId !== activePointerRef.current) return;
    activePointerRef.current = null;
    isDraggingRef.current = false;
    if (viewportRef.current) viewportRef.current.style.cursor = "grab";
    const dx = e.clientX - pointerStartXRef.current;
    if (dx < -(vpWidthRef.current * 0.25)) navigate(1);
    else if (dx > vpWidthRef.current * 0.25) navigate(-1);
    setDragX(0);
  };

  const slotWidth = vpWidth + GAP;
  const totalOffset = -(idx * slotWidth) + dragX;
  // Transition only when not actively dragging so motion follows finger exactly
  const transition = isDraggingRef.current ? "none" : "transform .52s cubic-bezier(.22,.8,.24,1)";

  return (
    <Reveal rootRef={rootRef}>
      <div style={{ marginTop: 32, position: "relative" }}>
        <div
          ref={viewportRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            overflow: "hidden", borderRadius: 18, outline: "none",
            cursor: "grab", userSelect: "none", WebkitUserSelect: "none",
            touchAction: "pan-y",
          }}
        >
          <div style={{
            display: "flex", gap: GAP,
            transform: `translateX(${totalOffset}px)`,
            transition,
            willChange: "transform",
          }}>
            {PROJECTS.map((p, i) => (
              <a key={p.title}
                href={p.href || "#"}
                target={p.href && p.href !== "#" ? "_blank" : undefined}
                rel="noreferrer"
                draggable={false}
                onClick={(e) => { if (maxDragRef.current > 5) e.preventDefault(); }}
                style={{
                  flex: `0 0 ${vpWidth}px`,
                  display: "flex", flexDirection: "column",
                  background: "var(--card)", border: `1px solid var(--cardBorder)`,
                  borderRadius: 18, padding: isMobile ? "24px 20px" : "36px 40px",
                  textDecoration: "none", color: "inherit",
                  minHeight: isMobile ? 300 : 340, boxSizing: "border-box",
                  transition: "border-color .25s, box-shadow .25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--cardBorder)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ fontSize: 12, color: "var(--accent)", letterSpacing: 1.8, textTransform: "uppercase", fontWeight: 600 }}>
                    {isTerminal ? `proj_${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}` : `Project ${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`}
                  </div>
                  <Icon.arrowRight size={18} />
                </div>
                <h3 style={{ fontSize: isMobile ? 24 : 34, fontWeight: 700, margin: 0, letterSpacing: -0.6, lineHeight: 1.15 }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: isMobile ? 14 : 16, lineHeight: 1.65, marginTop: 14, flex: 1, textWrap: "pretty", maxWidth: 780 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 22 }}>
                  {p.stack.map((s) => (
                    <span key={s} style={{
                      fontSize: 12, padding: "6px 12px", borderRadius: 999,
                      border: `1px solid var(--cardBorder)`, color: "var(--muted)", fontFamily: "inherit",
                    }}>{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {!isMobile && <button onClick={() => go(-1)} aria-label="Previous project"
          style={carouselArrowStyle("left", isMobile)}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--accentInk)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--card)"; e.currentTarget.style.color = "var(--zoneBInk)"; e.currentTarget.style.borderColor = "var(--cardBorder)"; }}
        >‹</button>}
        {!isMobile && <button onClick={() => go(1)} aria-label="Next project"
          style={carouselArrowStyle("right", isMobile)}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--accentInk)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "var(--card)"; e.currentTarget.style.color = "var(--zoneBInk)"; e.currentTarget.style.borderColor = "var(--cardBorder)"; }}
        >›</button>}

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 22 }}>
          {PROJECTS.map((_, i) => (
            <button key={i} aria-label={`Go to project ${i + 1}`} onClick={() => setIdx(i)} style={{
              width: idx === i ? 28 : 8, height: 8, borderRadius: 999,
              background: idx === i ? "var(--accent)" : "var(--cardBorder)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "width .3s, background .3s",
            }} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function carouselArrowStyle(side, isMobile) {
  const base = {
    position: "absolute", width: 44, height: 44, borderRadius: 999,
    background: "var(--card)", color: "var(--zoneBInk)", border: "1px solid var(--cardBorder)",
    cursor: "pointer", fontSize: 22, lineHeight: 1,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: "inherit", boxShadow: "0 6px 18px rgba(0,0,0,.25)",
    transition: "background .2s, color .2s, border-color .2s", zIndex: 5,
  };
  if (isMobile) return { ...base, bottom: -56, [side]: "calc(50% - 60px)", transform: side === "right" ? "translateX(60px)" : "translateX(-60px)" };
  return { ...base, top: "50%", [side]: -22, transform: "translateY(-50%)" };
}

// ── Skills block ──────────────────────────────────────────────
function SkillsBlock({ rootRef, isTerminal, isMobile }) {
  return (
    <div style={{ marginTop: isMobile ? 28 : 40, display: "grid", gap: isMobile ? 22 : 32 }}>
      {Object.entries(SKILLS).map(([group, items], gi) => (
        <Reveal key={group} rootRef={rootRef} delay={gi * 120}>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: 13, fontWeight: 600, margin: 0, marginBottom: 14, letterSpacing: 1.8, textTransform: "uppercase", color: "var(--accent)" }}>
              {isTerminal ? `// ${group.toLowerCase()}` : group}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {items.map((s) => (
                <span key={s} style={{
                  fontSize: 13, padding: "8px 14px", borderRadius: 999,
                  background: "var(--card)", border: `1px solid var(--cardBorder)`,
                  color: "var(--zoneBInk)", transition: "border-color .2s, transform .2s", cursor: "default",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--cardBorder)"; e.currentTarget.style.transform = "none"; }}
                >{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ── Style helpers ─────────────────────────────────────────────
function CtaLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); window.open(href, '_self'); }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...ctaStyle(),
        transform: hovered ? "translateY(-2px) scale(1.03)" : "none",
        boxShadow: hovered ? "0 12px 28px rgba(0,0,0,.4)" : "0 8px 20px rgba(0,0,0,.25)",
      }}
    >
      {children}
    </a>
  );
}

function headingStyle(isTerminal, isMobile) {
  return {
    fontSize: isMobile ? (isTerminal ? 26 : 32) : (isTerminal ? 36 : 44),
    fontWeight: isTerminal ? 600 : 800,
    margin: 0, textAlign: "center", letterSpacing: isTerminal ? 0 : -1.2,
  };
}

function ctaStyle() {
  return {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "var(--accent)", color: "var(--accentInk)",
    padding: "12px 22px", borderRadius: 999,
    textDecoration: "none", fontWeight: 600, fontSize: 14, fontFamily: "inherit",
    border: "none", cursor: "pointer",
    transition: "transform .2s, box-shadow .2s",
    boxShadow: "0 8px 20px rgba(0,0,0,.25)",
    whiteSpace: "nowrap",
  };
}

// ── Main Portfolio component ──────────────────────────────────
function Portfolio({ variant = "classic", initialPalette = "green", initialMode = "dark" }) {
  const scopeRef = useRef(null);
  const scrollRef = useRef(null);
  const bp = useBreakpoint();
  const isMobile = bp === 'mobile';
  const isTablet = bp === 'tablet';
  const isSmall = isMobile || isTablet;
  const [menuOpen, setMenuOpen] = useState(false);
  const [tweaks, setTweaks] = useState({ palette: initialPalette, mode: initialMode });
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const active = useScrollSpy(scrollRef, NAV_ITEMS.map(n => n.toLowerCase()));

  useEffect(() => {
    function onMsg(e) {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOpen(false);
    }
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const pal = (tweaks.mode === "light" ? PALETTES_LIGHT : PALETTES)[tweaks.palette];
  const cssVars = {
    "--zoneA": pal.zoneA, "--zoneAInk": pal.zoneAInk, "--zoneAMuted": pal.zoneAMuted,
    "--zoneB": pal.zoneB, "--zoneBInk": pal.zoneBInk, "--zoneBMuted": pal.zoneBMuted,
    "--accent": pal.accent, "--accentInk": pal.accentInk,
    "--card": pal.card, "--cardBorder": pal.cardBorder,
    "--meshA": pal.meshA, "--meshB": pal.meshB, "--gradMid": pal.gradMid,
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setShowTop(el.scrollTop > el.clientHeight * 0.8);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const el = scrollRef.current?.querySelector(`[data-section="${id}"]`);
    if (el) el.parentElement.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  }, []);

  const isTerminal = variant === "terminal";
  const fontBody = isTerminal
    ? `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
    : `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`;

  function SocialLink({ kind, label }) {
    const href = kind === "mail" ? `mailto:${OWNER.email}` : kind === "github" ? OWNER.githubUrl : OWNER.linkedinUrl;
    const I = Icon[kind];
    return (
      <a href={href} target="_blank" rel="noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        width: label ? "auto" : 42, height: 42, padding: label ? "0 14px" : 0,
        borderRadius: label ? 10 : 999,
        border: `1px solid ${pal.cardBorder}`,
        background: "transparent", color: "var(--muted)",
        textDecoration: "none", fontSize: 13, fontFamily: "inherit", justifyContent: "center",
        transition: "color .2s, border-color .2s, transform .2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = pal.cardBorder; e.currentTarget.style.transform = "none"; }}
      >
        <I size={18} />
        {label && <span>{label}</span>}
      </a>
    );
  }

  function TerminalHero({ isMobile }) {
    return (
      <Reveal rootRef={scrollRef}>
        <div style={{
          maxWidth: 720, margin: "0 auto",
          border: `1px solid ${pal.cardBorder}`, borderRadius: 12,
          background: tweaks.mode === "light" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.35)",
          backdropFilter: "blur(10px)", boxShadow: "0 20px 60px rgba(0,0,0,.35)",
          overflow: "hidden", fontFamily: "inherit",
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
            borderBottom: `1px solid ${pal.cardBorder}`,
            background: tweaks.mode === "light" ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
          }}>
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#27c93f" }} />
            <span style={{ marginLeft: 10, fontSize: 12, color: "var(--muted)" }}>shantanu@portfolio — zsh</span>
          </div>
          <div style={{ padding: isMobile ? "20px 18px" : "26px 28px", fontSize: isMobile ? 13 : 15, lineHeight: 1.8, overflowX: "auto" }}>
            <TerminalLines />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <CtaLink href={`mailto:${OWNER.email}`}>
                <Icon.mail size={16} /><span>./say-hi</span>
              </CtaLink>
              <SocialLink kind="github" label="github" />
              <SocialLink kind="linkedin" label="linkedin" />
            </div>
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <div ref={scopeRef} style={{
      ...cssVars, position: "relative", width: "100%", height: "100%",
      fontFamily: fontBody, color: pal.zoneAInk, overflow: "hidden",
    }}>
      {/* Nav */}
      <nav style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: isMobile ? "space-between" : "center",
        alignItems: "center", padding: isMobile ? "12px 16px" : "18px 16px",
        background: tweaks.mode === "light" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.25)",
        backdropFilter: "blur(14px) saturate(140%)", WebkitBackdropFilter: "blur(14px) saturate(140%)",
        borderBottom: `1px solid ${pal.cardBorder}`,
      }}>
        {isMobile && (
          <>
            <div style={{ fontFamily: "inherit", fontWeight: 700, fontSize: 14, color: "var(--accent)" }}>
              {isTerminal ? "~/shantanu" : "SD"}
            </div>
            <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" style={{
              background: "transparent", border: "none", color: pal.zoneAInk,
              cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5,
            }}>
              <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none", transition: "transform .2s" }} />
              <span style={{ display: "block", width: 22, height: 2, background: "currentColor", opacity: menuOpen ? 0 : 1, transition: "opacity .2s" }} />
              <span style={{ display: "block", width: 22, height: 2, background: "currentColor", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", transition: "transform .2s" }} />
            </button>
          </>
        )}
        {!isMobile && (
          <ul style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: "4px 6px", borderRadius: 999, flexWrap: "wrap", justifyContent: "center" }}>
            {NAV_ITEMS.map((n) => {
              const id = n.toLowerCase();
              const isActive = active === id;
              return (
                <li key={n}>
                  <button onClick={() => scrollTo(id)} style={{
                    padding: "8px 14px", borderRadius: 999, border: "none",
                    background: "transparent",
                    color: isActive ? "var(--accent)" : pal.zoneAInk,
                    fontWeight: isActive ? 600 : 500, fontSize: 13, cursor: "pointer",
                    letterSpacing: 0.2, fontFamily: "inherit", transition: "color .2s",
                  }}>{n}</button>
                </li>
              );
            })}
          </ul>
        )}
      </nav>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div style={{
          position: "absolute", top: 58, left: 12, right: 12, zIndex: 55,
          background: tweaks.mode === "light" ? "rgba(255,255,255,0.95)" : "rgba(10,20,30,0.95)",
          border: `1px solid ${pal.cardBorder}`, borderRadius: 14,
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          padding: 10, display: "flex", flexDirection: "column", gap: 2,
          boxShadow: "0 20px 60px rgba(0,0,0,.4)",
        }}>
          {NAV_ITEMS.map(n => {
            const id = n.toLowerCase();
            return (
              <button key={n} onClick={() => { scrollTo(id); setMenuOpen(false); }} style={{
                padding: "14px 16px", textAlign: "left", borderRadius: 10, border: "none",
                background: active === id ? "var(--card)" : "transparent",
                color: active === id ? "var(--accent)" : pal.zoneAInk,
                fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
              }}>{n}</button>
            );
          })}
        </div>
      )}

      {/* Scroll container — continuous gradient */}
      <div ref={scrollRef} style={{
        width: "100%", height: "100%", overflowY: "auto", overflowX: "hidden",
        scrollSnapType: "y mandatory", scrollBehavior: "smooth",
        background: `linear-gradient(to bottom, var(--zoneA) 0%, var(--zoneA) 20%, var(--gradMid) 50%, var(--zoneB) 80%, var(--zoneB) 100%)`,
      }}>
        {/* Home */}
        <Section id="home" zone="A" label="01 Home" isMobile={isMobile}>
          <MeshBG />
          <div style={{ position: "relative", textAlign: "left" }}>
            <TerminalHero isMobile={isMobile} />
          </div>
          <button onClick={() => scrollTo("about")} aria-label="Scroll down" style={{
            position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
            background: "transparent", border: "none", color: "var(--accent)",
            cursor: "pointer", opacity: 0.8,
            animation: "pf-bounce 2s ease-in-out infinite",
          }}>
            <Icon.chev size={28} />
          </button>
        </Section>

        {/* About */}
        <Section id="about" zone="A" label="02 About" rootRef={scrollRef} isMobile={isMobile}>
          <Reveal rootRef={scrollRef}>
            <h2 style={headingStyle(isTerminal, isMobile)}>// about</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, maxWidth: 760, margin: "24px auto 0", textAlign: "center" }}>
            {ABOUT.map((p, i) => (
              <Reveal key={i} rootRef={scrollRef} delay={120 * (i + 1)}>
                <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.7, margin: 0, textWrap: "pretty" }}>{p}</p>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" zone="A" label="03 Experience" rootRef={scrollRef} isMobile={isMobile}>
          <Reveal rootRef={scrollRef}>
            <h2 style={headingStyle(isTerminal, isMobile)}>// experience</h2>
          </Reveal>
          <Timeline items={EXPERIENCE} rootRef={scrollRef} isTerminal={isTerminal} isMobile={isMobile} />
        </Section>

        {/* Projects */}
        <Section id="projects" zone="B" label="04 Projects" rootRef={scrollRef} isMobile={isMobile}>
          <Reveal rootRef={scrollRef}>
            <h2 style={headingStyle(isTerminal, isMobile)}>// projects</h2>
          </Reveal>
          <ProjectsBento rootRef={scrollRef} isTerminal={isTerminal} isMobile={isMobile} />
        </Section>

        {/* Skills */}
        <Section id="skills" zone="B" label="05 Skills" rootRef={scrollRef} isMobile={isMobile}>
          <Reveal rootRef={scrollRef}>
            <h2 style={headingStyle(isTerminal, isMobile)}>// skills</h2>
          </Reveal>
          <SkillsBlock rootRef={scrollRef} isTerminal={isTerminal} isMobile={isMobile} />
        </Section>

        {/* Contact */}
        <Section id="contact" zone="B" label="06 Contact" rootRef={scrollRef} isMobile={isMobile}>
          <div style={{ textAlign: "center" }}>
            <Reveal rootRef={scrollRef}>
              <h2 style={headingStyle(isTerminal, isMobile)}>// get in touch</h2>
            </Reveal>
            <Reveal rootRef={scrollRef} delay={100}>
              <p style={{ color: "var(--muted)", fontSize: 17, maxWidth: 520, margin: "16px auto 28px", lineHeight: 1.6 }}>
                I'm always up for a coffee chat about forecasting, experimentation, or which orchestration tool hurts the least this week.
              </p>
            </Reveal>
            <Reveal rootRef={scrollRef} delay={180}>
              <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 28 }}>
                <SocialLink kind="mail" />
                <SocialLink kind="linkedin" />
                <SocialLink kind="github" />
              </div>
            </Reveal>
            <Reveal rootRef={scrollRef} delay={260}>
              <CtaLink href={`mailto:${OWNER.email}`}>
                <Icon.mail size={16} /><span>Send a message</span>
              </CtaLink>
            </Reveal>
            <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, textAlign: "center", color: "var(--muted)", fontSize: 12 }}>
              Built and designed by {OWNER.name} · All rights reserved. © {new Date().getFullYear()}
            </div>
          </div>
        </Section>
      </div>

      {/* Particles overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, opacity: 0.5 }}>
        <DotsBG />
      </div>

      <CursorFollower scopeRef={scopeRef} />

      {/* Back to top */}
      <button onClick={() => scrollTo("home")} aria-label="Back to top" style={{
        position: "absolute", right: 18, bottom: 18, zIndex: 70,
        width: 44, height: 44, borderRadius: 999,
        background: "var(--accent)", color: "var(--accentInk)",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 8px 24px rgba(0,0,0,.35)",
        opacity: showTop ? 1 : 0,
        transform: showTop ? "translateY(0)" : "translateY(12px)",
        pointerEvents: showTop ? "auto" : "none",
        transition: "opacity .3s, transform .3s",
      }}>
        <Icon.arrowUp size={18} />
      </button>

      {tweaksOpen && <TweaksPanel state={tweaks} setState={setTweaks} onClose={() => setTweaksOpen(false)} />}
    </div>
  );
}

window.Portfolio = Portfolio;
