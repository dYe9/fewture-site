import { content } from '@/lib/content';
export default function Footer(){
  const cols = content.footer.cols as Record<string,string[]>;
  return (
    <footer className="section" role="contentinfo" aria-labelledby="footer">
      <div className="container">
        <div className="grid grid-4">
          {Object.entries(cols).map(([title,links])=>(
            <nav key={title} aria-label={title}>
              <h3>{title}</h3>
              <ul style={{paddingLeft:0, listStyle:'none', margin:0}}>
                {links.map(l=><li key={l}><a href="#" className="sub">{l}</a></li>)}
              </ul>
            </nav>
          ))}
        </div>
        <hr style={{margin:'24px 0', border:'none', borderTop:'1px solid var(--g-200)'}} />
        <div style={{display:'flex', flexWrap:'wrap', gap:16, alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <img src="/logos/fewture.svg" alt="" width={24} height={24} />
            <strong>Fewture Studios</strong>
          </div>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            {content.footer.legal.map(x=> <span key={x} className="sub">{x}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
