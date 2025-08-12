'use client';
import { content } from '@/lib/content';
import Button from './ui/Button';
import { M } from './ui/Motion';

export default function Hero(){
  const c = content.hero;
  return (
    <section className="section hero-bg" aria-labelledby="hero">
      <div className="container" style={{paddingTop: '72px', paddingBottom:'72px'}}>
        <M.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:.5}}>
          <h1 id="hero" className="text-gradient" style={{fontFamily:'var(--font-outfit), sans-serif'}}>
            {c.h1}
          </h1>
          <p className="sub">{c.sub1}</p>
          <p className="sub" style={{marginBottom:'24px'}}>{c.sub2}</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Button href={c.primary.href}>{c.primary.label}</Button>
            <Button href={c.secondary.href} tone="neutral">{c.secondary.label}</Button>
          </div>
        </M.div>
        <div aria-hidden="true" style={{marginTop:'32px'}} className="glass">
          <img src="/placeholders/hero.png" alt="" style={{width:'100%', borderRadius:'16px'}} />
        </div>
      </div>
    </section>
  );
}
