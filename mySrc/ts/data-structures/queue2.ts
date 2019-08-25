export default class Queue<T> {
  private items: Array<T>

  constructor() {
    this.items = []
  }

  enqueue(element: T) {
    this.items.push(element)
  }

  dequeue(): T {
    return this.isEmpty() ? undefined : this.items.shift()
  }

  peek(): T {
    return this.items[0]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  toString(): string {
    let result = ''
    if (this.isEmpty()) return result
    result = `${this.items[0]}`
    for (let i = 1; i < this.items.length; i++) {
      result += `,${this.items[i]}`
    }
    return result
  }
}