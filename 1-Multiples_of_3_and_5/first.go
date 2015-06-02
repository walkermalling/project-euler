package main

import "fmt"

func appendInt (multiples []int, m int) []int {
  exists := false
  for k := 0; k < len(multiples); k++ {
    if multiples[k] == m {
      exists = true
      break
    }
  }
  if exists {
    return multiples
  } else {
    return append(multiples, m)
  }
}

func scanForMultiples () []int {
  multiples := make([]int, 0)
  for k := 0; k < 1000; k++ {
    if k % 3 == 0 {
      multiples = appendInt(multiples, k)
    } else if k % 5 == 0 {
      multiples = appendInt(multiples, k)
    }
  }
  return multiples
}

func sumMultiples (multiples []int) int {
  sum := 0
  for k := 0; k < len(multiples); k++ {
    sum += multiples[k]
  }
  return sum
}

func main() {
  result := scanForMultiples()
  sum := sumMultiples(result)
  fmt.Printf("%d\n",sum)
}