"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ChevronRight } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // REPLACE 'YOUR_EMAIL@gmail.com' WITH YOUR ACTUAL EMAIL
    const FORM_ENDPOINT = "https://formsubmit.co/ajax/maurydr1@gmail.com";

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ 
            email,
            _subject: "New Roam Waitlist Signup!", // Subject line in your inbox
            _template: "table" // Formats the email nicely
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-8 md:mt-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 p-4 bg-green-50 text-green-800 rounded-full border border-green-200"
          >
            <div className="bg-green-100 p-1 rounded-full">
              <Check size={16} />
            </div>
            <span className="font-medium">You're on the list! We'll be in touch.</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="relative flex items-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 pr-36 bg-white border border-gray-200 rounded-full text-rome-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rome-accent/50 focus:border-rome-accent transition-all shadow-sm hover:shadow-md"
              disabled={status === "loading"}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="absolute right-2 top-2 bottom-2 bg-rome-black text-white px-6 rounded-full font-bold text-sm hover:bg-rome-accent hover:text-rome-black transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status === "loading" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  Join The Wait List <ChevronRight size={16} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      
      {/* Error Message */}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-3 text-center">
          Something went wrong. Please try again.
        </p>
      )}
      
      <p className="mt-4 text-sm text-rome-gray text-center">
        Join 2,000+ providers. Unsubscribe anytime.
      </p>
    </div>
  );
};