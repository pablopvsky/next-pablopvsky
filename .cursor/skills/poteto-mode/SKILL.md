---
name: poteto-mode
description: >-
  Thin pointer to /poteto-mode for pablopvsky.com. Use when the user invokes
  poteto-mode. Do not vendor pstack playbooks into this repo.
disable-model-invocation: true
---

# Poteto mode (thin)

This file is a pointer. Playbooks, principles, and subagent routing live in the Cursor marketplace plugin `pstack` (`/poteto-mode`, `/setup-pstack`). Do not copy those playbooks into this repo.

## This site

- The product is the letter at `app/page.tsx`. Coral is the only color schema in `app/globals.css`.
- Not Famity Care. No WorkOS. No medicine or ABAC proofs. No preset switcher.
- Do not redesign the letter. Keep copy, links, and `letter-scene` layout.
- Done for a UI change means `pnpm build` passes and the homepage still shows the same letter.

## When the plugin does not resolve

Cloud agents often cannot load marketplace plugins. Say that `/poteto-mode` did not resolve, follow root `AGENTS.md` and `.cursor/skills/aura-constraints/SKILL.md`, and do not invent a second copy of the playbooks.
