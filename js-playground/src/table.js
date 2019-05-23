export default class Table {
    constructor(id) {
        this.table = document.getElementById(id);
        this.head = this.table.getElementsByTagName('thead')[0];
        this.body = this.table.getElementsByTagName('tbody')[0];
    }

    addHeader(rowName) {
        const th = document.createElement('th');
        th.innerText = rowName;
        this.head.appendChild(th);

    }
    addRow(columns) {
        const row = document.createElement('tr');
        columns.
            map(col => this.td(col)).
            forEach(td => row.appendChild(td));

        this.body.appendChild(row);
    }

    clearTable() {
        // this.head.innerHTML = '';
        while (this.head.firstChild) {
            this.head.removeChild(this.head.firstChild);
        }

        // this.body.innerHTML='';

    }

    td(text) {
        const cell = document.createElement('td');
        cell.innerText = text;
        return cell;
    }

}