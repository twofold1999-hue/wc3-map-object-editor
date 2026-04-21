export interface ChangeLogEntry {
  objectType: "unit";
  objectId: string;
  field: string;
  oldValue: string | number;
  newValue: string | number;
  changedAt: string;
}
