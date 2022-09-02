import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
let details = [
  {
    title: "Free",
    price: "$0",
    feature: [
      { list: "Single User", class: "" },
      { list: "5GB Storage", class: "" },
      { list: "Unlimited Public Projects", class: "" },
      { list: "Community Access", class: "" },
      { list: "Unlimited Private Projects", class: "text-muted" },
      { list: "Dedicated Phone Support", class: "text-muted" },
      { list: "Free Subdomain", class: "text-muted" },
      { list: "Monthly Status Reports", class: "text-muted" },
    ]
  },
  {
    title: "Plus",
    price: "$9",
    feature: [
      { list: "5 Users", class: "" },
      { list: "50GB Storage", class: "" },
      { list: "Unlimited Public Projects", class: "" },
      { list: "Community Access", class: "" },
      { list: "Unlimited Private Projects", class: "" },
      { list: "Dedicated Phone Support", class: "" },
      { list: "Free Subdomain", class: "" },
      { list: "Monthly Status Reports", class: "text-muted" },
    ]
  },
  {
    title: "Pro",
    price: "$49",
    feature: [
      { list: "Unlimited Users", class: "" },
      { list: "150GB Storage", class: "" },
      { list: "Unlimited Public Projects", class: "" },
      { list: "Community Access", class: "" },
      { list: "Unlimited Private Projects", class: "" },
      { list: "Dedicated Phone Support", class: "" },
      { list: "Unlimited Free Subdomains", class: "" },
      { list: "Monthly Status Reports", class: "" },
    ]
  },
];
function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {details.map((detail) => {
            return (
              <Cart
                title={detail.title}
                price={detail.price}
                feature={detail.feature}
              ></Cart>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;