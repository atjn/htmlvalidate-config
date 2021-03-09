"use strict";

const t = require("tap");

module.exports = async () => {

	//This transform is necessary because html-validate doesn't support JS config files natively. Hopefully it will someday.
	const fs = require("fs");
	const config = require("../.htmlvalidate.js");
	fs.writeFileSync("./.htmlvalidate.json", JSON.stringify(config));
	//End transform

	const { HtmlValidate } = require("html-validate");
	const htmlvalidate = new HtmlValidate();

	t.test("Lint valid file", async t => {

		t.test("should return a report with zero linting errors", async t => {

			const result = htmlvalidate.validateFile("test/fixture/valid.html");
			
			t.equal(result.valid, true, "reports file to be valid");
			t.equal(result.errorCount, 0, "reports no errors");
			t.equal(result.warningCount, 0, "reports no warnings");

			t.equal(result.results.length, 0, "reports no messages");

			t.done();

		});

		t.done();

	});

	t.test("Lint file with bad code style", async () => {

		t.test("should return a list of linting errors", async t => {

			const result = htmlvalidate.validateFile("test/fixture/invalid.html");

			t.equal(result.valid, false, "reports file to be invalid");
			t.ok(result.errorCount > 0, "reports at least one error");
			
			t.ok(result.results[0].messages.length > 0, "reports at least one message");

			t.done();

		});

		t.done();

	});

};

module.exports();
