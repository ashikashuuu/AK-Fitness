import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import logo from "@/assets/ak-fitness-logo.png.asset.json";

export const phone = "918892937611";
export const chat = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
export const nav = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <div className="site">
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="AK Fitness Studio home" onClick={() => setMenuOpen(false)}><img src={logo.url} alt="AK Fitness Studio" /></Link>
        <nav className="nav" aria-label="Main navigation">{nav.map(item => <Link key={item.to} to={item.to} className={pathname === item.to ? "current" : ""} aria-current={pathname === item.to ? "page" : undefined}>{item.label}</Link>)}</nav>
        <Link className={buttonVariants({ className: "site-btn header-cta" })} to="/contact">Get Started <ArrowRight /></Link>
        <Button variant="ghost" size="icon" className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(item => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} aria-current={pathname === item.to ? "page" : undefined}>{item.label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="container"><div className="footer-top"><div><Link className="brand" to="/" aria-label="AK Fitness Studio home"><img src={logo.url} alt="AK Fitness Studio" /></Link><p>Train with intention. Progress with purpose.<br />Electronic City Phase 1, Bengaluru.</p></div><nav className="footer-links" aria-label="Footer navigation">{nav.map(item => <Link to={item.to} key={item.to}>{item.label}</Link>)}</nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AK Fitness Studio. All rights reserved.</span><span>Built for the work ahead.</span></div></div></footer>
    <a href={chat("Hi AK Fitness, I'd like to know more about your coaching programs.")} target="_blank" rel="noopener noreferrer" className="whatsapp" aria-label="Chat with AK Fitness on WhatsApp" title="Chat on WhatsApp"><MessageCircle /></a>
  </div>;
}
