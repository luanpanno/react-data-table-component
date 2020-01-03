import React from 'react';
import PropTypes from 'prop-types';
import FirstPageIcon from '../icons/FirstPage';
import LastPageIcon from '../icons/LastPage';
import LeftIcon from '../icons/Left';
import RightIcon from '../icons/Right';
import ExpanderCollapsedIcon from '../icons/ExpanderCollapsedIcon';
import ExpanderExpandedIcon from '../icons/ExpanderExpandedIcon';

export const propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  selectableRows: PropTypes.bool,
  selectableRowsNoSelectAll: PropTypes.bool,
  selectableRowSelected: PropTypes.func,
  selectableRowDisabled: PropTypes.func,
  selectableRowsComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  selectableRowsComponentProps: PropTypes.object,
  onRowsSelectedUpdate: PropTypes.func,
  clearSelectedRows: PropTypes.bool,
  expandableRows: PropTypes.bool,
  expandableRowDisabled: PropTypes.func,
  expandableRowExpanded: PropTypes.func,
  expandOnRowClicked: PropTypes.bool,
  expandOnRowDoubleClicked: PropTypes.bool,
  onRowExpandToggled: PropTypes.func,
  keyField: PropTypes.string,
  progressPending: PropTypes.bool,
  progressComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  persistTableHead: PropTypes.bool,
  expandableRowsComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  expandableIcon: PropTypes.shape({
    collapsed: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func,
    ]),
    expanded: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func,
    ]),
  }),
  sortIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  sortFunction: PropTypes.func,
  sortServer: PropTypes.bool,
  onSort: PropTypes.func,
  striped: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  pointerOnHover: PropTypes.bool,
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  noContextMenu: PropTypes.bool,
  contextMessage: PropTypes.shape({
    singular: PropTypes.string.isRequired,
    plural: PropTypes.string.isRequired,
    message: PropTypes.string,
  }),
  contextActions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  contextComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  defaultSortField: PropTypes.string,
  defaultSortAsc: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  responsive: PropTypes.bool,
  overflowY: PropTypes.bool,
  overflowYOffset: PropTypes.string,
  noDataComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
  noTableHead: PropTypes.bool,
  noHeader: PropTypes.bool,
  subHeader: PropTypes.bool,
  subHeaderAlign: PropTypes.string,
  subHeaderWrap: PropTypes.bool,
  subHeaderComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  onRowClicked: PropTypes.func,
  onRowDoubleClicked: PropTypes.func,
  fixedHeader: PropTypes.bool,
  fixedHeaderScrollHeight: PropTypes.string,
  pagination: PropTypes.bool,
  paginationServer: PropTypes.bool,
  paginationDefaultPage: PropTypes.number,
  paginationResetDefaultPage: PropTypes.bool,
  paginationTotalRows: PropTypes.number,
  paginationPerPage: PropTypes.number,
  paginationRowsPerPageOptions: PropTypes.array,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
  paginationComponent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  paginationComponentOptions: PropTypes.object,
  paginationIconFirstPage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  paginationIconLastPage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  paginationIconNext: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  paginationIconPrevious: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  dense: PropTypes.bool,
  conditionalRowStyles: PropTypes.arrayOf(
    PropTypes.shape({
      when: PropTypes.func.isRequired,
      style: PropTypes.object.isRequired,
    }),
  ),
  theme: PropTypes.string,
  customStyles: PropTypes.object,
};

export const defaultProps = {
  title: '',
  keyField: 'id',
  selectableRows: false,
  selectableRowsNoSelectAll: false,
  selectableRowSelected: null,
  selectableRowDisabled: null,
  selectableRowsComponent: 'input',
  selectableRowsComponentProps: {},
  onSelectedRowsChange: () => null,
  clearSelectedRows: false,
  expandableRows: false,
  expandableRowDisabled: null,
  expandableRowExpanded: null,
  expandOnRowClicked: false,
  expandOnRowDoubleClicked: false,
  onRowExpandToggled: () => null,
  progressPending: false,
  progressComponent: <div style={{ fontSize: '24px', fontWeight: 700, padding: '24px' }}>Loading...</div>,
  persistTableHead: false,
  expandableRowsComponent: <div style={{ padding: '24px' }}>Add a custom expander component. Use props.data for row data</div>,
  expandableIcon: {
    collapsed: <ExpanderCollapsedIcon />,
    expanded: <ExpanderExpandedIcon />,
  },
  sortIcon: false,
  sortFunction: null,
  sortServer: false,
  onSort: () => null,
  striped: false,
  highlightOnHover: false,
  pointerOnHover: false,
  noContextMenu: false,
  contextMessage: { singular: 'item', plural: 'items', message: 'selected' },
  contextActions: [],
  contextComponent: null,
  defaultSortField: null,
  defaultSortAsc: true,
  columns: [],
  data: [],
  className: null,
  style: {},
  responsive: true,
  overflowY: false,
  overflowYOffset: '250px',
  noDataComponent: <div style={{ padding: '24px' }}>There are no records to display</div>,
  disabled: false,
  noTableHead: false,
  noHeader: false,
  subHeader: false,
  subHeaderAlign: 'right',
  subHeaderWrap: true,
  subHeaderComponent: [],
  onRowClicked: () => null,
  onRowDoubleClicked: () => null,
  fixedHeader: false,
  fixedHeaderScrollHeight: '100vh',
  pagination: false,
  paginationServer: false,
  paginationDefaultPage: 1,
  paginationResetDefaultPage: false,
  paginationTotalRows: 0,
  paginationPerPage: 10,
  paginationRowsPerPageOptions: [10, 15, 20, 25, 30],
  onChangePage: () => null,
  onChangeRowsPerPage: () => null,
  paginationComponent: null,
  paginationComponentOptions: {},
  paginationIconFirstPage: <FirstPageIcon />,
  paginationIconLastPage: <LastPageIcon />,
  paginationIconNext: <RightIcon />,
  paginationIconPrevious: <LeftIcon />,
  dense: false,
  conditionalRowStyles: [],
  theme: 'default',
  customStyles: {},
};
