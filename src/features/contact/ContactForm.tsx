"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API request for initial mock setup
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe" 
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com" 
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          rows={5} 
          value={formData.message}
          onChange={handleChange}
          placeholder="Your project details..." 
          required
        />
      </div>
      <button 
        type="submit" 
        className={styles.btnPrimary} 
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p style={{ color: "var(--success)", fontSize: "var(--text-sm)", marginTop: "var(--space-xs)" }}>
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "var(--error)", fontSize: "var(--text-sm)", marginTop: "var(--space-xs)" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
