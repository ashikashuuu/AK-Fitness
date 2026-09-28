import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout, chat } from "@/components/site/SiteLayout";
import { plans } from "@/components/site/content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact AK Fitness Studio | Bengaluru" },
    { name: "description", content: "Get in touch with AK Fitness Studio in Electronic City Phase 1, Bengaluru. Send a fitness coaching enquiry directly on WhatsApp." },
    { property: "og:title", content: "Contact AK Fitness Studio | Bengaluru" },
    { property: "og:description", content: "Tell AK Fitness Studio about your goals and enquire directly on WhatsApp." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Contact,
});
function Contact() {
  const [selectedPlan, setSelectedPlan] = useState("Pro Transformation");
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hi AK Fitness, I'd like to enquire about coaching.\nName: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nGoal: ${form.get("goal")}\nPlan: ${form.get("plan")}\nMessage: ${form.get("message") || "—"}`;
    window.open(chat(message), "_blank", "noopener,noreferrer");
  }
  return <SiteLayout><section className="page-intro container"><span className="eyebrow">Take the first step</span><h1 className="display section-title">LET’S GET<br />STARTED.</h1><p className="section-intro">Tell us about your goal. We’d love to hear from you.</p></section><section className="contact"><div className="container contact-grid"><div><span className="eyebrow">Reach out</span><h2 className="display">READY TO<br />GET STRONGER?</h2><p>Your enquiry opens in WhatsApp, ready for you to send directly to AK Fitness.</p><div className="contact-details">WhatsApp: +91 88929 37611<br />Electronic City Phase 1, Bengaluru</div></div><form className="contact-form" onSubmit={submitEnquiry}><label>Your name<input name="name" required autoComplete="name" placeholder="Full name" /></label><label>Email address<input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your number" /></label><label>Primary goal<select name="goal"><option>Build strength</option><option>Lose fat</option><option>Gain muscle</option><option>General fitness</option></select></label><label className="full">Interested in<select name="plan" value={selectedPlan} onChange={event => setSelectedPlan(event.target.value)}>{plans.map(plan => <option key={plan.name}>{plan.name}</option>)}<option>Not sure yet</option></select></label><label className="full">Anything else?<textarea name="message" rows={3} placeholder="Tell us about your goal" /></label><Button type="submit" className="site-btn full">Send enquiry on WhatsApp <ArrowRight /></Button></form></div></section></SiteLayout>;
}
