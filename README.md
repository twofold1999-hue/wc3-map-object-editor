<pre class="overflow-visible! px-0!" data-start="109" data-end="1845"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span># wc3-map-object-editor</span><br/><br/><span>A TypeScript CLI for importing, inspecting, editing, exporting, and round-trip validating Warcraft III object data.</span><br/><br/><span>This project focuses on the **object-data layer** of Warcraft III maps and currently supports a full workflow for:</span><br/><br/><span>- Units</span><br/><span>- Abilities</span><br/><span>- Items</span><br/><br/><span>It uses **Patchwork MapConverter** for binary/JSON conversion and keeps an internal unified data model for editing and export.</span><br/><br/><span>---</span><br/><br/><span>## What this project does</span><br/><br/><span>`wc3-map-object-editor` is a developer-oriented Warcraft III object editor prototype built around a clean internal model and a verifiable round-trip workflow.</span><br/><br/><span>Current capabilities include:</span><br/><br/><span>- Importing object data from Patchwork-compatible `war3map.*` directories</span><br/><span>- Resolving `TRIGSTR_*` text through Patchwork WTS JSON output</span><br/><span>- Converting imported data into an internal `MapDataFile`</span><br/><span>- Inspecting units / abilities / items through CLI commands</span><br/><span>- Editing supported fields through CLI commands</span><br/><span>- Exporting back to Patchwork JSON</span><br/><span>- Converting exported JSON back into Warcraft III object binary files</span><br/><span>- Running a full **round-trip validation** in one command</span><br/><br/><span>---</span><br/><br/><span>## Milestone</span><br/><br/><span>**Current milestone:** `v0.3 - Patchwork round-trip core working`</span><br/><br/><span>This milestone means the project already supports:</span><br/><br/><span>- Patchwork import</span><br/><span>- WTS string resolution</span><br/><span>- object inspection/edit flow</span><br/><span>- Patchwork JSON export</span><br/><span>- `json2war` object file generation</span><br/><span>- first-batch and second-batch sample validation</span><br/><span>- one-command round-trip validation</span><br/><br/><span>---</span><br/><br/><span>## Round-trip workflow</span><br/><br/><span>The current core workflow is:</span><br/><br/><span>```text</span><br/><span>war3map.* directory</span><br/><span>-> Patchwork war2json</span><br/><span>-> Patchwork JSON</span><br/><span>-> internal MapDataFile</span><br/><span>-> CLI inspect/edit</span><br/><span>-> Patchwork JSON export</span><br/><span>-> Patchwork json2war</span><br/><span>-> war3map.* output</span><br/><span>-> re-import and validate</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This workflow has already been validated against multiple sample datasets.

---

## Tech stack

* TypeScript
* Node.js
* Commander
* Patchwork MapConverter
* JSON-based internal data model
* CLI-first workflow

---

## Project structure

A simplified view of the current architecture:

<pre class="overflow-visible! px-0!" data-start="2133" data-end="2224"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>src/</span><br/><span>  cli/</span><br/><span>    commands/</span><br/><span>  editors/</span><br/><span>  models/</span><br/><span>  services/</span><br/><span>docs/</span><br/><span>samples/</span><br/><span>temp/</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

Key layers:

* **Patchwork import/export services**

  Convert between Patchwork JSON and internal models

* **Internal models**

  Unified `MapDataFile`, `UnitDetails`, `AbilityDetails`, `ItemDetails`

* **CLI commands**

  Import, inspect, edit, export, validate

* **Validation workflow**

  One-command round-trip regression check

---

## Supported commands

### Import object data

<pre class="overflow-visible! px-0!" data-start="2618" data-end="2692"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> import-patchwork-dir ./samples/probe-input</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Project status

<pre class="overflow-visible! px-0!" data-start="2714" data-end="2780"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> status</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> summary</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Inspect objects

<pre class="overflow-visible! px-0!" data-start="2803" data-end="3016"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit list</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability list</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item list</span><br/><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit show h001</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability show A002</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item show I000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Inspect raw Patchwork fields

<pre class="overflow-visible! px-0!" data-start="3052" data-end="3168"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit raw h001</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability raw A002</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item raw I000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Export Patchwork JSON

<pre class="overflow-visible! px-0!" data-start="3197" data-end="3269"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> export-patchwork ./temp/patchwork-export</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Export Warcraft III object files

<pre class="overflow-visible! px-0!" data-start="3309" data-end="3406"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> export-patchwork-war ./temp/patchwork-export ./temp/patchwork-war</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Run one-command round-trip validation

<pre class="overflow-visible! px-0!" data-start="3451" data-end="3526"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> validate-roundtrip ./samples/probe-input-02</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Validation status

### First-batch sample

Validated:

* basic unit fields
* basic ability fields
* basic item fields
* WTS string resolution
* round-trip import/export flow

### Second-batch sample

Validated:

* additional unit combat fields
* additional item text/reference fields
* repeated and multi-level ability fields
* exporter symmetry for newly mapped fields
* one-command round-trip verification

---

## Current field support

### Units

The project currently supports a growing set of unit fields, including:

* name
* hitPoints
* acquisitionRange
* attackBaseDamage
* secondaryAttackBase
* primary / secondary attack range
* primary / secondary attack speed
* weapon type text
* target flags / target preferences
* turn rate / secondary turn rate
* movement priority
* various numeric cost/combat fields

### Abilities

Current ability support includes:

* name
* manaCost
* cooldown
* castRange
* maxLevel
* generic repeated multi-level values
* additional repeated Patchwork fields such as:
* `mls1`
* `Inf1`
* `aare`

### Items

Current item support includes:

* name
* goldCost
* cooldown
* description
* tooltipText
* abilityId
* level
* levelVariance
* priority
* strengthBonus
* armorTypeText

For the up-to-date mapping list, see the docs folder.

---

## Documentation

Project docs currently include:

* `docs/object-field-mapping-status.md`
* `docs/second-batch-validation.md`
* `docs/roundtrip-workflow.md`

These documents track:

* current mapped Patchwork fields
* sample validation progress
* round-trip workflow and known constraints

---

## Known limitations

This project currently focuses on the  **object-data layer** , not full map packaging.

Known limitations include:

* some isolated fields are still unmapped, such as `ucs2`
* some semantic model fields are still placeholders:
* `combatType`
* `race`
* `attackType`
* `armorType`
* terminal encoding can affect direct JSON display in PowerShell unless UTF-8 is explicitly used
* the project currently validates object round-trips, not full `.w3x` rebuild workflows

---

## Why this project matters

This project is useful as a proof-of-concept for:

* structured Warcraft III object-data tooling
* Patchwork-based import/export pipelines
* unified internal object models
* CLI-first regression validation
* iterative field mapping across real-world samples

It is designed around a practical workflow:

1. inspect raw Patchwork data
2. map a small batch of fields
3. validate import/show behavior
4. validate export symmetry
5. run round-trip verification

That workflow has already been applied successfully across multiple sample batches.

---

## Next steps

Planned next directions include:

* mapping remaining isolated fields
* improving semantic field coverage
* strengthening regression validation
* testing against more complex sample maps
* optionally building a more user-friendly interface on top of the current core
