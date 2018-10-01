var db = [
    {
        "question":"You are in the middle, there are a number of exits.",
        "answers":[
            {"title":"South","response":1},
            {"title":"North","response":2},
            {"title":"West","response":3},
            {"title":"East","response":4}
            ]
    },
    {
        "question":"You are in the South, There is one exit",
        "answers":[
            {"title":"North","response":0}
            ]
    },
    {
        "question":"You are in the North, There is one exit",
        "answers":[
            {"title":"South","response":0}
            ]
    },
    {
        "question":"You are in the West, There are two exits.",
        "answers":[
            {"title":"East","response":0},
            {"title":"West","response":5}
            ]
    },
    {
        "question":"You are in the East, There is one exit",
        "answers":[
            {"title":"West","response":0}
            ]
    },
    {
        "question":"You are the winner!",
        "answers":[
            {"title":"Start Over","response":0}
        ]
    }
    ];

var currentLocation = 0;

window.printCurrentLocation = function(){
    document.getElementById("question").innerHTML = db[currentLocation].question;
    var answers = "";
    for(var i=0,l=db[currentLocation].answers.length;i<l;i++){
        answers += "<p><button onclick='setLocation("+db[currentLocation].answers[i].response+")'>"+db[currentLocation].answers[i].title+"</button></p>";
    }
    document.getElementById("answers").innerHTML = answers;
}

window.setLocation = function(num) {
    currentLocation = num;
    window.printCurrentLocation();
}

window.printCurrentLocation();
