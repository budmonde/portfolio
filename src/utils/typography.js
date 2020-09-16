import Typography from "typography"

const typography = new Typography({
  title: "Monde Blog Theme",
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Open Sans",
      styles: ["300", "400", "600"],
    },
    {
      name: "Open Sans Condensed",
      styles: ["300"],
    },
    {
      name: "Source Code Pro",
      styles: ["300"],
    },
  ],
  headerFontFamily: ["Open Sans Condensed", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerWeight: "300",
  bodyWeight: "300",
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
