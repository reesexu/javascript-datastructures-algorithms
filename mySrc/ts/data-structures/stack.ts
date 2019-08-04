interface Items<T> {
  [key: number]: T
}
export default class Stack<T> {
  private items: Items<T>
  private count: number

  constructor() {
    this.items = {}
    this.count = 0
  }

  push(element: T) {
    this.items[this.count] = element
    this.count++
  }

  pop(): T {
    if (this.isEmpty()) return undefined
    this.count--
    const deleted = this.items[this.count]
    delete this.items[this.count]
    return deleted
  }

  peek(): T {
    return this.items[this.count - 1]
  }

  isEmpty(): boolean {
    return this.count === 0
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  size(): number {
    return this.count
  }

  toString(): string {
    let result = ''
    if (this.isEmpty()) return result
    result = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`
    }
    return result
  }
}