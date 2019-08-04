export default class Deque<T> {
  private items: Array<T>

  constructor() {
    this.items = []
  }

  addFront(element: T) {
    this.items.unshift(element)
  }

  addBack(element: T) {
    this.items.push(element)
  }

  peekFront() {
    return this.items[0]
  }

  peekBack() {
    return this.items[this.items.length - 1]
  }

  removeFront() {
    return this.items.shift()
  }

  removeBack() {
    return this.items.pop()
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
      result = `${result},${this.items[i]}`
    }
    return result
  }
}