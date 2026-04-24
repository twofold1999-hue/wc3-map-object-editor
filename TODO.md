# TODO

This file tracks the current unfinished work and near-term priorities for `wc3-map-object-editor`.

It is intentionally short, practical, and aligned with the current project direction.

---

## Current status

The project is no longer only an object-data round-trip prototype.

It now has three visible layers:

1. **object-data pipeline**
2. **toolbox-style object tuning commands**
3. **multiple focused map-level gameplay script modules**

---

## Stable foundation already in place

Completed and already working:

- Patchwork import for units / abilities / items
- WTS string resolution
- unified internal `MapDataFile`
- CLI inspect/edit flow
- Patchwork JSON export
- Patchwork `json2war`
- first-batch validation
- second-batch validation
- third-batch validation
- one-command round-trip validation

---

## Current toolbox status

Implemented object-data toolbox commands:

- `unit buff`
- `item buff`
- `ability tune`

Implemented object-data presets:

- `unit buff --preset boss`
- `unit buff --preset elite`

---

## Current gameplay script modules

### 1. Kill reward / hero growth

Implemented commands:

- `set-kill-gold-multiplier`
- `set-kill-gold-flat-bonus`
- `set-kill-lumber-bonus`
- `set-kill-hero-stat-bonus --stat str|agi|int`
- `set-kill-exp-bonus`
- `set-kill-hero-growth-preset`
- `format-kills-trigger`

Implemented named hero growth presets:

- `warrior`
- `mage`
- `assassin`
- `tank`
- `support`

Current behavior:

- named presets can be applied through `set-kill-hero-growth-preset --preset ...`
- explicit numeric flags override preset values
- zero-valued growth entries are omitted from final output
- final hero growth blocks are normalized into a stable canonical order:
  - `SetHeroStr`
  - `SetHeroAgi`
  - `SetHeroInt`
  - `AddHeroXP`

### 2. Starting resources

Implemented commands:

- `set-starting-gold`
- `set-starting-lumber`
- `set-starting-resources-preset`

Implemented named starting resource presets:

- `standard`
- `rich`
- `scarce`

Current behavior:

- starting gold and lumber are written as compact begin/end marked blocks
- repeated execution updates existing blocks instead of duplicating them
- explicit numeric flags override preset values

### 3. Starting hero power

Implemented commands:

- `set-starting-hero-level`
- `set-starting-hero-skill-points`
- `format-starting-hero-power`
- `set-starting-hero-power-preset`

Implemented named starting hero power presets:

- `standard`
- `strong`
- `elite`

Current behavior:

- the 5 known hero-selection action functions are updated consistently
- explicit numeric flags override preset values
- starting hero level / skill point lines stay compact and adjacent
- repeated execution updates rather than duplicates

This is the point where the project clearly became a multi-module gameplay script toolbox rather than a single-feature experiment.

---

## Current milestone direction

**v0.6 - script module layering and gameplay toolbox expansion**

The next stage is now split across two parallel directions:

### A. semantic model refinement

Continue improving the quality of the internal object model rather than only adding more raw fields.

Current first-pass semantic refinement already started for:

- `combatType`
- `attackType`
- `armorType`

Likely future candidates:

- `race`
- additional attack/armor semantics
- isolated raw fields still not well expressed in the model

### B. gameplay module expansion

Continue extending the project from object-data tuning toward practical map modding commands, while keeping the new gameplay modules coherent.

Current module families:

- kill reward / hero growth
- starting resources
- starting hero power

---

## High-priority next work

### 1. Keep semantic refinement moving carefully

The model still has placeholder-heavy areas.

High-value next candidates:

- `race`
- more attack/armor semantics
- selective raw field cleanup where the semantics are already clear from samples

Rule:

- stay sample-driven
- avoid speculative enums
- preserve raw imported values where useful

---

### 2. Decide the fourth gameplay script module

The project now has three stable module families.
The next major code step should likely be a **fourth** clearly scoped gameplay module instead of endlessly deepening current ones.

Good candidates:

- player-specific starting settings
- hero loadout / starting item helpers
- another tightly scoped combat or progression trigger module

Do **not** start with a huge generalized scripting framework.

---

### 3. Keep preset layers disciplined

The project now has multiple preset systems.
That is powerful, but it can become messy if expanded carelessly.

Rules going forward:

- only add presets when they are clearly differentiated
- prefer small, understandable preset sets
- preserve explicit flag override behavior
- keep output stable and readable

---

## Medium-priority work

### 4. Improve script transformation reuse

The project is now large enough that repeated string-rewrite patterns should gradually become more reusable.

High-value internal improvements:

- shared helper utilities for trigger block detection
- shared helper utilities for compact block rewriting
- more consistent formatter patterns across modules
- better internal organization of known trigger targets

This should be done carefully, without breaking already validated commands.

---

### 5. Keep the toolbox structure coherent

The toolbox now has three clear layers:

#### Object-data tuning

- unit / item / ability tuning
- presets
- object inspection
- exporter / round-trip workflow

#### Gameplay script modules

- kill reward / hero growth
- starting resources
- starting hero power

Future work should continue reinforcing these categories instead of becoming a random command list.

---

### 6. Keep README / docs consistency

README and TODO now reflect the current project stage, but supporting docs should stay aligned when the next major phase lands.

Keep aligned:

- `README.md`
- `TODO.md`
- `docs/object-field-mapping-status.md`
- `docs/second-batch-validation.md`
- `docs/third-batch-validation.md`
- `docs/roundtrip-workflow.md`

When the next major gameplay module lands, it may be worth adding a dedicated docs page for script modules.

---

### 7. Keep exporter/round-trip confidence high

Even though gameplay script commands do not go through the same object-data exporter flow, the object-data foundation is still central.

Continue preserving confidence through:

- repeated sample imports
- object-data round-trip validation
- careful separation between object-data features and script-level features

The project should not lose its validation-first character while adding modding features.

---

## Low-priority / later ideas

### 8. Smarter trigger rewriting

Right now script modification is intentionally narrow and string-based.

Possible later directions:

- more structured trigger block rewriting
- shared formatting / normalization utilities
- limited pattern abstraction across commands
- eventually, more reusable script transformation helpers

This is not needed yet if the current focused commands stay stable.

---

### 9. Broader gameplay systems

Later, the project may expand into broader gameplay systems such as:

- more advanced growth systems
- hero loadout systems
- additional reward rules
- broader trigger logic injection

These are later-stage directions and should only happen after the current three gameplay modules remain stable.

---

### 10. Full map packaging workflow

The project still does **not** attempt full `.w3x` rebuild or packaging workflows.

Possible later direction:

- reinsert modified script/object files into full map packages
- validate broader end-to-end rebuild behavior

Still out of scope for the current phase.

---

## Current recommended next step

If continuing from the current state, pick **one** of these:

1. continue semantic field refinement
2. add a fourth clearly scoped gameplay script module
3. improve internal script transformation reuse
4. strengthen docs only when the next large phase lands

Do not try to do all of them in one pass.

---

## Working rule

Keep using the current development loop:

1. inspect the current data / script structure
2. add one narrowly scoped feature
3. verify visible output
4. verify repeatability / update behavior
5. keep formatting and readability under control
6. document major milestones when a feature group becomes real

This rule is one of the main reasons the project has remained stable while growing.
