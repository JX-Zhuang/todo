import deleteItem from './deleteItem';
const list = Array.from(new Array(3)).map((item, index) => ({
    id: index + ''
}));
it('delete item from list', () => {
    const newList = deleteItem(list, 'id', '1');
    expect(newList).toHaveLength(2);
    expect(newList).toEqual([{ id: '0' }, { id: '2' }]);
});