//Customer
	//Check their annual consumption (Problem, for me, price is not an int)
var pipelineCli1=[{"$match":{"Customer.ID":"31543"}},
{"$group":{"_id":"$Product.Description", "nb":{"$sum": 1}}}
]

db.bdd.aggregate(pipelineCli1);

	//Average time between two fill-ups
var map=function(){
    emit(this.
}
	//Details of last fill-up. (date & location)
var pipelineCli3=[{"$match":{"Customer.ID":"31543"}},
{"$sort":{"Date":-1,"Time":-1}},
{"$limit":1},
{"$project":{"Customer.ID":1,"Date":1,"Time":1,"GasStation.Country":1}}
]
db.bdd.aggregate(pipelineCli3)

//Analyst

	//Check the gas station most frequented so far
var pipelineAna1=[{"$group":{"_id":"$GasStation.ID","nb":{"$sum":1}}},
{"$sort":{"nb":-1}}
]
db.bdd.aggregate(pipelineAna1)

	//Number of users per gasstation for a given gs id
var pipelineAna2 =[{"$match":{"GasStation.ID":"448"}},
{"$group":{"_id":"$Customer.ID"}},
{"$group":{"_id":null,"nb":{"$sum":1}}}
]
db.bdd.aggregate(pipelineAna2)