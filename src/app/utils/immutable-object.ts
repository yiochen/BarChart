
export class ImmutableObject {
    private _dataSt: string;
    constructor(obj: any) {
        this._dataSt = JSON.stringify(obj);
    }

    assign(obj: any) {
        let str = JSON.stringify(obj);
        if (str !== this._dataSt) {
            return new ImmutableObject(obj);
        }
        return this;
    }

    get() {
        return this._dataSt ? JSON.parse(this._dataSt) : null;
    }
}