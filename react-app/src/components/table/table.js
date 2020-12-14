import React from 'react';
import closeTableImage from './img/close.png';
export default () => {
    const showTable = () => {
        const tableMoreInfo = document.querySelector('.table-more-popup');
        tableMoreInfo.style.display = 'block';
    };
    const closeTable = () => {
        const tableMoreInfo = document.querySelector('.table-more-popup');
        tableMoreInfo.style.display = 'none';
    };
    return (
        <React.Fragment>
        <table onMouseOver={showTable} className="container__table-personal">
            <thead>
            <tr>
                <th>ID</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Возраст</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="id">1</td>
                <td className="name">Sergey</td>
                <td className="surname">Leontiev</td>
                <td className="age">23</td>
            </tr>
            </tbody>
        </table>
        <div className = "table-more-popup">
            <div className = "table-more-popup-content">
                <div onClick={closeTable} className = "close-table">
                    <img src = {closeTableImage} alt = "Close" />
                </div>
                <table className="container__table-personal">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Год рождения</th>
                        <th>Возраст</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sergey</td>
                        <td>Leontiev</td>
                        <td>1997</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sergey</td>
                        <td>Leontiev</td>
                        <td>1997</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sergey</td>
                        <td>Leontiev</td>
                        <td>1997</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Sergey</td>
                        <td>Leontiev</td>
                        <td>1997</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Sergey</td>
                        <td>Leontiev</td>
                        <td>1997</td>
                        <td>23</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Sergey</td>
                        <td>Leontiev</td>
                        <td>1997</td>
                        <td>23</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </React.Fragment>
    );
}
