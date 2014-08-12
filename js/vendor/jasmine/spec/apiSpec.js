describe("Api", function() {
	describe("GIVEN a security token", function() {
		
		var grissue;
		var token;
		
		beforeEach(function() {
			jasmine.Ajax.install();
			token = "123";
			grissue = new Grissue({
				token: token,
				auth: "oauth"
			});
		});
		
		afterEach(function() {
			jasmine.Ajax.uninstall();
		});

		describe("WHEN ask for the issues", function() {
			var issues;
			
			beforeEach(function() {
				grissue.issues(function(retrieved_issues) {
					var a = retrieved_issues;
				});
			});				
				
			it("THEN should perfrorm an request with the GET method", function () {
				expect(jasmine.Ajax.requests.mostRecent().method).toBe('GET');
			});
			
			it("THEN should perfrorm the request to right the url", function () {
				expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://api.github.com/repos/usr/repo/issues');			
			});
			
			it("THEN should have the Authorization header", function() {
				expect(jasmine.Ajax.requests.mostRecent().requestHeaders['Authorization']).toBe('token ' + token);
			});
		});
	});
});
