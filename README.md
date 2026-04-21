<pre class="overflow-visible! px-0!" data-start="320" data-end="1488"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span># wc3-map-object-editor</span><br/><br/><span>A TypeScript CLI for importing, inspecting, editing, exporting, and round-trip validating Warcraft III object data through Patchwork.</span><br/><br/><span>This project focuses on the **object-data layer** of Warcraft III maps and builds a practical workflow for:</span><br/><br/><span>- importing Warcraft III object data</span><br/><span>- converting it into a unified internal model</span><br/><span>- inspecting and editing units / abilities / items</span><br/><span>- exporting back to Patchwork JSON</span><br/><span>- converting back into Warcraft III object files</span><br/><span>- verifying the result through a one-command round-trip check</span><br/><br/><span>---</span><br/><br/><span>## Why this project exists</span><br/><br/><span>Warcraft III map object data is difficult to work with directly because it sits between:</span><br/><br/><span>- binary object files such as `war3map.w3u`, `war3map.w3a`, `war3map.w3t`</span><br/><span>- string-table based text references such as `TRIGSTR_*`</span><br/><span>- object-specific field formats that vary across units, abilities, and items</span><br/><span>- repeated / multi-level data fields in ability definitions</span><br/><br/><span>This project explores a cleaner workflow:</span><br/><br/><span>```text</span><br/><span>Warcraft III object files</span><br/><span>-> Patchwork conversion</span><br/><span>-> internal unified model</span><br/><span>-> CLI inspect/edit</span><br/><span>-> export back to Patchwork JSON / war3map.*</span><br/><span>-> round-trip validation</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

The goal is not just to parse files once, but to build a  **repeatable, verifiable object-data round-trip pipeline** .

---

## Project highlights

* **Patchwork-based import/export pipeline**
* **Unified internal `MapDataFile` model**
* **CLI inspection and editing for units / abilities / items**
* **`TRIGSTR_*` resolution through WTS-derived data**
* **Support for repeated / multi-level ability fields**
* **Patchwork JSON export symmetry**
* **One-command round-trip validation**
* **Validated against multiple sample batches**

---

## Current milestone

**v0.3 - Patchwork round-trip core working**

At this stage, the project already supports:

* Patchwork import for units / abilities / items
* WTS string resolution
* internal object model conversion
* CLI list/show/edit commands
* Patchwork JSON export
* Patchwork `json2war`
* first-batch sample validation
* second-batch sample validation
* one-command round-trip validation

---

## Core workflow

<pre class="overflow-visible! px-0!" data-start="2452" data-end="2724"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Patchwork-compatible input directory</span><br/><span>-> Patchwork war2json</span><br/><span>-> Patchwork JSON</span><br/><span>-> PatchworkProjectImporter</span><br/><span>-> MapDataFile</span><br/><span>-> CLI inspect/edit</span><br/><span>-> PatchworkProjectExporter</span><br/><span>-> Patchwork JSON</span><br/><span>-> Patchwork json2war</span><br/><span>-> generated war3map.* files</span><br/><span>-> re-import validation</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

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

### Items

Current support includes:

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

For the detailed mapping list, see the docs folder.

---

## Example commands

### Import object data

<pre class="overflow-visible! px-0!" data-start="3693" data-end="3767"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> import-patchwork-dir ./samples/probe-input</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Inspect objects

<pre class="overflow-visible! px-0!" data-start="3790" data-end="4003"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit list</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability list</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item list</span><br/><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit show h001</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability show A002</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item show I000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Inspect raw Patchwork fields

<pre class="overflow-visible! px-0!" data-start="4039" data-end="4155"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> unit raw h001</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> ability raw A002</span><br/><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> item raw I000</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Export Patchwork JSON

<pre class="overflow-visible! px-0!" data-start="4184" data-end="4256"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> export-patchwork ./temp/patchwork-export</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Export Warcraft III object files

<pre class="overflow-visible! px-0!" data-start="4296" data-end="4393"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> export-patchwork-war ./temp/patchwork-export ./temp/patchwork-war</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

### Run full round-trip validation

<pre class="overflow-visible! px-0!" data-start="4431" data-end="4506"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev:once </span><span class="ͼf">--</span><span> validate-roundtrip ./samples/probe-input-02</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

## Example validation output

<pre class="overflow-visible! px-0!" data-start="4543" data-end="5565"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>Stage 1/4: importing source...</span><br/><span>  Source input directory: G:\WC3 Map Object Editor\samples\probe-input-02</span><br/><span>  Patchwork json output: G:\WC3 Map Object Editor\temp\patchwork-import</span><br/><span>Stage 2/4: exporting patchwork json...</span><br/><span>  Workspace project source: G:\WC3 Map Object Editor\temp\project.json</span><br/><span>  Round-trip export directory: G:\WC3 Map Object Editor\temp\roundtrip-export</span><br/><span>Stage 3/4: exporting war files...</span><br/><span>  Patchwork json input: G:\WC3 Map Object Editor\temp\roundtrip-export</span><br/><span>  War output directory: G:\WC3 Map Object Editor\temp\roundtrip-war</span><br/><span>Stage 4/4: re-importing generated war files...</span><br/><span>  War input directory: G:\WC3 Map Object Editor\temp\roundtrip-war</span><br/><span>  Patchwork json output: G:\WC3 Map Object Editor\temp\patchwork-import</span><br/><span>Final Object Counts:</span><br/><span>Units: 2</span><br/><span>Abilities: 3</span><br/><span>Items: 2</span><br/><span>Validation Complete:</span><br/><span>Final workspace project: G:\WC3 Map Object Editor\temp\project.json</span><br/><span>Round-trip export directory: G:\WC3 Map Object Editor\temp\roundtrip-export</span><br/><span>Round-trip war directory: G:\WC3 Map Object Editor\temp\roundtrip-war</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

This is the main regression path for the current project.

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

* richer unit combat fields
* target flag / preference parsing
* repeated ability values
* additional ability multi-level data
* item text/reference fields
* exporter symmetry for newly mapped fields
* one-command round-trip verification

---

## Documentation

* `docs/object-field-mapping-status.md`
* `docs/second-batch-validation.md`
* `docs/roundtrip-workflow.md`

These documents track:

* field mapping status
* second-batch expansion results
* round-trip workflow details

---

## Known limitations

The project currently focuses on the  **object-data layer** , not full map packaging.

Known limitations include:

* some isolated fields are still unmapped, such as `ucs2`
* some semantic model fields are still placeholders:
* `combatType`
* `race`
* `attackType`
* `armorType`
* terminal encoding can make direct JSON viewing in PowerShell look incorrect unless UTF-8 is explicitly used
* the current workflow validates object round-trips, not full `.w3x` rebuild workflows

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

* mapping remaining isolated fields
* improving semantic field coverage
* strengthening regression validation
* testing against more complex sample maps
* optionally building a more user-friendly interface later

<pre class="overflow-visible! px-0!" data-start="7240" data-end="7733"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute end-1.5 top-1 z-2 md:end-2 md:top-1"></div><div class="relative"><div class="pe-11 pt-3"><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"></div></div></div></div></div></div></div></div></div></div></div></div></div></pre>
