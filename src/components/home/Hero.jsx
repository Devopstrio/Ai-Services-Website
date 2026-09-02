import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Hero.jsx — DevOpsTRIO
 * Black theme, #E11D48 accent, white text, background video, inline CSS only.
 * Font: Geist
 */

const FONT = '"Geist", sans-serif';

const styles = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
background:
      "radial-gradient(circle, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0) 70%)",
          fontFamily: FONT,
  },
  video: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    objectFit: "cover",
    zIndex: 0,
    filter: "brightness(0.55) contrast(1.05)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%), linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.7) 100%)",
  },
  grain: {
    position: "absolute",
    inset: 0,
    zIndex: 2,
    opacity: 0.04,
    pointerEvents: "none",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
  },
  container: {
    position: "relative",
    zIndex: 3,
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 5%",
    boxSizing: "border-box",
  },
  headline: {
    color: "#FFFFFF",
    fontFamily: FONT,
    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
    lineHeight: 1.15,
    fontWeight: 400,
    letterSpacing: "-0.02em",
    margin: 0,
  },
  headlineBold: {
    fontFamily: FONT,
    fontWeight: 700,
    color: "#FFFFFF",
    display: "block",
    marginTop: "14px",
  },
  accent: {
    color: "#E11D48",
  },
  cursor: {
    color: "#E11D48",
    display: "inline-block",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((s) => !s), 650);
    return () => clearInterval(blink);
  }, []);

  return (
    <section style={styles.section}>
      <video
        ref={videoRef}
        style={{
          ...styles.video,
          opacity: videoReady ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src="/images/motion_loop_home.mp4" type="video/mp4" />
      </video>

      <div style={styles.overlay} />
      <div style={styles.grain} />

      <div style={styles.container}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          style={styles.headline}
        >
          Others create hype.
          <br />
          We create impact.
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            style={styles.headlineBold}
          >
            Let's Go Beyond the Hype
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.1 }}
              style={styles.cursor}
            >
              _
            </motion.span>
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
}