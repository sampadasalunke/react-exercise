import React from 'react';
import {
  TreeList,
  orderBy,
  filterBy,
  mapTree,
  extendDataItem,
} from "@progress/kendo-react-treelist";
import data from "./simple-data";
import '@progress/kendo-theme-default/dist/all.css';

const subItemsField = "employees";
const expandField = "expanded";
const columns = [
  {
    field: "name",
    title: " ",
    width: "1500px",
    expandable: true,
  },
  {
    field: "title",
    title: " ",
  },
  {
    field: "percentage",
    title: " ",
  },
];


const App = () => {
  const [state, setState] = React.useState({
    data: [...data],
    dataState: {
      sort: [
        {
          field: "",
          dir: "",
        },
      ],
      filter: [],
    },
    expanded: [1, 2, 32],
  });

  const onExpandChange = (e) => {
    setState({
      ...state,
      expanded: e.value
        ? state.expanded.filter((id) => id !== e.dataItem.id)
        : [...state.expanded, e.dataItem.id],
    });
  };

  const handleDataStateChange = (event) => {
    setState({
      ...state,
      dataState: event.dataState,
    });
  };

  const addExpandField = (dataTree) => {
    const expanded = state.expanded;
    return mapTree(dataTree, subItemsField, (item) =>
      extendDataItem(item, subItemsField, {
        [expandField]: expanded.includes(item.id),
      })
    );
  };
  const processData = () => {
    let { data, dataState } = state;
    let filteredData = filterBy(data, dataState.filter, subItemsField);
    let sortedData = orderBy(filteredData, dataState.sort, subItemsField);
    return addExpandField(sortedData);
  };

  return (
    <TreeList
      style={{
        maxHeight: "800px",
        overflow: "auto",
      }}
      expandField={expandField}
      subItemsField={subItemsField}
      onExpandChange={onExpandChange}
      {...state.dataState}
      data={processData()}
      onDataStateChange={handleDataStateChange}
      columns={columns}
    />
  );
};
export default App;
