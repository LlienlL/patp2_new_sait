import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Paragraph from '../../src/Components/GUI/Paragraph/Paragraph';


test('Рендер компонента с children', () => {
    const { getByText } = render(<Paragraph>Тестовый текст1</Paragraph>);
    expect(getByText('Тестовый текст1')).toBeInTheDocument();
});

test('Применение стиля noIndent', () => {
    const { container } = render(<Paragraph noIndent>Тестовый текст2</Paragraph>);
    expect(container.firstChild).toHaveClass('noIndent');
});

test('Применение стиля inline', () => {
    const { container } = render(<Paragraph inline>Тестовый текст3</Paragraph>);
    expect(container.firstChild).toHaveClass('inline');
});

test('Центрирование текста', () => {
    const { container } = render(<Paragraph centerText>Тестовый текст4</Paragraph>);
    expect(container.firstChild).toHaveClass('centerText');
});

test('Применение дополнительных стилей', () => {
    const { container } = render(
        <Paragraph styles={{ backgroundColor: 'red' }}>Тестовый текст5</Paragraph>
    );
    expect(container.firstChild).toHaveStyle('backgroundColor: red');
});
