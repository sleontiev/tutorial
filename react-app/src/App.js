import './App.css';

function App() {
  return (
      <div className="wrapper">
        <div className="block-left">
          <div className="block-left_title">
            <div className="containerTabs">
              <h1 className='wrapper-title'>Personal</h1>
              <div className="container__table">
                <table className="container__table-personal">
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
              </div>
            </div>
          </div>
          <div className="table-more-popup">
            <div className="table-more-popup-content">
              <div className="close-table">
                <img src="img/close.png" alt="Close"/>
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
          <div className="block-left_news">
            <div className="news-item">
              <h3 className="news-title">Новость 1</h3>
              <p className="news-preview">Содержание новости</p>
            </div>
            <div className="news-item">
              <h3 className="news-title">Новость 2</h3>
              <p className="news-preview">Содержание новости</p>
            </div>
            <div className="news-item">
              <h3 className="news-title">Новость 3</h3>
              <p className="news-preview">Содержание новости</p>
            </div>
          </div>
          <div className="block-left_main">
            <form className="container__form containerTabs">
              <fieldset className="container__form-fieldset">
                <legend><h2 className="container__form-title">Персональная информация</h2></legend>
                <input className='container__form-input' type="text" name="" id="fname" placeholder="Введите имя"/>
                <span className="errorText">Введите своё имя в поле</span>
                <input className='container__form-input' type="text" name="" id="fsurname"
                       placeholder="Введите фамилию"/>
                <textarea className='container__form-textArea' placeholder='Расскажите о себе' name="txtarea"
                          id=""></textarea>
                <span className="change-message">Введите дату рождения:</span>
                <input type="date" class="container__form-changeDate" name="calendar" id="date_birth"/>
                <span className="change-message">Выберите пол:</span>
                <div className="container__form-changeGender">
                  <input type="radio" id="male" name="gender" value="male"/>
                  <label for="male">Мужской</label>
                  <br/>
                  <input type="radio" id="female" name="gender" value="female"/>
                  <label for="female">Женский</label>
                </div>
                <span className="change-message">Выберите навыки:</span>
                <select className="container__form-skills" name="" id="skills" multiple>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="JavaScript">JavaScript</option>
                </select>
                <span className="change-message">Загрузите резюме:</span>
                <input className="container__form-loadResume" type="file" id="myfile" name="myfile"/>
                <label for="agree">Согласение на обработку персональных данных:</label>
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
          </div>
        </div>
        <div className="block-right">
          <div className="container__list containerTabs">
            <div className="ul-list">
              <h2 className="error"></h2>
              <h3>Упорядоченный список</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.JS</li>
              </ul>
            </div>
            <div className="ol-list">
              <h3>Неупорядоченный список</h3>
              <ol>
                <li>Angular</li>
                <li>Vue.JS</li>
                <li>React.JS</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
