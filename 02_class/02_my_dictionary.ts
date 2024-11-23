type Word = {
	[key: string] : string
} //객체의 모든 키는 문자열, 값도 문자열

class Dict {
	private words: Word;

	add(term:string, def:string):void {
		this.words[term] = def;
	}
	get(term:string):void {
		if (this.words[term]) {
			console.log(`${this.words[term]}`);
		}
		else {
			console.log(`No search results found for ${term}`);
		}
	}
	delete(term:string):void {
		delete this.words[term];
		console.log(`${term} is deleted`)
	}
	update(term:string, def:string):void {
		this.words[term] = def
	}
	showAll():void {
		for(const [key, value]of Object.entries(this.words)) {
			console.log(`${key}: ${value}`);
		}
	}
	count():void {
		console.log(`${Object.keys(this.words).length}`);
	}
	upsert(term:string, def:string):void {
		this.words[term] = def;
	}
	exists(term:string):void {
		if (this.words[term]) {
			console.log(`${term} is already exist`);
		} else {
			console.log(`No search results found for ${term}`)
		}
	}
	bulkAdd(terms: {term:string; def:string}[]):void {
		for(const {term, def} of terms) {
			this.words[term] = def;
		}
	}
	bulkDelete(terms: string[]): void {
		for (const term of terms) {
			delete this.words[term];
		}
	}
}