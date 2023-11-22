import { Link } from "react-router-dom";

const Support = () => {
    return (
      <div className="support">
        <h3>Технічна підтримка</h3>
        <p>
          Якщо у вас виникли проблеми чи потрібна допомога, зверніться до служби
          технічної підтримки.
        </p>
        <Link className="support-cta button-filled">
            Зв'язатися
        </Link>
      </div>
    );
};

export default Support;