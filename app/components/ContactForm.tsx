"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100";

/** "Start a Project" form — posts to /api/contact, which emails the enquiry. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <div className="mt-4 text-lg font-bold text-slate-900">Thanks — we&apos;ve got your message.</div>
        <p className="mt-2 text-sm leading-6 text-slate-500">We&apos;ll get back to you within one business day.</p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-green-600 hover:text-green-700">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
          <input id="cf-name" name="name" required maxLength={120} autoComplete="name" className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} placeholder="you@company.com" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="cf-message" className="text-xs font-bold uppercase tracking-widest text-slate-500">How can we help?</label>
        <textarea id="cf-message" name="message" required maxLength={5000} className={`${inputClass} h-36`} placeholder="Tell us about the product or MVP you want to build." />
      </div>
      {/* Honeypot — hidden from people, filled by bots. */}
      <input type="text" name="company_site" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          {error}{" "}
          Please <a href="mailto:protimghosh@bidsprointernational.com" className="underline">email us directly</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 w-full rounded-2xl py-3.5 text-sm font-bold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
        style={{background: "linear-gradient(135deg, #16a34a 0%, #059669 100%)"}}
      >
        {status === "sending" ? "Sending…" : "Tell Us About Your Product"}
      </button>
    </form>
  );
}
