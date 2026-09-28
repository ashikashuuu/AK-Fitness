import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import coach from "@/assets/coach.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AK Fitness Studio | Our Approach" },
    { name: "description", content: "Learn about AK Fitness Studio's personalized, goal-focused approach to coaching in Electronic City Phase 1, Bengaluru." },
    { property: "og:title", content: "About AK Fitness Studio | Our Approach" },
    { property: "og:description", content: "A coaching approach built around your progress, lifestyle and goals." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: About,
});
function About() {
  return <SiteLayout><section className="page-intro container"><span className="eyebrow">The AK approach</span><h1 className="display section-title">YOUR GOALS.<br />OUR FOCUS.</h1><p className="section-intro">Training shaped around where you are and what you want to achieve.</p></section><section className="section section-dark"><div className="container coach-layout"><div className="coach-visual"><img src={coach} width={960} height={1200} alt="Illustrative portrait of a fitness trainer in a gym" /></div><div className="coach-copy"><span className="eyebrow">Our approach</span><h2 className="display section-title">MORE THAN<br />A WORKOUT.</h2><p>Good training starts with understanding where you are, setting a clear direction, and showing up with a plan that grows with you.</p><p>At AK Fitness Studio, coaching is built around your progress, your lifestyle and what you want to achieve.</p><ul className="check-list">{["Personalized plans", "Progress tracking", "Practical guidance", "Goal-focused training"].map(item => <li key={item}><Check />{item}</li>)}</ul><Link className={buttonVariants({ className: "site-btn" })} to="/contact">Let’s talk <ArrowRight /></Link></div></div></section></SiteLayout>;
}
