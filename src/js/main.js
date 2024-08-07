
const customerData = [
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'Alice', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'Alice2', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Active' },
    { customername: 'John Doe', company: 'Company A', phonenumber: '123-456-7890', email: 'john@example.com', country: 'USA', status: 'Inactive' },
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
const paginationContainer = document.querySelector('.pagination__buttons');

const prevButton = document.querySelector('.pagination__button--prev');
const nextButton = document.querySelector('.pagination__button--next');

const totalItems = customerData.length;
const itemsPerPage = 8;
let curentPage = 1;
const totalPages = calculateTotalPages(totalItems, itemsPerPage);
//--------------------------------------
setPage(1);
prevButton.addEventListener('click', () => {
    if (curentPage > 1) {
        const page = curentPage-1
        setPage(page);
    }
});
nextButton.addEventListener('click', () => {
    if (curentPage < totalPages) {
        const page = curentPage+1
        setPage(page);
    }
});
    

//---------------------------------------
function generateTable(data) {
    const headers = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status'];
    const table = document.createElement('div');
    table.classList.add('customer__table');
    headers.forEach(header => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('customer__table-column');
        headerCell.textContent = header;
        table.appendChild(headerCell);
    });
    data.forEach(row => {
        headers.forEach(header => {
            const cell = document.createElement('div');
            cell.classList.add('customer__table-cell');
            cell.textContent = row[header.toLowerCase().replace(' ', '')];
            table.appendChild(cell);
        });
    });
    customerBody.appendChild(table);
}
function calculateTotalPages(totalItems, itemsPerPage) {
    return Math.ceil(totalItems / itemsPerPage);
}
function updateGrid(page , pageSize){
    customerBody.innerHTML = '';
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = customerData.slice(startIndex, endIndex);
    generateTable(paginatedData);
}
function updatePagination(curentPage, totalPages) {
    paginationContainer.innerHTML = '';

    const createPageButton = (pageNumber) => {
        return `<button class="pagination__button ${curentPage === pageNumber ? 'current' : ''}">${pageNumber}</button>`;
    };

    if (curentPage < 4) {
        if (totalPages > 5) {
            paginationContainer.innerHTML += createPageButton(1);
            paginationContainer.innerHTML += createPageButton(2);
            paginationContainer.innerHTML += createPageButton(3);
            paginationContainer.innerHTML += createPageButton(4);
            paginationContainer.innerHTML += '<span class="pagination__ellipsis">...</span>';
            paginationContainer.innerHTML += createPageButton(totalPages);
        } else {
            for (let i = 1; i <= totalPages; i++) {
                paginationContainer.innerHTML += createPageButton(i);
            }
        }
    } else {
        if (totalPages - curentPage < 3) {
            paginationContainer.innerHTML += createPageButton(1);
            paginationContainer.innerHTML += '<span class="pagination__ellipsis">...</span>';
            for (let i = Math.max(totalPages - 4, 2) + 1; i <= totalPages; i++) {
                paginationContainer.innerHTML += createPageButton(i);
            }
        } else {
            if (totalPages > 5) {
                paginationContainer.innerHTML += createPageButton(1);
                paginationContainer.innerHTML += '<span class="pagination__ellipsis">...</span>';
                paginationContainer.innerHTML += createPageButton(curentPage - 1);
                paginationContainer.innerHTML += `<button class="pagination__button current">${curentPage}</button>`;
                paginationContainer.innerHTML += createPageButton(curentPage + 1);
                paginationContainer.innerHTML += '<span class="pagination__ellipsis">...</span>';
                paginationContainer.innerHTML += createPageButton(totalPages);
            } else {
                for (let i = 1; i <= totalPages; i++) {
                    paginationContainer.innerHTML += createPageButton(i);
                }
            }
        }
    }
    const buttons = document.querySelectorAll('.pagination__button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const pageNumber = parseInt(event.target.textContent);
            if (!isNaN(pageNumber)) {
                setPage(pageNumber);
            }
        });
    });
}
function setPage(page){
    curentPage = page 
    updateGrid(page, itemsPerPage)
    updatePagination(page,totalPages);
}

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burger-menu__button');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    function checkScreenWidth() {
        if (window.innerWidth > 768) {
            sidebarMenu.style.display = 'flex';
        } else {
            sidebarMenu.style.display = 'none';
        }
    }
    checkScreenWidth();
    burgerButton.addEventListener('click', function () {
        if (sidebarMenu.style.display === 'none' || sidebarMenu.style.display === '') {
            sidebarMenu.style.display = 'flex';
        } else {
            sidebarMenu.style.display = 'none';
        }
    });

    window.addEventListener('resize', function () {
        checkScreenWidth();
    });
});

