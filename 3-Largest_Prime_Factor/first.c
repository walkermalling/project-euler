#include <stdio.h> 
#include <stdlib.h> // for atol()
/**
 *  For a given natural number, get its largest prime factor
 *  - assumes given number is > 1
 *  
 */
long getLargestPrime(double n)
{
  long largestPrimeFactor, denominator;
  double quotient, numerator;

  numerator = n;
  denominator = 2;

  while( denominator <= numerator)
  {
    quotient = numerator / denominator;

    if( quotient == (int)quotient )
    {
      largestPrimeFactor = denominator;
      numerator = numerator / denominator;
    }
    else
    {
      denominator = denominator + 1;
    }
  }
  return largestPrimeFactor;
}


int main(int argc, char *argv[])
{
  double n = argc > 1 ? atol(argv[1]) : 13195;

  printf("\nThe largest prime factor of %ld is %ld.\n",(long)n, getLargestPrime(n) );

  return 0;
}





