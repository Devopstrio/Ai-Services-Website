import React, { useState, useEffect } from "react";
import { X, Check, Loader2, Sparkles } from "lucide-react";
import Swal from "sweetalert2";
import { insightsApi } from "../../lib/insightsApi";

const DEFAULT_CATEGORIES = [
  "AI & Data Innovation",
  "Cloud Services",
  "DevOps & Automation",
  "Cybersecurity",
  "Software Development",
  "Digital Transformation",
  "Enterprise Architecture",
  "Executive Insights"
];

export default function CategoryPopup({ email, closePopup }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingPref, setFetchingPref] = useState(true);

  // Fetch existing subscriber preferences if already in the system
  useEffect(() => {
    let isMounted = true;
    async function loadPreferences() {
      try {
        const pref = await insightsApi.getSubscriberPreferences(email);
        if (isMounted && pref && Array.isArray(pref.categories) && pref.categories.length > 0) {
          setSelectedCategories(pref.categories);
        } else if (isMounted) {
          // Default: select all
          setSelectedCategories(DEFAULT_CATEGORIES);
        }
      } catch {
        if (isMounted) setSelectedCategories(DEFAULT_CATEGORIES);
      } finally {
        if (isMounted) setFetchingPref(false);
      }
    }
    if (email) loadPreferences();
    return () => {
      isMounted = false;
    };
  }, [email]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const selectAll = () => setSelectedCategories(DEFAULT_CATEGORIES);
  const clearAll = () => setSelectedCategories([]);

  const submitSubscription = async () => {
    if (!email || !email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#E11D48",
        background: "#111111",
        color: "#ffffff"
      });
      return;
    }

    try {
      setLoading(true);
      await insightsApi.subscribe(email, [], selectedCategories);
      Swal.fire({
        icon: "success",
        title: "Subscription Successful!",
        text: "Your newsletter preferences have been registered.",
        timer: 2500,
        showConfirmButton: false,
        background: "#111111",
        color: "#ffffff"
      });
      closePopup();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Subscription Failed",
        text: err.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#E11D48",
        background: "#111111",
        color: "#ffffff"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-left">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-md bg-rose-500/10 text-rose-500 border border-rose-500/20">
            <Sparkles size={16} />
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
            Newsletter Preferences
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
          Tailor Your Insights
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
          Subscribing as <span className="text-white font-medium">{email}</span>. Select the topics you want to receive directly to your inbox.
        </p>

        {/* Category Pill Grid */}
        {fetchingPref ? (
          <div className="flex items-center justify-center py-12 text-zinc-400 gap-2">
            <Loader2 className="animate-spin" size={20} />
            <span className="text-sm">Loading preferences...</span>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="text-zinc-500 font-medium">
                {selectedCategories.length} of {DEFAULT_CATEGORIES.length} selected
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={selectAll}
                  className="text-rose-400 hover:text-rose-300 transition-colors"
                >
                  Select all
                </button>
                <span className="text-zinc-700">|</span>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-zinc-400 hover:text-zinc-300 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 max-h-[260px] overflow-y-auto pr-1">
              {DEFAULT_CATEGORIES.map((cat) => {
                const isSelected = selectedCategories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all ${
                      isSelected
                        ? "bg-rose-500/15 border-rose-500/50 text-white shadow-[0_0_15px_rgba(225,29,72,0.15)]"
                        : "bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center ml-2 shrink-0 border transition-all ${
                        isSelected
                          ? "bg-rose-500 border-rose-500 text-white"
                          : "border-zinc-700 bg-zinc-800/50"
                      }`}
                    >
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800/80">
          <button
            type="button"
            onClick={closePopup}
            disabled={loading}
            className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={submitSubscription}
            disabled={loading || fetchingPref}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} />
                Subscribing...
              </>
            ) : (
              "Confirm & Subscribe"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
