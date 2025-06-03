import "../../style/accordion/accordion.css";

function Accordion() {
  const handleShowText = (e) => {
    const allTexts = document.querySelectorAll(".accordionText");
    allTexts.forEach((el) => el.classList.remove("active"));

    const wrapper = e.currentTarget.closest(".accordionItems");
    const textEl = wrapper?.querySelector(".accordionText");

    if (textEl) {
      textEl.classList.add("active");
    }
  };

  return (
    <div className="conteinerAccordion">
      <div className="accordionItems">
        <button type="click" onClick={handleShowText}>
          <h2>Ласкаво просимо до нашої спільноти!</h2>
        </button>
        <div className="accordionText">
          <p>
            Реєструючись, ви отримуєте доступ до ексклюзивних матеріалів,
            спеціальних пропозицій та персоналізованих порад.
          </p>
        </div>
      </div>

      <div className="accordionItems">
        <button type="click" onClick={handleShowText}>
          <h2>Залишайтесь на зв’язку</h2>
        </button>
        <div className="accordionText">
          <p>
            Ми час від часу надсилатимемо вам важливі оновлення та корисні
            статті. Вкажіть дійсну адресу електронної пошти, щоб нічого не
            пропустити.
          </p>
        </div>
      </div>

      <div className="accordionItems">
        <button type="click" onClick={handleShowText}>
          <h2>Помилка при заповненні форми</h2>
        </button>
        <div className="accordionText">
          <p>
            Будь ласка, переконайтесь, що всі поля заповнені коректно. Ім’я
            повинно містити щонайменше 2 літери, а email — дійсний формат пошти.
          </p>
        </div>
      </div>

      <div className="accordionItems">
        <button type="click" onClick={handleShowText}>
          <h2>Дякуємо за реєстрацію!</h2>
        </button>
        <div className="accordionText">
          <p>
            Ваші дані успішно збережено. Ви можете змінити їх у будь-який момент
            у своєму профілі.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
