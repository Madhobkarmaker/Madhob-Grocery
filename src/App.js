import Account from "./Component/Account/Account";
import Button from "./Component/Button/Button";
import Checkbox from "./Component/Checkbox/Checkbox";
import FooterPage from "./Component/FooterPage/FooterPage";
import My_cart from "./Component/My_cart/My_cart";
import Order from "./Component/Order/Order";
import Radio from "./Component/Radio/Radio";
import Slider from "./Component/Slider/Slider";
import Toggle from "./Component/Toggle/Toggle";

function App() {
  const Icon = <i className="fa fa-shopping-bag" aria-hidden="true"></i>;
  return (
    <div className="App">
      <Button icon={Icon} title="Button"></Button>
      <Checkbox type="checkbox" label="Checkbox" />
      <Radio type="radio" label="Radio" />
      <Toggle type="checkbox" label="Togglebox" />
      <FooterPage />
      <My_cart />
      <Account />
      <Slider />
      <Order />
    </div>
  );
}

export default App;
