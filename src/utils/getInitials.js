export const getInitials = (name) => {
    const parts = name.split(' ');
    if (parts.length >=  2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    } else if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    } else {
      return '';
    }
  };