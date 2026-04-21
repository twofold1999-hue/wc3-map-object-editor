
# TODO

This file tracks the current unfinished work and next-step priorities for `wc3-map-object-editor`.

It is intentionally short, practical, and focused on the current milestone.

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

## High-priority next work

### 1. Remaining isolated field mappings

A small number of isolated fields still remain unmapped.

Current known example:

- `units`
  - `ucs2`

These should be mapped only after confirming their meaning from real samples.

---

### 2. Placeholder semantic fields

Some internal semantic fields are still placeholders rather than true mapped values:

- `combatType`
- `race`
- `attackType`
- `armorType`

These are now more important because the surrounding combat/object data model has become much stronger.

---

### 3. Continue regression-focused field expansion

Field growth should continue, but only through the established workflow:

1. inspect raw Patchwork data
2. map a small batch of fields
3. validate `show`
4. validate exporter symmetry
5. run round-trip verification

The project should avoid large speculative mapping batches.

---

## Medium-priority work

### 4. Stronger round-trip validation output

`validate-roundtrip` is already useful, but it can still improve later with:

- source count vs round-trip count comparison
- clearer success/failure summaries
- optional lightweight diff reporting
- cleaner final validation blocks

This is useful for long-term regression confidence, but it is not urgent.

---

### 5. More structured ability-field handling

Abilities are now the most structurally rich object type in the project.

Future work may include:

- better handling of repeated field families
- stronger naming/organization for repeated multi-level values
- future support for more column-sensitive Patchwork ability fields

This should be done carefully and driven by real samples.

---

### 6. More sample coverage

The project has already passed three validation batches, but broader coverage is still valuable.

Useful future sample directions:

- more complex unit enum/text fields
- more ability multi-column patterns
- more item linked-ability combinations
- more varied map/object datasets

Future sample work should stay small and high-signal.

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

The current CLI is effective for development and regression work, but later improvements could include:

- better CLI formatting
- batch editing helpers
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

Whenever a new sample batch or major field family is added, these docs should be updated.

---

## Current recommended next step

If continuing from the current milestone, choose **one** of the following:

1. map the remaining isolated field(s), such as `ucs2`
2. improve regression validation output
3. expand to a fourth batch of targeted samples
4. start replacing placeholder semantic fields with real mappings

Do not try to do all of them at once.

---

## Working rule

Keep using the current development loop:

1. inspect raw Patchwork data
2. map a small batch of fields
3. validate `show`
4. validate exporter symmetry
5. run round-trip verification

This workflow is still the main reason the project remains stable while growing.
