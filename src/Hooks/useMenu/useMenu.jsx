import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:5000/menu')
            .then(res => {
                const data = res.data
                setMenus(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])
    return [menus,loading]
};

export default useMenu;