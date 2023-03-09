type Id = number;

export const normalizeList = <T extends { id: Id }>(list: T[]) => {
  const ids: Id[] = [];

  const entities: Record<Id, T> = {};

  list.forEach((i) => {
    ids.push(i.id);
    entities[i.id] = i;
  });

  return {
    ids,
    entities,
  };
};
