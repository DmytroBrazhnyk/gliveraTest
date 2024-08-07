const headers = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status'];
const data = [
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
];

const customerBody = document.querySelector('.customer__body');

function generateTable(headers, data) {
    // Створення контейнера таблиці
    const table = document.createElement('div');
    table.classList.add('customer__table');
    
    // Додавання заголовків
    headers.forEach(header => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('customer__table-column');
        headerCell.textContent = header;
        table.appendChild(headerCell);
    });
    
    // Додавання рядків з даними
    data.forEach(row => {
        headers.forEach(header => {
            const cell = document.createElement('div');
            cell.classList.add('customer__table-cell');
            cell.textContent = row[header.toLowerCase().replace(' ', '')];
            table.appendChild(cell);
        });
    });
    
    // Додавання таблиці до контейнера
    customerBody.appendChild(table);
}

generateTable(headers, data);

