import { content } from '@/lib/content';
import Button from './ui/Button';
export default function Pricing(){
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <h2 id="pricing-title">Pricing / Engagement</h2>
        <div className="grid grid-3" style={{marginTop:'16px'}}>
          {content.pricing.map(card=>(
            <div key={card.tier} className="card" aria-label={`${card.tier} plan`}>
              <h3>{card.tier}</h3>
              <p style={{fontFamily:'var(--font-outfit)', fontSize:32, margin:'8px 0'}}>{card.price}</p>
              <ul style={{paddingLeft:18, margin:'0 0 16px'}}>
                {card.lines.map((l,i)=><li key={i} className="sub">{l}</li>)}
              </ul>
              <Button href="#try">{card.tier==='Enterprise'?'Talk to Sales':'Try Demo'}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
