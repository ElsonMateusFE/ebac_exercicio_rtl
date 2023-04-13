import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";

describe('Testando renderização de comentáros', () => {
    test('Renderizando 2 comentários', () => {
        render(<Post />)
        fireEvent.change(screen.getByTestId('campo-textarea'), {
            target: {
                value: 'comentário-1'
            }
        })
        fireEvent.click(screen.getByTestId('campo-btn'))
        fireEvent.change(screen.getByTestId('campo-textarea'), {
            target: {
                value: 'comentário-2'
            }
        })
        fireEvent.click(screen.getByTestId('campo-btn'))
    })
})
