import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.gpinit', () => {
		const terminal = vscode.window.createTerminal(`GitpodUtil: gp init`);
        terminal.sendText("gp init");
        terminal.show(true)
	}));
}
export function deactivate() {}
