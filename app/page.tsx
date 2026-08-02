import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { DashboardMockup, HistoryMockup, OverviewMockup, Timeline } from "@/components/DashboardMockup";
import { PrivacyFlow } from "@/components/PrivacyFlow";
import { PilotForm } from "@/components/PilotForm";

const problemCards = [
  ["01", "Reminders interrupt work", "A nudge can be useful, but it only sees the moment you respond to it."],
  ["02", "Wearables need compliance", "Another device to charge, wear, and remember is not a complete workday picture."],
  ["03", "Assessments are a snapshot", "A perfect sitting pose says little about the 15:00 slump or a long meeting."],
];

const roadmap = [
  ["Now", ["macOS app", "Passive posture baseline", "Periodic monitoring", "Local history", "Menu-bar controls"]],
  ["Next", ["Per-desk calibration", "Weekly trend summaries", "Windows and Linux support", "Consent-based team insights", "Visual-ergonomics and screen-fatigue guidance"]],
];

export default function Home() {
  return <main className="overflow-hidden bg-ink text-cloud selection:bg-mint selection:text-ink">
    <Navbar />
    <section className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:pb-28 lg:pt-28">
      <div className="grid-glow absolute -right-1/4 top-0 h-[650px] w-[650px] rounded-full opacity-80" />
      <div className="relative z-10">
        <p className="eyebrow mb-7">Private signals for healthier screen-based work</p>
        <h1 className="max-w-3xl text-5xl font-medium leading-[.98] tracking-[-.065em] sm:text-6xl lg:text-7xl">Know what your workday does to your <span className="text-mint">body.</span></h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">DigiHealth turns passive posture samples into practical signals for healthier screen-based work—without storing camera footage.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button href="#pilot">Join the pilot</Button><Button href="#how-it-works" variant="secondary">See how it works <span aria-hidden>↓</span></Button></div>
        <div className="mt-12 flex items-center gap-3 text-xs text-slate-400"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-mint/30 text-mint">⌁</span>macOS posture analysis · On-device MediaPipe</div>
      </div>
      <DashboardMockup />
    </section>

    <section className="border-y border-white/10 bg-white/[.025] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10"><SectionHeading eyebrow="The observer effect" title="Most posture tools measure the moment you correct yourself." description="Desk workers need insight into the workday they actually have—not a performance for an assessment, a reminder, or a wearable." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">{problemCards.map(([number, title, text]) => <article key={number} className="bg-[#0d161c] p-7 sm:p-8"><span className="font-mono text-xs text-mint">{number}</span><h3 className="mt-12 text-xl tracking-[-.04em] text-white">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">{text}</p></article>)}</div>
      </div>
    </section>

    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"><SectionHeading eyebrow="A better signal" title="Watch the workday, not a staged pose." description="DigiHealth samples briefly, then gets out of the way. It turns periodic posture signals into a quality-controlled view of alignment over time." />
      <div className="mt-16 grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]"><div className="space-y-0 border-l border-white/10">{["30-second passive baseline", "Six short camera bursts", "On-device pose analysis", "Periodic sampling", "Quality-controlled posture score", "Clear report and timeline"].map((item, i) => <div key={item} className="group flex items-center gap-5 border-b border-white/10 px-5 py-5 text-sm text-slate-300"><span className="font-mono text-xs text-mint/80">0{i + 1}</span><span>{item}</span><span className="ml-auto opacity-0 transition group-hover:opacity-100 text-mint">↗</span></div>)}</div><Timeline /></div>
      <p className="mt-6 text-xs leading-5 text-slate-500">DigiHealth offers alignment feedback, not medical diagnosis. Sampling is periodic rather than continuous.</p>
    </section>

    <section id="privacy" className="relative border-y border-white/10 bg-[#0d171d] py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-10"><SectionHeading eyebrow="Privacy by architecture" title="Your camera frames never leave your machine." description="The app analyzes a brief camera burst in memory, produces posture landmarks and a local score, then discards the frame. There is no raw-video archive to protect." /><PrivacyFlow />
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{["No raw video stored", "No photos written to disk", "No cloud image processing", "Optional reports send text only", "User data stored locally"].map((item) => <div key={item} className="rounded-xl border border-mint/15 bg-mint/[.04] px-4 py-4 text-sm text-mint/90">✓ <span className="ml-2 text-slate-200">{item}</span></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"><SectionHeading eyebrow="A calm, clear workspace" title="Signals you can act on." description="Designed as a personal tool: the overview shows the present, the timeline adds context, and history makes change visible without judgment." />
      <div className="mt-14 grid gap-5 lg:grid-cols-3"><OverviewMockup /><Timeline compact /><HistoryMockup /></div>
    </section>

    <section id="teams" className="border-y border-white/10 bg-white/[.025] py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10"><SectionHeading eyebrow="For teams" title="Healthier work without workplace surveillance." description="DigiHealth is designed to give individuals control over their observations. Team-level, consent-based analytics are part of the employer-pilot roadmap—not a shipped feature." /><div className="rounded-2xl border border-white/10 bg-[#111c23] p-7 sm:p-10"><p className="font-mono text-xs uppercase tracking-[.16em] text-mint">Employer pilot roadmap</p><ul className="mt-10 space-y-5">{["Individual-first controls and local data", "Explicit opt-in for any aggregate learning", "No camera footage, no activity surveillance", "Aggregate signals only when participation is meaningful"].map((item) => <li key={item} className="flex gap-4 border-b border-white/10 pb-5 text-sm leading-6 text-slate-200"><span className="text-mint">✦</span>{item}</li>)}</ul></div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"><SectionHeading eyebrow="Roadmap" title="Build the healthier workday, one useful signal at a time." /><div className="mt-14 grid gap-5 md:grid-cols-2">{roadmap.map(([stage, features]) => <article key={stage as string} className="rounded-2xl border border-white/10 bg-[#101a20] p-7 sm:p-9"><p className="font-mono text-xs uppercase tracking-[.16em] text-mint">{stage as string}</p><ul className="mt-9 space-y-4">{(features as string[]).map((feature) => <li key={feature} className="flex gap-3 text-sm text-slate-200"><span className="text-mint">—</span>{feature}</li>)}</ul></article>)}</div></section>

    <section className="border-y border-white/10 py-16"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-white/10 bg-white/10 sm:grid-cols-4">{[["96", "unit tests"], ["19", "test files"], ["100%", "on-device processing"], ["MVP", "end-to-end working"]].map(([metric, label]) => <div key={label} className="bg-ink px-6 py-9 text-center"><strong className="block text-3xl tracking-[-.06em] text-mint">{metric}</strong><span className="mt-2 block text-xs text-slate-400">{label}</span></div>)}</div><p className="mx-auto mt-5 max-w-7xl px-6 text-center text-xs text-slate-500 lg:px-10">Local-first architecture · MediaPipe pose analysis · Built and tested as a working MVP</p></section>

    <section id="pilot" className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-10"><div className="absolute inset-x-0 top-1/2 h-[340px] -translate-y-1/2 bg-mint/10 blur-[140px]" /><div className="relative grid gap-12 lg:grid-cols-[.95fr_1.05fr]"><div><p className="eyebrow">Employer pilot</p><h2 className="max-w-xl text-5xl font-medium leading-[.98] tracking-[-.06em] sm:text-6xl">Make the invisible workday <span className="text-mint">visible.</span></h2><p className="mt-7 max-w-md text-base leading-7 text-slate-300">Bring your curiosity. We’ll bring a private, thoughtful way to understand screen-based work.</p><p className="mt-12 text-xs leading-5 text-slate-500">Non-diagnostic software. Not medical advice.</p></div><PilotForm /></div></section>
    <footer className="border-t border-white/10 px-6 py-9 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 text-xs text-slate-500 sm:flex-row"><div><strong className="text-base tracking-[-.04em] text-cloud">DigiHealth<span className="text-mint">.</span></strong><p className="mt-2">Privacy-first digital ergonomics for screen-heavy work.</p></div><div className="sm:text-right"><a className="transition hover:text-mint" href="#privacy">Privacy</a><p className="mt-2">Non-diagnostic software. Not medical advice.</p></div></div></footer>
  </main>;
}
