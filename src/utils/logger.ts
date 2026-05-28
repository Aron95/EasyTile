const DEBUG = true

export function debug(...args: any[]) {
	if (DEBUG) console.log(...args)
}