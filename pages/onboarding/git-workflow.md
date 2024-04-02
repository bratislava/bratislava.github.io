# Git workflow (committing, submitting & reviewing pull requests)

To contribute to our project you will need an account on [GitHub](https://github.com/) and [git](https://git-scm.com/). Some of the systems (some of the \*nix and Mac) already come with git pre-installed, which you can check by running

```bash
git --version
```

If you don't have it installed you can follow these guides for [Linux/Unix](https://git-scm.com/download/linux) or [Mac](https://git-scm.com/download/mac). For windows, you can use [gitforwindows](https://gitforwindows.org/).

## Branches and environments

We use a single trunk (`master`) from which feature branches are created. Master is what is regularly deployed to staging environment. Production builds are created for tagged commits, usually from master, but if a quick production fix is needed, the process is to branch-off at the last tagged commit and create new production tags on this new branch.

There is no `develop` or `production` branch, and there should rarely be need for a long-running branch other than `master`.

## Commit message, branch and PR name formats

Preferred way of branch naming is `{issue-id}/{2-3 word summary}`, for example `MKB-460/form-captcha`.

Titles of pull requests should begin with issue id and one sentence description, for example "MKB-460: Add Google Recapcha to page forms".

For commit messages and pull request description please follow the conventions the way they are written here https://namingconvention.org/git/. If multiple options are provided (i.e. for commit message formatting), then all of them are ok.

## Labels & Assignees

We are using labels and assignees to navigate easily through the open pull requests. Labels should be self explanatory. **Assignee should always be the person whose action is required to move the PR forward.** That is, if the PR is waiting for review by someone, the reviewer should be an assignee. If a code change is expected by a person, or a question needs to be answered, assign the PR to the person making the change or capable of answering. This way you can easily see which PRs are waiting for your actions, request assistance, or know who should you bother if your PR is stuck 🙂.

The usual PR workflow involves assigning the PR between a selected reviewer and the author, while also swapping the `needs work` and `needs review` labels depending on the current state. Once the reviewer is satisfied, they'll assign a `fix & ship` label, leaving it up to the author to merge at his or hers convenience, optionally fixing some minor issues before doing so (without the need for a further review).

Some projects have already set up automatic labeling depending on PR state (PR Labeler workflow).

## Resolving conversations

It is helpful to resolve (github) conversations you have started if you feel the topic has been answered. This goes particularly for reviewers doing multiple passes on a single PR - try to resolve what you can before adding more comments on a subsequent pass.

## Merging & Rebasing

Squash & merge into master. Liberal use of `rebase` for cleaning up your own feature branches (mainly if you tend to create and push work-in-progress commits) is encouraged. If your local commits are _way_ out of control, you might be required to do so before your PR is accepted (but this happens rarely).

_Still, be careful_ if someone else branches off one of your feature branches - to make their life easier, you should avoid rebasing, if possible, past the point they've branched at - at least until your work is ready to become a part of master.
