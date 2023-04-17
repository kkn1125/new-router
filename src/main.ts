import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";
import Component from "./model/Component";
import About from "./pages/About";
import Home from "./pages/Home";
import Router from "./router";
import Page from "./router/Page";
import { APP } from "./util/global";
import { capitalize } from "./util/tool";

const home = new Page("index", "", new Home({}));
const about = new Page("about", "about", new About({}));

home.setHeader(Header);
home.setFooter(Footer);
about.setHeader(Header);

const pages = [home, about];
const router = new Router(pages);
