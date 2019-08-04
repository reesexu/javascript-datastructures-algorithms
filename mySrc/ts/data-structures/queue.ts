interface Items<T> {
  [key: number]: T
}
export default class Queue<T> {
  private items: Items<T>
  private count: number
  private lowestCount: number

  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  enqueue(element: T) {
    this.items[this.count] = element
    this.count++
  }

  dequeue(): T {
    if (this.isEmpty()) return undefined
    const removed = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    this.count--
    return removed
  }

  peek(): T {
    return this.items[this.lowestCount]
  }

  isEmpty(): boolean {
    return this.size() === 0
  }

  size(): number {
    return this.count
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString(): string {
    let result = ''
    if (this.isEmpty()) return result
    result = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`
    }
    return result
  }
}