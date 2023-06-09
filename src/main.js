import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector('#app');
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { render, router } from "./uilities";
import ProductPage from "./pages/ProductPage";
import NotfoundPage from "./pages/Notfound";
import ProductDetailPage from "./pages/ProductDetail";
import AdminProductsPagae from "./pages/admin/Products";
import AdminProductAddPage from "./pages/admin/Product-add";


router.on("/",() => render(HomePage,app));
router.on("/about",() => render(AboutPage,app));
router.on("/products",()=> render(ProductPage, app));
router.on("/product/:id", ({ data }) => render(() => ProductDetailPage(data), app));
router.on("/admin", () => render(AdminProductsPagae, app));
router.on("/admin/add", () => render(AdminProductAddPage, app));

router.notFound(() => render(NotfoundPage, app));


router.resolve();
