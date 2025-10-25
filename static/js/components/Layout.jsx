import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail, BookOpenText, FileDown, ExternalLink, Grid3X3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../hooks/use-toast";
import { site, nav, socials } from "../mock";

// Sticky header + footer + container layout
export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onDownloadCV = () => {
    toast({
      title: "Download CV",
      description: "CV download is mocked in this MVP. PDF integration coming soon.",
    });
  };

  const onHireMe = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)]">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Theme variables and base typography */}
      <style>{`
        :root{
          --brand-900:#0D0F12;--brand-800:#1E2329;--brand-100:#E6E9EF;
          --green-800:#1B5E20;--green-600:#43A047;--green-200:#A5D6A7;--green-50:#F1F8E9;
          --alert:#FF7043;--bg:#F1F8E9;--fg:#0D0F12;--card:#FFFFFF;--muted:#1E2329;--muted-2:#6b7280;
          --border: rgba(13,15,18,0.12)
        }
        @media (prefers-color-scheme: dark){
          :root{--bg:#0D0F12;--fg:#E6E9EF;--card:#1E2329;--border: rgba(230,233,239,0.12)}
        }
        body{font-family: 'Inter', ui-sans-serif, system-ui;}
        h1,h2,h3,.h{font-family: 'Space Grotesk', ui-sans-serif; letter-spacing:-0.01em}
        .container{max-width:1200px;margin:0 auto;padding:0 24px}
        .container-wide{max-width:none;width:100%;margin:0;padding:0}
        .link-active{color:var(--green-600)}
        .hero{background: linear-gradient(180deg, rgba(67,160,71,0.08), rgba(27,94,32,0) 60%)}
      `}</style>

      {/* Header (centered island) */}
      <div className="sticky top-4 z-30">
        <div className="container">
          <header className="rounded-xl border shadow-sm backdrop-blur supports-[backdrop-filter]:bg-[color:var(--bg)]/80 bg-[color:var(--bg)]/60" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center justify-between h-16 px-4">
              <div className="flex items-center gap-3">
                <Link to="/profile" aria-label="Profile">
                  <div className="w-9 h-9 flex items-center justify-center border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                    <span className="font-semibold" style={{ fontFamily: 'Space Grotesk' }}>{site.monogram}</span>
                  </div>
                </Link>
                <Link to="/" className="leading-tight">
                  <div className="text-sm text-[color:var(--muted-2)]">{site.tagline}</div>
                  <div className="text-base font-semibold">{site.name}</div>
                </Link>
              </div>

              <nav className="hidden md:flex items-center gap-2">
                {nav.map((n) => (
                  <NavLink key={n.to} to={n.to} className={({ isActive }) =>
                    `px-3 py-2 text-sm transition-colors hover:text-[color:var(--green-600)] ${isActive ? 'link-active' : ''}`
                  }>
                    {n.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={onDownloadCV} className="hidden sm:inline-flex border" style={{ borderColor: "var(--border)" }}>
                  <FileDown className="w-4 h-4 mr-2" /> Download CV
                </Button>
                <Button onClick={onHireMe} className="bg-[color:var(--green-800)] hover:bg-[color:var(--green-600)] text-white">
                  About me
                </Button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden sticky top-16 z-20 bg-[color:var(--bg)] border-b" style={{ borderColor: "var(--border)" }}>
        <div className="container flex overflow-x-auto">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) =>
              `px-4 py-3 text-sm shrink-0 transition-colors hover:text-[color:var(--green-600)] ${isActive ? 'link-active' : ''}`
            }>
              {n.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main - full width */}
      <main className="container-wide py-10">{children}</main>

      <Separator className="my-8" />

      {/* Footer */}
      <footer className="container py-8 grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
              <span className="text-sm" style={{ fontFamily: 'Space Grotesk' }}>{site.monogram}</span>
            </div>
            <span className="text-sm text-[color:var(--muted-2)]">{site.name}</span>
          </div>
          <p className="mt-3 text-sm text-[color:var(--muted-2)]">Data science for agri/food/env impact. Clean, reproducible, measurable.</p>
        </div>
        <div className="flex md:justify-end items-center gap-3">
          <a className="hover:opacity-80" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="w-5 h-5"/></a>
          <a className="hover:opacity-80" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="w-5 h-5"/></a>
          <a className="hover:opacity-80" href={socials.scholar} target="_blank" rel="noreferrer" aria-label="Scholar"><BookOpenText className="w-5 h-5"/></a>
          <a className="hover:opacity-80" href={socials.email} aria-label="Email"><Mail className="w-5 h-5"/></a>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
