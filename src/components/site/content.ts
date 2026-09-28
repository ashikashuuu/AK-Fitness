import { Activity, Dumbbell, Target, TrendingUp, Users, Utensils } from "lucide-react";

export const services = [
  { icon: Dumbbell, title: "Personal Training", text: "Focused sessions shaped around your goals, ability and schedule." },
  { icon: Utensils, title: "Nutrition Coaching", text: "Practical food guidance that works with your everyday life." },
  { icon: TrendingUp, title: "Progress Tracking", text: "See what is changing and keep moving in the right direction." },
  { icon: Activity, title: "Strength & Muscle", text: "Build a stronger foundation with structured, progressive training." },
  { icon: Target, title: "Fat Loss Programs", text: "A sustainable approach that goes beyond short-term fixes." },
  { icon: Users, title: "Accountability", text: "The support and consistency to keep showing up for yourself." },
];
export const plans = [
  { name: "Starter Transformation", monthly: 1499, yearly: 1199, features: ["Full gym access", "Personalized workout plan", "Fitness assessment", "Community support"] },
  { name: "Pro Transformation", monthly: 2999, yearly: 2399, featured: true, features: ["Everything in Starter", "Personalized nutrition plan", "Weekly coach check-ins", "Body composition tracking", "Priority support"] },
  { name: "Elite Performance", monthly: 4999, yearly: 3999, features: ["Everything in Pro", "Dedicated personal coach", "1-on-1 training sessions", "Custom meal strategy", "Advanced performance tracking"] },
];
export const faqs = [
  ["How do I get started?", "Send us a message on WhatsApp with your goal and preferred plan. We’ll talk through what fits before you begin."],
  ["Do I need prior training experience?", "Not at all. Training can be tailored to your current level, whether you are new or experienced."],
  ["How long does it take to see results?", "It depends on your starting point, goals and consistency. We focus on steady progress you can sustain."],
  ["Is nutrition included?", "The Pro and Elite options include nutrition guidance. Ask us about the details when you enquire."],
  ["Can I train from home?", "Ask us about options that can be adapted around your space and available equipment."],
  ["Can I change my plan later?", "Yes, message us to discuss changing your coaching plan as your goals evolve."],
];
