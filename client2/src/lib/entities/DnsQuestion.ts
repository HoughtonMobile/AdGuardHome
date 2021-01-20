// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface IDnsQuestion {
    class?: string;
    host?: string;
    type?: string;
}

export default class DnsQuestion {
    readonly _class: string | undefined;

    /**
     * Description: undefined
     * Example: IN
     */
    get class(): string | undefined {
        return this._class;
    }

    readonly _host: string | undefined;

    /**
     * Description: undefined
     * Example: example.org
     */
    get host(): string | undefined {
        return this._host;
    }

    readonly _type: string | undefined;

    /**
     * Description: undefined
     * Example: A
     */
    get type(): string | undefined {
        return this._type;
    }

    constructor(props: IDnsQuestion) {
        if (typeof props.class === 'string') {
            this._class = props.class.trim();
        }
        if (typeof props.host === 'string') {
            this._host = props.host.trim();
        }
        if (typeof props.type === 'string') {
            this._type = props.type.trim();
        }
    }

    serialize(): IDnsQuestion {
        const data: IDnsQuestion = {
        };
        if (typeof this._class !== 'undefined') {
            data.class = this._class;
        }
        if (typeof this._host !== 'undefined') {
            data.host = this._host;
        }
        if (typeof this._type !== 'undefined') {
            data.type = this._type;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            class: !this._class ? true : typeof this._class === 'string' && !this._class ? true : this._class,
            host: !this._host ? true : typeof this._host === 'string' && !this._host ? true : this._host,
            type: !this._type ? true : typeof this._type === 'string' && !this._type ? true : this._type,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<IDnsQuestion>): DnsQuestion {
        return new DnsQuestion({ ...this.serialize(), ...props });
    }
}