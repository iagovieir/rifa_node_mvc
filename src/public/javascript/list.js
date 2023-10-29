function create(){
    const button = document.querySelector('.button')
    const tableRows = document.querySelectorAll('tr')
    console.log(Array.from(tableRows).map(rows => Array.from(rows.cells).map(cell => cell.textContent).join(',')).join('\n'))
    
    /* button.setAttribute('download', 'table.cvs')
    button.setAttribute('href', `data:text/csvcharset=utf-8,${encodeURIComponent(CSVString)}`) */
}