import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus, setMenus] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios.get('/menu.json')
            .then(res => {
                const data = res.data.filter(menu => menu.category === "popular")
                setMenus(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])
    return [menus,loading]
};

export default useMenu;