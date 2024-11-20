type Age = number;
type Name = string;
type Player = {
	name: Name
	age?:Age
}
const playerMaker = (name: string) : Player => ({name})
const ejay = playerMaker("ejay")
ejay.age = 20