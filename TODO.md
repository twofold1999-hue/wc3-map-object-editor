# TODO

This file tracks the current unfinished work and next-step priorities for `wc3-map-object-editor`.

It is intentionally short and practical.

---

## Current milestone

**v0.3 - Patchwork round-trip core working**

Completed at this stage:

- Patchwork import for units / abilities / items
- WTS string resolution
- internal `MapDataFile` conversion
- CLI inspect/edit flow
- Patchwork JSON export
- Patchwork `json2war`
- first-batch validation
- second-batch validation
- one-command round-trip validation

---

## High-priority next work

### 1. Remaining isolated field mappings

Small remaining mapping gaps still exist.

Current known example:

- `units`
  - `ucs2`

These should be handled carefully and only after confirming semantics from real samples.

---

### 2. Placeholder semantic fields

Some internal fields still exist as placeholders rather than real mapped values:

- `combatType`
- `race`
- `attackType`
- `armorType`

These are not blocking the current round-trip workflow, but they are important for making the editor feel more complete.

---

### 3. Exporter/importer symmetry review

The main object workflow is already working, but the project should continue validating that newly added fields are always:

- imported correctly
- shown correctly
- exported symmetrically
- preserved through round-trip

This is especially important when adding new repeated or structured fields.

---

## Medium-priority work

### 4. More sample coverage

The project has already passed two sample batches, but it still needs broader coverage.

Useful future sample directions:

- more complex unit attack patterns
- more complex ability multi-column/multi-level fields
- more item metadata / linked ability patterns
- additional object types or more varied maps

---

### 5. Better validation output

`validate-roundtrip` is already useful, but it can still improve later with features like:

- source count vs round-trip count comparison
- clearer stage summaries
- optional lightweight diff reporting
- cleaner success/failure formatting

These are useful, but not urgent.

---

### 6. Documentation maintenance

The project now has multiple docs and they should stay aligned:

- `README.md`
- `docs/object-field-mapping-status.md`
- `docs/second-batch-validation.md`
- `docs/roundtrip-workflow.md`

Whenever a major new field batch or sample validation is added, these docs should be updated.

---

## Low-priority / later ideas

### 7. Full map packaging workflow

The current project focuses on object-data round-trips, not full `.w3x` rebuild workflows.

Possible later direction:

- reinsert generated object files into full map packages
- validate end-to-end map rebuild behavior

This is explicitly not the current focus.

---

### 8. Friendlier interface

The current CLI is effective for development, but later improvements could include:

- better CLI formatting
- batch editing helpers
- lightweight GUI or web UI

These are future improvements, not current priorities.

---

## Current recommended next step

If continuing from the current milestone, the most practical next step is:

**Choose one only:**

1. map the remaining isolated field(s) such as `ucs2`
2. improve round-trip regression validation output
3. expand to a third batch of samples

Do not try to do all of them at once.

---

## Working rule

Keep using the current development loop:

1. inspect raw Patchwork data
2. map a small batch of fields
3. validate `show`
4. validate exporter symmetry
5. run round-trip verification

This workflow is currently the main reason the project remains stable while growing.
