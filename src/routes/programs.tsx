import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/components/site/content";
import training from "@/assets/training.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({ meta: [
    { title: "Training Programs | AK Fitness Studio" },
    { name: "description", content: "Explore personal training, nutrition coaching, strength, fat loss and accountability programs at AK Fitness Studio in Bengaluru." },
    { property: "og:title", content: "Training Programs | AK Fitness Studio" },
    { property: "og:description", content: "Goal-focused training and coaching in Bengaluru, shaped around you." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Programs,
});
function Programs() {
  return <SiteLayout><section className="page-intro container"><span className="eyebrow">What we do</span><h1 className="display section-title">BUILT FOR YOUR<br />NEXT LEVEL.</h1><p className="section-intro">No one-size-fits-all routines. Find the right mix of training, guidance and support to move forward.</p></section><section className="section section-dark"><div className="container"><div className="services-grid">{services.map(({ icon: Icon, title, text }) => <article className="service" key={title}><Icon className="service-icon" aria-hidden="true" /><h2>{title}</h2><p>{text}</p></article>)}</div></div></section><section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">The process</span><h2 className="display section-title">A CLEAR PATH<br />FORWARD.</h2></div></div><div className="process-grid">{[["01", "Assess & set goals", "We begin with your starting point, your priorities and what success means to you."], ["02", "Build your plan", "Get a structured approach to training that fits your needs and your routine."], ["03", "Train & adapt", "Put in the work, track your progress and adjust as you get stronger."]].map(([number, title, text]) => <article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><Link className={buttonVariants({ className: "site-btn section-action" })} to="/pricing">View plans <ArrowRight /></Link></div></section><section className="feature-band"><img src={training} width={1400} height={900} loading="lazy" alt="Athletes training together in a gym" /><div className="container"><span className="eyebrow">Show up for yourself</span><h2 className="display">STRENGTH IS BUILT, NOT GIVEN.</h2><p>Every rep is a chance to move forward. We’ll help you make each one count.</p></div></section></SiteLayout>;
}
