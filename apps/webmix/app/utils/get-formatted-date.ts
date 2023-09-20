export const getFormattedDate = (date: Date) => {
  const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
  const fmt = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  return fmt.format(date);
};

export const getFormattedJobRange = (begin: Date, end?: Date) => {
  const locale = new Intl.DateTimeFormat().resolvedOptions().locale;
  const fmt = new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
  });
  if (end === undefined) {
    return fmt
      .formatToParts(begin)
      .concat([{ type: 'era', value: 'Present' }])
      .map((v) => v.value)
      .join(' ');
  }

  return fmt.formatRange(begin, end);
};
