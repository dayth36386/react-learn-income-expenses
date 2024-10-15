import { useContext } from "react";
import Listli from "./Listli";
import './componentscss/Transection.css'
import DataContext from "./data/DataContext";

const Transaction = () => {
    // const { value } = props;
    const {items} = useContext(DataContext);
    return (
        <div>
            <ul>
            {
                items.map((arrdata) => {
                    return <Listli {...arrdata} key={arrdata.id} />
                })
            }
        </ul>
        </div>
    );
};
export default Transaction;