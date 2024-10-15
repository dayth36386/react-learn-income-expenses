import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import DataContext from './data/DataContext';

const Listli = (props) => {
    const { value, amount } = props;
    // const state = amount<0 ?"expenses":"income"
    // const symbol = amount<0 ?"-":"+"
    const [states, setStete] = useState("");
    const [symbols, setSybol] = useState("");
    useEffect(() => {
        if (amount < 0) {
            setStete("expenses");
            setSybol("-");
        } else {
            setStete("income");
            setSybol("+");
        }
    }, [amount]);
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <li className={states}>{value} <span>{symbols} ${formatNumber(Math.abs(amount))}</span></li>
    );
}

Listli.propTypes = {
    value: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}
export default Listli;