import * as React from "react";
import * as ReactDOM from "react-dom";

export class Bubbles extends React.PureComponent<{}, never> {
    public render() {
        const bubblesContainer = document.getElementById('bubbles');

        if (!bubblesContainer) {
            return null;
        }

        const bubbles: { x: number, y: number, s: number }[] = [];

        for (let i = 0; i < 30; i++) {
            const left = Math.random() < 0.5;
            const x = (left ? 0 : 0.9) + 0.1 * Math.random();
            const yp = Math.random();
            const y = (0.02 + 0.8 * yp) ** 3;
            const s = 30 + 60 * Math.random() * (1 - yp);
            bubbles.push({
                x: Math.round(x * 100),
                y: Math.round(y * 100),
                s: Math.round(s)
            });
        }

        return ReactDOM.createPortal(
            <React.Fragment>
                {bubbles.map((bubble) => {
                    return <div className="bubble" style={{ top: `${bubble.y}vh`, left: `${bubble.x}vw`, width: bubble.s, height: bubble.s }} />;
                })}
            </React.Fragment>,
            bubblesContainer
        );
    }
}
