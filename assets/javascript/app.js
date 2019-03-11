
var countdown = 30;
var selected_state = 0;
var selected_state_attribute = 0;
var cor_an_ct = 0;
var wrn_an_ct = 0;
var no_answer = 0;
var q_count = 0;
var game_qc = 10;//the number of questions the user will be asked before the game ends.

function add_questions(){
    $(".question").append("<div> question1 </div>")
    $(".question").append("<div> question2 </div>")
}

var items = [
    ["State","State Capital","Population","Seats In House Of Representatives","Percent of US population"],
["California","Sacramento",39557045,53,0.1196],
["Texas","Austin",28701845,36,0.0868],
["Florida","Tallahassee",21299325,27,0.0644],
["New York","Albany",19542209,27,0.0591],
["Pennsylvania","Harrisburg",12807060,18,0.0387],
["Illinois","Springfield",12741080,18,0.0385],
["Ohio","Columbus",11689442,16,0.0353],
["Georgia","Atlanta",10519475,14,0.0318],
["North Carolina","Raleigh",10383620,13,0.0314],
["Michigan","Lansing",9998915,14,0.0302],
["New Jersey","Trenton",9032873,12,0.0269],
["Virginia","Richmond",8517685,11,0.0258],
["Washington","Olympia",7535591,10,0.0228],
["Arizona","Phoenix",7171646,9,0.0217],
["Massachusetts","Boston",6902149,9,0.0209],
["Tennessee","Nashville",6770010,9,0.0205],
["Indiana","Indianapolis",6691878,9,0.0202],
["Missouri","Jefferson City",6126452,8,0.0185],
["Maryland","Annapolis",6042718,8,0.0183],
["Wisconsin","Madison",5813568,8,0.0176],
["Colorado","Denver",5695564,7,0.0172],
["Minnesota","St. Paul",5611179,8,0.017],
["South Carolina","Columbia",5084127,7,0.0154],
["Alabama","Montgomery",4887871,7,0.0148],
["Louisiana","Baton Rouge",4659978,6,0.0141],
["Kentucky","Frankfort",4468402,6,0.0135],
["Oregon","Salem",4190713,5,0.0127],
["Oklahoma","Oklahoma City",3943079,5,0.0119],
["Connecticut","Hartford",3572665,5,0.0108],
["Utah","Salt Lake City",3161105,4,0.0096],
["Iowa","Des Moines",3156145,4,0.0095],
["Nevada","Carson City",3034392,4,0.0092],
["Arkansas","Little Rock",3013825,4,0.0091],
["Mississippi","Jackson",2986530,4,0.009],
["Kansas","Topeka",2911505,4,0.0088],
["New Mexico","Santa Fe",2095428,3,0.0063],
["Nebraska","Lincoln",1929268,3,0.0058],
["West Virginia","Charleston",1805832,3,0.0055],
["Idaho","Boise",1754208,2,0.0053],
["Hawaii","Honolulu",1420491,2,0.0043],
["New Hampshire","Concord",1356458,2,0.0041],
["Maine","Augusta",1338404,2,0.004],
["Montana","Helena",1062305,1,0.0032],
["RhodeIsland","Providence",1057315,2,0.0032],
["Delaware","Dover",967171,1,0.0029],
["South Dakota","Pierre",882235,1,0.0027],
["North Dakota","Bismarck",760077,1,0.0023],
["Alaska","Juneau",737438,1,0.0022],
["Vermont","Montpelier",626299,1,0.0019],
["Wyoming","Cheyenne",577737,1,0.0017]

]


$(".timeremaining").hide() 
$(".play_again").hide();//hide play_again
console.log(items[50][0])
// start set random numbers for the trivia quiz set random numbers for the trivia quizset random numbers for the trivia quiz

function set_random_state() {
    min = Math.ceil(1);
    max = Math.floor(50);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
    }

function set_random_state_attribute() {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }

    function state_attribute_first_25() {
        min = Math.ceil(1);
        max = Math.floor(25);
        return Math.floor(Math.random() * (max - min + 1)) + min;
            
        }
    function state_attribute_second_25() {
        min = Math.ceil(26);
        max = Math.floor(50);
        return Math.floor(Math.random() * (max - min + 1)) + min;
                
        }

    function giph_0_10() {
        min = Math.ceil(0);
        max = Math.floor(10);
        return Math.floor(Math.random() * (max - min + 1)) + min;
                    
        }
// set end random numbers for the trivia quiz set random numbers for the trivia quizset random numbers for the trivia quiz
function set_question(){
    selected_state = set_random_state()
    selected_state_attribute = set_random_state_attribute()

}

function build_question(somestate,state_attribute){
    if(state_attribute === 1){
        return "What is the capital of "+ items[somestate][0]+"?"
    }
    if(state_attribute === 2){
        return "What is the population of "+ items[somestate][0]+"?"
    }
    if(state_attribute === 3){
        return "How many seats does the state of "+ items[somestate][0]+" have in the House Of Representatives?"
    }
    if(state_attribute === 4){
        return "What percent of the US population does the state of "+ items[somestate][0]+" have?"
    }
    "What percent of the US population does the state of somestate have?"
    "How many seats does the state of somestate have in the House Of Representatives?"
    "What is the capital of somestate?"
    "What is the population of somestate?"
}

set_question()


function build_answers(){
    var answer_position = set_random_state_attribute()//give the answer a random position
    var a_25 = state_attribute_first_25()
    var b_25 = state_attribute_second_25() 
    var answer_list = [items[selected_state][selected_state_attribute]]
    console.log("Answer: ",items[selected_state][selected_state_attribute])
    function check(x){
        if(answer_list.indexOf(x) > -1){ 
            answer_list.push(x)                    
            return true            
        }else{  
            answer_list.push(x)          
            return false            
        }      

    }
    
    // var n = 34523453.345
    // n.toLocaleString()
    // "34,523,453.345"
    for(i=0;i<4;i++){        
        if(i  === answer_position -1){
            var x = $("<div>")
            x.addClass("answer_text");
            if(selected_state_attribute === 4){ 
                x.text((items[selected_state][selected_state_attribute]* 100).toFixed(2)  + '%');
            }else if(selected_state_attribute === 2){
                x.text(items[selected_state][selected_state_attribute].toLocaleString());
            }else{
                x.text(items[selected_state][selected_state_attribute]);
            }
            // x.text(items[selected_state][selected_state_attribute]);
            $(".answer_block").after(x)
        }else if(selected_state <= 25){
            a_25 = state_attribute_first_25()            
            var x = $("<div>")
            x.addClass("answer_text");
            // x.text(items[a_25][selected_state_attribute]);
            if(selected_state_attribute === 3){
                console.log("selected_state_attribute: ",selected_state_attribute)
                if (check(items[a_25][selected_state_attribute]) === true ){
                    x.text(i+i)
                }else{
                    x.text(items[a_25][selected_state_attribute])
                }
            }else if(selected_state_attribute === 4){
                x.text((items[a_25][selected_state_attribute]* 100).toFixed(2)  + '%');
            }else if(selected_state_attribute === 2){
                x.text(items[a_25][selected_state_attribute].toLocaleString());   
            }else{
                x.text(items[a_25][selected_state_attribute]);   
            }                     
            $(".answer_block").after(x)
        }else if(selected_state > 25){
            b_25 = state_attribute_second_25()
            var x = $("<div>")
            x.addClass("answer_text");
            // x.text(items[b_25][selected_state_attribute]);
            if(selected_state_attribute === 3){
                console.log("selected_state_attribute: ",selected_state_attribute)
                if (check(items[b_25][selected_state_attribute]) === true){
                    x.text(i+i)
                }else {
                    x.text(items[b_25][selected_state_attribute])
                }
            }else if (selected_state_attribute === 4){                    
                x.text((items[b_25][selected_state_attribute]* 100).toFixed(2)  + '%');
            }else if(selected_state_attribute === 2){
                x.text(items[b_25][selected_state_attribute].toLocaleString())
            }else{
                x.text(items[b_25][selected_state_attribute]);
            }            
            $(".answer_block").after(x)
        }
        
    }
    

    // $(".answer_block").html("<div class='answer'>"+items[selected_state][selected_state_attribute] +"</div>")

}//function build_answers(){

function correct_wrong(e){
    

    var convert_answer
    if(selected_state_attribute === 4){ 
        convert_answer = (items[selected_state][selected_state_attribute]* 100).toFixed(2)  + '%';
    }else if(selected_state_attribute === 2){
        convert_answer = items[selected_state][selected_state_attribute].toLocaleString();
    }else{
        convert_answer = items[selected_state][selected_state_attribute];
    }
    console.log("convert_answer: ",convert_answer)
    console.log("parseFloat(e.target.innerHTML): ",parseFloat(e.target.innerHTML))

    if(parseFloat(e.target.innerHTML) === convert_answer
    ||e.target.innerHTML === convert_answer){
        cor_an_ct++;
        q_count++;
        console.log("q_count: ",q_count)
        console.log("cor_an_ct: ",cor_an_ct)
        return true;
    }
    else{        
        wrn_an_ct++
        q_count++;
        console.log("wrn_an_ct: ",wrn_an_ct)
        console.log("q_count: ",q_count)
        return false;
        
    }
}


function correct(){
    var x = $("<div>")
        x.addClass("Correctanswer_text");
        x.text("Correct!")
        $(".answer_block").after(x)

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=clapping&api_key=W181Y1Mq1a3ULXNYJIfJ6QPCtloIg1W8";
        // "http://api.giphy.com/v1/gifs/trending?api_key=W181Y1Mq1a3ULXNYJIfJ6QPCtloIg1W8";
        $.ajax({
            
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            
           console.log(response.data[0].images.fixed_height.url)
           var y = $("<img>")
           y.addClass("Correctanswer_text");
           y.attr("src",response.data[giph_0_10()].images.fixed_height.url);
           y.attr("id","img_id")
           $(".answer_block").after(y)
       
          });     

}

function wrong(){
    var x = $("<div>")
        x.addClass("Wronganswer_text");
        x.text("Wrong!")
        $(".answer_block").after(x)

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=wrong&api_key=W181Y1Mq1a3ULXNYJIfJ6QPCtloIg1W8";
        // "http://api.giphy.com/v1/gifs/trending?api_key=W181Y1Mq1a3ULXNYJIfJ6QPCtloIg1W8";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
           console.log(response.data[0].images.fixed_height.url)
           var y = $("<img>")
           y.addClass("Wronganswer_text");
           y.attr("src",response.data[giph_0_10()].images.fixed_height.url);
           y.attr("id","img_id")
           $(".answer_block").after(y)
        });  

}

function times_up(){
    var x = $("<div>")
        x.addClass("timeupanswer_text");
        if(selected_state_attribute === 4){
            x.text("Time Is Up! The correct answer was " +
            (items[selected_state][selected_state_attribute]* 100).toFixed(2)  + '%');
        }else if(selected_state_attribute === 2){
            x.text("Time Is Up! The correct answer was " +
            items[selected_state][selected_state_attribute].toLocaleString());   
        }else{
            x.text("Time Is Up! The correct answer was " +
            items[selected_state][selected_state_attribute]);   
        } 
        // x.text("Time Is Up! The correct answer was " +items[selected_state][selected_state_attribute])
        $(".answer_block").after(x)

        q_count++;
        no_answer++ 
        setTimeout(function(){
            if(q_count===game_qc){
                end_game()
                $(".play_again").show();
        
            }else{

            $(".answer_text").remove();
            $(".timeupanswer_text").remove();
            set_question()
            build_answers()
            $(".question").text(build_question(selected_state,selected_state_attribute))
            $(".time_seconds").text("timeremaining countdown: " +"30")  
            countdown = 30
            start_clock()                      
            }

          },5000);




}
// $(document).ready(function() {
function start_clock(){
    timeinterval = setInterval(function(){
        countdown --;
        $(".time_seconds").text("timeremaining countdown: " +countdown)  
        
        stoptimer()
    
        console.log("countdown " +countdown)
    },1000)
}


function on_click_answer(e){
    if(correct_wrong(e)){   
        clearInterval(timeinterval); 
        countdown = 30    
        $(".answer_text").remove();
        $(".question").text("")
        correct()        
        setTimeout(function(){
            if(q_count===game_qc){
                end_game()
                $(".play_again").show();
        
            }else{
            $(".answer_text").remove();
            $(".Correctanswer_text").remove();
            set_question()
            build_answers()
            $(".question").text(build_question(selected_state,selected_state_attribute))
            $(".time_seconds").text("timeremaining countdown: " +"30")  
            countdown = 30
            start_clock()
            }
          },5000);
    }else{
        clearInterval(timeinterval);
        countdown = 30;
        $(".answer_text").remove();
        $(".question").text("")  
        wrong()
  
        setTimeout(function(){
            if(q_count===game_qc){
                end_game()
                $(".play_again").show();
        
            }else{
            $(".answer_text").remove();
            $(".Wronganswer_text").remove();
            set_question()
            build_answers()
            $(".question").text(build_question(selected_state,selected_state_attribute))
            $(".time_seconds").text("timeremaining countdown: " +"30")  
            countdown = 30
            start_clock()
            } 
        },5000);
        
    }
}

function stoptimer(){
    if(countdown === 0){
        clearInterval(timeinterval);
        countdown = 30;
        $(".answer_text").remove();
        $(".question").text("")  
        times_up()
    }

}

function end_game(){
    $(".Correctanswer_text").remove();
    $(".Wronganswer_text").remove();
    clearInterval(timeinterval);
    countdown = 30;
    $(".answer_text").remove();
    var x = $("<div>")
    x.addClass("answer_text");
    x.text("Correct Count: " + cor_an_ct)
    $(".answer_block").after(x)

    var y = $("<div>")
    y.addClass("answer_text");
    y.text("Incorrect Count: "+ wrn_an_ct)
    $(".answer_block").after(y)

    var z = $("<div>")
    z.addClass("answer_text");
    z.text("Unanswered Count: "+ no_answer)
    $(".answer_block").after(z)


}

 $('#start').on('click',function(){
    $(".time_seconds").text("timeremaining countdown: " +"30")  
    add_questions()
    start_clock()
    $(".timeremaining").show() 


    $(".start_button").hide() 
    $(".question").text(build_question(selected_state,selected_state_attribute))
    build_answers()
 });



$(document).on("click", ".answer_text", function(e){
    clearInterval(timeinterval);
    countdown = 30;
    on_click_answer(e)


});

$(document).on("click", ".play_again", function(e){
    $(".Correctanswer_text").remove();
    $(".Wronganswer_text").remove();
    $(".timeupanswer_text").remove();
    $(".answer_text").remove();
    $(".question").text("");  
    $(".play_again").hide();
    countdown = 30;
    cor_an_ct = 0;
    wrn_an_ct = 0;
    no_answer = 0;
    q_count = 0;
    $(".time_seconds").text("timeremaining countdown: " +"30")  
    add_questions()
    start_clock()
    // $(".start_button").hide() 
    $(".question").text(build_question(selected_state,selected_state_attribute))
    build_answers()




});


// });