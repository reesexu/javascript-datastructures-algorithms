import { defaultEquals, IEqualsFunction } from '../util'
import { Node } from './models/linked-list-models'

export default class LinkedList<T> {
  protected count = 0
  protected head: Node<T> | undefined
  constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) { }
  push(element: T) {
    const node = new Node<T>(element)
    if (this.head == null) {
      this.head = node
    } else {
      let last = this.head
      while (last.next != null) {
        last = last.next
      }
      last.next = node
    }
    this.count++
  }
  getElementAt(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.count) return undefined
    let target = this.head
    for (let i = 0; i < index; i++) {
      target = target.next
    }
    return target
  }
  insert(element: T, index: number): boolean {
    if (index < 0 || index > this.count) return false
    const node = new Node<T>(element)
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      const prev = this.getElementAt(index - 1)
      node.next = prev.next
      prev.next = node
    }
    this.count++
    return true
  }
  removeAt(index: number): T {
    if (index < 0 || index >= this.count) return undefined
    let target = this.head
    if (index === 0) {
      this.head = target.next
    } else {
      const prev = this.getElementAt(index - 1)
      target = prev.next
      prev.next = target.next
    }
    this.count--
    return target.element
  }
  remove(element: T): T {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  indexOf(element: T): number {
    let target = this.head
    for (let i = 0; i < this.size(); i++) {
      if (this.equalsFn(element, target.element)) {
        return i
      }
      target = target.next
    }
    return -1
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  size(): number {
    return this.count
  }
  getHead(): Node<T> | undefined {
    return this.head
  }
  clear() {
    this.head = undefined
    this.count = 0
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}