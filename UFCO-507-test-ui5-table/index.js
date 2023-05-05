import { data, camelCaseToNormalCase } from './utils.js'

const content = document.querySelector('#content')
const table = document.createElement('ui5-table')
table.setAttribute('mode', 'MultiSelect')
content.appendChild(table)

const createColumnHeaders = (data, parent) => {
    Object.keys(data[0]).forEach((current, i) => {
        const column = document.createElement('ui5-table-column')
        const label = document.createElement('ui5-label')

        if(current !== 'group') {
            label.innerHTML = camelCaseToNormalCase(current)
            column.setAttribute('id', `column-${i + 1}`)
            column.setAttribute('slot', 'columns')
            column.appendChild(label)
            parent.appendChild(column)
        }
    })
}

const populateTable = (data, parent) => {
    const groupIds = [1,2,3,4,5]

    groupIds.forEach((groupId) => {
        
        createRowGroup(`Group ${groupId}`, parent)

        data.forEach(entry => {
            if(entry.group === groupId) {
                createRow(entry, parent)
            }
        })
    })
}

const createRowGroup = (data, parent) => {
    const groupRow = document.createElement('ui5-table-group-row')
    const title = document.createElement('span')
    groupRow.appendChild(title)
    title.innerText = data
    parent.appendChild(groupRow)
}

const createRow = (data, parent) => {
    const row = document.createElement('ui5-table-row')
    parent.appendChild(row)

    Object.entries(data).forEach(entry => {
        const [key, value] = entry

        if(key !== 'group') {
            createCell(value, row)
        }
    })
}

const createCell = (data, parent) => {
    const cell = document.createElement('ui5-table-cell')
    const span = document.createElement('span')
    span.innerText = `${data}`
    cell.append(span)
    parent.appendChild(cell)
}


createColumnHeaders(data, table)
populateTable(data, table)
