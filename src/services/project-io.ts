import { MapDataFile } from "../models/map-data.model";

export interface ProjectImporter {
  importFromFile(sourcePath: string): MapDataFile;
}

export interface ProjectExporter {
  exportToFile(mapData: MapDataFile, outputPath: string): void;
}
