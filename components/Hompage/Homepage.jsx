import Nav from "../NavBar/Nav";
import classes from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <Nav />
      <div className={classes.container}>
        <form>
          <label htmlFor="fcover">Forest Cover</label>
          <input
            type="text"
            id="fcover"
            name="forestcover"
            placeholder="Enter forest cover..."
          />

          <label htmlFor="carbon">Enter Carbon Footprint for that year</label>
          <input
            type="text"
            id="carbon"
            name="carbonfootprint"
            placeholder="Enter carbon footprint.."
          />

          {/* <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select> */}

          <input type="submit" value="Submit" className={classes.Submit} />
        </form>
      </div>
    </>
  );
}
