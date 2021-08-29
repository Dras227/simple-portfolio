console.clear()

var readlinesync = require('readline-sync')

let score=0;

var question_list = [{
	question:"Who is my favorite superhero?",
	answer:"Captain Cold"
	}
	,
{
	question:"What are the super powers of Captain Cold?", 
	answer:"Cold Gun,Planning Skills,No mercy"
},
{
	question:"Who is the cast of Captain Cold?",
	answer:"Wentworth Miller"
},
{
	question:"Who is the close friend of Captain Cold?",
	answer:"Heat Wave"
},
{
	question:"Who is more cool - Captain Cold or Wentworth Miller?",
	answer:"Wentworth Miller"
}];


function play_qn(user_q,correct_ans)
{
	var user_ans = readlinesync.question(user_q);

	if(correct_ans.toUpperCase()===user_ans.toUpperCase())
	{
		score = score+1;
		console.log("Your answer is right!");
	}
	else
	{
		console.log("Correct Ans: " + correct_ans)
		console.log("Better luck next time");
	}

	console.log("Your current score is "+ score);
}

for(let i=0;i<question_list.length;i++)
{
	play_qn(question_list[i].question,question_list[i].answer);
}

if(score > 2) console.log("congrats you passed my fandom quiz..and since you also like captain cold ,,ig we are friends ;) ");
else console.log("You failed this quiz");