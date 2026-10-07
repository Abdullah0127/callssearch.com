import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
export function Eyebrow({children}){return <div className="eyebrow"><i/>{children}</div>}
export function Button({to='/contact',children='Talk to our team',dark=true}){return <Link className={`button ${dark?'button-dark':'button-light'}`} to={to}>{children}<ArrowUpRight size={16}/></Link>}

