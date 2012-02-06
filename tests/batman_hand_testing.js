describe("batman hand.js", function () {
    var passed = false;

    it("should init", function () {
        batmanHand.init(function (path, title) {});
    });

    it("should navigate on 'testing.html#!123' with title 'yeah baby'", function () {
        batmanHand.init(function (page, title) {
            if (!passed) {
                expect(page == '/testing.html#!123').toEqual(true);
                expect(title == 'yeah baby').toEqual(true);
                passed = true;
            }
            else {
                expect(document.location.pathname == '/testing.html').toEqual(true);
            }
        });

        batmanHand.navigate('testing.html#!123', 'yeah baby');
    });

    it("should normalize location string", function () {
        history.back();
    });
});