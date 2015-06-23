// PART HALF
// Contact algorithm
function isTouching (obj1, obj2) {
  return obj1.x < obj2.x + obj2.width  && obj1.x + obj1.width  > obj2.x &&
    obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y; // This is a fairly complex way to detect if one object is touching another. You don't really need to understand this, but if you can figure it out by yourselves, that's great
}

