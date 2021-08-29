var readlinesync = require('readline-sync')


let score=0;

var question_list = [{
	question:"Which is my favourite subject?",
	answer:"problem solving"
	}
	,
{
	question:"In which area i lack skills?", 
	answer:"Web Development"
},
{
	question:"What should i do to increase my skills?",
	answer:"practice"
},
{
	question:"What do you suggest i do?",
	answer:"do as tanay says you do "
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

if(score > 2) console.log("congrats your my tier 1 frnd");
else console.log("who are you what you doing here");
