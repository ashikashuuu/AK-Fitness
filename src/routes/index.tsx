import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/fitness-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AK Fitness Studio | Train Stronger in Bengaluru" },
    { name: "description", content: "Discover AK Fitness Studio in Electronic City Phase 1, Bengaluru. Explore coaching, programs and plans, and enquire on WhatsApp." },
    { property: "og:title", content: "AK Fitness Studio | Train Stronger in Bengaluru" },
    { property: "og:description", content: "Fitness coaching in Electronic City Phase 1, Bengaluru. Explore the studio and start a conversation on WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <SiteLayout>
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={hero} width={1920} height={1080} alt="Athlete preparing to lift a barbell in a gym" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="eyebrow">AK Fitness Studio · Bengaluru</span>
        <h1 className="display" id="hero-title">AK FITNESS<br /><span>STUDIO.</span></h1>
        <p>Real coaching. Real effort. A plan built for where you are and where you want to go.</p>
        <div className="hero-actions"><Link className={buttonVariants({ className: "site-btn site-btn-lg" })} to="/contact">Start your transformation <ArrowRight /></Link><Link className={buttonVariants({ variant: "outline", className: "site-btn site-btn-lg site-btn-outline" })} to="/programs">Explore programs <MoveUpRight /></Link></div>
        <div className="hero-bottom"><strong>01 / 03</strong><span className="line" /><span>Train with intention. Progress with purpose.</span></div>
      </div>
    </section>
    <div className="ticker" aria-label="No excuses, just results. Start your transformation today."><div className="ticker-track" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <span key={i}>NO EXCUSES, JUST RESULTS &nbsp; ✳ &nbsp; START YOUR TRANSFORMATION TODAY &nbsp; ✳ &nbsp;</span>)}</div></div>
    <div className="container stats" aria-label="Our approach"><div className="stat"><b>01</b><span>Personal assessment</span></div><div className="stat"><b>02</b><span>Your training plan</span></div><div className="stat"><b>03</b><span>Consistent coaching</span></div><div className="stat"><b>04</b><span>Meaningful progress</span></div></div>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Your next step</span><h2 className="display section-title">TRAIN WITH<br />PURPOSE.</h2></div><p className="section-intro">Whether you are just starting or ready for your next challenge, find the support that fits your goals.</p></div><div className="page-links"><Link to="/programs" className="page-link"><span>01 / Coaching</span><strong>Explore programs</strong><ArrowRight /></Link><Link to="/about" className="page-link"><span>02 / Our approach</span><strong>Meet the studio</strong><ArrowRight /></Link><Link to="/pricing" className="page-link"><span>03 / Membership</span><strong>View plans</strong><ArrowRight /></Link></div></div></section>
  </SiteLayout>;
}
