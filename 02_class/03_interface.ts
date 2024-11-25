type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface Player {
	nickname: string,
	team: Team,
	healthBar: Health
} //interface와 type 둘 다 오브젝트를 정의할 때
//type은 여러 가지로 활용할 수 있는 반면 interface는 오직 오브젝트의 모양을 정하는데만 사용할 수 있다.

const ejay : Player = {
	nickname: "eoh",
	team: "red",
	healthBar: 10
}

// --------------------------------

interface User {
	name: string
}

interface Player extends User {

} //interface 상속 가능

//--------------------------------

type User = {
	name: string
}

type Player = User & {

}

//&은 타입간 확장을 의미 type에서는 extends키워드 사용불가

interface User {
	name: string
}
interface User {
	lastName: string
}
interface User {
	age: number
}

const ejay : User {
	name: ejay,
	lastName: oh,
	number = 10
}
//이름이 같은 interface를 여러 개쓰면 한 개로 합쳐짐