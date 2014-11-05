#include <stdio.h>

int main(int argc, char *argv[])
{
  int limit = 1000;
  int k;
  long sum;

  sum = 0;

  for(k = 0; k < limit; k++){
    if(k % 3 == 0 || k % 5 == 0) sum = sum + k;
  }

  printf("Sum: %ld \n", sum);
    
  return 0;
}
