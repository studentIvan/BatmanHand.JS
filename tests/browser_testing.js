describe("browser", function () {
    it("should have html5 history api support", function () {
        expect((typeof history.pushState !== 'undefined')).toEqual(true);
    });
});