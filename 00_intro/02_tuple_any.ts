const player: [string, number, boolean] = ["ejay", 12, false];
player[0] = 1 //불가


const player2: readonly[string, number, boolean] = ["ejay", 12, false];
player2[0] = "hi" //readonly tuple로 불가

const a : any[] = [1, 2, 3, 4] //any 키워드는 typescript를 따르지 않게 함