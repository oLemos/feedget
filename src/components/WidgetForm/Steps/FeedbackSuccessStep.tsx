import { CloseButton } from "../../CloseButton"

import successImage from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export const FeedbackSuccessStep = ({ onFeedbackRestartRequested }: FeedbackSuccessStepProps) => {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImage} alt="Sinal de certo" />

                <span className="text-xl mt-2">
                    Agradecemos o feedback!
                </span>

                <button
                    className="bg-zinc-800 py-2 px-6 mt-6 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                    type="button"
                    onClick={onFeedbackRestartRequested}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}
