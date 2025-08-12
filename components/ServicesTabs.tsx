'use client';
import { useEffect, useState } from 'react';
import { content } from '@/lib/content';
import Button from './ui/Button';
export default function ServicesTabs(){
  const items = content.services;
  const [active, setActive] = useState(items[0].key);
  const [mobile, setMobile] = useState(false);
  useEffect(()=>{
    const q = () => setMobile(window.innerWidth < 800);
    q(); window.addEventListener('resize', q);
    return ()=>window.removeEventListener('resize', q);
  },[]);
  if(mobile){
    return (
      <section className="section" aria-labelledby="services">
        <div className="container">
          <h2 id="services">Services</h2>
          <div className="accordion" role="list">
            {items.map(s=>(
              <details key={s.key} role="listitem">
                <summary>{s.label}</summary>
                <div style={{marginTop:12}} className="grid grid-2">
                  <div>
                    <h3>{s.headline}</h3>
                    <p className="sub">{s.blurb}</p>
                    <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:12}}>
                      {s.ctas.map(c=> <Button key={c.label} href={c.href} tone={c.label==='Learn more'?'neutral':'accent'}>{c.label}</Button>)}
                    </div>
                  </div>
                  <img src={s.image} alt="" className="glass" />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="section" aria-labelledby="services">
      <div className="container">
        <h2 id="services">Services</h2>
        <div className="tabs" role="tablist" aria-label="Service tabs">
          {items.map(s=>{
            const selected = active===s.key;
            return (
              <button key={s.key} role="tab" aria-selected={selected} aria-controls={`panel-${s.key}`}
                id={`tab-${s.key}`} className="tab" onClick={()=>setActive(s.key)}>
                <span className="pulse" aria-hidden />
                {s.label}
              </button>
            );
          })}
        </div>
        {items.map(s=>{
          const selected = active===s.key;
          return (
            <div key={s.key} role="tabpanel" id={`panel-${s.key}`} aria-labelledby={`tab-${s.key}`}
              hidden={!selected} style={{transition:`opacity var(--tabs-xfade)`, opacity:selected?1:0}}>
              <div className="grid grid-2" style={{marginTop:'16px'}}>
                <div>
                  <h3>{s.headline}</h3>
                  <p className="sub">{s.blurb}</p>
                  <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop:12}}>
                    {s.ctas.map(c=> <Button key={c.label} href={c.href} tone={c.label==='Learn more'?'neutral':'accent'}>{c.label}</Button>)}
                  </div>
                </div>
                <img src={s.image} alt="" className="glass" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
