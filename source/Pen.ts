export default class Pen {

    private __ink: number;

    constructor() {
        this.__ink = 10;
    }

    write(text: string): string {
        this.__ink -= text.length;
        if (this.__ink < 0)
            throw new Error("Acabou a tinta :(");
        return text;
    }

    get ink(): number {
        return this.__ink;
    }

}
