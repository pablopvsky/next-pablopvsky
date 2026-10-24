<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — pablopvsky.com

Short constraints for coding agents on Pablo's personal site. Humans who want the full pstack workflow in Cursor desktop still run `/setup-pstack` and `/poteto-mode` from the marketplace plugin. Those playbooks are **not** vendored here. The thin pointer is `.cursor/skills/poteto-mode/SKILL.md`.

## What this repo is

A one-page letter at [pablopvsky.com](https://pablopvsky.com). Aura tokens, Coral as the only color schema, no account system.

| Area | Path |
| --- | --- |
| Letter page | `app/page.tsx`, `components/Header.tsx`, `components/Footer.tsx` |
| Coral tokens | `app/globals.css` (`:root` only) |
| Section primitive | `components/ui/Section.tsx` (matches `@aura/section`) |
| Narrative spec | `DESIGN.md` |
| Cursor rules and skills | `.cursor/rules/`, `.cursor/skills/` |
| Feature map | `wiki/obsidian-app/Feature-Map/` |

This is **not** Famity Care and **not** the Aura monorepo. Do not add WorkOS, medicine tracking, or ABAC proofs.

## Preferred workflow

1. **Read the letter first.** Copy, links, and `letter-scene` layout stay. Recolor through tokens.
2. **One schema.** Coral seeds are accent `#f84657`, gray `#8c7375`, background `#1a131b`. The shipped scale is Aura's mixer in dark appearance. Do not add a preset switcher.
3. **Small verifiable units.** `pnpm lint` after UI edits. `pnpm build` before calling the page done. Open the homepage and confirm the letter still reads.
4. **Feature map at PR time.** Update `wiki/obsidian-app/Feature-Map/`. Do not write progress logs.

## Gardener constraints (hard)

- **Letter** — Do not rewrite the homepage into a marketing page. Header, body, and footer stay a letter.
- **Tokens** — `--accent-*` and `--gray-*` only. Follow `DESIGN.md` and `.cursor/rules/*` (13px spacing, fluid type, icons). No hard-coded colors in components when a token exists.
- **Section** — Do not restyle it from the call site. Add a variant on the component if the design needs one.
- **Accessibility** — Links stay real anchors with visible focus. Honor `prefers-reduced-motion` (already in `letter-scene`).
- **Scope** — No drive-by refactors. No unrelated package bumps.
- **No product apps** — No Famity Care, Labelo, WorkOS, or medicine ABAC in this repo.
- **No code comments** — Fix the root cause. Names, types, and tests carry intent. Allowed comments are external constraints (with the reason), directives, licenses, and generated code. See `.cursor/rules/no-comments.mdc`.
- **No authz starter** — There is no session or role surface, so gdp-ts `deleteProject` proofs are not installed.

## Cursor rules and skills

- Ownership map: `.cursor/rules/aura-agent-surface.mdc`. `DESIGN.md` is narrative. Rules are guardrails. Skills are execution.
- Consumer checklist: `.cursor/skills/aura-constraints/SKILL.md`.
- After UI edits: `.cursor/skills/verify-aura-ui/SKILL.md` (`pnpm lint`).
- On a PR: `.cursor/skills/update-feature-map/SKILL.md`.
- Upstream shadcn skill is optional (`pnpm dlx skills add shadcn/ui -a cursor -y --copy`). Aura Keep wins on icons, 13px spacing, typography, and restyle.
- Third-party audits (Emil, Vercel react-best-practices, WorkOS) are not installed. Add one from upstream only when someone asks, and do not commit it.

## Out of scope

- Vendoring `backnotprop/pstack` or copying its playbooks.
- A multi-preset theme switcher, or a light scale generated against the dark Coral background (that mix collapses to black).
- WorkOS, Famity medicine proofs, or any `app/api` catalog. This site has no API routes.
- Redesigning the letter while upgrading Aura components. `Section` already matches the registry. Leave it.
