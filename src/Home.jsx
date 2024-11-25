import { useState } from "react";

const Home = () => {

    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const yesButtonSize = noCount * 20 + 16;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "What if I asked really nicely?",
            "Pretty please",
            "With a chocolate chip pancake?",
            "What about a bear hug?",
            "PLEASE PLEASE PLEASE",
            "What about Cape Cod trips together and some Marylous Coffee?",
            "I'll workout with you",
            "I'll cook for you",
            "Ok, guess you have to say YES",
            "I'll give you a massage",
            "My forever woman",
            "PRETTY PLEASE",
            "This is just getting bigger till I hear a YES",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center">
            {yesPressed ? (
                <>
                    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                    <div className="my-4 text-4xl font-bold">YAYYY I love you my lil Chantal</div>
                </>
            ) : (
                <>
                    <img
                        className="h-[200px]"
                        src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
                    />
                    <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
                    <div className="flex items-center">
                        <button
                            className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                            style={{ fontSize: yesButtonSize }}
                            onClick={() => setYesPressed(true)}
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleNoClick}
                            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                        >
                            {noCount === 0 ? "No" : getNoButtonText()}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
export default Home;