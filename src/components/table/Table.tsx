import React from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_GlobalFilterTextField as GlobalFilterTextField,
  MRT_RowData,
} from "material-react-table";
import { MRT_Localization_ES } from "material-react-table/locales/es";
import { Box, createTheme, ThemeProvider, useTheme } from "@mui/material";
import { esES } from "@mui/material/locale";

interface TableProps<TData extends MRT_RowData> {
  columns: MRT_ColumnDef<TData>[];
  data: TData[];
  enableRowActions?: boolean;
  renderRowActions?: (props: {
    closeMenu: () => void;
    row: any;
    table: any;
  }) => JSX.Element[];
}

const Table = <TData extends MRT_RowData>({
  columns,
  data,
  enableRowActions,
  renderRowActions,
}: TableProps<TData>) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={createTheme(theme, esES)}>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowActions={enableRowActions}
        renderRowActionMenuItems={renderRowActions}
        localization={MRT_Localization_ES}
        positionActionsColumn="last"
        initialState={{ showGlobalFilter: true }}
        enableGlobalFilter={false}
        enableRowSelection={true}
        renderTopToolbarCustomActions={({ table }) => (
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}
          >
            <GlobalFilterTextField table={table} />
          </Box>
        )}
      />
    </ThemeProvider>
  );
};

export default Table;
