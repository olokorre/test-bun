import { expect, test } from "bun:test";
import Pen from "../source/Pen";

test("Deve criar uma caneta simples", function () {
    const pen = new Pen();
    const output = pen.write("Olá!");
    expect(output).toBe("Olá!");
});

test("Deve checar a quantidade de tinta diminuiu", function () {
    const pen = new Pen();
    pen.write("Olá!");
    expect(pen.ink).toBe(6);
});

test("Esgotar a tinta da caneta", function () {
    const pen = new Pen();
    expect(() => pen.write("Seja bem vindo meu amigo!")).toThrow(new Error("Acabou a tinta :("));
});
