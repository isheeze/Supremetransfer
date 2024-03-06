'use client'
import { useState } from "react";
import * as XLSX from 'xlsx';
import { addPostCodeToPostCodeFromCSV } from '@app/lib/actions'

const ImportCSV = (props: any) => {
  // onchange states
  const [excelFile, setExcelFile] = useState<any>(null);
  const [typeError, setTypeError] = useState<any>(null);

  // submit state
  const [excelData, setExcelData] = useState<any>(null);

  // onchange event
  const handleFile=(e: any)=>{
    let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
    let selectedFile = e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileTypes.includes(selectedFile.type)){
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload=(e)=>{
          if(e.target){
            setExcelFile(e.target.result);
          }
        }
      }
      else{
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else{
      console.log('Please select your file');
    }
  }
  
  // submit event
  const handleFileSubmit=(e: any)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook = XLSX.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0,10));
    }
  }

  return (
    <div className="wrapper">

      <h3>Upload & View Excel Sheets</h3>

      {/* form */}
      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <input type="file" className="form-control" required onChange={handleFile} />
        <button type="submit" className="p-2 bg-indigo-700 text-white m-4">UPLOAD</button>
        {typeError&&(
          <div className="alert alert-danger" role="alert">{typeError}</div>
        )}
      </form>

      {/* view data */}
      <div className="viewer">
        {excelData?(
          <div className="table-responsive">
            <form action={addPostCodeToPostCodeFromCSV}>
                <table className="table">
                    <tbody>
                        {excelData.map((individualExcelData: any, index: any)=>(
                        <tr key={index}>
                            <td>{individualExcelData["Pickup"] && <input type="hidden" name={`pickup-${index}`} value={individualExcelData["Pickup"]} className="bg-transparent"/>}</td>
                            <td>{individualExcelData["Dropoff"] && <input type="hidden" name={`dropoff-${index}`} value={individualExcelData["Dropoff"]} className="bg-transparent" />}</td>
                            <td>{individualExcelData["Price"] && <input type="hidden" name={`price-${index}`} value={individualExcelData["Price"]} className="bg-transparent" />}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <input type="hidden" name="COUNT" value={excelData.length} />
                <input type="submit" value={`Add (${excelData.length}) entries to database`} className="p-2 bg-indigo-700 text-white m-4" />
            </form>
          </div>
        ):(
          <div>No File is uploaded yet!</div>
        )}
      </div>

    </div>
  )
}

export default ImportCSV