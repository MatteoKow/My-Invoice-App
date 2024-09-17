export const UIDGenerator = () => {
    const currentDate = Date.now();
    return (currentDate.toString() + Math.floor(Math.random()*999).toString());
  }
