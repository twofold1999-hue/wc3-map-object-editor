import { UnitSummary } from "../models/unit.model";

export class ObjectEditor {
  public rename(unit: UnitSummary, name: string): UnitSummary {
    return { ...unit, name };
  }
}
