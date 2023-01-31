import { FormEvent, MutableRefObject } from "react";

export interface IInput {
    type: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    ref?: MutableRefObject<HTMLInputElement | null>;
}
