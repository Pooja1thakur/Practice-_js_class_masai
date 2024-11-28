let tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];
tasks.shift("Task1");
tasks.unshift("High-Priority Task 1", "High-Priority Task 2");
tasks[tasks.length - 1] = "New Task";
console.log(tasks);



