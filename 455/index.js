function findContentChildren(g, s) {
    var reversed_sorted_children_greed = g.sort(function (a, b) { return a - b; }).reverse();
    var reversed_sorted_cookies = s.sort(function (a, b) { return a - b; }).reverse();
    var content_children = 0;
    var count = 0;
    for (var i = 0; i < reversed_sorted_cookies.length; i++) {
        while (count < reversed_sorted_children_greed.length) {
            if (reversed_sorted_cookies[i] >= reversed_sorted_children_greed[count]) {
                content_children++;
                reversed_sorted_children_greed.splice(0, count + 1);
                break;
            }
            count++;
        }
        if (reversed_sorted_children_greed.length === 0 ||
            count === reversed_sorted_children_greed.length) {
            return content_children;
        }
        else {
            count = 0;
        }
    }
    return content_children;
}
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([1, 2, 3], [3]));
