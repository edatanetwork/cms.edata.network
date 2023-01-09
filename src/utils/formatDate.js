export const formatDate = date =>
  new Date(date)
    .toLocaleString(['en-GB'], {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
    .replace(/\//g, '.')
