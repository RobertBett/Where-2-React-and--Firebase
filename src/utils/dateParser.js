const parseISOString = (s) => {
  const b = s.split(/\D+/);
  /* eslint-disable no-plusplus */
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  /* eslint-enable no-plusplus */
};


const formatEventTime = (eventDate) => {
  let date;
  if (
  /* eslint-disable-next-line */
      eventDate.match(
      /\d{4}-(0?[1-9]|1[012])-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
    )
  ) {
    date = parseISOString(eventDate);
  } else {
    date = eventDate;
  }

  let minutes = date.getMinutes();
  let hour = date.getHours();
  const suffix = hour >= 12 ? 'pm' : 'am';
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour > 12) {
    hour -= 12;
  } else if (hour === 0) {
    hour = 12;
  }
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    /* timeZoneName: 'short', */
  };
  const dateString = date
    .toLocaleDateString('en-US', options)
    .split(' ')
    .slice(1)
    .join(' ');

  return `${hour}:${minutes}${suffix} | ${dateString}`;
};

export { formatEventTime };
