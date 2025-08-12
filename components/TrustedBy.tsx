import { content } from '@/lib/content';
export default function TrustedBy(){
  return (
    <section className="section" aria-labelledby="trusted">
      <div className="container">
        <h3 id="trusted">Trusted by</h3>
        <div role="list" aria-label="Logo wall" style={{display:'flex', flexWrap:'wrap', gap:'24px', alignItems:'center'}}>
          {content.logos.map((l)=>(
            <img role="listitem" key={l.name} src={l.src} alt={l.name} style={{height:28, opacity:.9}} />
          ))}
        </div>
      </div>
    </section>
  );
}
