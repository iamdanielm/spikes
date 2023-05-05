# UFCO-507: Test ui5 table

## Run locally

To run it please:
- run `npm i`.
- run `npm run build`.
- Run liveserver inside the **dist** folder.

## Cheat sheet

These is a compact summary of the official [ui5 table documentation](https://sap.github.io/ui5-webcomponents/playground/components/Table/).
#### Table column
- Attributes: demandPopin, minWidth, popinDisplay, popinText.
#### Table row
- Attributes: navigated, selected,         .
#### Table group row
- Slot: default.
#### Table cell
- Slot: default.

## Notes

- I haven't found a way to select the rows inside a `ui-5-table-row-group` element. It's either the whole table or nothing. Maybe it can be done through the ui5 API.
- The `ui-5-table-row-group` element feels more like a sub-header than a element to group rows.
- Design doesn't include row groups in their examples.
- I was able to style ui5 elements selecting the slots 🤦‍♂️.
- I'm missing something to be able to override ui5/sap css variables.
- ui5-prefix variables in turn use sap-prefix variables.
- Official documentation recomends to include only text in the cells. Not realistic.
- There seems to be no issues with slotting any element inside a `ui5-table-cell` element.
