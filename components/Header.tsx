'use client';
import Link from 'next/link';
import Button from './ui/Button';

export default function Header(){
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link href="/" aria-label="Fewture Studios home" style={{display:'inline-flex', gap:8, alignItems:'center'}}>
          <img src="/logos/fewture.svg" alt="" width={28} height={28} />
          <strong>Fewture Studios</strong>
        </Link>
        <div style={{display:'flex', gap:12}}>
          <Button href="#book" tone="neutral">Talk to Sales</Button>
          <Button href="#try">Try Demo</Button>
        </div>
      </div>
    </header>
  );
}
