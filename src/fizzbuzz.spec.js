import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should resolve value of fizzbuzz", () => {
    expect(fizzbuzz(1)).toEqual("1");
    expect(fizzbuzz(3)).toEqual("fizz");
    expect(fizzbuzz(5)).toEqual("buzz");
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});
