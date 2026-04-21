import { AbilityDetails } from "./ability.model";
import { ItemDetails } from "./item.model";
import { UnitDetails } from "./unit.model";

export interface MapDataMeta {
  source: string;
  version: string;
  mapName?: string;
}

export interface MapDataFile {
  meta: MapDataMeta;
  units: UnitDetails[];
  abilities?: AbilityDetails[];
  items?: ItemDetails[];
}
