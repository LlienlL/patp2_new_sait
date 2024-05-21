import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../../src/components/GUI/List/List';

test('Использование типа маркера', () => {
    const list = ['Item 1', 'Item 2'];
    const marker = 'decimal';
    const { container } = render(<List list={list} marker={marker} />);

    // Проверяем, что ListItem получает правильный маркер
    const listItem = container.querySelector('li');
    expect(listItem).toHaveAttribute('data-marker', marker);
});

test('Наличие заголовка', () => {
    const list = ['Item 1', 'Item 2'];
    const title = 'My List Title';
    const { getByText } = render(<List list={list} title={title} />);

    // Проверяем, что заголовок присутствует
    expect(getByText(title)).toBeInTheDocument();
});

test('Убирание вертикальных внешних отступов', () => {
    const list = ['Item 1', 'Item 2'];
    const { container } = render(<List list={list} noVerticalMargin />);

    // Проверяем, что ListItem получает правильный класс
    const listItem = container.querySelector('li');
    expect(listItem).toHaveClass('noVerticalMargin');
});
