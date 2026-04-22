# TODO

This file tracks the current unfinished work and next-step priorities for `wc3-map-object-editor`.

It is intentionally short, practical, and aligned with the current project direction.

---

## Current milestone

**v0.4 - broader field coverage and regression stability**

Completed at this stage:

- Patchwork import for units / abilities / items
- WTS string resolution
- internal `MapDataFile` conversion
- CLI inspect/edit flow
- Patchwork JSON export
- Patchwork `json2war`
- first-batch validation
- second-batch validation
- third-batch validation
- one-command round-trip validation
- broader repeated ability field support
- broader item text/cost field support
- expanded unit combat-field coverage

---

## Next milestone direction

**v0.5 - semantic field refinement started**

This stage focuses on improving the meaning of the internal object model, not just expanding raw field coverage.

Current first-pass semantic refinement already started for:

- `combatType`
- `attackType`
- `armorType`

The strategy remains conservative:

- preserve raw imported fields
- derive semantic fields only from already observed real sample values
- avoid speculative large enum systems too early
- keep the importer/exporter/round-trip workflow stable while refining semantics

---

## Toolbox status

The project has now started forming a first-pass map modding toolbox layer.

Currently implemented toolbox-style commands include:

- `unit buff`
- `item buff`
- `ability tune`

Current unit preset support includes:

- `boss`
- `elite`

This marks the transition from a raw object-data pipeline toward a more practical map modding workflow.

---

## High-priority next work

### 1. Continue semantic field refinement

The next most valuable model-level work is to continue reducing placeholder fields and improving semantic quality.

Current candidates include:

- `race`
- additional attack/armor-related semantics
- remaining isolated raw fields such as `ucs2`

This work should remain sample-driven and conservative.

---

### 2. Strengthen the unit preset system

The preset system is now working and should continue growing carefully.

Useful next steps:

- add a third unit preset only when it represents a clearly different gameplay role
- keep presets understandable and reusable
- preserve the rule that manual flags override preset values

Avoid overgrowing the preset list too quickly.

---

### 3. Validate toolbox commands through export flow

The toolbox commands already update the internal model, but they should continue being validated through the full object-data workflow.

This means regularly confirming that:

- toolbox changes appear in `show`
- toolbox changes export correctly to Patchwork JSON
- round-trip behavior remains stable

The toolbox layer should not drift away from exporter/importer reality.

---

## Medium-priority work

### 4. Expand toolbox coverage beyond units

The toolbox now has first-pass support for:

- units
- items
- abilities

Future toolbox work can continue growing in a structured way, for example:

- more item-oriented presets
- more ability-oriented tuning helpers
- more goal-oriented commands instead of raw field-only edits

The project should prefer user-goal-driven commands over endless low-level flags where practical.

---

### 5. Prepare for broader map modding features

The long-term direction still includes moving beyond pure object-data tuning.

Likely future areas include:

- starting resource adjustments
- spawn/loadout helpers
- gameplay-trigger-style modifications
- eventually, scripted gameplay injection features

However, these should come only after the current object-data toolbox layer is stable enough.

---

### 6. Improve regression validation output

`validate-roundtrip` is already useful, but it can still improve later with:

- source count vs round-trip count comparison
- clearer success/failure summaries
- optional lightweight diff reporting
- cleaner final validation sections

This remains valuable for long-term confidence, but it is not the most urgent next step.

---

## Low-priority / later ideas

### 7. Full map packaging workflow

The project still focuses on the **object-data layer**, not full `.w3x` rebuild workflows.

Possible later direction:

- reinsert generated object files into full map packages
- validate end-to-end map rebuild behavior

This remains explicitly out of scope for the current milestone.

---

### 8. Friendlier interface

The current CLI is already useful for development and tooling, but later improvements could include:

- better CLI formatting
- more discoverable command help
- preset browsing
- lightweight GUI or web UI

This is a later-stage usability improvement, not a current priority.

---

## Documentation maintenance

The following docs should stay aligned as the project grows:

- `README.md`
- `docs/object-field-mapping-status.md`
- `docs/second-batch-validation.md`
- `docs/third-batch-validation.md`
- `docs/roundtrip-workflow.md`

Whenever a new sample batch, semantic milestone, or toolbox feature is added, these docs should be updated.

---

## Current recommended next step

If continuing from the current state, choose **one** of the following:

1. continue semantic field refinement
2. add one clearly differentiated new unit preset
3. validate toolbox commands more deeply through export/round-trip checks
4. start planning the first map-level modding feature, such as resource adjustment

Do not try to do all of them at once.

---

## Working rule

Keep using the current development loop:

1. inspect raw Patchwork data
2. map or refine a small batch of fields
3. validate `show`
4. validate exporter symmetry
5. run round-trip verification

For toolbox work, keep this additional rule:

6. prefer goal-oriented commands over purely low-level field editing

This workflow is still the main reason the project remains stable while growing.
