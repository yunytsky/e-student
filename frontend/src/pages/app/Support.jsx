import { Link } from "react-router-dom";

const Support = () => {
    return (
      <div className="support">
        <h3>Технічна підтримка</h3>
        <p>
          Якщо у вас виникли проблеми чи потрібна допомога, зверніться до служби
          технічної підтримки.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdLiDcVpfNFideP_AamMSymFLfyGEqvZEVyskjHMHNIKt_Utw/viewform?usp=sf_link"
          target="_blank"
          className="support-cta button-filled"
        >
          Зв'язатися
        </a>
      </div>
    );
};

export default Support;