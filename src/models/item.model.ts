export interface ItemSummary {
  id: string;
  baseId?: string;
  name: string;
}

export interface ItemDetails extends ItemSummary {
  goldCost: number;
  cooldown: number;
  description: string;
  tooltipText?: string;
  abilityId?: string;
  priority?: number;
  strengthBonus?: number;
  level?: number;
  levelVariance?: number;
  armorTypeText?: string;
}
