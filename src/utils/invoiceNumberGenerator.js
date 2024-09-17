export const invoiceNumberGenerator = (date, invoiceNumber) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}/${month}/${invoiceNumber}`;
}