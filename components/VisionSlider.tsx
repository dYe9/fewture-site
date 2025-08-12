'use client';
import { useEffect, useRef, useState } from 'react';
import { content } from '@/lib/content';

export default function VisionSlider(){
  const msgs = content.vision;
  const [i,setI] = useState(0);
  const paused = useRef(false);
  useEffect(()=>{
    const id = setInterval(()=>{
      if(!paused.current) setI(v => (v+1)%msgs.length);
    }, 3500);
    return ()=>clearInterval(id);
  },[msgs.length]);
  return (
    <section className="section" aria-label="Vision messages">
      <div className="container slider" onMouseEnter={()=>paused.current=true} onMouseLeave={()=>paused.current=false}>
        {msgs.map((m,idx)=>(
          <div key={idx} className={`slide ${i===idx?'active':''}`} style={{padding:'24px 0'}}>
            <div className="glass" style={{padding:'24px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:16}}>
              <strong style={{fontFamily:'var(--font-outfit)', fontSize:24, color:'var(--g-600)'}}>
                {(idx+1).toString().padStart(2,'0')}
              </strong>
              <p style={{margin:0, fontSize:18}}>{m}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
