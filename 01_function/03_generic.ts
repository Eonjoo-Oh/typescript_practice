type SuperPrint = <T, M>(a: T[], b:M) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4], "x")
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"], false)
const d = superPrint([1, 2, true, false, "hello"], [])
