---
name: aura-constraints
description: >-
  Hard constraints for pablopvsky.com, Pablo's personal letter site. Use when
  editing the homepage, Coral tokens, layout, or the agent surface. Not Famity
  Care. No WorkOS. No medicine ABAC.
---

# Aura constraints (pablopvsky.com)

Read root `AGENTS.md` first. This skill is the checklist for **this** repo only.

## Scope gate

| In scope | Out of scope |
| --- | --- |
| `app/page.tsx`, `app/globals.css`, `components/Header.tsx`, `components/Footer.tsx`, `components/ui/Section.tsx` | Famity Care, Labelo, or any other product app |
| Root `DESIGN.md`, `.cursor/rules`, `.cursor/skills` | WorkOS, sessions, or medicine / ABAC proofs |
| Coral token values in `:root` | A theme preset switcher or a second accent |

If the task needs authz, medicine tracking, or a multi-preset theme, stop. This site does not have that surface.

## Letter page

- Keep the letter copy, links, and `letter-scene` layout. Recolor through tokens.
- Do not restyle `Section` from the call site. It already matches `@aura/section`.
- One schema: Coral seeds `accent #f84657`, `gray #8c7375`, `background #1a131b`, expanded with Aura's mixer in **dark** appearance. Light appearance against that background collapses to black, so it is not shipped.

## Tokens and styling

- Colors: `--accent-*` / `--gray-*` (or semantic tokens). No raw palette hex in components when a token exists.
- Spacing: `--spacing` is **13px**. No arbitrary `p-[16px]`.
- Typography: semantic `.h1`–`.p`. Never `text-xl` for primary copy. Editable controls stay ≥ 17px.
- Icons: `@radix-ui/react-icons` with `className="icon"`. Gap on the container, not margin on the icon.

## Public API

`Section` is the only installed Aura component. Prefer additive props. Do not rename exports without a breaking-change note in the PR.

## Hygiene

- No drive-by refactors outside the task.
- No package upgrades "while I'm here".
- No code comments except external constraints (with the reason), directives, licenses, and generated code.
- Do not vendor pstack playbooks or the shadcn skill into this repo.

## Humans and pstack

Full `/poteto-mode` playbooks stay in the Cursor marketplace plugin. This repo only has the thin pointer at `.cursor/skills/poteto-mode/SKILL.md`.
