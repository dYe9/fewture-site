'use client';
import { useEffect, useRef, useState } from 'react';
import { content } from '@/lib/content';
export default function Testimonials(){
  const t = content.testimonials;
  const [i,setI] = useState(0);
  const paused = useRef(false);
  useEffect(()=>{
    const id = setInterval(()=>{ if(!paused.current) setI(v=>(v+1)%t.length); }, 4000);
    return ()=>clearInterval(id);
  },[t.length]);
  return (
    <section className="section" aria-labelledby="testimonials">
      <div className="container slider" onMouseEnter={()=>paused.current=true} onMouseLeave={()=>paused.current=false}>
        <h2 id="testimonials">What people say</h2>
        {t.map((q,idx)=>(
          <div key={idx} className={`slide ${i===idx?'active':''}`}>
            <div className="card">
              <p style={{fontSize:22, marginBottom:8}}>{q.quote}</p>
              <p className="sub">{q.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
