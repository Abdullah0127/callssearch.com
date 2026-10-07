import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const nav = [['Home','/'],['About','/about'],['Services','/services'],['Contact','/contact']];
export default function Header(){const[open,setOpen]=useState(false);return <header className="header"><Link to="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">M<span>V</span></span><span className="brand-name">MOTOR VEHICLE<br/><b>CLAIM</b></span></Link><nav className="desktop-nav">{nav.map(([x,p])=><NavLink end={p==='/'} key={p} to={p}>{x}</NavLink>)}</nav><div className="header-actions"><a className="phone" href="tel:18442282372">(844) 228-2372</a><Link className="button button-dark header-cta" to="/claim">Claim now <ArrowUpRight size={15}/></Link></div><button className="menu-button" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<div className="mobile-menu">{nav.map(([x,p])=><NavLink end={p==='/'} key={p} to={p} onClick={()=>setOpen(false)}>{x}<ArrowUpRight size={17}/></NavLink>)}<a href="tel:18442282372">Call (844) 228-2372</a><Link className="button button-dark" to="/claim" onClick={()=>setOpen(false)}>Claim now <ArrowRight size={16}/></Link></div>}</header>}

