function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

console.log(area({ width: 30, height: 15 }));
