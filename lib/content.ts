export const content = {
  hero: {
    h1: 'Build culture with AI.',
    sub1: 'Fewture Studios designs search, analysis, and embedded experiences',
    sub2: 'that turn raw content into living systems.',
    primary: { label: 'Try Demo', href: '#try' },
    secondary: { label: 'Book Call', href: '#book' }
  },
  vision: [
    '01 Signal over noise: interpret culture in real time.',
    '02 Tools that think with you, not for you.',
    '03 From clips to concepts: embed meaning everywhere.',
  ],
  logos: [
    { name: 'Brand A', src: '/logos/logo1.svg' },
    { name: 'Brand B', src: '/logos/logo2.svg' },
    { name: 'Brand C', src: '/logos/logo3.svg' },
    { name: 'Brand D', src: '/logos/logo4.svg' },
  ],
  pillars: [
    { icon: '🔎', title: 'Search', blurb: 'Semantic video+audio retrieval that understands context.' },
    { icon: '📊', title: 'Analyze', blurb: 'Topic maps, clusters, and trends from messy inputs.' },
    { icon: '🧩', title: 'Embed', blurb: 'Portable vectors + APIs to power your apps.' },
    { icon: '🔐', title: 'Control', blurb: 'Private by default, transparent by design.' },
  ],
  services: [
    {
      key:'search', label:'Search', headline:'Find ideas, not keywords.',
      blurb:'Cross-modal retrieval connects visuals, speech, and text. Rank by meaning and novelty.',
      image:'/placeholders/service1.png',
      ctas:[{label:'Learn more', href:'#search'},{label:'Try Demo', href:'#try'}]
    },
    {
      key:'analyze', label:'Analyze', headline:'Make sense of the stream.',
      blurb:'Structure chaos with clustering, entities, and timelines. See the “why” behind spikes.',
      image:'/placeholders/service2.png',
      ctas:[{label:'Learn more', href:'#analyze'},{label:'Try Demo', href:'#try'}]
    },
    {
      key:'embed', label:'Embed', headline:'Ship meaning everywhere.',
      blurb:'Lightweight embeddings, filters, and web components so teams can build fast.',
      image:'/placeholders/service3.png',
      ctas:[{label:'Learn more', href:'#embed'},{label:'Try Demo', href:'#try'}]
    },
  ],
  usecases: [
    { title:'Creator intelligence', image:'/placeholders/use1.png', logos:['/logos/logo1.svg','/logos/logo2.svg'], blurb:'Spot trends before they trend.' },
    { title:'Brand safety', image:'/placeholders/use2.png', logos:['/logos/logo3.svg'], blurb:'Control risk without killing reach.' },
    { title:'Interactive archives', image:'/placeholders/use3.png', logos:['/logos/logo4.svg'], blurb:'Turn catalogs into living tools.' },
  ],
  testimonials: [
    { quote:'“Fewture turned our backlog into a discovery engine.”', author:'Head of Media, Brand A' },
    { quote:'“Search feels like collaborating with another strategist.”', author:'Creative Director, Brand B' },
  ],
  visionBlurb: 'Our north star: culturally-aligned AI that explains itself and earns trust.',
  pricing: [
    { tier:'Starter', price:'$0', lines:['Sandbox demo','Email support','Rate limited'] },
    { tier:'Studio', price:'$399', lines:['API access','Higher limits','Workflow templates'] },
    { tier:'Enterprise', price:'Custom', lines:['SLA & SSO','VPC/VPN','Onboarding & training'] },
  ],
  researchEthics: {
    text:'We publish our evaluations, dataset choices, and red-team notes.',
    href:'#research'
  },
  footer: {
    cols: {
      Product:['Overview','Pricing','Changelog','Status'],
      Developers:['Docs','API','SDK','Examples'],
      Solutions:['Creators','Brands','Archives','Education'],
      Company:['About','Careers','Contact','Press'],
      Social:['X/Twitter','Instagram','GitHub','LinkedIn'],
    },
    legal:['© Fewture Studios','Privacy','Terms']
  }
};
