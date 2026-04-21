export interface AbilitySummary {
  id: string;
  baseId?: string;
  name: string;
}

export interface AbilityDetails extends AbilitySummary {
  manaCost: number;
  manaCostLevels?: number[];
  cooldown: number;
  castRange: number;
  areaValues?: number[];
  maxLevel?: number;
  levelValues?: number[];
  inf1Values?: number[];
  inf2Value?: number;
  inf3Value?: number;
}
