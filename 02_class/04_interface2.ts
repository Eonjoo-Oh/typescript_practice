interface User {
	firstName: string,
	lastname: string
	fullName(): string
	sayHi(name: string): string
}
interface Human {
	health: number
}
class Player implements User, Human {
	constructor (
		public firstName: string,
		public lastName: string,
		public health: number
	){}
	fullName() {
		return `${this.firstName} ${this.lastName}`
	}
	sayHi(name:string) {
		return `Hello ${name}. My name is ${this.fullName()}` 
	}
}

//interface는 자바스크립트로 코드를 컴파일하지 않는다. 
//private property를 사용할수없ㄷ