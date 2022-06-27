const request = require('')

describe("GET /books", () => {
    test("It responds with an array of books", async () => {
        const response = await request(app).get("/books");
        expect(response.body.length).toBe(3);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("title");
        expect(response.body[0]).toHaveProperty("author");
        expect(response.body[0]).toHaveProperty("year");
        expect(response.statusCode).toBe(200);
    });
});