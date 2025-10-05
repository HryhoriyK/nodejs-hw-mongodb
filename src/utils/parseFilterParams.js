const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactType = (contactType) => ['personal', 'work', 'home'].includes(contactType);
  if (!isContactType(contactType)) return;
  return contactType;
}

export const parseFilterParams = (query) => {
  const { contactType } = query;
  const parsedContactType = parseContactType(contactType);

  return {
    contactType: parsedContactType,
  };
}
