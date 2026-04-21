export interface UnitSummary {
  id: string;
  baseId?: string;
  name: string;
  combatType: string;
}

export interface UnitDetails extends UnitSummary {
  race: string;
  hitPoints: number;
  moveSpeed?: number;
  goldCost?: number;
  armor?: number;
  acquisitionRange?: number;
  hitPointRegen?: number;
  attackBaseDamage?: number;
  attackEnabled?: number;
  secondaryAttackBase?: number;
  turnRate?: number;
  secondaryTurnRate?: number;
  lumberCost?: number;
  foodCost?: number;
  movementPriority?: number;
  primaryAttackRange?: number;
  secondaryAttackRange?: number;
  primaryAttackSpeed?: number;
  secondaryAttackSpeed?: number;
  minimumAttackRange?: number;
  primaryDiceSides?: number;
  secondaryDiceSides?: number;
  primaryWeaponTypeText?: string;
  secondaryWeaponTypeText?: string;
  secondaryAttackTypeText?: string;
  primaryTargetFlags?: string[];
  primaryTargetPreferences?: string[];
  attackType: string;
  armorType: string;
}
