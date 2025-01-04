function findContentChildren(g: number[], s: number[]): number {
  const reversed_sorted_children_greed = g.sort((a, b) => a - b).reverse();
  const reversed_sorted_cookies = s.sort((a, b) => a - b).reverse();

  let content_children = 0;

  let count = 0;

  for (let i = 0; i < reversed_sorted_cookies.length; i++) {
    while (count < reversed_sorted_children_greed.length) {
      if (reversed_sorted_cookies[i] >= reversed_sorted_children_greed[count]) {
        content_children++;
        reversed_sorted_children_greed.splice(count, 1);
        break;
      }
      count++;
    }
    if (
      reversed_sorted_children_greed.length === 0 ||
      count === reversed_sorted_children_greed.length
    ) {
      return content_children;
    } else {
      count = 0;
    }
  }

  return content_children;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([1, 2, 3], [3]));
