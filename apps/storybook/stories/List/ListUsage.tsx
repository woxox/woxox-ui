import React, { useCallback, useState } from 'react';

import { Button, List, ListItem } from '@woxox/ui';

export const ListUsage: React.FC = () => {
  const [listItem, setListItem] = useState<ListItem[]>([]);

  const handleClickListItem = useCallback(
    (idx: number) => {
      const filteredList = listItem.filter((item) => item.id !== `${idx}`);
      setListItem(filteredList);
    },
    [listItem],
  );

  const handleClickAddButton = useCallback(() => {
    const max =
      listItem.reduce((acc, { id }) => {
        if (acc < +id) return +id;
        return acc;
      }, 0) + 1;

    const newItem: ListItem = {
      id: String(max),
      content: <div className="h-10 rounded-lg bg-neutral-700 px-4 py-2 text-white">{max}</div>,
    };

    setListItem([...listItem, newItem]);
  }, [listItem]);

  return (
    <div>
      <Button onClick={handleClickAddButton}>Add</Button>
      <List className="w-32 py-2" listItem={listItem} onClick={handleClickListItem} />
    </div>
  );
};
