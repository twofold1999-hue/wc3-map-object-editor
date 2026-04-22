<pre class="overflow-visible! px-0!" data-start="76" data-end="1049"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span># wc3-map-object-editor</span><br/><br/><span>A TypeScript CLI for importing, inspecting, editing, exporting, and round-trip validating Warcraft III object data through Patchwork.</span><br/><br/><span>This project focuses on the **object-data layer** of Warcraft III maps and is gradually evolving into a practical **map modding toolbox** built on top of a stable Patchwork-based workflow.</span><br/><br/><span>---</span><br/><br/><span>## Why this project exists</span><br/><br/><span>Warcraft III object data is difficult to work with directly because it sits between:</span><br/><br/><span>- binary object files such as `war3map.w3u`, `war3map.w3a`, `war3map.w3t`</span><br/><span>- string-table based text references such as `TRIGSTR_*`</span><br/><span>- object-specific field structures that vary across units, abilities, and items</span><br/><span>- repeated and multi-level data patterns, especially in abilities</span><br/><br/><span>This project explores a cleaner workflow:</span><br/><br/><span>```text</span><br/><span>Warcraft III object files</span><br/><span>-> Patchwork conversion</span><br/><span>-> internal unified model</span><br/><span>-> CLI inspect/edit</span><br/><span>-> export back to Patchwork JSON / war3map.*</span><br/><span>-> round-trip validation</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

The goal is not just to parse files once, but to build a **repeatable, verifiable object-data round-trip pipeline** that can also support practical map modding features.

---

## Project highlights

* **Patchwork-based import/export pipeline**
* **Unified internal `MapDataFile` model**
* **WTS string resolution for readable names/descriptions**
* **Support for repeated and multi-level ability field families**
* **Patchwork JSON export symmetry**
* **One-command round-trip validation**
* **First-pass semantic field refinement for unit combat/attack/armor fields**
* **Toolbox-style gameplay commands for practical map modding workflows**
* **Validated across first-batch, second-batch, and third-batch samples**

---

## Current milestone

**v0.4 - broader field coverage and regression stability**

At this stage, the project supports:

* Patchwork import for units / abilities / items
* WTS string resolution
* internal object model conversion
* CLI inspect/edit flow
* Patchwork JSON export
* Patchwork `json2war`
* first-batch validation
* second-batch validation
* third-batch validation
* one-command round-trip validation
* broader repeated ability field support
* broader item text/cost field support
* expanded unit combat-field coverage

This milestone reflects the point where the project moved beyond a basic round-trip prototype and demonstrated broader field coverage with continued importer/exporter symmetry across multiple validation batches.

---

## Next milestone direction

**v0.5 - semantic field refinement started**

The next phase focuses less on simply absorbing more raw Patchwork fields and more on improving the semantic quality of the internal object model.

This means the project is beginning to move from raw field capture toward derived semantic values such as:

* `combatType`
* `attackType`
* `armorType`

Early examples of this are already starting to work in the codebase, where some units no longer show placeholder values like `Unknown` for these fields.

The strategy for this phase remains intentionally conservative:

* preserve raw imported fields
* derive semantic fields only from already observed real sample values
* avoid large speculative enum systems too early
* continue validating all changes through the existing round-trip workflow

---

## Core workflow

<pre class="overflow-visible! px-0!" data-start="3367" data-end="3639"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Patchwork-compatible input directory</span><br/><span>-> Patchwork war2json</span><br/><span>-> Patchwork JSON</span><br/><span>-> PatchworkProjectImporter</span><br/><span>-> MapDataFile</span><br/><span>-> CLI inspect/edit</span><br/><span>-> PatchworkProjectExporter</span><br/><span>-> Patchwork JSON</span><br/><span>-> Patchwork json2war</span><br/><span>-> generated war3map.* files</span><br/><span>-> re-import validation</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## What is currently supported

### Units

Current support includes a growing set of unit fields such as:

* name
* hitPoints
* acquisitionRange
* attackBaseDamage
* secondaryAttackBase
* primary / secondary attack range
* primary / secondary attack speed
* primary / secondary weapon type text
* secondary attack type text
* primary target flags / target preferences
* turn rate / secondary turn rate
* movement priority
* various cost and combat numeric fields

First-pass semantic refinement has also started for:

* `combatType`
* `attackType`
* `armorType`

### Abilities

Current support includes:

* name
* manaCost
* cooldown
* castRange
* maxLevel
* repeated multi-level values
* repeated Patchwork ability fields such as:
* `mls1`
* `Inf1`
* `aare`
* repeated `amcs`
* repeated `acdn`
* repeated `adur`
* repeated `ahdu`
* scalar attribute-style fields such as:
* `bonusStrength`
* `bonusAgility`
* `bonusIntelligence`

### Items

Current support includes:

* name
* goldCost
* lumberCost
* cooldown
* description
* tooltipText
* properNameText
* abilityId
* level
* levelVariance
* priority
* strengthBonus
* armorTypeText

For the detailed mapping list, see the docs folder.

---

## Example commands

### Import object data

<pre class="overflow-visible! px-0!" data-start="4900" data-end="4974"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> import-patchwork-dir ./samples/probe-input</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Inspect objects

<pre class="overflow-visible! px-0!" data-start="4997" data-end="5210"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit list</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability list</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item list</span><br/><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit show h001</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability show A002</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item show I000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Inspect raw Patchwork fields

<pre class="overflow-visible! px-0!" data-start="5246" data-end="5362"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit raw h001</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability raw A002</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item raw I000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Export Patchwork JSON

<pre class="overflow-visible! px-0!" data-start="5391" data-end="5463"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> export-patchwork ./temp/patchwork-export</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Export Warcraft III object files

<pre class="overflow-visible! px-0!" data-start="5503" data-end="5600"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> export-patchwork-war ./temp/patchwork-export ./temp/patchwork-war</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Run full round-trip validation

<pre class="overflow-visible! px-0!" data-start="5638" data-end="5713"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> validate-roundtrip ./samples/probe-input-02</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Toolbox commands

In addition to low-level object inspection and field-by-field editing, the project now includes a first-pass **toolbox layer** for faster map modding workflows.

These commands are designed to update multiple gameplay-relevant values in a single step.

The toolbox now also includes reusable unit presets such as `boss` and `elite`, and a first-pass map-level gameplay script command for modifying kill-gold reward logic.

### Buff a unit

You can update multiple unit stats in one command, either by passing values directly or by applying a preset.

Manual example:

<pre class="overflow-visible! px-0!" data-start="6309" data-end="6413"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit buff h000 </span><span class="ͼf">--hp</span><span></span><span class="ͼb">5000</span><span></span><span class="ͼf">--damage</span><span></span><span class="ͼb">200</span><span></span><span class="ͼf">--armor</span><span></span><span class="ͼb">20</span><span></span><span class="ͼf">--range</span><span></span><span class="ͼb">900</span><span></span><span class="ͼf">--speed</span><span></span><span class="ͼb">350</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Preset examples:

<pre class="overflow-visible! px-0!" data-start="6433" data-end="6543"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit buff h000 </span><span class="ͼf">--preset</span><span> boss</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit buff h000 </span><span class="ͼf">--preset</span><span> elite</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Supported flags:

* `--preset`
* `--hp`
* `--damage`
* `--armor`
* `--range`
* `--speed`

Current presets:

* `boss`
* `elite`

Preset behavior:

* `boss` applies a high-power boss-style stat package
* `elite` applies a moderate elite-unit stat package

Manual flags can override preset values. For example:

<pre class="overflow-visible! px-0!" data-start="6851" data-end="6921"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit buff h000 </span><span class="ͼf">--preset</span><span> boss </span><span class="ͼf">--hp</span><span></span><span class="ͼb">8000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Buff an item

<pre class="overflow-visible! px-0!" data-start="6941" data-end="7044"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item buff I000 </span><span class="ͼf">--gold</span><span></span><span class="ͼb">5000</span><span></span><span class="ͼf">--lumber</span><span></span><span class="ͼb">200</span><span></span><span class="ͼf">--str</span><span></span><span class="ͼb">20</span><span></span><span class="ͼf">--level</span><span></span><span class="ͼb">9</span><span></span><span class="ͼf">--cooldown</span><span></span><span class="ͼb">3</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Supported flags:

* `--gold`
* `--lumber`
* `--str`
* `--level`
* `--cooldown`

### Tune an ability

<pre class="overflow-visible! px-0!" data-start="7146" data-end="7230"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability tune A000 </span><span class="ͼf">--mana</span><span></span><span class="ͼb">50</span><span></span><span class="ͼf">--cooldown</span><span></span><span class="ͼb">2</span><span></span><span class="ͼf">--range</span><span></span><span class="ͼb">800</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Supported flags:

* `--mana`
* `--cooldown`
* `--range`

### Set kill gold multiplier

The toolbox also includes a first-pass **map-level gameplay script modification** command for adjusting kill-gold rewards in a supported `war3map.j` pattern.

Example:

<pre class="overflow-visible! px-0!" data-start="7487" data-end="7601"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> set-kill-gold-multiplier </span><span class="ͼf">--value</span><span></span><span class="ͼb">2</span><span></span><span class="ͼf">--script</span><span> ./WC3MapTranslator/test/data/war3map.j</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Supported flags:

* `--value`
* `--script`

Current behavior:

* finds a supported kill-gold reward statement using `AdjustPlayerStateBJ(... PLAYER_STATE_RESOURCE_GOLD)`
* rewrites the reward expression based on `GetUnitPointValue(GetTriggerUnit())`
* supports repeated execution without stacking multipliers such as `* 2 * 3`

### Why this layer matters

These commands mark the transition from a raw object-data pipeline into a more practical  **map modding toolbox** .

Instead of editing one field at a time, the toolbox commands provide more goal-oriented entry points for common balance and gameplay adjustments.

The toolbox now spans both object-data tuning and first-pass gameplay script modification.

---

## Example validation output

<pre class="overflow-visible! px-0!" data-start="8346" data-end="9368"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Stage 1/4: importing source...</span><br/><span>  Source input directory: G:\WC3 Map Object Editor\samples\probe-input-02</span><br/><span>  Patchwork json output: G:\WC3 Map Object Editor\temp\patchwork-import</span><br/><span>Stage 2/4: exporting patchwork json...</span><br/><span>  Workspace project source: G:\WC3 Map Object Editor\temp\project.json</span><br/><span>  Round-trip export directory: G:\WC3 Map Object Editor\temp\roundtrip-export</span><br/><span>Stage 3/4: exporting war files...</span><br/><span>  Patchwork json input: G:\WC3 Map Object Editor\temp\roundtrip-export</span><br/><span>  War output directory: G:\WC3 Map Object Editor\temp\roundtrip-war</span><br/><span>Stage 4/4: re-importing generated war files...</span><br/><span>  War input directory: G:\WC3 Map Object Editor\temp\roundtrip-war</span><br/><span>  Patchwork json output: G:\WC3 Map Object Editor\temp\patchwork-import</span><br/><span>Final Object Counts:</span><br/><span>Units: 2</span><br/><span>Abilities: 3</span><br/><span>Items: 2</span><br/><span>Validation Complete:</span><br/><span>Final workspace project: G:\WC3 Map Object Editor\temp\project.json</span><br/><span>Round-trip export directory: G:\WC3 Map Object Editor\temp\roundtrip-export</span><br/><span>Round-trip war directory: G:\WC3 Map Object Editor\temp\roundtrip-war</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This is the main regression path for the current project.

---

## Validation status

The project has been validated across multiple sample batches, with each batch targeting a different layer of object-data complexity.

### First-batch sample

Validated:

* baseline unit / ability / item support
* WTS string resolution
* core Patchwork import/export flow

### Second-batch sample

Validated:

* richer unit combat-field coverage
* repeated and multi-level ability field support
* additional item text/reference handling
* exporter symmetry for newly mapped fields
* stable one-command round-trip validation

### Third-batch sample

Validated:

* additional repeated ability field families
* scalar attribute-style ability fields
* additional item text/cost fields
* broader field coverage without changing the core workflow
* continued regression stability under a more targeted boundary sample

---

## Documentation

* `docs/object-field-mapping-status.md`
* `docs/second-batch-validation.md`
* `docs/third-batch-validation.md`
* `docs/roundtrip-workflow.md`

These documents track:

* field mapping status
* second-batch expansion results
* third-batch expansion results
* round-trip workflow details

---

## Known limitations

The project currently focuses on the  **object-data layer** , not full map packaging.

Known limitations include:

* some isolated fields are still unmapped, such as `ucs2`
* some semantic model fields are still incomplete or placeholder-based:
* `race`
* additional attack/armor/ruleset semantics beyond the current first-pass mappings
* terminal encoding can make direct JSON viewing in PowerShell look incorrect unless UTF-8 is explicitly used
* the current workflow validates object-data round-trips, not full `.w3x` rebuild workflows
* toolbox commands currently focus on object-data tuning, not yet full gameplay script injection

---

## Tech stack

* TypeScript
* Node.js
* Commander
* Patchwork MapConverter
* JSON-based internal data model
* CLI-first workflow

---

## Project direction

Planned next directions include:

* continue semantic field refinement
* expand the preset system
* strengthen regression validation
* test against more complex sample maps
* move gradually from object-data tuning toward broader map modding features
