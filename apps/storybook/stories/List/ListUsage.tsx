import React, { useCallback, useState } from 'react';

import { Button, List, ListItem } from '@woxo/ui';

export const ListUsage: React.FC = () => {
  const [listItem, setListItem] = useState<ListItem[]>([]);

  const handleClickAddButton = useCallback(() => {
    const max =
      listItem.reduce((acc, { id }) => {
        if (acc < +id) return +id;
        return acc;
      }, 0) + 1;

    const newItem: ListItem = {
      id: String(max),
      content: <div className="h-10 w-32 bg-neutral-700 text-white">{max}</div>,
    };

    setListItem([...listItem, newItem]);
  }, [listItem]);

  return (
    <div>
      <Button onClick={handleClickAddButton}>Add</Button>
      <List listItem={listItem} />
    </div>
  );
};
