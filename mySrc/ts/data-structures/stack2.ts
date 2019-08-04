export default class Stack<T> {
  private items: Array<T>

  constructor() {
    this.items = []
  }

  push(element: T) {
    this.items.push(element)
  }

  pop(): T {
    return this.items.pop()
  }

  peek(): T {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size(): number {
    return this.items.length
  }

  toString(): string {
    let result = ''
    if (this.isEmpty()) return result
    result = `${this.items[0]}`
    for (let i = 1; i < this.items.length; i++) {
      result = `${result},${this.items[i]}`
    }
    return result
  }
}