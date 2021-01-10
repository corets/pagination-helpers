import { createPagination } from "./createPagination"

describe("createPagination", () => {
  it("creates page range", () => {
    const result1 = createPagination({
      currentPage: 1,
      totalItems: 3,
      pageSize: 2,
      surroundBy: 0,
    })

    expect(result1.currentPage).toBe(1)
    expect(result1.visiblePages).toEqual([1])
    expect(result1.firstVisiblePage).toEqual(1)
    expect(result1.lastVisiblePage).toEqual(1)
    expect(result1.allPages).toEqual([1, 2])
    expect(result1.firstPage).toBe(1)
    expect(result1.lastPage).toBe(2)
    expect(result1.hasPrevious).toBe(false)
    expect(result1.hasLess).toBe(false)
    expect(result1.hasNext).toBe(true)
    expect(result1.hasMore).toBe(true)
    expect(result1.pageSize).toBe(2)
    expect(result1.isFirstPage).toBe(true)
    expect(result1.isLastPage).toBe(false)

    const result2 = createPagination({
      currentPage: 1,
      totalItems: 7,
      pageSize: 2,
      surroundBy: 1,
    })

    expect(result2.currentPage).toBe(1)
    expect(result2.visiblePages).toEqual([1, 2, 3])
    expect(result2.firstVisiblePage).toEqual(1)
    expect(result2.lastVisiblePage).toEqual(3)
    expect(result2.allPages).toEqual([1, 2, 3, 4])
    expect(result2.firstPage).toBe(1)
    expect(result2.lastPage).toBe(4)
    expect(result2.hasPrevious).toBe(false)
    expect(result2.hasLess).toBe(false)
    expect(result2.hasNext).toBe(true)
    expect(result2.hasMore).toBe(true)
    expect(result2.pageSize).toBe(2)
    expect(result2.isFirstPage).toBe(true)
    expect(result2.isLastPage).toBe(false)

    const result3 = createPagination({
      currentPage: 4,
      totalItems: 17,
      pageSize: 2,
      surroundBy: 2,
    })

    expect(result3.currentPage).toBe(4)
    expect(result3.visiblePages).toEqual([2, 3, 4, 5, 6])
    expect(result3.firstVisiblePage).toEqual(2)
    expect(result3.lastVisiblePage).toEqual(6)
    expect(result3.allPages).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(result3.firstPage).toBe(1)
    expect(result3.lastPage).toBe(9)
    expect(result3.hasPrevious).toBe(true)
    expect(result3.hasLess).toBe(true)
    expect(result3.hasNext).toBe(true)
    expect(result3.hasMore).toBe(true)
    expect(result3.pageSize).toBe(2)
    expect(result3.isFirstPage).toBe(false)
    expect(result3.isLastPage).toBe(false)

    const result4 = createPagination({
      currentPage: 6,
      totalItems: 33,
      pageSize: 5,
      surroundBy: 2,
    })

    expect(result4.currentPage).toBe(6)
    expect(result4.visiblePages).toEqual([3, 4, 5, 6, 7])
    expect(result4.firstVisiblePage).toEqual(3)
    expect(result4.lastVisiblePage).toEqual(7)
    expect(result4.allPages).toEqual([1, 2, 3, 4, 5, 6, 7])
    expect(result4.firstPage).toBe(1)
    expect(result4.lastPage).toBe(7)
    expect(result4.hasPrevious).toBe(true)
    expect(result4.hasLess).toBe(true)
    expect(result4.hasNext).toBe(true)
    expect(result4.hasMore).toBe(false)
    expect(result4.pageSize).toBe(5)
    expect(result4.isFirstPage).toBe(false)
    expect(result4.isLastPage).toBe(false)

    const result5 = createPagination({
      currentPage: 6,
      totalItems: 0,
      pageSize: 5,
      surroundBy: 2,
    })

    expect(result5.currentPage).toBe(1)
    expect(result5.visiblePages).toEqual([])
    expect(result5.firstVisiblePage).toEqual(undefined)
    expect(result5.lastVisiblePage).toEqual(undefined)
    expect(result5.allPages).toEqual([])
    expect(result5.firstPage).toBe(1)
    expect(result5.lastPage).toBe(0)
    expect(result5.hasPrevious).toBe(false)
    expect(result5.hasLess).toBe(false)
    expect(result5.hasNext).toBe(false)
    expect(result5.hasMore).toBe(false)
    expect(result5.pageSize).toBe(5)
    expect(result5.isFirstPage).toBe(true)
    expect(result5.isLastPage).toBe(false)

    const result6 = createPagination({
      currentPage: 4,
      totalItems: 7,
      pageSize: 2,
      surroundBy: 1,
    })

    expect(result6.currentPage).toBe(4)
    expect(result6.visiblePages).toEqual([2, 3, 4])
    expect(result6.firstVisiblePage).toEqual(2)
    expect(result6.lastVisiblePage).toEqual(4)
    expect(result6.allPages).toEqual([1, 2, 3, 4])
    expect(result6.firstPage).toBe(1)
    expect(result6.lastPage).toBe(4)
    expect(result6.hasPrevious).toBe(true)
    expect(result6.hasLess).toBe(true)
    expect(result6.hasNext).toBe(false)
    expect(result6.hasMore).toBe(false)
    expect(result6.pageSize).toBe(2)
    expect(result6.isFirstPage).toBe(false)
    expect(result6.isLastPage).toBe(true)
  })
})
