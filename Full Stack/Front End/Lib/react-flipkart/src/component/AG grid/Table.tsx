import { Ag } from "./Ag"
import { Muitable } from "./Muitable"

export const Table:React.FC<{}>=()=>{

    return<><h1>HTML Table</h1>
    <table border={1}>
<tr>
<th>Name</th>
<th>Number</th>
<th>Gender</th>
</tr>
<tr>
    <td>Rachana</td>
    <td>1</td>
    <td>F</td>

</tr>

    </table>

    <h1>Mui Table</h1>
    <Muitable/>
    <h1>AG Grid</h1>
    <div  style={{height: '500px'}}></div>
    <Ag/>
    </>
    
}
