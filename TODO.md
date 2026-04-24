# TODO

This file tracks the current unfinished work and near-term priorities for `wc3-map-object-editor`.

It is intentionally short, practical, and aligned with the current project direction.

---

## Current status

The project is no longer only an object-data round-trip prototype.

It now has three visible layers:

1. **object-data pipeline**
2. **toolbox-style object tuning commands**
3. **first-pass kill reward / hero growth gameplay script module**

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

Implemented preset support:

- `unit buff --preset boss`
- `unit buff --preset elite`

Implemented map-level kill reward / hero growth module:

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

Current hero growth preset behavior:

- named presets can be applied through `set-kill-hero-growth-preset --preset ...`
- explicit numeric flags override preset values
- zero-valued growth entries are omitted from final output
- final hero growth blocks are normalized into a stable canonical order:
  - `SetHeroStr`
  - `SetHeroAgi`
  - `SetHeroInt`
  - `AddHeroXP`

This is the first clear transition from object-data tooling into gameplay script modification.

---

## Current milestone direction

**v0.5 - semantic field refinement and gameplay toolbox expansion**

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

### B. gameplay toolbox expansion

Continue extending the project from object-data tuning toward practical map modding commands, especially script-level reward and growth logic.

The kill reward / hero growth module is the first version of this direction.

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

### 2. Strengthen the hero growth preset layer

The hero growth layer is now usable, but it can still grow into a more expressive gameplay template system.

High-value next improvements:

- add one or two additional named growth presets only if they are clearly differentiated
- keep preset output stable and readable
- preserve the rule that explicit numeric flags override preset values
- avoid turning presets into an unstructured long list

---

### 3. Decide the next gameplay script feature

The project now needs a deliberate next step beyond the current reward / growth module.

Good candidates:

- a second small gameplay module separate from kill rewards
- a new reward-adjacent mechanic that still fits `Trig_Kills_Actions`
- more structured gameplay presets built on the current hero growth foundation

Do **not** add many unrelated gameplay commands at once.

---

## Medium-priority work

### 4. Keep the toolbox layer coherent

The toolbox is now large enough that it should stay conceptually organized.

Current conceptual groups:

#### Object-data tuning

- unit / item / ability tuning
- presets
- object inspection
- exporter / round-trip workflow

#### Kill reward / hero growth module

- gold reward modification
- lumber reward insertion/update
- hero stat reward insertion/update
- hero XP reward insertion/update
- hero growth presets
- trigger formatting / normalization

Future work should grow along these groupings instead of becoming a random command list.

---

### 5. Improve README / docs consistency

The README now reflects the current toolbox and hero growth module, but supporting docs should stay aligned.

Keep aligned:

- `README.md`
- `TODO.md`
- `docs/object-field-mapping-status.md`
- `docs/second-batch-validation.md`
- `docs/third-batch-validation.md`
- `docs/roundtrip-workflow.md`

If the hero growth preset layer grows further, a dedicated docs page may become worthwhile.

---

### 6. Keep exporter/round-trip confidence high

Even though the gameplay script commands do not go through the same object-data exporter flow, the object-data foundation is still central.

Continue preserving confidence through:

- repeated sample imports
- object-data round-trip validation
- careful separation between object-data features and script-level features

The project should not lose its validation-first character while adding modding features.

---

## Low-priority / later ideas

### 7. Smarter trigger rewriting

Right now script modification is intentionally narrow and string-based.

Possible later directions:

- more structured trigger block rewriting
- shared formatting / normalization utilities
- limited pattern abstraction across commands
- eventually, more reusable script transformation helpers

This is not needed yet if the current focused commands stay stable.

---

### 8. Larger gameplay systems

Later, the project may expand into broader gameplay systems such as:

- more advanced growth systems
- spawn/loadout helpers
- additional reward rules
- broader trigger logic injection

These are later-stage directions and should only happen after the current reward / growth module stays stable.

---

### 9. Full map packaging workflow

The project still does **not** attempt full `.w3x` rebuild or packaging workflows.

Possible later direction:

- reinsert modified script/object files into full map packages
- validate broader end-to-end rebuild behavior

Still out of scope for the current phase.

---

## Current recommended next step

If continuing from the current state, pick **one** of these:

1. continue semantic field refinement
2. strengthen / extend hero growth presets
3. start one new, clearly scoped gameplay script feature
4. improve docs and keep the project story coherent

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
