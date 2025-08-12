import Button from './ui/Button';
export default function FinalCTA(){
  return (
    <section className="section" aria-labelledby="final-cta">
      <div className="container grid grid-2 glass" style={{padding:'24px', alignItems:'center'}}>
        <div>
          <h2 id="final-cta">Ready to build?</h2>
          <p className="sub">Run the demo or jump on a call. Your stack, your data.</p>
        </div>
        <div style={{display:'flex', gap:12, justifyContent:'flex-end', flexWrap:'wrap'}}>
          <Button href="#try">Try Demo</Button>
          <Button href="#book" tone="neutral">Talk to Sales</Button>
        </div>
      </div>
    </section>
  );
}
