#include <stdio.h>

#define CAPACITY 10
void display(int arr[], int n);
int insert_at_pos(int arr[], int *n_ptr, int element, int position);
int delete_at_pos(int arr[], int *n_ptr, int position);

void display(int arr[], int n)
{
  printf("Current Array (Size %d/%d): [", n, CAPACITY);
  for (int i = 0; i < n; i++)
  {
    printf("%d", arr[i]);
    if (i < n - 1)
    {
      printf(", ");
    }
  }
  printf("]\n");
}
int insert_at_pos(int arr[], int *n_ptr, int element, int position)
{
  int n = *n_ptr;
  if (position < 1 || position > n + 1 || n >= CAPACITY)
  {
    printf("\nERROR: Insertion failed. Invalid position or array is full.\n");
    return 0;
  }
  int index = position - 1;
  for (int i = n; i >= index; i--)
  {
    arr[i + 1] = arr[i];
  }
  arr[index] = element;
  *n_ptr = n + 1;
  printf("SUCCESS: Inserted %d at position %d.\n", element, position);
  return 1;
}
int delete_at_pos(int arr[], int *n_ptr, int position)
{
  int n = *n_ptr;
  if (position < 1 || position > n)
  {
    printf("\nERROR: Deletion failed. Invalid position.\n");
    return 0;
  }

  int index = position - 1;
  int deleted_element = arr[index];
  for (int i = index; i < n - 1; i++)
  {
    arr[i] = arr[i + 1];
  }
  *n_ptr = n - 1;
  printf("SUCCESS: Deleted %d from position %d.\n", deleted_element, position);
  return 1;
}

int main()
{
  int arr[CAPACITY] = {10, 20, 30, 40, 50};
  int n = 5;

  printf("--- Initial State ---\n");
  display(arr, n);
  printf("\n--- INSERTION ---\n");
  insert_at_pos(arr, &n, 99, 3);
  display(arr, n);
  insert_at_pos(arr, &n, 5, 1);
  display(arr, n);
  insert_at_pos(arr, &n, 1000, 15);
  printf("\n--- DELETION ---\n");
  delete_at_pos(arr, &n, 4);
  display(arr, n);
  delete_at_pos(arr, &n, n);
  display(arr, n);
  delete_at_pos(arr, &n, 0);
  printf("\n--- Final State ---\n");
  display(arr, n);

  return 0;
}