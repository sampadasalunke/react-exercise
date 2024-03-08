import React from 'react';
import { TreeList, orderBy, filterBy, mapTree, extendDataItem, TreeListCell } from '@progress/kendo-react-treelist';
import data from "./simple-data";
import '@progress/kendo-theme-default/dist/all.css';
import logo from './logo.svg';


const imageStyle = {
  width: '30',         // Set the width
  height: '30',        // Set the height
  margin: '-3px',         // Set margin (spacing around the image)
  textAlign: 'bottom',    // Align the image to the center
  padding: '1px',         // Set padding (spacing within the image container)
  verticalAlign: 'bottom'
};

const treeListCellStyle = {
  margin: '-5px',         // Set margin (spacing around the image)
  textAlign: 'center',    // Align the image to the center
  padding: '1px',         // Set padding (spacing within the image container)
  verticalAlign: 'top'
};

const CustomCell = (props) => {
  return (
    <td>
      <tr >
    <TreeListCell {...props}>
      {props.dataItem.hasChildren && (
        <button
          onClick={() => {
            props.onToggle(props.dataItem);
          }}
          className={`k-icon ${
            props.dataItem.expanded ? 'k-i-collapse' : 'k-i-expand'
          }`}
        ></button>
      )} style={treeListCellStyle} 
    </TreeListCell>
    <img src={logo} width="30" height="30" className="contact-img" style={imageStyle} alt="Icon"/>
    <span> {props.dataItem.name} </span>
   
    </tr>
    </td>
  );
};

const subItemsField = "employees";
const expandField = "expanded";
const columns = [
  {
    title: " ",
    width: "1500px",
    expandable: true,
    cell: CustomCell,
  },
  {
    field: "title",
    title: " ",
    cell: (props) => (
      <td>
        {props.dataItem.icon && (
          <img src={props.dataItem.icon} alt="Icon" style={{ marginRight: '5px', width: '16px', height: '16px', border:'1px solid #ddd' }} />
        )}
        {props.dataItem.title}
      </td>
    ),
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
