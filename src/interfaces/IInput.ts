import { FormEvent } from "react";

export interface IInput {
    type: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
}
