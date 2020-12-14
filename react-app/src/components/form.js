export default () => (
    <form className="container__form containerTabs">
        <fieldset className="container__form-fieldset">
            <legend><h2 className="container__form-title">Персональная информация</h2></legend>
            <input className='container__form-input' type="text" name="" id="fname" placeholder="Введите имя"/>
            <span className="errorText">Введите своё имя в поле</span>
            <input className='container__form-input' type="text" name="" id="fsurname"
                   placeholder="Введите фамилию"/>
            <textarea
                className='container__form-textArea'
                placeholder='Расскажите о себе'
                name="txtarea"
                id="">
                </textarea>
            <span className="change-message">Введите дату рождения:</span>
            <input type="date" className="container__form-changeDate" name="calendar" id="date_birth"/>
            <span className="change-message">Выберите пол:</span>
            <div className="container__form-changeGender">
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Мужской</label>
                <br/>
                <input type="radio" id="female" name="gender" value="female"/>
                <label htmlFor="female">Женский</label>
            </div>
            <span className="change-message">Выберите навыки:</span>
            <select className="container__form-skills" name="" id="skills" multiple>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
            </select>
            <span className="change-message">Загрузите резюме:</span>
            <input className="container__form-loadResume" type="file" id="myfile" name="myfile"/>
            <label htmlFor="agree">Согласение на обработку персональных данных:</label>
            <input type="checkbox" name="" id="agree"/>
            <input type="button" className='container__form-button' value="Отправить"/>
            <div className="popup">
                <div className="popup-content">
                    Данные формы отправлены на сервер
                    <button className="clsPopup container__form-button">Закрыть</button>
                </div>
            </div>
        </fieldset>
    </form>
);
