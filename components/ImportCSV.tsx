'use client'
import styles from "@/app/ui/dashboard/users/users.module.css";
import stylesinput from "@/app/ui/dashboard/search/search.module.css";
import { useState } from "react";
import axios from 'axios'


const ImportCSV = (props: any) => {
    const [url, seturl] = useState()
    const handleChange = (e:any) => { seturl(e.currentTarget.value) }
    const handleImport = () => {
        if(url) { 
            axios.get(url)
            .then((response) => {
                console.log('Imported: ',response)
            })
            .catch((error) => {
                console.log('error: ', error)
            });
        }
    }
    return (
        <div className="mb-4">
            <input type="text"
            className={stylesinput.input}
            placeholder="url of google sheet"
            onChange={handleChange}/>
            <button className={styles.addButton} onClick={handleImport}>Import CSV</button>
        </div>
    )
}

export default ImportCSV