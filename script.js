var tasklist=[];
var task;


$(".addtask").click(function() {
    task=$(".toDo").val();
	tasklist.push(task);
	$(".ToDoList").append("<li>" + task +"</li>");
    $(".numTasks").text(tasklist.length + " Tasks");
});
 

$(".remove").click(function(){
	tasklist.pop();
    $(".ToDoList").text(tasklist);
    $(".numTasks").text(tasklist.length + " Task");
    
});



