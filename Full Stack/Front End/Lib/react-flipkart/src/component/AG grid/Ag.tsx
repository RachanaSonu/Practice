import { AgGridReact } from "ag-grid-react"
import { useCallback, useMemo, useRef, useState } from "react";
import './style.css'

export const Ag:React.FC<{}>=()=>{
    const gridRef = useRef<any>();

  const [rowData, setRowData] = useState<any>();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'Number', width: 150, suppressSizeToFit: true },
    { field: 'Name', width: 150, },
    { field: 'Gender', width: 150,  },

  ]);
  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    };
  }, []);

  const onGridReady = useCallback((params:any) => {

       setRowData([
        {name:'1',class:'Rachana',chocalate:'Female'},
        {name:'2',class:'Hemanth',chocalate:'Male'}
    ])
  }, []);

  const sizeToFit = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit({
      defaultMinWidth: 100,
      columnLimits: [{ key: 'country', minWidth: 900 }],
    });
  }, []);

    return <>
    <h1>ag-grid</h1>
    <div style={{ width: '100%', height: '100%' }}>
      <div className="outer-div">

      
          <div style={{ height: '100%', width: '100%' }} className="ag-theme-alpine">
            <AgGridReact
            
              rowData={rowData}
              columnDefs={columnDefs}
      
              onGridReady={onGridReady}
            />
          </div>
   
      </div>
    </div>
   
    </>
}