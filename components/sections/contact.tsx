"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Check, Github, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { CONTACT_METHODS } from "@/lib/data";
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
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
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
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, role, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setRole("");
    setMessage("");
    setSent(false);
    setError("");
  };

  const inputCls =
    "w-full rounded-md border border-line bg-background2 px-4 py-3 font-mono text-sm outline-none transition-all placeholder:text-faint focus:border-line-strong focus:ring-2 focus:ring-foreground/10";

  return (
    <section id="contact" className="border-t border-line bg-background2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index={6}
          eyebrow="Contact"
          titleLines={["Say hello."]}
          sub="Tell me about the opportunity — or just say hi. I usually reply within 24 hours."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            {CONTACT_METHODS.map((m, i) => {
              const Icon = METHOD_ICON[m.icon];
              const content = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-line bg-background3 text-muted">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {m.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-foreground">
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
                      className="flex items-center gap-4 rounded-lg border border-line bg-surface p-5 transition-all duration-300 hover:translate-x-1.5 hover:border-line-strong"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex cursor-default items-center gap-4 rounded-lg border border-dashed border-line-strong p-5">
                      {content}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-lg border border-line bg-surface p-10 text-center">
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-line-strong bg-background3">
                  <Check size={20} className="text-foreground" />
                </span>
                <h3 className="font-display text-xl font-bold">
                  Message sent successfully
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                  I&apos;ll get back to you soon. Thank you for reaching out!
                </p>
                <button
                  onClick={reset}
                  className="btn-ghost mt-6 !py-2 font-mono text-xs"
                >
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
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      Name *
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="your_name"
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      Email *
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                    Your role
                  </span>
                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. recruiter @ tech co."
                    className={inputCls}
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                    Message *
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell me about the opportunity — or just say hi"
                    className={`${inputCls} resize-none leading-relaxed`}
                  />
                </label>

                {error && (
                  <p className="font-mono text-xs text-foreground" role="alert">
                    ! {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full font-mono text-sm sm:w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
