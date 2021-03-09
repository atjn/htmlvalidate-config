"use strict";

module.exports = {

	"extends": [
		"html-validate:recommended",
		"html-validate:document",
	],


	//Rules are ordered according to their documentation: https://html-validate.org/rules/index.html

	"rules": {

		//General
		"no-raw-characters":		 "off",
		"no-style-tag":				 "error",
		"require-sri":				["error", {"target": "crossorigin"}],

		//Content model


		//Accessibility
		"svg-focusable":			 "off",

		//SEO


		//Style
		"attribute-empty-style":	["error", {"style": "empty"}],
		"no-trailing-whitespace":	 "off",

		//Document


	},

};
