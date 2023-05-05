import { tableData as data } from './mock-data.js'

const table = document.querySelector('ui5-table')

const populateTable = (data, parent) => {
    const groupIds = [1, 2, 3, 4, 5]

    groupIds.forEach((groupId) => {

        createRowGroup(`Group ${groupId}`, parent)

        data.forEach(entry => {
            if (entry.group === groupId) {
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

        if (key !== 'group') {
            createTextCell(value, row)
        }
        else {
            createEditRowControls(row)
        }
    })
}

const createEditRowControls = (parent) => {
    const editRowContainer = document.createElement('div')
    const editButton = document.createElement('atlas-button')
    const closeButton = document.createElement('atlas-button')
    const editIcon = document.createElement('atlas-icon')
    const closeIcon = document.createElement('atlas-icon')
    editRowContainer.classList.add('edit-row-controls')
    editButton.appendChild(editIcon)
    closeButton.appendChild(closeIcon)
    editButton.setAttribute('kind', 'icon')
    closeButton.setAttribute('kind', 'icon')
    editIcon.setAttribute('name', 'edit')
    closeIcon.setAttribute('name', 'close')
    editRowContainer.appendChild(editButton)
    editRowContainer.appendChild(closeButton)
    createElementCell([editRowContainer], parent)
}

const createElementCell = (data, parent) => {
    const cell = document.createElement('ui5-table-cell')
    data.forEach(element => cell.appendChild(element))
    parent.appendChild(cell)
}

const createTextCell = (data, parent) => {
    const cell = document.createElement('ui5-table-cell')
    const span = document.createElement('span')
    span.innerText = `${data}`
    cell.append(span)
    parent.appendChild(cell)
}

const clickableEditButton = document.querySelector('#clickable-edit-button')
clickableEditButton.addEventListener('click', onEditButtonClick)
const onEditButtonClick = () => {
    console.log('Edit button clicked')
}

populateTable(data, table)
