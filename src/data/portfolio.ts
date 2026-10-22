export interface PortfolioImage { url: string; lrg: string }
export interface Portfolio { creative: PortfolioImage[]; portrait: PortfolioImage[]; landscape: PortfolioImage[] }

const creative: PortfolioImage[] = [
  { url: "/portfolio/creative/c1.jpg", lrg: "/portfolio/creative/lrg/c1.jpg" },
  { url: "/portfolio/creative/c2.jpg", lrg: "/portfolio/creative/lrg/c2.jpg" },
  { url: "/portfolio/creative/c3.jpg", lrg: "/portfolio/creative/lrg/c3.jpg" },
  { url: "/portfolio/creative/c4.jpg", lrg: "/portfolio/creative/lrg/c4.jpg" },
  { url: "/portfolio/creative/c5.jpg", lrg: "/portfolio/creative/lrg/c5.jpg" },
  { url: "/portfolio/creative/c6.jpg", lrg: "/portfolio/creative/lrg/c6.jpg" },
  { url: "/portfolio/creative/c7.jpg", lrg: "/portfolio/creative/lrg/c7.jpg" },
  { url: "/portfolio/creative/c8.jpg", lrg: "/portfolio/creative/lrg/c8.jpg" },
  { url: "/portfolio/creative/c9.jpg", lrg: "/portfolio/creative/lrg/c9.jpg" },
  { url: "/portfolio/creative/c10.jpg", lrg: "/portfolio/creative/lrg/c10.jpg" },
  { url: "/portfolio/creative/c11.jpg", lrg: "/portfolio/creative/lrg/c11.jpg" },
  { url: "/portfolio/creative/c12.jpg", lrg: "/portfolio/creative/lrg/c12.jpg" },
  { url: "/portfolio/creative/c13.jpg", lrg: "/portfolio/creative/lrg/c13.jpg" },
  { url: "/portfolio/creative/c14.jpg", lrg: "/portfolio/creative/lrg/c14.jpg" },
  { url: "/portfolio/creative/c15.jpg", lrg: "/portfolio/creative/lrg/c15.jpg" },
]

const portrait: PortfolioImage[] = [
  { url: "/portfolio/portrait/p1.jpg", lrg: "/portfolio/portrait/lrg/p1.jpg" },
  { url: "/portfolio/portrait/p2.jpg", lrg: "/portfolio/portrait/lrg/p2.jpg" },
  { url: "/portfolio/portrait/p3.jpg", lrg: "/portfolio/portrait/lrg/p3.jpg" },
  { url: "/portfolio/portrait/p4.jpg", lrg: "/portfolio/portrait/lrg/p4.jpg" },
  { url: "/portfolio/portrait/p5.jpg", lrg: "/portfolio/portrait/lrg/p5.jpg" },
  { url: "/portfolio/portrait/p6.jpg", lrg: "/portfolio/portrait/lrg/p6.jpg" },
  { url: "/portfolio/portrait/p7.jpg", lrg: "/portfolio/portrait/lrg/p7.jpg" },
  { url: "/portfolio/portrait/p8.jpg", lrg: "/portfolio/portrait/lrg/p8.jpg" },
  { url: "/portfolio/portrait/p9.jpg", lrg: "/portfolio/portrait/lrg/p9.jpg" },
  { url: "/portfolio/portrait/p10.jpg", lrg: "/portfolio/portrait/lrg/p10.jpg" },
  { url: "/portfolio/portrait/p11.jpg", lrg: "/portfolio/portrait/lrg/p11.jpg" },
  { url: "/portfolio/portrait/p12.jpg", lrg: "/portfolio/portrait/lrg/p12.jpg" },
  { url: "/portfolio/portrait/p13.jpg", lrg: "/portfolio/portrait/lrg/p13.jpg" },
  { url: "/portfolio/portrait/p14.jpg", lrg: "/portfolio/portrait/lrg/p14.jpg" },
  { url: "/portfolio/portrait/p15.jpg", lrg: "/portfolio/portrait/lrg/p15.jpg" },
]

const landscape: PortfolioImage[] = [
  { url: "/portfolio/landscape/l1.jpg", lrg: "/portfolio/landscape/lrg/l1.jpg" },
  { url: "/portfolio/landscape/l2.jpg", lrg: "/portfolio/landscape/lrg/l2.jpg" },
  { url: "/portfolio/landscape/l3.jpg", lrg: "/portfolio/landscape/lrg/l3.jpg" },
  { url: "/portfolio/landscape/l4.jpg", lrg: "/portfolio/landscape/lrg/l4.jpg" },
  { url: "/portfolio/landscape/l5.jpg", lrg: "/portfolio/landscape/lrg/l5.jpg" },
  { url: "/portfolio/landscape/l6.jpg", lrg: "/portfolio/landscape/lrg/l6.jpg" },
  { url: "/portfolio/landscape/l7.jpg", lrg: "/portfolio/landscape/lrg/l7.jpg" },
  { url: "/portfolio/landscape/l8.jpg", lrg: "/portfolio/landscape/lrg/l8.jpg" },
  { url: "/portfolio/landscape/l9.jpg", lrg: "/portfolio/landscape/lrg/l9.jpg" },
  { url: "/portfolio/landscape/l10.jpg", lrg: "/portfolio/landscape/lrg/l10.jpg" },
  { url: "/portfolio/landscape/l11.jpg", lrg: "/portfolio/landscape/lrg/l11.jpg" },
  { url: "/portfolio/landscape/l12.jpg", lrg: "/portfolio/landscape/lrg/l12.jpg" },
  { url: "/portfolio/landscape/l13.jpg", lrg: "/portfolio/landscape/lrg/l13.jpg" },
  { url: "/portfolio/landscape/l14.jpg", lrg: "/portfolio/landscape/lrg/l14.jpg" },
  { url: "/portfolio/landscape/l15.jpg", lrg: "/portfolio/landscape/lrg/l15.jpg" },
]

export const portfolio: Portfolio = { creative, portrait, landscape }
