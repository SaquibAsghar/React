import Chance from 'chance'
const chance = new Chance()

export const menuItems = [
	{
		id: 1,
		title: "buttermilk pancakes",
		category: "breakfast",
		price: 100,
		img: "./images/item-1.jpeg",
		desc:  chance.sentence(),
	},
	{
		id: 2,
		title: "diner double",
		category: "lunch",
		price: 200,
		img: "./images/item-2.jpeg",
		desc: chance.sentence()
	},
	{
		id: 3,
		title: "godzilla milkshake",
		category: "shakes",
		price: 300,
		img: "./images/item-3.jpeg",
		desc: chance.sentence()
	},
	{
		id: 4,
		title: "country delight",
		category: "breakfast",
		price: 400,
		img: "./images/item-4.jpeg",
		desc: chance.sentence()
	},
	{
		id: 5,
		title: "egg attack",
		category: "lunch",
		price: 500,
		img: "./images/item-5.jpeg",
		desc: chance.sentence()
	},
	{
		id: 6,
		title: "oreo dream",
		category: "shakes",
		price: 600,
		img: "./images/item-6.jpeg",
		desc: chance.sentence()
	},
	{
		id: 7,
		title: "bacon overflow",
		category: "breakfast",
		price: 700,
		img: "./images/item-7.jpeg",
		desc: chance.sentence()
	},
	{
		id: 8,
		title: "american classic",
		category: "lunch",
		price: 900,
		img: "./images/item-8.jpeg",
		desc: chance.sentence()
	},
	{
		id: 9,
		title: "quarantine buddy",
		category: "shakes",
		price: 1000,
		img: "./images/item-9.jpeg",
		desc: chance.sentence()
	},
];
