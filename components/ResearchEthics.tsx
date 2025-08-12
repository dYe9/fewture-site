import { content } from '@/lib/content';
import Button from './ui/Button';
export default function ResearchEthics(){
  return (
    <section className="section" aria-labelledby="ethics">
      <div className="container glass" style={{padding:'24px'}}>
        <h2 id="ethics">Research & Ethics</h2>
        <p className="sub">{content.researchEthics.text}</p>
        <Button href={content.researchEthics.href} tone="neutral">Read more</Button>
      </div>
    </section>
  );
}
