import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export const CloseButton = () => {
    function ois (ola:string) {
        console.log(ola)
    }

    return (
        <Popover.Button title="Fechar formulário de feedback" className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100">
            <X onClick={() => ois('ola')} weight="bold" className="w-4 h-4" />
        </Popover.Button>
    )
}
