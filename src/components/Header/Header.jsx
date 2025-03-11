import styled from "./Header.module.css";
function Header() {
  return (
    <div className={styled.Parent_Header}>
      <h1>اینجائیم برای کمک</h1>
      <p>لازم نیست به تنهایی از این مسیر عبور کنید.</p>
    </div>
  );
}

export default Header;
