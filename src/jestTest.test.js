import Hello from "./jestTest.js"

it("it works with normal import statements", () => {
  expect(Hello("John")).toBe("Hello John")
})
