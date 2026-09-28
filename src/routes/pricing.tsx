import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SiteLayout, chat } from "@/components/site/SiteLayout";
import { plans, faqs } from "@/components/site/content";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Membership & Pricing | AK Fitness Studio" },
    { name: "description", content: "Compare indicative monthly and yearly training plans at AK Fitness Studio. Confirm current pricing and availability on WhatsApp." },
    { property: "og:title", content: "Membership & Pricing | AK Fitness Studio" },
    { property: "og:description", content: "Explore AK Fitness Studio's Starter, Pro and Elite options and enquire on WhatsApp." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Pricing,
});
function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <SiteLayout><section className="page-intro container"><span className="eyebrow">Membership options</span><h1 className="display section-title">FIND YOUR FIT.</h1><p className="section-intro">Explore the options below, then message us to confirm availability and current pricing.</p></section><section className="section section-dark"><div className="container"><div className="section-heading"><div><span className="eyebrow">Compare plans</span><h2 className="display section-title">YOUR NEXT STEP.</h2></div><div className="billing" role="group" aria-label="Billing period"><Button variant="ghost" className={billing === "monthly" ? "active" : ""} onClick={() => setBilling("monthly")} aria-pressed={billing === "monthly"}>Monthly</Button><Button variant="ghost" className={billing === "yearly" ? "active" : ""} onClick={() => setBilling("yearly")} aria-pressed={billing === "yearly"}>Yearly <small>Save up to 20%</small></Button></div></div><div className="pricing-grid">{plans.map(plan => <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.name}>{plan.featured && <span className="price-badge">Popular choice</span>}<h3>{plan.name}</h3><div className="amount">₹{plan[billing].toLocaleString("en-IN")}<span> / month</span></div><p className="period">{billing === "yearly" ? "Indicative monthly equivalent, billed yearly" : "Indicative monthly price"}</p><ul>{plan.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><a className={buttonVariants({ variant: plan.featured ? "default" : "outline", className: `site-btn${plan.featured ? "" : " site-btn-outline"}` })} href={chat(`Hi AK Fitness, I'd like to enquire about the ${plan.name} plan (${billing}). Could you confirm current pricing and availability?`)} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowRight /></a></article>)}</div><p className="price-note">Prices are indicative; confirm current plans and terms with the studio. No payment is taken on this website.</p></div></section><section className="section"><div className="container faq-layout"><div><span className="eyebrow">Good to know</span><h2 className="display section-title">QUESTIONS?<br />WE’VE GOT YOU.</h2><p className="section-intro">Still wondering about something? Message us and we’ll help you find the right starting point.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><Button variant="ghost" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>{question}{openFaq === i ? <ChevronUp /> : <ChevronDown />}</Button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section></SiteLayout>;
}
