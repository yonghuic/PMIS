import { useState, useEffect } from 'react'
import publicFile from "../../images/publicFile.png"
import {getDownloadURL, ref, getStorage} from 'firebase/storage'

import {IoMdDownload} from 'react-icons/io'
import firebaseConfig from "./config/firebase";

const TabTraffic = () => {
    //交維資訊
    const [file, setFile] = useState(null)

    useEffect(() => {
        getDownloadURL(ref(storage, '測試文件.pdf')).then((url) => {
        setFile(url)
        })
    },[])

    //獲取交維資訊文件的檔名
    const storage = getStorage();
    const fileName = ref(storage, file).name;

    //下載交維資訊文件
    const downloadPublicFile = () => {
            fetch(file)
                .then(response => {
                    response.blob().then(blob => {
                        let url = window.URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = url;
            a.download = fileName;
                        a.click();
                    });
            });
        }
    return (
        <>
        
            <div className="flex items-center justify-center min-h-screen bg-[#fffaef]">
                <div className="mt-[-12rem] bg-[#fff8ea] shadow-lg rounded-lg p-6 w-[30rem] h-[16rem]">
                    <img className="mx-auto mb-4 w-24 object-cover" src={publicFile} alt="publicFile" />
                    <button onClick={downloadPublicFile} className="downloadFileButton w-[27rem] flex mt-2 items-center justify-center">
                        <span className="flex items-center mr-2">{fileName}</span>
                        <IoMdDownload className="ml-2" size={55} color="#8b7766" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TabTraffic
