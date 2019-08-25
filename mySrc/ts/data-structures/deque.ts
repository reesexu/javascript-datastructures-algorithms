
interface Items<T> {
  [key: number]: T
}
export default class Deque<T> {
  private items: Items<T>
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.count++
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.items[0] = element
    }
  }

  addBack(element: T) {
    this.items[this.count] = element
    this.count++
  }

  removeFront(): T {
    if (this.isEmpty()) return undefined
    const removed = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    this.count--
    return removed
  }

  removeBack(): T {
    if (this.isEmpty()) return undefined
    this.count--
    const removed = this.items[this.count]
    delete this.items[this.count]
    return removed
  }

  peekFront(): T {
    return this.items[this.lowestCount]
  }

  peekBack(): T {
    return this.items[this.count - 1]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  size(): number {
    return this.count
  }

  toString(): string {
    let result = ''
    if (this.isEmpty()) return result
    result = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result += `,${this.items[i]}`
    }
    return result
  }
}