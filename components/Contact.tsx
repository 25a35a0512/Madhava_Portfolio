"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiClock } from "react-icons/fi";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { profile } from "@/data/content";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-bg-elev border-t border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <div className="eyebrow mb-4">Contact</div>
          <Reveal>
            <h2 className="font-head text-white text-[28px] sm:text-4xl lg:text-[44px] mb-4">
              Let&apos;s build something
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted max-w-md mb-9 text-[16.5px]">
              Reach out about internships, freelance work, or just to talk shop about MERN and AI-powered
              products.
            </p>
          </Reveal>

          <ContactItem
            icon={<FiMail size={18} className="text-cyan" />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactItem
            icon={<FiPhone size={18} className="text-cyan" />}
            label="Phone"
            value={profile.phone}
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
          />
          <ContactItem
            icon={<FiLinkedin size={18} className="text-cyan" />}
            label="LinkedIn"
            value="linkedin.com/in/madhava-bobbili"
            href={profile.linkedin}
          />
          <ContactItem
            icon={<FiClock size={18} className="text-cyan" />}
            label="Response time"
            value="Usually within 24–48 hours"
          />
        </div>

        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field id="name" label="Name" placeholder="Your name" />
            <Field id="email" label="Email" placeholder="you@example.com" type="email" />
            <div>
              <label htmlFor="message" className="block text-[13px] text-muted mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about the role or project..."
                className="w-full bg-bg border border-line rounded-[10px] px-4 py-3.5 text-[14.5px] focus:border-cyan focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] outline-none transition-shadow"
              />
            </div>
            <Magnetic>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-grad text-white shadow-[0_8px_24px_-8px_rgba(59,107,255,0.6)]"
              >
                Send Message →
              </button>
            </Magnetic>
            {sent && (
              <div className="flex items-center gap-2.5 bg-cyan/10 border border-cyan/40 text-cyan px-4.5 py-3.5 rounded-[10px] text-sm">
                ✓ Thanks! Your message is ready — confirm in your email app to send it.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4 items-center mb-5">
      <div className="w-11 h-11 rounded-xl bg-bg-elev-2 border border-line flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm text-white mb-0.5 font-medium">{label}</h4>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-cyan transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-muted">{value}</p>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] text-muted mb-2 font-mono">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-bg border border-line rounded-[10px] px-4 py-3.5 text-[14.5px] focus:border-cyan focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12)] outline-none transition-shadow"
      />
    </div>
  );
}
