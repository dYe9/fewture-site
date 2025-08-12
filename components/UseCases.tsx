import { content } from '@/lib/content';
import Button from './ui/Button';
export default function UseCases(){
  return (
    <section className="section" aria-labelledby="usecases">
      <div className="container">
        <h2 id="usecases">Use cases</h2>
        <div className="snap" role="list" aria-label="Use case cards">
          {content.usecases.map(u=>(
            <article key={u.title} role="listitem" className="card">
              <img src={u.image} alt="" className="glass" />
              <h3 style={{marginTop:12}}>{u.title}</h3>
              <p className="sub">{u.blurb}</p>
              <div style={{display:'flex', gap:12, alignItems:'center', flexWrap:'wrap', margin:'8px 0'}}>
                {u.logos.map((l,idx)=><img key={idx} src={l} alt="" style={{height:20, opacity:.9}} />)}
              </div>
              <Button href="#use" tone="neutral">Learn more</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
