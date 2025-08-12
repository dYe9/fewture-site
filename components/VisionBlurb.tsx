import { content } from '@/lib/content';
import Button from './ui/Button';
export default function VisionBlurb(){
  return (
    <section className="section" aria-labelledby="vision">
      <div className="container grid grid-2">
        <div>
          <h2 id="vision">Vision</h2>
          <p className="sub">{content.visionBlurb}</p>
        </div>
        <div style={{alignSelf:'end'}}>
          <Button href="#vision-more" tone="neutral">Learn more</Button>
        </div>
      </div>
    </section>
  );
}
