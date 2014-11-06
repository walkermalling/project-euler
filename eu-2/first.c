#include <stdio.h>

int main()
{
  long prev, next, temp, sum;

  sum = 0;
  prev = 0;
  next = 1;

  while(1)
  {
    temp = prev + next;
    prev = next;
    next = temp;
    if(next % 2 == 0) sum = sum + next; 
    if(next > 4000000) break;
  }

  printf("Sum: %ld \n", sum);

  return 0;
}
