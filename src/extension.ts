import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.gpinit', () => {
		vscode.commands.executeCommand("gp init");
	});
	context.subscriptions.push(disposable);
}
export function deactivate() {}
