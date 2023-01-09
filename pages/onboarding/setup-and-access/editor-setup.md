# Editor setup

We recommend using [VS Code](https://code.visualstudio.com/) with the following extensions installed and formatting your code on save enabled (or, at minimum, formatting before commit):

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

To setup vscode, open settings.json and insert following lines.

The `organizeImports` will remove all unused imports, `formatDocument` will run prettier an `fixAll.eslint` will run eslint fix. The order of these commands is important.

The `files.insertFinalNewline` setting will add a new line at the end of the document.

```json
"editor.codeActionsOnSave": {
  "source.organizeImports": true,
  "source.formatDocument": true,
  "source.fixAll.eslint": true
},
"files.insertFinalNewline": true,

// this is optional but recommended
"typescript.preferences.importModuleSpecifier": "project-relative",
"files.autoSave": "onFocusChange",

```

If you prefer a different editor, it's completely fine. Still, you should find the counterparts of the extensions and setup mentioned above that help you with formatting and a suitable typescript integration (which is a part of default VS Code installation).

## Optional extensions

These are not needed but either nice to have or project-specific. Again listing VS Code extensions, users of different editors need to find their counterparts:

- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for frontend devs
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) - for easier reading of .md files
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - for .env files syntax highlighting
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - for easier React and html tags renaming
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - for automatically inserting closing tag
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - for spell checking your code, markdown, etc.
