# UFCO-507: Test ui5 table

## Make it run

To run it please:
- run `npm i`.
- run `npm run build`.
- Run liveserver inside the **dist** folder.

## Cheat sheet

These is a compact summary of the official [ui5 table documentation](https://sap.github.io/ui5-webcomponents/playground/components/Table/)
#### Table column
- Attributes: demandPopin, minWidth, popinDisplay, popinText.
#### Table row
- Attributes: navigated, selected,         .
#### Table group row
- Slot: default.
#### Table cell
- Slot: default.

## Notes

- Official documentation recomends to include only text in the cells. Not realistic.
- I haven't found a way to select a row group. It's either the whole table or nothing. Maybe it can be done through the ui5 API.
- The row-group element feels more like a sub-header than a element to group rows.
- I was able to style ui5 elements selecting the slots 🤦‍♂️.
- I'm missing something to be able to override ui5/sap css variables.
