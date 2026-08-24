"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Github, Mail, MapPin, Phone, Send } from "lucide-react";
import { CONTACT_METHODS, SITE } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const METHOD_ICON = {
  mail: Mail,
  phone: Phone,
  github: Github,
  "map-pin": MapPin,
} as const;

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and a message.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}${role ? `\nRole: ${role}` : ""}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setRole("");
    setMessage("");
    setSent(false);
  };

  return (
    <section id="contact" className="bg-background2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          titleLines={["Say hello."]}
          sub="Tell me about the opportunity — or just say hi. I usually reply within 24 hours."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {CONTACT_METHODS.map((m, i) => {
              const Icon = METHOD_ICON[m.icon];
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent3">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-medium">{m.label}</span>
                    <span className="block text-sm text-muted">
                      {m.value}
                    </span>
                  </span>
                </>
              );
              return (
                <Reveal key={m.label} delay={0.08 * i}>
                  {m.href ? (
                    <a
                      href={m.href}
                      target={m.icon === "github" ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:translate-x-1.5 hover:border-accent/60"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex cursor-default items-center gap-4 rounded-2xl border border-dashed border-line p-5">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-green/25 bg-surface p-10 text-center">
                <CheckCircle2 size={44} className="mb-4 text-green" />
                <h3 className="font-display text-xl font-bold text-green">
                  Your email draft is ready!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  If your mail app didn&apos;t open automatically, write me
                  directly at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-accent3 underline underline-offset-2"
                  >
                    {SITE.email}
                  </a>
                </p>
                <button onClick={reset} className="btn-ghost mt-6 !py-2 text-sm">
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-wider text-faint">
                      Name *
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-line bg-background2 px-4 py-3 text-sm outline-none transition-all placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs uppercase tracking-wider text-faint">
                      Email *
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-line bg-background2 px-4 py-3 text-sm outline-none transition-all placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-wider text-faint">
                    Your role
                  </span>
                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Recruiter at Tech Co."
                    className="w-full rounded-xl border border-line bg-background2 px-4 py-3 text-sm outline-none transition-all placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-wider text-faint">
                    Message *
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell me about the opportunity or just say hi!"
                    className="w-full resize-none rounded-xl border border-line bg-background2 px-4 py-3 text-sm leading-relaxed outline-none transition-all placeholder:text-faint focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </label>

                {error && (
                  <p className="text-sm text-coral" role="alert">
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
