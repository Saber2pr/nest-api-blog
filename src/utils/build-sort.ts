export const buildSort = (
  sort: string | string[],
): Record<string, 'DESC' | 'ASC'> => {
  if (sort) {
    const sorts = [].concat(sort);
    return sorts.reduce((acc, item) => {
      const [orderBy, order] = item.split(',');
      return { ...acc, [orderBy]: order };
    }, {});
  }
  return {};
};
