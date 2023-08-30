import { injectable } from "inversify";

interface Client {
    something(): string;
}

@injectable()
export class SignifyClient implements Client {
    public something() {
        return "foo";
    }
}
