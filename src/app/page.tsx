import Sponsors from "./components/sponsors";
import Whitespace from "./components/whitespace";
import Project from "./components/project";
import Extension from "./components/extension";
import Customize from "./components/customize";
import Work from "./components/work";

export default function Home() {
  return (
    <div className="main">
      <section>
        <Whitespace />
      </section>

      <section>
        <Project />
      </section>

      <section>
        <Extension />
      </section>

      <section>
        <Customize />
      </section>

      <section>
        <Work />
      </section>

      <section>
        <Sponsors />
      </section>
    </div>
  );
}
