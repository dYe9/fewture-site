import { content } from '@/lib/content';
import { Stagger, Reveal } from './ui/Motion';
export default function Pillars(){
  return (
    <section className="section" aria-labelledby="pillars">
      <div className="container">
        <h2 id="pillars">Value pillars</h2>
        <Stagger>
          <div className="grid grid-4">
            {content.pillars.map((p, i)=>(
              <Reveal key={p.title} delay={i*0.06}>
                <div className="card" role="article" aria-label={p.title}>
                  <div style={{fontSize:24}}>{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p className="sub">{p.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
