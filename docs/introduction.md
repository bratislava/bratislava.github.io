---
sidebar_position: 1
---

# Introduction

> 🔧 This site is under active development - if you'd like to contribute, get in touch via [email](mailto:innovationteam@bratislava.sk) or [github](https://github.com/bratislava/bratislava.github.io)

This site is maintained by the [Department of Innovation and Technology of the City of Bratislava](https://inovacie.bratislava.sk). We believe in making public-sector code open source, promoting [savings, collaboration, auditability and innovation](https://publiccode.eu).

Our goal is to be transparent about services we’re developing and providing, as well as to invite other cities and municipalities to build on top of the same or similar open-source technologies we’ve already tested and used - to foster an ecosystem of collaboration between teams facing similar challenges. We’ll be happy to [get in touch.](mailto:innovationteam@bratislava.sk)

We intend to make many more of our projects open-source by the end of 2022 - stay tuned!

> If you are an individual or a company who’d like to take part in these efforts, collaborate closely on development or report an issue, we’d love to hear from you! 🙌 Contact us using this repository or at [innovationteam@bratislava.sk](mailto:innovationteam@bratislava.sk)

## Onboarding

This section is for developers / contractors contributing to our projects for the first time.

You need the following installed locally:

- [node v16](https://nodejs.org/en/)
- [docker](https://www.docker.com/) or locally running [PostgreSQL](https://www.postgresql.org/)

Each sub-project contains README which should get you up and running. Documentation site in progress.

### Editor setup

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

#### Optional extensions

These are not needed but either nice to have or project-specific. Again listing VS Code extensions, users of different editors need to find their counterparts:

- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - for frontend devs
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) - for easier reading of .md files
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - for .env files syntax highlighting
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - for easier React and html tags renaming
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - for automatically inserting closing tag

### Git workflow (committing, submitting & reviewing pull requests)

#### Branches and environments

We use a single trunk (`master`) from which feature branches are created. Master is what is regularly deployed to staging environment. Production builds are created for tagged commits, usually from master, but if a quick production fix is needed, the process is to branch-off at the last tagged commit and create new production tags on this new branch.

There is no `develop` or `production` branch, and there should rarely be need for a long-running branch other than `master`.

#### Commit message, branch and PR name formats

Preferred way of branch naming is `{issue-id}/{2-3 word summary}`, for example `MKB-460/form-captcha`.

Titles of pull requests should begin with issue id and one sentence description, for example "MKB-460: Add Google Recapcha to page forms".

For commit messages and pull request description please follow the conventions the way they are written here https://namingconvention.org/git/. If multiple options are provided (i.e. for commit message formatting), then all of them are ok.

#### Labels & Assignees

We are using labels and assignees to navigate easily through the open pull requests. Labels should be self explanatory. **Assignee should always be the person whose action is required to move the PR forward.** That is, if the PR is waiting for review by someone, the reviewer should be an assignee. If a code change is expected by a person, or a question needs to be answered, assign the PR to the person making the change or capable of answering. This way you can easily see which PRs are waiting for your actions, request assistance, or know who should you bother if your PR is stuck 🙂.

The usual PR workflow involves assigning the PR between a selected reviewer and the author, while also swapping the `needs work` and `needs review` labels depending on the current state. Once the reviewer is satisfied, they'll assign a `fix & ship` label, leaving it up to the author to merge at his or hers convenience, optionally fixing some minor issues before doing so (without the need for a further review).

#### Resolving conversations

It is helpful to resolve (github) conversations you have started if you feel the topic has been answered. This goes particularly for reviewers doing multiple passes on a single PR - try to resolve what you can before adding more comments on a subsequent pass.

#### Merging & Rebasing

Squash & merge into master. Liberal use of `rebase` for cleaning up your own feature branches (mainly if you tend to create and push work-in-progress commits) is encouraged. If your local commits are _way_ out of control, you might be required to do so before your PR is accepted (but this happens rarely).

_Still, be carefull_ if someone else branches off one of your feature branches - to make his life easier, you should avoid rebasing, if possible, past the point they've branched at - at least until your work is ready to become a part of master.
