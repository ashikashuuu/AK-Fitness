import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Activity, ArrowRight, Check, ChevronDown, ChevronUp, Dumbbell, Menu, MessageCircle, MoveUpRight, Target, TrendingUp, Users, Utensils, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ak-fitness-logo.png.asset.json";
import hero from "@/assets/fitness-hero.jpg";
import coach from "@/assets/coach.jpg";
import training from "@/assets/training.jpg";

const phone = "918892937611";
const chat = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const defaultChat = chat("Hi AK Fitness, I'd like to know more about your coaching programs.");
const nav = [["Home", "#home"], ["Programs", "#programs"], ["About", "#about"], ["Pricing", "#pricing"], ["Contact", "#contact"]];
const services = [
  { icon: Dumbbell, title: "Personal Training", text: "Focused sessions shaped around your goals, ability and schedule." },
  { icon: Utensils, title: "Nutrition Coaching", text: "Practical food guidance that works with your everyday life." },
  { icon: TrendingUp, title: "Progress Tracking", text: "See what is changing and keep moving in the right direction." },
  { icon: Activity, title: "Strength & Muscle", text: "Build a stronger foundation with structured, progressive training." },
  { icon: Target, title: "Fat Loss Programs", text: "A sustainable approach that goes beyond short-term fixes." },
  { icon: Users, title: "Accountability", text: "The support and consistency to keep showing up for yourself." },
];
const plans = [
  { name: "Starter Transformation", monthly: 1499, yearly: 1199, features: ["Full gym access", "Personalized workout plan", "Fitness assessment", "Community support"] },
  { name: "Pro Transformation", monthly: 2999, yearly: 2399, featured: true, features: ["Everything in Starter", "Personalized nutrition plan", "Weekly coach check-ins", "Body composition tracking", "Priority support"] },
  { name: "Elite Performance", monthly: 4999, yearly: 3999, features: ["Everything in Pro", "Dedicated personal coach", "1-on-1 training sessions", "Custom meal strategy", "Advanced performance tracking"] },
];
const faqs = [
  ["How do I get started?", "Send us a message on WhatsApp with your goal and preferred plan. We’ll talk through what fits before you begin."],
  ["Do I need prior training experience?", "Not at all. Training can be tailored to your current level, whether you are new or experienced."],
  ["How long does it take to see results?", "It depends on your starting point, goals and consistency. We focus on steady progress you can sustain."],
  ["Is nutrition included?", "The Pro and Elite options include nutrition guidance. Ask us about the details when you enquire."],
  ["Can I train from home?", "Ask us about options that can be adapted around your space and available equipment."],
  ["Can I change my plan later?", "Yes, message us to discuss changing your coaching plan as your goals evolve."],
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AK Fitness Studio | Train Stronger in Bengaluru" },
    { name: "description", content: "Personal training, nutrition coaching and strength programs at AK Fitness Studio in Electronic City Phase 1, Bengaluru. Enquire on WhatsApp." },
    { property: "og:title", content: "AK Fitness Studio | Train Stronger in Bengaluru" },
    { property: "og:description", content: "Personal training and fitness coaching in Electronic City Phase 1, Bengaluru. Discover programs and enquire on WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState("Pro Transformation");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hi AK Fitness, I'd like to enquire about coaching.\nName: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nGoal: ${form.get("goal")}\nPlan: ${form.get("plan")}\nMessage: ${form.get("message") || "—"}`;
    window.open(chat(message), "_blank", "noopener,noreferrer");
  }

  return <div className="site" id="home">
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="AK Fitness Studio home"><img src={logo.url} alt="AK Fitness Studio logo" /><span className="brand-label">AK FITNESS<br /><span>STUDIO</span></span></a>
        <nav className="nav" aria-label="Main navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <Button asChild className="site-btn header-cta"><a href="#contact">Get Started <ArrowRight /></a></Button>
        <Button variant="ghost" size="icon" className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>

    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={hero} width={1920} height={1080} alt="Athlete preparing to lift a barbell in a gym" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">AK Fitness Studio · Bengaluru</span>
          <h1 className="display" id="hero-title">BECOME THE<br /><span>STRONGEST</span><br />VERSION OF YOU.</h1>
          <p>Real coaching. Real effort. A plan built for where you are and where you want to go.</p>
          <div className="hero-actions"><Button asChild className="site-btn site-btn-lg"><a href="#contact">Start your transformation <ArrowRight /></a></Button><Button asChild variant="outline" className="site-btn site-btn-lg site-btn-outline"><a href="#programs">Explore programs <MoveUpRight /></a></Button></div>
          <div className="hero-bottom"><strong>01 / 03</strong><span className="line" /> <span>Train with intention. Progress with purpose.</span></div>
        </div>
      </section>
      <div className="ticker" aria-label="No excuses, just results. Start your transformation today."><div className="ticker-track" aria-hidden="true">{Array.from({length: 6}, (_, i) => <span key={i}>NO EXCUSES, JUST RESULTS &nbsp; ✳ &nbsp; START YOUR TRANSFORMATION TODAY &nbsp; ✳ &nbsp;</span>)}</div></div>
      <div className="container stats" aria-label="Our approach"><div className="stat"><b>01</b><span>Personal assessment</span></div><div className="stat"><b>02</b><span>Your training plan</span></div><div className="stat"><b>03</b><span>Consistent coaching</span></div><div className="stat"><b>04</b><span>Meaningful progress</span></div></div>

      <section className="section" id="programs"><div className="container"><div className="section-heading"><div><span className="eyebrow">What we do</span><h2 className="display section-title">BUILT FOR YOUR<br />NEXT LEVEL.</h2></div><p className="section-intro">No one-size-fits-all routines. Find the right mix of training, guidance and support to move forward.</p></div><div className="services-grid">{services.map(({icon: Icon, title, text}) => <article className="service" key={title}><Icon className="service-icon" aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section section-dark" id="about"><div className="container coach-layout"><div className="coach-visual"><img src={coach} width={960} height={1200} loading="lazy" alt="Illustrative portrait of a fitness trainer in a gym" /></div><div className="coach-copy"><span className="eyebrow">The AK approach</span><h2 className="display section-title">YOUR GOALS.<br />OUR FOCUS.</h2><p>Good training is more than a workout. It starts with understanding where you are, setting a clear direction, and showing up with a plan that grows with you.</p><p>At AK Fitness Studio, coaching is built around your progress, your lifestyle and what you want to achieve.</p><ul className="check-list">{["Personalized plans", "Progress tracking", "Practical guidance", "Goal-focused training"].map(item => <li key={item}><Check />{item}</li>)}</ul><Button asChild className="site-btn"><a href="#contact">Let’s talk <ArrowRight /></a></Button></div></div></section>

      <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">The process</span><h2 className="display section-title">A CLEAR PATH<br />FORWARD.</h2></div></div><div className="process-grid">{[["01", "Assess & set goals", "We begin with your starting point, your priorities and what success means to you."], ["02", "Build your plan", "Get a structured approach to training that fits your needs and your routine."], ["03", "Train & adapt", "Put in the work, track your progress and adjust as you get stronger."]].map(([number, title, text]) => <article className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="feature-band"><img src={training} width={1400} height={900} loading="lazy" alt="Athletes training together in a gym" /><div className="container"><span className="eyebrow">Show up for yourself</span><h2 className="display">STRENGTH IS BUILT, NOT GIVEN.</h2><p>Every rep is a chance to move forward. We’ll help you make each one count.</p></div></section>

      <section className="section" id="pricing"><div className="container"><div className="section-heading"><div><span className="eyebrow">Membership options</span><h2 className="display section-title">FIND YOUR FIT.</h2><p className="section-intro">Explore the options below, then message us to confirm availability and current pricing.</p></div><div className="billing" role="group" aria-label="Billing period"><Button variant="ghost" className={billing === "monthly" ? "active" : ""} onClick={() => setBilling("monthly")}>Monthly</Button><Button variant="ghost" className={billing === "yearly" ? "active" : ""} onClick={() => setBilling("yearly")}>Yearly <small>Save up to 20%</small></Button></div></div><div className="pricing-grid">{plans.map(plan => <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.name}>{plan.featured && <span className="price-badge">Popular choice</span>}<h3>{plan.name}</h3><div className="amount">₹{plan[billing].toLocaleString("en-IN")}<span> / month</span></div><p className="period">{billing === "yearly" ? "Indicative monthly equivalent, billed yearly" : "Indicative monthly price"}</p><ul>{plan.features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul><Button asChild variant={plan.featured ? "default" : "outline"} className={`site-btn${plan.featured ? "" : " site-btn-outline"}`}><a href={chat(`Hi AK Fitness, I'd like to enquire about the ${plan.name} plan (${billing}). Could you confirm current pricing and availability?`)} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowRight /></a></Button></article>)}</div><p className="price-note">Prices are indicative; confirm current plans and terms with the studio. No payment is taken on this website.</p></div></section>

      <section className="section section-dark" id="faq"><div className="container faq-layout"><div><span className="eyebrow">Good to know</span><h2 className="display section-title">QUESTIONS?<br />WE’VE GOT YOU.</h2><p className="section-intro">Still wondering about something? Message us and we’ll help you find the right starting point.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <div className="faq-item" key={question}><Button variant="ghost" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>{question}{openFaq === i ? <ChevronUp /> : <ChevronDown />}</Button>{openFaq === i && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="contact" id="contact"><div className="container contact-grid"><div><span className="eyebrow">Take the first step</span><h2 className="display">READY TO<br />GET STRONGER?</h2><p>Tell us a little about yourself. Your enquiry opens in WhatsApp, ready for you to send directly to AK Fitness.</p><div className="contact-details">WhatsApp: +91 88929 37611<br />Electronic City Phase 1, Bengaluru</div></div><form className="contact-form" onSubmit={submitEnquiry}><label>Your name<input name="name" required autoComplete="name" placeholder="Full name" /></label><label>Email address<input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Your number" /></label><label>Primary goal<select name="goal"><option>Build strength</option><option>Lose fat</option><option>Gain muscle</option><option>General fitness</option></select></label><label className="full">Interested in<select name="plan" value={selectedPlan} onChange={event => setSelectedPlan(event.target.value)}>{plans.map(plan => <option key={plan.name}>{plan.name}</option>)}<option>Not sure yet</option></select></label><label className="full">Anything else?<textarea name="message" rows={3} placeholder="Tell us about your goal" /></label><Button type="submit" className="site-btn full">Send enquiry on WhatsApp <ArrowRight /></Button></form></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-top"><div><a className="brand" href="#home"><img src={logo.url} alt="AK Fitness Studio logo" /><span className="brand-label">AK FITNESS<br /><span>STUDIO</span></span></a><p>Train with intention. Progress with purpose.<br />Electronic City Phase 1, Bengaluru.</p></div><nav className="footer-links" aria-label="Footer navigation">{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AK Fitness Studio. All rights reserved.</span><span>Built for the work ahead.</span></div></div></footer>
    <a href={defaultChat} target="_blank" rel="noopener noreferrer" className="whatsapp" aria-label="Chat with AK Fitness on WhatsApp" title="Chat on WhatsApp"><MessageCircle /></a>
  </div>;
}
