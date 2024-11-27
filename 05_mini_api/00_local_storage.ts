abstract class AStorage<K, V> {
	abstract setItem(key: K, value: V): void;
	abstract getItem(key: K): V;
	abstract clearItem(key: K): void;
	abstract clear(): void
}

class LocalStorage<K, V> extends AStorage<K, V> {
	private storage = new Map<K, V>();

	setItem(key: K, value: V):void {
		this.storage.set(key, value); 
	}
	getItem(key: K): V{
		return this.storage.get(key);
	}
	clearItem(key: K): void {
		this.storage.delete(key);
	}
	clear():void {
		this.storage.clear();
	}
}
