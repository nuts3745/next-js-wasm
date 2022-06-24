import { useState } from "react";
import { sums } from "../pkg/nextjs_wasm_bg.wasm";

export default function Home() {
    const [value, setValue] = useState(1);
    const [index, setIndex] = useState(1);
    return (
        <div>
            <div>
                <label>Enter a number below. (1 to 65535) </label>
            </div>
            <div>
                <input
                    onChange={(e) => {
                        const v = Number(e.target.value);
                        if (1 <= v && v <= 65535) {
                            setIndex(v);
                            !isNaN(v) && setValue(sums(v));
                        } else if (v > 65535) {
                            setIndex(65535);
                            setValue(sums(65535));
                        } else {
                            setIndex(1);
                            setValue(sums(1));
                        }
                    }}
                />
            </div>
            <div>
                (1 + {index}) * {index} / 2 = {value}
            </div>
        </div>
    );
}
