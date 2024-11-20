function add(a:number, b:number): number {
	return a + b
}

const add = (a: number, b:number) => a + b

type Add = (a:number, b:number) => number; //call signiture
const add:Add = (a, b) => a + b 