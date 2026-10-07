import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Home', '/'], ['About Us', '/about'], ['Our Services', '/services'], ['Contact Us', '/contact']];

export default function ReferenceHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    
    <header className="header reference-header"><Link to="/" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark">M<span>V</span></span><span className="brand-name">MOTOR VEHICLE<br /><b>CLAIM</b></span></Link><nav className="desktop-nav">{links.map(([label, path]) => <NavLink end={path === '/'} key={path} to={path}>{label}</NavLink>)}</nav><div className="header-actions"><a className="phone" href="tel:18442282372">(844) 228-2372</a><Link className="button button-dark header-cta" to="/claim">Claim Now <ArrowUpRight size={15} /></Link></div><button className="reference-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>{menuOpen && <nav className="reference-mobile-menu">{links.map(([label, path]) => <NavLink end={path === '/'} key={path} to={path} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></NavLink>)}<a href="tel:18442282372">(844) 228-2372</a><Link className="button button-dark" to="/claim" onClick={() => setMenuOpen(false)}>Claim Now <ArrowRight size={15} /></Link></nav>}</header>
  </>;
}
