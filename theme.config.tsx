import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>📚 Bratislava Documentation</span>,
  project: {
    link: "https://github.com/bratislava",
  },
  docsRepositoryBase: "https://github.com/bratislava/bratislava.github.io",
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  footer: {
    text: "Department of Innovation and Technology of the City of Bratislava",
  },
  faviconGlyph: "📚",
}

export default config
