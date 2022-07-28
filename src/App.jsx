import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Toolbar } from "./components/Toolbar";
import { tesla_images } from "./lib/tesla_images";

function App() {
  return (
    <div>
      <Section bg={tesla_images.model_3}>
        <Hero title="Model 3" subtitle="Order Online for Touchless Delivery" />
        <Toolbar />
      </Section>
      <Section bg={tesla_images.model_y}>
        <Hero title="Model Y" subtitle="Order Online for Touchless Delivery" />
        <Toolbar />
      </Section>
      <Section bg={tesla_images.model_x}>
        <Hero title="Model X" subtitle="Order Online for Touchless Delivery" />
        <Toolbar />
      </Section>
      <div className="py-10">
        <a
          className="flex flex-col items-center justify-center gap-2"
          href="https://www.corecode.school"
        >
          <img
            src="https://www.corecode.school/branding/logo_app.png"
            width={30}
          />
          <p>React Advanced Bootcamp · CORE Code School</p>
        </a>
      </div>
    </div>
  );
}

export default App;
