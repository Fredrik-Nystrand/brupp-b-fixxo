import { useState } from "react"

function useHelpers() {
  const [currentSort, setCurrentSort] = useState({ propertyName: "", direction: "" })

  function toggleSortArrayOfObjects(propertyName, arrayToSort) {
    function compareValue(a, b) {
      let valueA = a.toString()
      let valueB = b.toString()

      if (!valueA) {
        valueA = ""
      }

      if (!valueB) {
        valueB = ""
      }

      return valueA.localeCompare(valueB)
    }

    if (currentSort.propertyName === "" || currentSort.propertyName !== propertyName) {
      setCurrentSort({ propertyName, direction: "ASC" })
      return [...arrayToSort.sort((a, b) => compareValue(a[propertyName], b[propertyName]))]
    } else {
      if (currentSort.direction === "ASC") {
        setCurrentSort({ propertyName, direction: "DESC" })
        return [...arrayToSort.sort((a, b) => compareValue(b[propertyName], a[propertyName]))]
      } else {
        setCurrentSort({ propertyName, direction: "ASC" })
        return [...arrayToSort.sort((a, b) => compareValue(a[propertyName], b[propertyName]))]
      }
    }
  }

  function sortArrayOfObjects(propertyName, arrayToSort, direction) {
    function compareValue(a, b) {
      let valueA = a.toString()
      let valueB = b.toString()

      if (!valueA) {
        valueA = ""
      }

      if (!valueB) {
        valueB = ""
      }

      return valueA.localeCompare(valueB)
    }

    setCurrentSort({ propertyName, direction })

    if (direction === "ASC") {
      return [...arrayToSort.sort((a, b) => compareValue(a[propertyName], b[propertyName]))]
    } else {
      return [...arrayToSort.sort((a, b) => compareValue(b[propertyName], a[propertyName]))]
    }
  }

  function sortArrayOfObjectsNumber(propertyName, arrayToSort, direction) {
    function compareValue(a, b) {
      let valueA = parseInt(a)
      let valueB = parseInt(b)

      return valueA - valueB
    }

    setCurrentSort({ propertyName, direction })

    if (direction === "ASC") {
      return [...arrayToSort.sort((a, b) => compareValue(a[propertyName], b[propertyName]))]
    } else {
      return [...arrayToSort.sort((a, b) => compareValue(b[propertyName], a[propertyName]))]
    }
  }

  function getCurrentSortingDirection() {
    return currentSort.direction
  }

  function getSortedName() {
    return currentSort.propertyName
  }

  return {
    ArrayFunctions: {
      toggleSortArrayOfObjects,
      sortArrayOfObjects,
      sortArrayOfObjectsNumber,
      getCurrentSortingDirection,
      getSortedName,
    },
  }
}

export default useHelpers
