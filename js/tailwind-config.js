// Shared Tailwind CDN configuration — loaded on every page, right after
// the Tailwind CDN script. This teaches Tailwind our custom color names,
// fonts, and a couple of small animations.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#0B0D10",        // near-black background, the whole site sits on this
        inkraise: "#12151A",    // slightly-lighter panels (cards, footer, mobile menu)
        paper: "#F3F1EA",        // warm off-white text color, like paper
        spectro: "#33E6C9",       // teal/cyan accent — represents the "tech" side (spectrum of light)
        assay: "#F2A65A",          // warm amber accent — represents the "science" side (lab assays)
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],  // headings
        serif: ["Source Serif 4", "serif"],          // body text — the "sweeter", warmer font
        mono: ["JetBrains Mono", "monospace"],         // labels, eyebrows, code
      },
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blink: { "50%": { opacity: 0 } },
      },
      animation: {
        floatSlow: "floatSlow 7s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
};
