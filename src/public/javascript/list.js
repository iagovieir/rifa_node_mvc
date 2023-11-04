function create(){
    const button = document.querySelector('.button')
    const tableRows = document.querySelectorAll('tr')
    
    const lista = Array.from(tableRows).map(rows => Array.from(rows.cells).map(cell => cell.textContent).join(','))

    const listaSemQuebra = lista.map(item => item.replace(/\s+/g, '',))
    
    button.setAttribute('download', 'table.csv')
    button.setAttribute('href', `data:text/csvcharset=utf-8,${encodeURIComponent(listaSemQuebra.join('\n'))}`)
}