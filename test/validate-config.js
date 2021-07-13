/**
 * @file
 * This runs a few basic tests to make sure the configuration file is valid and produces correct results.
 */

import tap from "tap";

import { HtmlValidate } from "html-validate";
const htmlvalidate = new HtmlValidate();

tap.test("Lint valid file", async () => {

	tap.test("should return a report with zero linting errors", async () => {

		const result = htmlvalidate.validateFile("test/fixture/valid.html");
		
		tap.equal(result.valid, true, "reports file to be valid");
		tap.equal(result.errorCount, 0, "reports no errors");
		tap.equal(result.warningCount, 0, "reports no warnings");

		tap.equal(result.results.length, 0, "reports no messages");

		tap.end();

	});

	tap.end();

});

tap.test("Lint file with bad code style", async () => {

	tap.test("should return a list of linting errors", async () => {

		const result = htmlvalidate.validateFile("test/fixture/invalid.html");

		tap.equal(result.valid, false, "reports file to be invalid");
		tap.ok(result.errorCount > 0, "reports at least one error");
		
		tap.ok(result.results[0].messages.length > 0, "reports at least one message");

		tap.end();

	});

	tap.end();

});
