import { PositiveArray } from "./PositiveArray";

describe('PositiveArray', () => {
  let array: PositiveArray

  beforeEach(() => {
    array = new PositiveArray()
  })

  it('should add positive numbers', () => {
    array.add(5)
    array.add(10)
    expect(array.values).toEqual([5, 10])
  })

  it('should not add negative numbers', () => {
    array.add(1)
    array.add(2)
    array.add(3)

    const removed = array.remove(1)
    expect(removed).toBe(2)
    expect(array.values).toEqual([1, 3])
  })

  it('should not remove element at invalid index', () => {
    const array = new PositiveArray()
    array.add(1)
    array.add(2)

    const removed = array.remove(5)
    expect(removed).toBeUndefined()
    expect(array.values).toEqual([1, 2])
  })
})