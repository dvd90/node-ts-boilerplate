import chalk from 'chalk';

export const { log, error } = console;

export function logDanger(content: string): void {
  log(chalk.red.bold(content));
}

export function logWarning(content: string): void {
  log(chalk.yellow.bold(content));
}

export function logSuccess(content: string): void {
  log(chalk.green.bold(content));
}

export function logPrimary(content: string): void {
  log(chalk.blue.bold(content));
}

export function logConsole(content: unknown): void {
  log(content);
}
