import * as vscode from "vscode";
export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gpinit", () => {
      if (vscode.window.activeTerminal) {
        vscode.window.activeTerminal.sendText("gp init");
      } else {
        const terminal: vscode.Terminal = vscode.window.createTerminal();
        terminal.sendText("gp init");
        terminal.show(true);
      }
    })
  );
}
export function deactivate() {}
