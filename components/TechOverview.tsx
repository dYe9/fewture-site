'use client';
import { M } from './ui/Motion';
export default function TechOverview(){
  return (
    <section className="section" aria-labelledby="tech">
      <div className="container grid grid-2">
        <div>
          <h2 id="tech">Tech overview</h2>
          <p className="sub">Short blurb on architecture and data flow. Private by default, modular by need.</p>
        </div>
        <div aria-hidden="true" className="glass" style={{padding:'24px', position:'relative', overflow:'hidden', minHeight:180}}>
          {[...Array(8)].map((_,i)=>(
            <M.div key={i}
              style={{ position:'absolute', width:60, height:36, border:'1px solid var(--g-200)', borderRadius:10,
                left: 20 + (i%4)*70, top: 20 + Math.floor(i/4)*70, background:'white' }}
              initial={{ y:0, opacity:0 }}
              animate={{ y:[0,-6,0], opacity:1 }}
              transition={{ y:{ repeat: Infinity, duration: 3 + i*.2, ease:'easeInOut' }, opacity:{ duration:.24, delay:i*0.06 } }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
