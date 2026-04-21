import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { Command } from "commander";
import { WorkspaceService } from "../../services/workspace.service";

export function registerOpenCommand(program: Command): void {
  const workspaceService = new WorkspaceService();

  program
    .command("open")
    .description("Open a unit data file as the current project")
    .argument("<filePath>", "Path to unit data JSON file")
    .action((filePath: string) => {
      const absolutePath = resolve(process.cwd(), filePath);

      if (!existsSync(absolutePath)) {
        console.log(`Data file not found: ${absolutePath}`);
        return;
      }

      workspaceService.setCurrentDataFile(absolutePath);
      console.log(`Opened project: ${absolutePath}`);
    });
}
