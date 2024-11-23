abstract class User {
	constructor (
		protected firstName: string,
		protected lastName: string,
		protected nickName: string
	) {}
	abstract getNickName(): void //abstract method
	getFullName() {
		return `${this.firstName} ${this.lastName}`
	}
} //abstract class

class Player extends User{
	getNickName() {
		console.log(this.nickName);
	}
}

const ejay = new Player("ejay", "oh", "eoh");

ejay.getFullName();
ejay.firstName  //protected 속성으로 class내에서만 접근 가능