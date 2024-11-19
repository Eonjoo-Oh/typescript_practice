let a:unknown;
if (typeof a === 'number') {
	let b = a + 1
}

if (typeof a === "string") {
	let b = a.toUpperCase();
}

function hello():never {
	throw new Error("error!");
} // 절대 리턴하지 않을 때 사용

function hello2(): void {
	console.log("hello2");
}

function hello3(name:string|number) {
	if (typeof name === "string") {
		name
	}else if (typeof name === "number") {
		name
	} else {
		name
	}
}