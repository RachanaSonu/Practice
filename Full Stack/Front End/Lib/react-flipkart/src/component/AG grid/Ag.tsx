import { AgGridReact } from "ag-grid-react"
import { useCallback, useMemo, useRef, useState } from "react";
import './style.css'

export const Ag:React.FC<{}>=()=>{
    const gridRef = useRef<any>();

  const [rowData, setRowData] = useState<any>();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'Number', width: 150, suppressSizeToFit: true },
    { field: 'Name', width: 150, },
    { field: 'Gender', width: 150,  }

  ]);


  const onGridReady = useCallback((params:any) => {

       setRowData([
        {Number:'1',Name:'Rachana',Gender:'Female'},
        {Number:'2',Name:'Hemanth',Gender:'Male'}
    ])
  }, []);

  const sizeToFit = useCallback(() => {
    gridRef.current.api.sizeColumnsToFit({
      defaultMinWidth: 100,
      columnLimits: [{ key: 'country', minWidth: 900 }],
    });
  }, []);

    return <>
    
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