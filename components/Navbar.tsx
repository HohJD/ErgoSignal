"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";

const links = [["How it works", "#how-it-works"], ["Privacy", "#privacy"], ["For teams", "#teams"]];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-30 border-b border-white/10"><nav aria-label="Primary navigation" className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10"><a href="#top" className="text-lg font-semibold tracking-[-.05em] text-cloud focus:outline-none focus:ring-2 focus:ring-mint">DigiHealth<span className="text-mint">.</span></a><div className="hidden items-center gap-8 md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-mint focus:outline-none focus:text-mint">{label}</a>)}</div><div className="flex items-center gap-3"><ThemeToggle /><div className="hidden md:block"><Button href="#pilot" className="px-4 py-2.5 text-xs">Join the pilot</Button></div><button className="rounded-lg p-2 text-cloud focus:outline-none focus:ring-2 focus:ring-mint md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span className="block h-px w-5 bg-current" /><span className="my-1 block h-px w-5 bg-current" /><span className="block h-px w-5 bg-current" /></button></div></nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/10 bg-ink md:hidden"><div className="flex flex-col px-6 py-5">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-sm text-slate-300">{label}</a>)}<Button href="#pilot" className="mt-5">Join the pilot</Button></div></motion.div>}</AnimatePresence></header>;
}
