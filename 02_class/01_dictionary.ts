type Words

class Word {
	constructor(
		public term: string,
		public def: string
	) {}
}

class Dict1 {
	private words: Words
	constructor (
		this.words = {}
	) {}
}
